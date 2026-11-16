import { useEffect, useState } from 'react';
import { play } from '../../lib/sfx';
import { SITE_THEME_EVENT, getCurrentSiteTheme, type SiteTheme } from '../../lib/theme';

export interface McpEntry {
  slug: string;
  name: string;
  icon: string;
  description: string;
  install: string;
  url?: string;
}

interface Props {
  servers: McpEntry[];
  locale?: 'ja' | 'en';
  copy?: {
    intro: string;
    savePrefix: string;
    selected: string;
    all: string;
    copySuffix: string;
    copiedAll: string;
    selectAria: string;
    copiedOne: string;
    copyOne: string;
    docsLink: string;
  };
}

const COPY_FEEDBACK_MS = 1500;
const BATCH_COPY_FEEDBACK_MS = 2000;

function buildBatchCommand(servers: McpEntry[]): string {
  return servers.map((s) => s.install).join(' && \\\n');
}

const defaultCopy: Required<Props>['copy'] = {
  intro: 'Copilot CLI に MCP サーバーを追加するコマンド。コピーしてターミナルで実行。',
  savePrefix: '💾 ',
  selected: '選択',
  all: '全装備',
  copySuffix: 'を コピー',
  copiedAll: '▶ コマンドをコピーしました！ターミナルに貼り付けてEnter。',
  selectAria: 'を選択',
  copiedOne: '✓ コピー完了',
  copyOne: '▶ インストール・コマンドをコピー',
  docsLink: '↗ ドキュメント',
};

export default function McpGallery({ servers, locale = 'ja', copy = defaultCopy }: Props) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [query, setQuery] = useState('');
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);
  const [siteTheme, setSiteTheme] = useState<SiteTheme>('phosphor');

  useEffect(() => {
    const sync = () => setSiteTheme(getCurrentSiteTheme());
    sync();
    window.addEventListener(SITE_THEME_EVENT, sync);
    return () => window.removeEventListener(SITE_THEME_EVENT, sync);
  }, []);

  const isRetro = siteTheme === 'retro';

  const normalizedQuery = query.trim().toLowerCase();
  const filteredServers = servers.filter((s) => {
    if (!normalizedQuery) return true;
    return (
      s.name.toLowerCase().includes(normalizedQuery) ||
      s.slug.toLowerCase().includes(normalizedQuery) ||
      s.description.toLowerCase().includes(normalizedQuery) ||
      s.install.toLowerCase().includes(normalizedQuery)
    );
  });

  const searchPlaceholder =
    locale === 'en' ? 'Filter MCP servers by name or keyword...' : 'MCP サーバー名・キーワードで検索...';
  const emptySearchLabel =
    locale === 'en' ? 'No matching MCP servers found.' : '条件に一致する MCP サーバーが見つかりません。';

  const toggle = (slug: string) => {
    play('click');
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  };

  const copyOne = async (s: McpEntry) => {
    play('select');
    await navigator.clipboard.writeText(s.install);
    setCopiedSlug(s.slug);
    setTimeout(() => setCopiedSlug(null), COPY_FEEDBACK_MS);
  };

  const copyBatch = async () => {
    const toCopy = selected.size === 0
      ? (filteredServers.length > 0 ? filteredServers : servers)
      : servers.filter((s) => selected.has(s.slug));

    await navigator.clipboard.writeText(buildBatchCommand(toCopy));
    play('levelup');
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), BATCH_COPY_FEEDBACK_MS);
  };

  const railBg = isRetro
    ? undefined
    : {
        backgroundImage:
          'linear-gradient(90deg, var(--c-gb-green) 0%, color-mix(in srgb, var(--c-gb-green) 30%, transparent) 55%, transparent 100%)',
        backgroundSize: '100% 2px',
        backgroundPosition: 'top left',
        backgroundRepeat: 'no-repeat',
      };

  return (
    <div className="space-y-5">
      <p className="font-body text-sm text-phosphor-body">{copy.intro}</p>

      <div
        className={`rounded-[var(--radius-card)] p-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 ${
          isRetro
            ? 'border-2 border-gb-green/50 bg-shadow-ink/85 shadow-pixel'
            : 'border border-[var(--c-border)] bg-deep-purple/85'
        }`}
      >
        <div className="relative flex-1">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 font-mono text-xs text-phosphor-muted">
            ⌕
          </span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={searchPlaceholder}
            aria-label={searchPlaceholder}
            className={`w-full rounded-[var(--radius-ui)] bg-shadow-ink focus:border-gb-green focus:outline-none pl-8 pr-3 py-2 text-sm text-phosphor placeholder:text-phosphor-muted transition-colors ${
              isRetro
                ? 'border-2 border-gb-green/40 font-pixel-jp'
                : 'border border-neon-cyan/25 font-body'
            }`}
          />
        </div>

        <button
          type="button"
          onClick={copyBatch}
          className={
            isRetro
              ? 'px-3.5 py-2 border-2 border-crt-amber text-crt-amber bg-shadow-ink hover:bg-crt-amber hover:text-shadow-ink font-pixel text-[10px] shadow-neon-amber transition-colors shrink-0'
              : 'px-3.5 py-2 rounded-[var(--radius-ui)] bg-crt-amber text-shadow-ink font-mono text-xs font-semibold hover:brightness-110 transition-all shrink-0'
          }
        >
          {copy.savePrefix}
          {selected.size > 0 ? `${copy.selected} ${selected.size}` : copy.all}{copy.copySuffix}
        </button>
      </div>

      {copiedAll && (
        <div
          className={`rounded-[var(--radius-card)] px-4 py-2.5 text-gb-green ${
            isRetro
              ? 'font-pixel text-[10px] border-2 border-gb-green bg-shadow-ink shadow-neon-green'
              : 'font-mono text-xs font-semibold border border-gb-green/45 bg-gb-green/10'
          }`}
        >
          {copy.copiedAll}
        </div>
      )}

      {filteredServers.length === 0 ? (
        <p
          className={`rounded-[var(--radius-card)] p-6 text-center font-body text-sm text-phosphor-muted ${
            isRetro
              ? 'border-2 border-dashed border-gb-green/40 bg-shadow-ink/80'
              : 'border border-[var(--c-border)] bg-deep-purple/70'
          }`}
        >
          {emptySearchLabel}
        </p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredServers.map((s) => {
            const isSelected = selected.has(s.slug);
            const isCopied = copiedSlug === s.slug;
            return (
              <li
                key={s.slug}
                style={railBg}
                className={`relative rounded-[var(--radius-card)] p-4 transition-all duration-150 ${
                  isRetro
                    ? `bg-shadow-ink/85 border-2 shadow-pixel ${
                        isSelected
                          ? 'border-gb-green shadow-neon-green'
                          : 'border-phosphor/25 hover:border-gb-green'
                      }`
                    : `bg-[var(--c-bg-elevated)] hover:bg-[var(--c-bg-elevated-hover)] border ${
                        isSelected
                          ? 'border-gb-green/65 shadow-[0_8px_24px_rgb(var(--rgb-gb-green)/0.14)]'
                          : 'border-[var(--c-border)] hover:border-gb-green/40 shadow-[0_8px_24px_rgb(var(--rgb-shadow-ink)/0.34)]'
                      }`
                }`}
                onMouseEnter={() => play('hover')}
              >
                <div className="flex items-start gap-3">
                  <button
                    type="button"
                    onClick={() => toggle(s.slug)}
                    className={`shrink-0 rounded-[var(--radius-ui)] flex items-center justify-center transition-colors ${
                      isRetro
                        ? `font-pixel text-sm w-8 h-8 border-2 ${
                            isSelected
                              ? 'border-gb-green text-gb-green bg-shadow-ink'
                              : 'border-phosphor/40 text-phosphor bg-shadow-ink hover:border-gb-green'
                          }`
                        : `font-mono text-xs font-bold w-7 h-7 border ${
                            isSelected
                              ? 'bg-gb-green border-gb-green text-shadow-ink'
                              : 'bg-shadow-ink border-neon-cyan/30 text-phosphor hover:border-gb-green'
                          }`
                    }`}
                    aria-pressed={isSelected}
                    aria-label={`${copy.selectAria} ${s.name}`}
                  >
                    {isSelected ? '✓' : ''}
                  </button>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2 min-w-0">
                        {/\.(svg|png|jpg|jpeg|webp|gif)$/i.test(s.icon)
                          ? <img src={s.icon} alt="" className="h-5 w-5 object-contain shrink-0" />
                          : <span className="text-lg leading-none shrink-0">{s.icon}</span>}
                        <h3
                          className={`truncate ${
                            isRetro
                              ? 'font-pixel text-xs text-gb-green'
                              : 'font-body text-[15px] font-semibold text-phosphor'
                          }`}
                        >
                          {s.name}
                        </h3>
                      </div>
                      <span
                        className={`px-1.5 py-0.5 rounded-[var(--radius-ui)] text-gb-green shrink-0 ${
                          isRetro
                            ? 'font-pixel text-[8px] border-2 border-gb-green/45 bg-shadow-ink'
                            : 'font-mono text-[10px] font-semibold border border-gb-green/25 bg-gb-green/10'
                        }`}
                      >
                        MCP
                      </span>
                    </div>
                    <p className="font-body text-sm text-phosphor-body leading-relaxed mb-3">
                      {s.description}
                    </p>
                    <div
                      className={`rounded-[var(--radius-ui)] bg-shadow-ink px-2.5 py-1.5 mb-2.5 overflow-x-auto ${
                        isRetro ? 'border-2 border-phosphor/20' : 'border border-[var(--c-border)]'
                      }`}
                    >
                      <code className="font-mono text-[11px] text-gb-green whitespace-nowrap">{s.install}</code>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <button
                        type="button"
                        onClick={() => copyOne(s)}
                        className={`font-mono text-[11px] font-semibold text-crt-amber transition-colors ${
                          isRetro ? 'hover:text-neon-magenta underline-offset-4 hover:underline' : 'hover:text-[var(--c-link)]'
                        }`}
                      >
                        {isCopied ? copy.copiedOne : copy.copyOne}
                      </button>
                      {s.url && (
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[11px] text-[var(--c-link)] hover:text-[var(--c-link-hover)] transition-colors"
                        >
                          {copy.docsLink}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
