import { useState } from 'react';
import { play } from '../../lib/sfx';

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

  const railBg = {
    backgroundImage:
      'linear-gradient(90deg, #86efac 0%, color-mix(in srgb, #86efac 30%, transparent) 55%, transparent 100%)',
    backgroundSize: '100% 2px',
    backgroundPosition: 'top left',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="space-y-5">
      <p className="font-body text-sm text-[#bad0de]">{copy.intro}</p>

      <div className="rounded-[3px] border border-[rgba(94,234,212,0.16)] bg-[#0b1420]/85 p-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="relative flex-1">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 font-mono text-xs text-[#728fa3]">
            ⌕
          </span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={searchPlaceholder}
            aria-label={searchPlaceholder}
            className="w-full rounded-[3px] bg-[#04080e] border border-[rgba(94,234,212,0.22)] focus:border-[#86efac] focus:outline-none pl-8 pr-3 py-2 font-body text-sm text-[#ecf7fb] placeholder:text-[#728fa3] transition-colors"
          />
        </div>

        <button
          type="button"
          onClick={copyBatch}
          className="px-3.5 py-2 rounded-[3px] bg-[#fcd34d] text-[#04080e] font-mono text-xs font-semibold hover:bg-[#fde68a] transition-colors shrink-0"
        >
          {copy.savePrefix}
          {selected.size > 0 ? `${copy.selected} ${selected.size}` : copy.all}{copy.copySuffix}
        </button>
      </div>

      {copiedAll && (
        <div className="rounded-[3px] border border-[#86efac]/45 bg-[#86efac]/10 px-4 py-2.5 font-mono text-xs font-semibold text-[#86efac]">
          {copy.copiedAll}
        </div>
      )}

      {filteredServers.length === 0 ? (
        <p className="rounded-[3px] border border-[rgba(94,234,212,0.16)] bg-[#0b1420]/70 p-6 text-center font-body text-sm text-[#728fa3]">
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
                className={`relative rounded-[3px] bg-[rgba(11,20,32,0.86)] hover:bg-[rgba(16,29,45,0.95)] border p-4 transition-all duration-150 ${
                  isSelected
                    ? 'border-[#86efac]/65 shadow-[0_8px_24px_rgba(134,239,172,0.14)]'
                    : 'border-[rgba(94,234,212,0.16)] hover:border-[#86efac]/40 shadow-[0_8px_24px_rgba(4,8,14,0.34)]'
                }`}
                onMouseEnter={() => play('hover')}
              >
                <div className="flex items-start gap-3">
                  <button
                    type="button"
                    onClick={() => toggle(s.slug)}
                    className={`font-mono text-xs font-bold shrink-0 w-7 h-7 rounded-[3px] border flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-[#86efac] border-[#86efac] text-[#04080e]'
                        : 'bg-[#04080e] border-[rgba(94,234,212,0.28)] text-[#ecf7fb] hover:border-[#86efac]'
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
                        <h3 className="font-body text-[15px] font-semibold text-[#ecf7fb] truncate">
                          {s.name}
                        </h3>
                      </div>
                      <span className="font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded-[3px] border border-[#86efac]/25 bg-[#86efac]/10 text-[#86efac] shrink-0">
                        MCP
                      </span>
                    </div>
                    <p className="font-body text-sm text-[#bad0de] leading-relaxed mb-3">
                      {s.description}
                    </p>
                    <div className="rounded-[3px] bg-[#04080e] border border-[rgba(94,234,212,0.16)] px-2.5 py-1.5 mb-2.5 overflow-x-auto">
                      <code className="font-mono text-[11px] text-[#86efac] whitespace-nowrap">{s.install}</code>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <button
                        type="button"
                        onClick={() => copyOne(s)}
                        className="font-mono text-[11px] font-semibold text-[#fcd34d] hover:text-[#67e8f9] transition-colors"
                      >
                        {isCopied ? copy.copiedOne : copy.copyOne}
                      </button>
                      {s.url && (
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[11px] text-[#67e8f9] hover:text-[#a5f3fc] transition-colors"
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
