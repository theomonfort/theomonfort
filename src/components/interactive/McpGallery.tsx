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

export default function McpGallery({ servers, copy = defaultCopy }: Props) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

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
      ? servers
      : servers.filter((s) => selected.has(s.slug));

    await navigator.clipboard.writeText(buildBatchCommand(toCopy));
    play('levelup');
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), BATCH_COPY_FEEDBACK_MS);
  };

  return (
    <div className="space-y-6">
      <p className="font-body text-sm text-phosphor/80">{copy.intro}</p>

      <div className="flex flex-wrap items-center justify-end gap-4 font-pixel text-[10px]">
        <button
          type="button"
          onClick={copyBatch}
          className="px-4 py-2 border-2 border-crt-amber text-crt-amber bg-shadow-ink hover:bg-crt-amber/10 shadow-neon-amber transition-colors"
        >
          {copy.savePrefix}
          {selected.size > 0 ? `${copy.selected} ${selected.size}` : copy.all}{copy.copySuffix}
        </button>
      </div>

      {copiedAll && (
        <div className="font-pixel text-[10px] text-gb-green border-2 border-gb-green p-3 bg-shadow-ink">
          {copy.copiedAll}
        </div>
      )}

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {servers.map((s) => {
          const isSelected = selected.has(s.slug);
          const isCopied = copiedSlug === s.slug;
          return (
            <li
              key={s.slug}
              className={`relative bg-shadow-ink/80 border-2 p-4 transition-all duration-150 ${
                isSelected
                  ? 'border-gb-green shadow-neon-green'
                  : 'border-phosphor/20 hover:border-gb-green'
              }`}
              onMouseEnter={() => play('hover')}
            >
              <div className="flex items-start gap-3">
                <button
                  type="button"
                  onClick={() => toggle(s.slug)}
                  className="font-pixel text-base shrink-0 w-8 h-8 border-2 border-current flex items-center justify-center"
                  style={{ color: isSelected ? '#7bd97b' : '#e8f4ff' }}
                  aria-pressed={isSelected}
                  aria-label={`${copy.selectAria} ${s.name}`}
                >
                  {isSelected ? '✓' : ''}
                </button>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    {s.icon.startsWith('px:') ? (
                      <span
                        className="px-icon text-gb-green shrink-0"
                        style={{ ['--px' as string]: `url(/theomonfort/icons/${s.icon.slice(3)}.svg)` }}
                        aria-hidden="true"
                      />
                    ) : (
                      <span className="text-xl">{s.icon}</span>
                    )}
                    <h3 className="font-pixel text-sm text-gb-green truncate">
                      {s.name}
                    </h3>
                  </div>
                  <p className="text-sm text-phosphor/80 leading-relaxed mb-3">
                    {s.description}
                  </p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <button
                      type="button"
                      onClick={() => copyOne(s)}
                      className="font-mono text-[10px] text-crt-amber hover:text-neon-magenta transition-colors underline-offset-4 hover:underline"
                    >
                      {isCopied ? copy.copiedOne : copy.copyOne}
                    </button>
                    {s.url && (
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[10px] text-phosphor/60 hover:text-neon-cyan transition-colors"
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
    </div>
  );
}
