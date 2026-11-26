"""Read-only collection and fail-closed validation for the daily tech digest."""

import argparse
import hashlib
import html
import io
import json
import os
import re
import sys
import zipfile
from datetime import datetime, timedelta, timezone
from email.utils import parsedate_to_datetime
from pathlib import Path
from urllib.error import HTTPError
from urllib.parse import parse_qsl, urlencode, urlsplit, urlunsplit
from urllib.request import HTTPRedirectHandler, Request, build_opener
from xml.etree import ElementTree

UTC = timezone.utc
JST = timezone(timedelta(hours=9))
PREFIX = "[daily-tech-digest] "
WORKFLOW = ".github/workflows/daily-tech-digest.lock.yml"
CHECKPOINT = "daily-tech-digest-checkpoint"
FEEDS = (
    ("GitHub Changelog", "https://github.blog/changelog/feed/"),
    ("GitHub Blog", "https://github.blog/feed/"),
    ("Microsoft DevBlogs", "https://devblogs.microsoft.com/feed/"),
    ("Microsoft Security Blog", "https://www.microsoft.com/en-us/security/blog/feed/"),
)
URL_PATTERN = re.compile(r"https?://[^\s<>\"`)\]]+")


class SafeRedirect(HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        redirected = super().redirect_request(req, fp, code, msg, headers, newurl)
        if urlsplit(req.full_url).netloc != urlsplit(newurl).netloc:
            redirected.remove_header("Authorization")
        return redirected


def fetch(url):
    headers = {"User-Agent": "theomonfort-daily-tech-digest", "Accept": "*/*"}
    if urlsplit(url).netloc == "api.github.com":
        headers.update({
            "Authorization": f"Bearer {os.environ['GH_TOKEN']}",
            "Accept": "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
        })
    with build_opener(SafeRedirect).open(Request(url, headers=headers), timeout=45) as response:
        return response.read()


def timestamp(value):
    parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
    if parsed.tzinfo is None:
        raise ValueError(f"Timestamp has no timezone: {value}")
    return parsed.astimezone(UTC)


def iso(value):
    return value.astimezone(UTC).isoformat().replace("+00:00", "Z")


def canonical_url(value):
    parts = urlsplit(html.unescape(value).rstrip(".,;"))
    if parts.scheme not in ("http", "https") or not parts.hostname or parts.username:
        raise ValueError(f"Invalid source URL: {value}")
    query = [(k, v) for k, v in parse_qsl(parts.query, keep_blank_values=True)
             if not k.lower().startswith("utm_") and k.lower() not in ("ref", "source")]
    return urlunsplit(("https", parts.netloc.lower(), parts.path.rstrip("/"), urlencode(query), ""))


def source_url(value):
    url = canonical_url(value)
    parts = urlsplit(url)
    if parts.netloc not in ("github.blog", "devblogs.microsoft.com", "www.microsoft.com",
                            "techcommunity.microsoft.com"):
        raise ValueError(f"Non-source domain: {value}")
    if parts.netloc == "www.microsoft.com" and not parts.path.startswith("/en-us/security/blog/"):
        raise ValueError(f"Not a Microsoft Security Blog article: {value}")
    if parts.netloc == "techcommunity.microsoft.com" and not parts.path.startswith("/blog/microsoft-security-blog/"):
        raise ValueError(f"Not a Microsoft Security Blog syndicated article: {value}")
    return url


def pages(path, key=None, loader=None):
    loader = fetch if loader is None else loader
    separator = "&" if "?" in path else "?"
    for page in range(1, 1001):
        data = json.loads(loader(f"https://api.github.com{path}{separator}per_page=100&page={page}"))
        items = data[key] if key else data
        yield from items
        if len(items) < 100:
            return
    raise RuntimeError(f"GitHub pagination limit reached: {path}")


def digest_history(issues):
    return [issue for issue in issues
            if "pull_request" not in issue and issue["title"].startswith(PREFIX)]


def prior_urls(issues):
    return {canonical_url(url) for issue in issues
            for url in URL_PATTERN.findall(issue.get("body") or "")}


def previous_window(repo, run_id, until, loader=None):
    loader = fetch if loader is None else loader
    path = f"/repos/{repo}/actions/runs?status=success"
    for run in pages(path, "workflow_runs", loader):
        if run["path"] != WORKFLOW or str(run["id"]) == run_id:
            continue
        for artifact in pages(f"/repos/{repo}/actions/runs/{run['id']}/artifacts", "artifacts", loader):
            if artifact["name"] != CHECKPOINT or artifact["expired"]:
                continue
            archive = loader(f"https://api.github.com/repos/{repo}/actions/artifacts/{artifact['id']}/zip")
            with zipfile.ZipFile(io.BytesIO(archive)) as zf:
                checkpoint = json.loads(zf.read("checkpoint.json"))
            if (checkpoint["version"] != 1 or checkpoint["dry_run"] is not False
                    or str(checkpoint["run_id"]) != str(run["id"])):
                raise ValueError("Invalid digest checkpoint provenance")
            since = timestamp(checkpoint["until"])
            if since > until:
                raise ValueError("Digest checkpoint is in the future")
            return since, f"successful-run:{run['id']}"
    return until - timedelta(hours=24), "24-hour fallback (no retained successful checkpoint)"


def text(value):
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", value or ""))).strip()


def feed_items(xml, source):
    root = ElementTree.fromstring(xml)
    channel = root.find("channel")
    if channel is None:
        raise ValueError(f"{source}: expected an RSS channel")
    result = []
    for item in channel.findall("item"):
        title, link, published = (item.findtext(field) for field in ("title", "link", "pubDate"))
        if not title or not link or not published:
            raise ValueError(f"{source}: missing article title, link or publication date")
        date = parsedate_to_datetime(published)
        if date.tzinfo is None:
            raise ValueError(f"{source}: publication date has no timezone")
        content = item.findtext("{http://purl.org/rss/1.0/modules/content/}encoded")
        result.append({
            "source": source, "title": text(title), "url": source_url(link),
            "published": iso(date),
            "categories": [text(category.text) for category in item.findall("category")],
            "excerpt": text(content or item.findtext("description"))[:12000],
        })
    return result


def collect_feed(source, url, since, until, loader=None):
    loader = fetch if loader is None else loader
    collected, signatures = [], set()
    for page in range(1, 101):
        feed_url = url if page == 1 else f"{url}?paged={page}"
        try:
            items = feed_items(loader(feed_url), source)
        except HTTPError as error:
            if page > 1 and error.code == 404:
                return collected
            raise
        if not items:
            return collected
        signature = tuple(item["url"] for item in items)
        if signature in signatures:
            raise RuntimeError(f"{source}: pagination repeated a page; coverage is unknown")
        signatures.add(signature)
        collected.extend(item for item in items if since < timestamp(item["published"]) <= until)
        if all(timestamp(item["published"]) <= since for item in items):
            return collected
    raise RuntimeError(f"{source}: 100-page coverage limit reached")


def prepare(repo, run_id, until, dry_run, loader=None):
    loader = fetch if loader is None else loader
    history = digest_history(pages(f"/repos/{repo}/issues?state=all", loader=loader))
    since, basis = previous_window(repo, run_id, until, loader)
    date = until.astimezone(JST).strftime("%Y-%m-%d")
    seen = prior_urls(history)
    candidates = {}
    for source, url in FEEDS:
        for article in collect_feed(source, url, since, until, loader):
            if article["url"] not in seen:
                candidates.setdefault(article["url"], article)
    return {
        "version": 1, "repository": repo, "run_id": run_id, "dry_run": dry_run,
        "date_jst": date, "title": f"{PREFIX}{date} 技術アップデート",
        "since": iso(since), "until": iso(until), "window_basis": basis,
        "same_day": any(issue["title"].startswith(f"{PREFIX}{date}") for issue in history),
        "articles": sorted(candidates.values(), key=lambda item: item["published"], reverse=True),
    }


def validate(prepared, output):
    items = output["items"]
    if not isinstance(items, list) or len(items) != 1:
        raise ValueError("Exactly one terminal digest output is required")
    item = items[0]
    if "output_id" in item and not re.fullmatch(r"so_[A-Za-z0-9_-]{12}", item["output_id"]):
        raise ValueError("Invalid safe-output submission ID")
    if item["type"] == "noop":
        if set(item) - {"type", "message", "output_id"}:
            raise ValueError("Additional noop fields are forbidden")
        if not isinstance(item.get("message"), str) or not item["message"].strip():
            raise ValueError("Noop requires an explicit reason")
        return "same-day" if prepared["same_day"] else "noop"
    if item["type"] != "create_issue":
        raise ValueError("Only create_issue or noop is permitted")
    if prepared["same_day"] or not prepared["articles"]:
        raise ValueError("Issue creation forbidden: same-day digest or no new articles")
    if item["title"] != prepared["title"]:
        raise ValueError("Digest title must match the fixed JST date")
    if set(item) - {"type", "title", "body", "output_id"}:
        raise ValueError("Additional issue fields are forbidden")
    body = item["body"]
    if not isinstance(body, str) or not 20 <= len(body) <= 50000:
        raise ValueError("Invalid digest body length")
    allowed = {article["url"] for article in prepared["articles"]}
    urls = {canonical_url(url) for url in URL_PATTERN.findall(body)}
    if not urls or not urls <= allowed:
        raise ValueError("Digest must link only to new, collected source articles")
    for heading in ("## エグゼクティブサマリー", "## 管理者向けハイライト", "## カテゴリ別アップデート", "## 集計情報"):
        if heading not in body:
            raise ValueError(f"Missing Japanese digest section: {heading}")
    if prepared["since"] not in body or prepared["until"] not in body:
        raise ValueError("Digest must contain the exact reporting window")
    return "publish"


def write_json(path, data):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("command", choices=("prepare", "validate", "checkpoint"))
    parser.add_argument("--directory", type=Path, required=True)
    args = parser.parse_args()
    env = os.environ
    directory = args.directory
    if args.command == "prepare":
        prepared = prepare(env["GITHUB_REPOSITORY"], env["GITHUB_RUN_ID"],
                           datetime.now(UTC), env.get("DIGEST_DRY_RUN") == "true")
        write_json(directory / "prepared.json", prepared)
        digest = hashlib.sha256((directory / "prepared.json").read_bytes()).hexdigest()
        with open(env["GITHUB_OUTPUT"], "a") as output:
            output.write(f"sha256={digest}\n")
        with open(env["GITHUB_STEP_SUMMARY"], "a") as summary:
            summary.write(f"## Daily tech digest collection\n\n"
                          f"Window: {prepared['since']} < publication <= {prepared['until']}\n\n"
                          f"Basis: {prepared['window_basis']}\n\n"
                          f"New articles: {len(prepared['articles'])}; "
                          f"same-day digest: {prepared['same_day']}; dry-run: {prepared['dry_run']}\n")
        return
    payload = (directory / "prepared.json").read_bytes()
    if hashlib.sha256(payload).hexdigest() != env["DIGEST_PREPARED_SHA256"]:
        raise ValueError("Prepared collection artifact checksum mismatch")
    prepared = json.loads(payload)
    if args.command == "validate":
        output = json.loads(Path(env["GH_AW_AGENT_OUTPUT"]).read_text(encoding="utf-8"))
        outcome = validate(prepared, output)
        if outcome == "publish":
            history = digest_history(pages(f"/repos/{prepared['repository']}/issues?state=all"))
            if any(issue["title"].startswith(f"{PREFIX}{prepared['date_jst']}") for issue in history):
                raise ValueError("A digest for this JST date was created after collection")
            urls = {canonical_url(url) for url in URL_PATTERN.findall(output["items"][0]["body"])}
            if urls & prior_urls(history):
                raise ValueError("A source article was reported after collection")
        with open(env["GITHUB_OUTPUT"], "a") as result:
            result.write(f"outcome={outcome}\n")
        write_json(directory / "validation.json", {"outcome": outcome, "sha256": env["DIGEST_PREPARED_SHA256"]})
        with open(env["GITHUB_STEP_SUMMARY"], "a") as summary:
            summary.write(f"\nDigest outcome: {outcome}; dry-run: {prepared['dry_run']}\n\n")
            summary.write(output["items"][0].get("body", output["items"][0].get("message", "")) + "\n")
        return
    receipt = json.loads((directory / "validation.json").read_text(encoding="utf-8"))
    if receipt["sha256"] != env["DIGEST_PREPARED_SHA256"]:
        raise ValueError("Validation receipt does not match the prepared collection")
    outcome = receipt["outcome"]
    if prepared["dry_run"] or outcome == "same-day":
        print("No checkpoint: preview or same-day skip.")
        return
    issue_number = env.get("DIGEST_ISSUE_NUMBER", "")
    if outcome == "publish":
        if not issue_number:
            print("::warning::No verified issue creation; checkpoint will not advance.")
            return
        issue = json.loads(fetch(f"https://api.github.com/repos/{prepared['repository']}/issues/{int(issue_number)}"))
        if issue["title"] != prepared["title"]:
            raise ValueError("Created issue title does not match the reporting date")
    elif outcome != "noop":
        raise ValueError(f"Unknown digest outcome: {outcome}")
    write_json(directory / "checkpoint.json", {
        "version": 1, "run_id": env["GITHUB_RUN_ID"], "dry_run": False,
        "until": prepared["until"], "outcome": outcome, "issue_number": issue_number,
    })
    with open(env["GITHUB_OUTPUT"], "a") as result:
        result.write("checkpoint=true\n")


if __name__ == "__main__":
    try:
        main()
    except (HTTPError, OSError, ValueError, KeyError, RuntimeError, ElementTree.ParseError,
            zipfile.BadZipFile) as error:
        print(f"::error::Daily tech digest failed: {error}", file=sys.stderr)
        raise SystemExit(1) from error
