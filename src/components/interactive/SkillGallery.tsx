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
  locale?: 'ja' | 'en';
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

export default function SkillGallery({ skills, locale = 'ja', copy = defaultCopy }: Props) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [scope, setScope] = useState<'project' | 'global'>('project');
  const [query, setQuery] = useState('');
  const [activeGroup, setActiveGroup] = useState<string>('all');
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const groups = Array.from(
    new Set(skills.map((s) => s.group).filter((g): g is string => Boolean(g)))
  );

  const normalizedQuery = query.trim().toLowerCase();
  const filteredSkills = skills.filter((s) => {
    if (activeGroup !== 'all' && s.group !== activeGroup) return false;
    if (!normalizedQuery) return true;
    return (
      s.name.toLowerCase().includes(normalizedQuery) ||
      s.slug.toLowerCase().includes(normalizedQuery) ||
      s.description.toLowerCase().includes(normalizedQuery) ||
      (s.group ?? '').toLowerCase().includes(normalizedQuery)
    );
  });

  const searchPlaceholder =
    locale === 'en' ? 'Filter skills by name or keyword...' : 'スキル名・キーワードで検索...';
  const allCategoryLabel = locale === 'en' ? 'ALL' : 'すべて';
  const emptySearchLabel =
    locale === 'en' ? 'No matching skills found.' : '条件に一致するスキルが見つかりません。';

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
      ? (filteredSkills.length > 0 ? filteredSkills : skills)
      : skills.filter((s) => selected.has(s.slug));

    await navigator.clipboard.writeText(buildBatchCommand(skillsToCopy, scope));
    play('levelup');
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), BATCH_COPY_FEEDBACK_MS);
  };

  const railBg = (tone: string) => ({
    backgroundImage: `linear-gradient(90deg, ${tone} 0%, color-mix(in srgb, ${tone} 30%, transparent) 55%, transparent 100%)`,
    backgroundSize: '100% 2px',
    backgroundPosition: 'top left',
    backgroundRepeat: 'no-repeat',
  });

  return (
    <div className="space-y-5">
      <details
        className="rounded-[3px] border border-[#fcd34d]/30 bg-[#0b1420]/85 p-4 group"
        style={railBg('#fcd34d')}
      >
        <summary className="font-mono text-xs font-semibold tracking-wide text-[#fcd34d] cursor-pointer select-none">
          {copy.setupSummary}
        </summary>
        <div className="mt-3 space-y-2.5 text-sm">
          <p className="font-body text-[#bad0de]">
            {copy.setupIntro}
          </p>
          <pre className="font-mono text-xs text-[#86efac] bg-[#04080e] border border-[rgba(94,234,212,0.18)] rounded-[3px] px-3 py-2.5 overflow-x-auto"><code>{`# macOS
brew install gh
# or upgrade if already installed
brew upgrade gh`}</code></pre>
          <p className="font-body text-xs text-[#728fa3]">
            {copy.setupAfter}
          </p>
        </div>
      </details>

      <div className="rounded-[3px] border border-[rgba(94,234,212,0.16)] bg-[#0b1420]/85 p-4 space-y-3.5">
        <div className="flex flex-col sm:flex-row gap-3">
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
              className="w-full rounded-[3px] bg-[#04080e] border border-[rgba(94,234,212,0.22)] focus:border-[#5eead4] focus:outline-none pl-8 pr-3 py-2 font-body text-sm text-[#ecf7fb] placeholder:text-[#728fa3] transition-colors"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <div className="inline-flex rounded-[3px] border border-[rgba(94,234,212,0.22)] bg-[#04080e] p-0.5">
              <button
                type="button"
                onClick={() => {
                  play('click');
                  setScope('project');
                }}
                className={`px-3 py-1.5 rounded-[2px] transition-colors ${
                  scope === 'project'
                    ? 'bg-[#5eead4] text-[#04080e] font-semibold'
                    : 'text-[#728fa3] hover:text-[#ecf7fb]'
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
                className={`px-3 py-1.5 rounded-[2px] transition-colors ${
                  scope === 'global'
                    ? 'bg-[#5eead4] text-[#04080e] font-semibold'
                    : 'text-[#728fa3] hover:text-[#ecf7fb]'
                }`}
              >
                {copy.global}
              </button>
            </div>

            <button
              type="button"
              onClick={copyBatch}
              className="px-3.5 py-2 rounded-[3px] bg-[#fcd34d] text-[#04080e] font-semibold hover:bg-[#fde68a] transition-colors"
            >
              {copy.savePrefix}
              {selected.size > 0 ? `${copy.selected} ${selected.size}` : copy.all}{copy.copySuffix}
            </button>
          </div>
        </div>

        {groups.length > 1 && (
          <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-[rgba(94,234,212,0.12)]">
            <button
              type="button"
              onClick={() => {
                play('click');
                setActiveGroup('all');
              }}
              className={`px-2.5 py-1 rounded-[3px] font-mono text-[11px] transition-colors ${
                activeGroup === 'all'
                  ? 'bg-[#5eead4] text-[#04080e] font-semibold'
                  : 'border border-[rgba(94,234,212,0.18)] bg-[#04080e] text-[#728fa3] hover:text-[#ecf7fb] hover:border-[rgba(94,234,212,0.36)]'
              }`}
            >
              {allCategoryLabel} ({skills.length})
            </button>
            {groups.map((grp) => {
              const grpCount = skills.filter((s) => s.group === grp).length;
              const isActive = activeGroup === grp;
              return (
                <button
                  key={grp}
                  type="button"
                  onClick={() => {
                    play('click');
                    setActiveGroup(grp);
                  }}
                  className={`px-2.5 py-1 rounded-[3px] font-mono text-[11px] transition-colors ${
                    isActive
                      ? 'bg-[#5eead4] text-[#04080e] font-semibold'
                      : 'border border-[rgba(94,234,212,0.18)] bg-[#04080e] text-[#728fa3] hover:text-[#ecf7fb] hover:border-[rgba(94,234,212,0.36)]'
                  }`}
                >
                  {grp} ({grpCount})
                </button>
              );
            })}
          </div>
        )}
      </div>

      {copiedAll && (
        <div className="rounded-[3px] border border-[#86efac]/45 bg-[#86efac]/10 px-4 py-2.5 font-mono text-xs font-semibold text-[#86efac]">
          {copy.copiedAll}
        </div>
      )}

      {filteredSkills.length === 0 ? (
        <p className="rounded-[3px] border border-[rgba(94,234,212,0.16)] bg-[#0b1420]/70 p-6 text-center font-body text-sm text-[#728fa3]">
          {emptySearchLabel}
        </p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredSkills.map((s) => {
            const isSelected = selected.has(s.slug);
            const isCopied = copiedSlug === s.slug;
            const cmd = buildCommand(s, scope);
            const tone = isSelected ? '#93a8ff' : '#5eead4';
            return (
              <li
                key={s.slug}
                style={railBg(tone)}
                className={`relative rounded-[3px] bg-[rgba(11,20,32,0.86)] hover:bg-[rgba(16,29,45,0.95)] border p-4 transition-all duration-150 ${
                  isSelected
                    ? 'border-[#93a8ff]/65 shadow-[0_8px_24px_rgba(147,168,255,0.14)]'
                    : 'border-[rgba(94,234,212,0.16)] hover:border-[rgba(94,234,212,0.34)] shadow-[0_8px_24px_rgba(4,8,14,0.34)]'
                }`}
                onMouseEnter={() => play('hover')}
              >
                <div className="flex items-start gap-3">
                  <button
                    type="button"
                    onClick={() => toggle(s.slug)}
                    className={`font-mono text-xs font-bold shrink-0 w-7 h-7 rounded-[3px] border flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-[#93a8ff] border-[#93a8ff] text-[#04080e]'
                        : 'bg-[#04080e] border-[rgba(94,234,212,0.28)] text-[#ecf7fb] hover:border-[#5eead4]'
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
                      <div className="flex items-center gap-1.5 shrink-0">
                        {s.group && (
                          <span className="font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded-[3px] border border-[#93a8ff]/25 bg-[#93a8ff]/10 text-[#93a8ff]">
                            {s.group}
                          </span>
                        )}
                        <a
                          href={buildSkillRepoUrl(s)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[10px] px-1.5 py-0.5 rounded-[3px] border border-[rgba(94,234,212,0.18)] bg-[#04080e] text-[#67e8f9] hover:text-[#a5f3fc] hover:border-[#5eead4]/45 transition-colors"
                          aria-label={`Open ${s.name} skill in repository`}
                        >
                          repo ↗
                        </a>
                      </div>
                    </div>
                    <p className="font-body text-sm text-[#bad0de] leading-relaxed mb-3">
                      {s.description}
                    </p>
                    <div className="rounded-[3px] bg-[#04080e] border border-[rgba(94,234,212,0.16)] px-2.5 py-1.5 mb-2 overflow-x-auto">
                      <code className="font-mono text-[11px] text-[#86efac] whitespace-nowrap">{cmd}</code>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyOne(s)}
                      className="font-mono text-[11px] font-semibold text-[#fcd34d] hover:text-[#67e8f9] transition-colors"
                    >
                      {isCopied ? copy.copiedOne : copy.copyOne}
                    </button>
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
