import io
import hashlib
import json
import os
import sys
import tempfile
import unittest
import zipfile
from datetime import datetime, timedelta
from urllib.error import HTTPError
from urllib.request import Request
from pathlib import Path
from unittest.mock import patch

from automation.daily_tech_digest import (
    CHECKPOINT, FEEDS, PREFIX, UTC, WORKFLOW, SafeRedirect, canonical_url,
    collect_feed, digest_history, iso, main, prepare, previous_window, validate, write_json,
)


NOW = datetime(2026, 11, 26, 0, 0, tzinfo=UTC)


def rss(items):
    return ("<rss><channel>" + "".join(
        f"<item><title>{title}</title><link>{url}</link>"
        f"<pubDate>{date.strftime('%a, %d %b %Y %H:%M:%S %z')}</pubDate>"
        "<description>Product update</description></item>"
        for title, url, date in items
    ) + "</channel></rss>").encode()


def checkpoint_archive(run_id, until, dry_run=False):
    buffer = io.BytesIO()
    with zipfile.ZipFile(buffer, "w") as archive:
        archive.writestr("checkpoint.json", json.dumps({
            "version": 1, "run_id": run_id, "until": iso(until), "dry_run": dry_run,
        }))
    return buffer.getvalue()


def candidate():
    return {
        "title": f"{PREFIX}2026-11-26 技術アップデート", "same_day": False,
        "articles": [{"url": "https://github.blog/changelog/new-policy"}],
        "since": iso(NOW - timedelta(hours=24)), "until": iso(NOW),
    }


def publication(data):
    body = (
        "## エグゼクティブサマリー\n管理者向けの更新です。\n"
        "## 管理者向けハイライト\nポリシーを確認してください。\n"
        "## カテゴリ別アップデート\n"
        "[出典](https://github.blog/changelog/new-policy)\n"
        f"## 集計情報\n{data['since']} < publication <= {data['until']}"
    )
    return {"items": [{"type": "create_issue", "title": data["title"], "body": body}]}


class DigestTests(unittest.TestCase):
    def setUp(self):
        network = patch("automation.daily_tech_digest.fetch",
                        side_effect=AssertionError("Offline tests must not access the network"))
        network.start()
        self.addCleanup(network.stop)

    def test_collects_exclusive_inclusive_window_across_pages(self):
        since = NOW - timedelta(hours=24)
        def loader(url):
            if "?paged=3" in url:
                return rss([("old", "https://github.blog/old", since - timedelta(seconds=1))])
            if "?paged=2" in url:
                return rss([
                    ("included", "https://github.blog/second", since + timedelta(seconds=1)),
                    ("excluded", "https://github.blog/boundary", since),
                ])
            return rss([
                ("future", "https://github.blog/future", NOW + timedelta(seconds=1)),
                ("included", "https://github.blog/first", NOW),
            ])
        items = collect_feed("GitHub Blog", FEEDS[1][1], since, NOW, loader)
        self.assertEqual([item["url"] for item in items],
                         ["https://github.blog/first", "https://github.blog/second"])

    def test_feed_failure_or_repeated_pagination_is_not_empty_success(self):
        xml = rss([("new", "https://github.blog/new", NOW)])
        with self.assertRaisesRegex(RuntimeError, "repeated"):
            collect_feed("GitHub Blog", FEEDS[1][1], NOW - timedelta(hours=24), NOW, lambda _: xml)
        def unavailable(url):
            raise HTTPError(url, 503, "Unavailable", {}, None)
        with self.assertRaises(HTTPError):
            collect_feed("GitHub Blog", FEEDS[1][1], NOW - timedelta(hours=24), NOW, unavailable)

    def test_pagination_404_is_end_but_first_page_404_fails(self):
        xml = rss([("new", "https://github.blog/new", NOW)])
        def loader(url):
            if "?paged=2" in url:
                raise HTTPError(url, 404, "Not found", {}, None)
            return xml
        self.assertEqual(len(collect_feed("GitHub Blog", FEEDS[1][1],
                                         NOW - timedelta(hours=24), NOW, loader)), 1)
        with self.assertRaises(HTTPError):
            collect_feed("GitHub Blog", FEEDS[1][1] + "?paged=2",
                         NOW - timedelta(hours=24), NOW, loader)

    def test_checkpoint_skips_dry_runs_and_unrelated_workflows(self):
        runs = [
            {"id": 3, "path": WORKFLOW},
            {"id": 2, "path": ".github/workflows/other.lock.yml"},
            {"id": 1, "path": WORKFLOW},
        ]
        def loader(url):
            if "/actions/runs?" in url:
                return json.dumps({"workflow_runs": runs}).encode()
            if "/runs/3/artifacts?" in url:
                return b'{"artifacts":[]}'
            if "/runs/1/artifacts?" in url:
                return json.dumps({"artifacts": [{"id": 10, "name": CHECKPOINT, "expired": False}]}).encode()
            if "/artifacts/10/zip" in url:
                return checkpoint_archive(1, NOW - timedelta(hours=48))
            self.fail(f"Unexpected request: {url}")
        since, basis = previous_window("theomonfort/theomonfort", "4", NOW, loader)
        self.assertEqual(since, NOW - timedelta(hours=48))
        self.assertEqual(basis, "successful-run:1")

    def test_missing_checkpoint_falls_back_but_bad_checkpoint_fails(self):
        def empty(url):
            return b'{"workflow_runs":[]}'
        self.assertEqual(previous_window("theomonfort/theomonfort", "4", NOW, empty)[0],
                         NOW - timedelta(hours=24))
        def invalid(url):
            if "/actions/runs?" in url:
                return json.dumps({"workflow_runs": [{"id": 1, "path": WORKFLOW}]}).encode()
            if "/artifacts?" in url:
                return json.dumps({"artifacts": [{"id": 10, "name": CHECKPOINT, "expired": False}]}).encode()
            return checkpoint_archive(1, NOW, dry_run=True)
        with self.assertRaisesRegex(ValueError, "provenance"):
            previous_window("theomonfort/theomonfort", "4", NOW, invalid)

    def test_closed_digest_dedup_cross_feed_and_jst_date(self):
        issues = [
            {"title": f"{PREFIX}2026-11-25 技術アップデート", "state": "closed",
             "body": "[source](https://github.blog/changelog/old/?utm_source=test#section)"},
            {"title": f"{PREFIX}2026-11-26 技術アップデート", "body": "", "pull_request": {}},
        ]
        def loader(url):
            if "/issues?" in url:
                return json.dumps(issues).encode()
            if "/actions/runs?" in url:
                return b'{"workflow_runs":[]}'
            if "?paged=2" in url:
                return rss([("end", "https://github.blog/end", NOW - timedelta(hours=25))])
            return rss([
                ("old", "https://github.blog/changelog/old", NOW - timedelta(hours=1)),
                ("new", "https://github.blog/changelog/new", NOW - timedelta(hours=2)),
                ("end", "https://github.blog/end", NOW - timedelta(hours=25)),
            ])
        result = prepare("theomonfort/theomonfort", "4", NOW, True, loader)
        self.assertEqual(len(result["articles"]), 1)
        self.assertEqual(result["articles"][0]["url"], "https://github.blog/changelog/new")
        self.assertEqual(result["date_jst"], "2026-11-26")
        self.assertFalse(result["same_day"])
        self.assertTrue(result["dry_run"])
        issues.append({"title": f"{PREFIX}2026-11-26 技術アップデート", "body": ""})
        self.assertTrue(prepare("theomonfort/theomonfort", "4", NOW, False, loader)["same_day"])
        self.assertEqual(len(digest_history(issues)), 2)

    def test_jst_date_crosses_at_1500_utc(self):
        before = NOW.replace(hour=14, minute=59)
        after = NOW.replace(hour=15)
        def loader(url):
            if "/issues?" in url:
                return b"[]"
            if "/actions/runs?" in url:
                return b'{"workflow_runs":[]}'
            return rss([])
        self.assertEqual(prepare("theomonfort/theomonfort", "1", before, False, loader)["date_jst"], "2026-11-26")
        self.assertEqual(prepare("theomonfort/theomonfort", "1", after, False, loader)["date_jst"], "2026-11-27")

    def test_validator_allows_publish_and_meaningful_noop(self):
        data = candidate()
        self.assertEqual(validate(data, publication(data)), "publish")
        output = publication(data)
        output["items"][0]["output_id"] = "so_AbCdEf012345"
        self.assertEqual(validate(data, output), "publish")
        self.assertEqual(validate(data, {"items": [{"type": "noop", "message": "対象更新なし"}]}), "noop")
        data["same_day"] = True
        self.assertEqual(validate(data, {"items": [{"type": "noop", "message": "本日は作成済み"}]}), "same-day")

    def test_validator_blocks_empty_same_day_multiple_and_wrong_titles(self):
        for change in ({"same_day": True}, {"articles": []}):
            data = candidate()
            output = publication(data)
            data.update(change)
            with self.subTest(change=change), self.assertRaises(ValueError):
                validate(data, output)
        data = candidate()
        output = publication(data)
        output["items"] *= 2
        with self.assertRaises(ValueError):
            validate(data, output)
        output = publication(data)
        output["items"][0]["title"] += " variation"
        with self.assertRaises(ValueError):
            validate(data, output)

    def test_validator_blocks_invented_urls_fields_and_missing_metadata(self):
        for field, value in (
            ("assignees", ["someone"]),
            ("body", publication(candidate())["items"][0]["body"] + "\nhttps://example.com/attack"),
            ("body", "日本語ですが、集計情報がありません。"),
        ):
            data = candidate()
            output = publication(data)
            output["items"][0][field] = value
            with self.subTest(field=field), self.assertRaises(ValueError):
                validate(data, output)
        with self.assertRaises(ValueError):
            validate(candidate(), {"items": [{"type": "noop", "message": ""}]})
        output = publication(candidate())
        output["items"][0]["output_id"] = "invalid"
        with self.assertRaises(ValueError):
            validate(candidate(), output)

    def test_normalization_and_redirect_credentials(self):
        self.assertEqual(canonical_url("http://GITHUB.BLOG/post/?utm_source=mail#heading"),
                         "https://github.blog/post")
        request = Request("https://api.github.com/archive", headers={"Authorization": "Bearer test"})
        redirected = SafeRedirect().redirect_request(request, None, 302, "", {}, "https://storage.example/file")
        self.assertIsNone(redirected.get_header("Authorization"))

    def test_cli_validates_runtime_envelope_and_saves_trusted_receipt(self):
        with tempfile.TemporaryDirectory() as temporary:
            directory = Path(temporary)
            data = candidate()
            data.update(repository="theomonfort/theomonfort", dry_run=True, date_jst="2026-11-26")
            write_json(directory / "prepared.json", data)
            digest = hashlib.sha256((directory / "prepared.json").read_bytes()).hexdigest()
            output = publication(data)
            output["items"][0]["output_id"] = "so_AbCdEf012345"
            write_json(directory / "agent.json", output)
            env = {
                "DIGEST_PREPARED_SHA256": digest, "GH_AW_AGENT_OUTPUT": str(directory / "agent.json"),
                "GITHUB_OUTPUT": str(directory / "outputs"), "GITHUB_STEP_SUMMARY": str(directory / "summary"),
            }
            with patch.dict(os.environ, env), patch.object(sys, "argv", ["digest", "validate", "--directory", temporary]):
                with patch("automation.daily_tech_digest.fetch", return_value=b"[]"):
                    main()
                self.assertEqual(json.loads((directory / "validation.json").read_text())["outcome"], "publish")
                with patch("automation.daily_tech_digest.fetch", return_value=json.dumps([
                    {"title": data["title"], "body": ""}
                ]).encode()), self.assertRaisesRegex(ValueError, "after collection"):
                    main()
                with patch.dict(os.environ, {"DIGEST_PREPARED_SHA256": "wrong"}):
                    with self.assertRaisesRegex(ValueError, "checksum"):
                        main()

    def test_checkpoints_only_live_verified_or_noop_outcomes(self):
        for dry_run, outcome, number, expected in (
            (True, "publish", "42", False),
            (False, "same-day", "", False),
            (False, "publish", "", False),
            (False, "publish", "42", True),
            (False, "noop", "", True),
        ):
            with self.subTest(dry_run=dry_run, outcome=outcome), tempfile.TemporaryDirectory() as temporary:
                directory = Path(temporary)
                data = candidate()
                data.update(repository="theomonfort/theomonfort", dry_run=dry_run)
                write_json(directory / "prepared.json", data)
                digest = hashlib.sha256((directory / "prepared.json").read_bytes()).hexdigest()
                write_json(directory / "validation.json", {"outcome": outcome, "sha256": digest})
                env = {
                    "DIGEST_PREPARED_SHA256": digest, "DIGEST_ISSUE_NUMBER": number,
                    "GITHUB_RUN_ID": "100", "GITHUB_OUTPUT": str(directory / "outputs"),
                }
                with patch.dict(os.environ, env), patch.object(sys, "argv", ["digest", "checkpoint", "--directory", temporary]):
                    with patch("automation.daily_tech_digest.fetch",
                               return_value=json.dumps({"title": data["title"]}).encode()) as api:
                        main()
                        self.assertEqual(api.call_count, int(not dry_run and outcome == "publish" and bool(number)))
                self.assertEqual((directory / "checkpoint.json").exists(), expected)
                if expected:
                    checkpoint = json.loads((directory / "checkpoint.json").read_text())
                    self.assertEqual(checkpoint["until"], data["until"])
                    self.assertFalse(checkpoint["dry_run"])


if __name__ == "__main__":
    unittest.main()
