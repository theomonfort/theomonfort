import { useState } from 'react';
import { play } from '../../lib/sfx';

export interface SkillEntry {
  slug: string;
  name: string;
  url: string;
  description: string;
  icon: string;
  group?: string;
}

interface Props {
  skills: SkillEntry[];
}

const COPY_FEEDBACK_MS = 1500;
const BATCH_COPY_FEEDBACK_MS = 2000;

function buildCommand(s: SkillEntry, scope: 'project' | 'global'): string {
  const flag = scope === 'global' ? ' --global' : '';
  return `gh skill install ${s.slug}${flag}`;
}

function buildBatchCommand(skills: SkillEntry[], scope: 'project' | 'global'): string {
  return skills.map((s) => buildCommand(s, scope)).join(' && \\\n');
}

export default function SkillGallery({ skills }: Props) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [scope, setScope] = useState<'project' | 'global'>('global');
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

  const copyOne = async (s: SkillEntry) => {
    play('select');
    await navigator.clipboard.writeText(buildCommand(s, scope));
    setCopiedSlug(s.slug);
    setTimeout(() => setCopiedSlug(null), COPY_FEEDBACK_MS);
  };

  const copyBatch = async () => {
    const skillsToCopy = selected.size === 0
      ? skills
      : skills.filter((s) => selected.has(s.slug));

    await navigator.clipboard.writeText(buildBatchCommand(skillsToCopy, scope));
    play('levelup');
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), BATCH_COPY_FEEDBACK_MS);
  };

  return (
    <div className="space-y-6">
      <details className="bg-shadow-ink/70 border-2 border-dashed border-crt-amber/50 p-4 group">
        <summary className="font-pixel text-[10px] text-crt-amber cursor-pointer select-none">
          ▶ 初回セットアップ（gh skill 拡張のインストール）
        </summary>
        <div className="mt-3 space-y-2 text-sm">
          <p className="font-body text-phosphor/85">
            "gh skill" は GitHub CLI の拡張です。一度だけ実行:
          </p>
          <pre className="font-mono text-[11px] text-gb-green bg-shadow-ink border border-phosphor/20 p-2 overflow-x-auto"><code>gh extension install theomonfort/gh-skill</code></pre>
          <p className="font-body text-[11px] text-phosphor/60">
            その後、下のカードから装備したいスキルをコピーして実行してください。
          </p>
        </div>
      </details>

      <div className="flex flex-wrap items-center justify-between gap-4 font-pixel text-[10px]">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => {
              play('click');
              setScope('global');
            }}
            className={`px-3 py-2 border-2 transition-colors ${
              scope === 'global'
                ? 'border-neon-cyan text-neon-cyan shadow-neon-cyan'
                : 'border-phosphor/30 text-phosphor/50'
            }`}
          >
            グローバル ~/
          </button>
          <button
            type="button"
            onClick={() => {
              play('click');
              setScope('project');
            }}
            className={`px-3 py-2 border-2 transition-colors ${
              scope === 'project'
                ? 'border-neon-cyan text-neon-cyan shadow-neon-cyan'
                : 'border-phosphor/30 text-phosphor/50'
            }`}
          >
            プロジェクト .github/
          </button>
        </div>
        <button
          type="button"
          onClick={copyBatch}
          className="px-4 py-2 border-2 border-crt-amber text-crt-amber bg-shadow-ink hover:bg-crt-amber/10 shadow-neon-amber transition-colors"
        >
          💾 セーブポイント・
          {selected.size > 0 ? `選択 ${selected.size}件` : '全装備'}を コピー
        </button>
      </div>

      {copiedAll && (
        <div className="font-pixel text-[10px] text-gb-green border-2 border-gb-green p-3 bg-shadow-ink">
          ▶ コマンドをコピーしました！ターミナルに貼り付けてEnter。
        </div>
      )}

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((s) => {
          const isSelected = selected.has(s.slug);
          const isCopied = copiedSlug === s.slug;
          return (
            <li
              key={s.slug}
              className={`relative bg-shadow-ink/80 border-2 p-4 transition-all duration-150 ${
                isSelected
                  ? 'border-neon-magenta shadow-neon-magenta'
                  : 'border-phosphor/20 hover:border-neon-cyan'
              }`}
              onMouseEnter={() => play('hover')}
            >
              <div className="flex items-start gap-3">
                <button
                  type="button"
                  onClick={() => toggle(s.slug)}
                  className="font-pixel text-base shrink-0 w-8 h-8 border-2 border-current flex items-center justify-center"
                  style={{ color: isSelected ? '#ff2e88' : '#e8f4ff' }}
                  aria-pressed={isSelected}
                  aria-label={`${s.name} を選択`}
                >
                  {isSelected ? '✓' : ''}
                </button>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{s.icon}</span>
                    <h3 className="font-pixel text-sm text-neon-cyan truncate">
                      {s.name}
                    </h3>
                  </div>
                  <p className="text-sm text-phosphor/80 leading-relaxed mb-3">
                    {s.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => copyOne(s)}
                    className="font-mono text-[10px] text-crt-amber hover:text-neon-magenta transition-colors underline-offset-4 hover:underline"
                  >
                    {isCopied ? '✓ コピー完了' : '▶ インストール・コマンドをコピー'}
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
