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
  copy?: {
    setupSummary: string;
    setupIntro: string;
    setupAfter: string;
    global: string;
    project: string;
    savePrefix: string;
    selected: string;
    all: string;
    copySuffix: string;
    copiedAll: string;
    selectAria: string;
    copiedOne: string;
    copyOne: string;
  };
}

const COPY_FEEDBACK_MS = 1500;
const BATCH_COPY_FEEDBACK_MS = 2000;

function buildCommand(s: SkillEntry, scope: 'project' | 'global'): string {
  const flag = scope === 'global' ? ' --scope user' : '';
  return `gh skill install theomonfort/skills ${s.slug}${flag}`;
}

function buildBatchCommand(skills: SkillEntry[], scope: 'project' | 'global'): string {
  return skills.map((s) => buildCommand(s, scope)).join(' && \\\n');
}

function buildSkillRepoUrl(s: SkillEntry): string {
  return `https://github.com/theomonfort/skills/blob/main/skills/${s.slug}/SKILL.md`;
}

const defaultCopy: Required<Props>['copy'] = {
  setupSummary: '▶ 初回セットアップ（gh skill 拡張のインストール）',
  setupIntro: '"gh skill" は GitHub CLI の拡張です。一度だけ実行:',
  setupAfter: 'その後、下のカードから装備したいスキルをコピーして実行してください。',
  global: 'ユーザー ~/',
  project: 'プロジェクト .github/',
  savePrefix: '💾 ',
  selected: '選択',
  all: '全装備',
  copySuffix: 'を コピー',
  copiedAll: '▶ コマンドをコピーしました！ターミナルに貼り付けてEnter。',
  selectAria: 'を選択',
  copiedOne: '✓ コピー完了',
  copyOne: '▶ インストール・コマンドをコピー',
};

export default function SkillGallery({ skills, copy = defaultCopy }: Props) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [scope, setScope] = useState<'project' | 'global'>('project');
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
          {copy.setupSummary}
        </summary>
        <div className="mt-3 space-y-2 text-sm">
          <p className="font-body text-phosphor/85">
            {copy.setupIntro}
          </p>
          <pre className="font-mono text-[11px] text-gb-green bg-shadow-ink border border-phosphor/20 p-2 overflow-x-auto"><code>{`# macOS
brew install gh
# or upgrade if already installed
brew upgrade gh`}</code></pre>
          <p className="font-body text-[11px] text-phosphor/60">
            {copy.setupAfter}
          </p>
        </div>
      </details>

      <div className="flex flex-wrap items-center justify-between gap-4 font-pixel text-[10px]">
        <div className="flex gap-2">
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
            {copy.project}
          </button>
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
            {copy.global}
          </button>
        </div>
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
              <a
                href={buildSkillRepoUrl(s)}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-2 top-2 z-10 font-mono text-[10px] text-phosphor/50 hover:text-neon-cyan transition-colors"
                aria-label={`Open ${s.name} skill in repository`}
              >
                repo ↗
              </a>
              <div className="flex items-start gap-3">
                <button
                  type="button"
                  onClick={() => toggle(s.slug)}
                  className="font-pixel text-base shrink-0 w-8 h-8 border-2 border-current flex items-center justify-center"
                  style={{ color: isSelected ? '#ff2e88' : '#e8f4ff' }}
                  aria-pressed={isSelected}
                  aria-label={`${copy.selectAria} ${s.name}`}
                >
                  {isSelected ? '✓' : ''}
                </button>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 pr-14">
                    {/\.(svg|png|jpg|jpeg|webp|gif)$/i.test(s.icon)
                      ? <img src={s.icon} alt="" className="h-6 w-6 object-contain shrink-0" />
                      : <span className="text-xl">{s.icon}</span>}
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
                    {isCopied ? copy.copiedOne : copy.copyOne}
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
