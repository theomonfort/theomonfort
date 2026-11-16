import { useEffect, useState } from 'react';
import { play } from '../../lib/sfx';
import { SITE_THEME_EVENT, getCurrentSiteTheme, type SiteTheme } from '../../lib/theme';

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
  const [siteTheme, setSiteTheme] = useState<SiteTheme>('phosphor');

  useEffect(() => {
    const sync = () => setSiteTheme(getCurrentSiteTheme());
    sync();
    window.addEventListener(SITE_THEME_EVENT, sync);
    return () => window.removeEventListener(SITE_THEME_EVENT, sync);
  }, []);

  const isRetro = siteTheme === 'retro';

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

  const railBg = (tone: string) =>
    isRetro
      ? undefined
      : {
          backgroundImage: `linear-gradient(90deg, ${tone} 0%, color-mix(in srgb, ${tone} 30%, transparent) 55%, transparent 100%)`,
          backgroundSize: '100% 2px',
          backgroundPosition: 'top left',
          backgroundRepeat: 'no-repeat',
        };

  return (
    <div className="space-y-5">
      <details
        className={`rounded-[var(--radius-card)] p-4 group ${
          isRetro
            ? 'border-2 border-dashed border-crt-amber/60 bg-shadow-ink/80 shadow-pixel'
            : 'border border-crt-amber/30 bg-deep-purple/85'
        }`}
        style={railBg('var(--c-crt-amber)')}
      >
        <summary
          className={`cursor-pointer select-none text-crt-amber ${
            isRetro
              ? 'font-pixel text-[10px]'
              : 'font-mono text-xs font-semibold tracking-wide'
          }`}
        >
          {copy.setupSummary}
        </summary>
        <div className="mt-3 space-y-2.5 text-sm">
          <p className="font-body text-phosphor-body">
            {copy.setupIntro}
          </p>
          <pre
            className={`font-mono text-xs text-gb-green bg-shadow-ink rounded-[var(--radius-ui)] px-3 py-2.5 overflow-x-auto ${
              isRetro ? 'border-2 border-phosphor/20' : 'border border-neon-cyan/20'
            }`}
          ><code>{`# macOS
brew install gh
# or upgrade if already installed
brew upgrade gh`}</code></pre>
          <p className="font-body text-xs text-phosphor-muted">
            {copy.setupAfter}
          </p>
        </div>
      </details>

      <div
        className={`rounded-[var(--radius-card)] p-4 space-y-3.5 ${
          isRetro
            ? 'border-2 border-neon-cyan/50 bg-shadow-ink/85 shadow-pixel'
            : 'border border-[var(--c-border)] bg-deep-purple/85'
        }`}
      >
        <div className="flex flex-col sm:flex-row gap-3">
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
              className={`w-full rounded-[var(--radius-ui)] bg-shadow-ink focus:border-neon-cyan focus:outline-none pl-8 pr-3 py-2 text-sm text-phosphor placeholder:text-phosphor-muted transition-colors ${
                isRetro
                  ? 'border-2 border-neon-cyan/40 font-pixel-jp'
                  : 'border border-neon-cyan/25 font-body'
              }`}
            />
          </div>

          <div className={`flex flex-wrap items-center gap-2 ${isRetro ? 'font-pixel text-[10px]' : 'font-mono text-xs'}`}>
            {isRetro ? (
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    play('click');
                    setScope('project');
                  }}
                  className={`px-3 py-2 border-2 transition-colors ${
                    scope === 'project'
                      ? 'border-neon-cyan text-neon-cyan bg-shadow-ink shadow-neon-cyan'
                      : 'border-phosphor/30 text-phosphor-muted hover:text-phosphor'
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
                      ? 'border-neon-cyan text-neon-cyan bg-shadow-ink shadow-neon-cyan'
                      : 'border-phosphor/30 text-phosphor-muted hover:text-phosphor'
                  }`}
                >
                  {copy.global}
                </button>
              </div>
            ) : (
              <div className="inline-flex rounded-[var(--radius-ui)] border border-neon-cyan/25 bg-shadow-ink p-0.5">
                <button
                  type="button"
                  onClick={() => {
                    play('click');
                    setScope('project');
                  }}
                  className={`px-3 py-1.5 rounded-[var(--radius-ui)] transition-colors ${
                    scope === 'project'
                      ? 'bg-neon-cyan text-shadow-ink font-semibold'
                      : 'text-phosphor-muted hover:text-phosphor'
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
                  className={`px-3 py-1.5 rounded-[var(--radius-ui)] transition-colors ${
                    scope === 'global'
                      ? 'bg-neon-cyan text-shadow-ink font-semibold'
                      : 'text-phosphor-muted hover:text-phosphor'
                  }`}
                >
                  {copy.global}
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={copyBatch}
              className={
                isRetro
                  ? 'px-3.5 py-2 border-2 border-crt-amber text-crt-amber bg-shadow-ink hover:bg-crt-amber hover:text-shadow-ink shadow-neon-amber transition-colors'
                  : 'px-3.5 py-2 rounded-[var(--radius-ui)] bg-crt-amber text-shadow-ink font-semibold hover:brightness-110 transition-all'
              }
            >
              {copy.savePrefix}
              {selected.size > 0 ? `${copy.selected} ${selected.size}` : copy.all}{copy.copySuffix}
            </button>
          </div>
        </div>

        {groups.length > 1 && (
          <div
            className={`flex flex-wrap items-center gap-1.5 pt-2 ${
              isRetro ? 'border-t-2 border-dashed border-neon-cyan/30' : 'border-t border-neon-cyan/15'
            }`}
          >
            <button
              type="button"
              onClick={() => {
                play('click');
                setActiveGroup('all');
              }}
              className={`px-2.5 py-1 rounded-[var(--radius-ui)] transition-colors ${
                isRetro ? 'font-pixel-jp text-xs border-2' : 'font-mono text-[11px]'
              } ${
                activeGroup === 'all'
                  ? isRetro
                    ? 'border-neon-cyan bg-neon-cyan text-shadow-ink font-bold'
                    : 'bg-neon-cyan text-shadow-ink font-semibold'
                  : isRetro
                    ? 'border-phosphor/25 bg-shadow-ink text-phosphor-muted hover:text-phosphor hover:border-neon-cyan'
                    : 'border border-neon-cyan/20 bg-shadow-ink text-phosphor-muted hover:text-phosphor hover:border-[var(--c-border-strong)]'
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
                  className={`px-2.5 py-1 rounded-[var(--radius-ui)] transition-colors ${
                    isRetro ? 'font-pixel-jp text-xs border-2' : 'font-mono text-[11px]'
                  } ${
                    isActive
                      ? isRetro
                        ? 'border-neon-cyan bg-neon-cyan text-shadow-ink font-bold'
                        : 'bg-neon-cyan text-shadow-ink font-semibold'
                      : isRetro
                        ? 'border-phosphor/25 bg-shadow-ink text-phosphor-muted hover:text-phosphor hover:border-neon-cyan'
                        : 'border border-neon-cyan/20 bg-shadow-ink text-phosphor-muted hover:text-phosphor hover:border-[var(--c-border-strong)]'
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

      {filteredSkills.length === 0 ? (
        <p
          className={`rounded-[var(--radius-card)] p-6 text-center font-body text-sm text-phosphor-muted ${
            isRetro
              ? 'border-2 border-dashed border-neon-cyan/40 bg-shadow-ink/80'
              : 'border border-[var(--c-border)] bg-deep-purple/70'
          }`}
        >
          {emptySearchLabel}
        </p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredSkills.map((s) => {
            const isSelected = selected.has(s.slug);
            const isCopied = copiedSlug === s.slug;
            const cmd = buildCommand(s, scope);
            const tone = isSelected ? 'var(--c-neon-magenta)' : 'var(--c-neon-cyan)';
            return (
              <li
                key={s.slug}
                style={railBg(tone)}
                className={`relative rounded-[var(--radius-card)] p-4 transition-all duration-150 ${
                  isRetro
                    ? `bg-shadow-ink/85 border-2 shadow-pixel ${
                        isSelected
                          ? 'border-neon-magenta shadow-neon-magenta'
                          : 'border-phosphor/25 hover:border-neon-cyan'
                      }`
                    : `bg-[var(--c-bg-elevated)] hover:bg-[var(--c-bg-elevated-hover)] border ${
                        isSelected
                          ? 'border-neon-magenta/65 shadow-[0_8px_24px_rgb(var(--rgb-neon-magenta)/0.14)]'
                          : 'border-[var(--c-border)] hover:border-[var(--c-border-strong)] shadow-[0_8px_24px_rgb(var(--rgb-shadow-ink)/0.34)]'
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
                              ? 'border-neon-magenta text-neon-magenta bg-shadow-ink'
                              : 'border-phosphor/40 text-phosphor bg-shadow-ink hover:border-neon-cyan'
                          }`
                        : `font-mono text-xs font-bold w-7 h-7 border ${
                            isSelected
                              ? 'bg-neon-magenta border-neon-magenta text-shadow-ink'
                              : 'bg-shadow-ink border-neon-cyan/30 text-phosphor hover:border-neon-cyan'
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
                              ? 'font-pixel text-xs text-neon-cyan'
                              : 'font-body text-[15px] font-semibold text-phosphor'
                          }`}
                        >
                          {s.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        {s.group && (
                          <span
                            className={`px-1.5 py-0.5 rounded-[var(--radius-ui)] text-neon-magenta ${
                              isRetro
                                ? 'font-pixel-jp text-[10px] border-2 border-neon-magenta/40 bg-shadow-ink'
                                : 'font-mono text-[10px] font-semibold border border-neon-magenta/25 bg-neon-magenta/10'
                            }`}
                          >
                            {s.group}
                          </span>
                        )}
                        <a
                          href={buildSkillRepoUrl(s)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`font-mono text-[10px] px-1.5 py-0.5 rounded-[var(--radius-ui)] bg-shadow-ink text-[var(--c-link)] hover:text-[var(--c-link-hover)] transition-colors ${
                            isRetro
                              ? 'border-2 border-phosphor/25 hover:border-neon-cyan'
                              : 'border border-neon-cyan/20 hover:border-neon-cyan/45'
                          }`}
                          aria-label={`Open ${s.name} skill in repository`}
                        >
                          repo ↗
                        </a>
                      </div>
                    </div>
                    <p className="font-body text-sm text-phosphor-body leading-relaxed mb-3">
                      {s.description}
                    </p>
                    <div
                      className={`rounded-[var(--radius-ui)] bg-shadow-ink px-2.5 py-1.5 mb-2 overflow-x-auto ${
                        isRetro ? 'border-2 border-phosphor/20' : 'border border-[var(--c-border)]'
                      }`}
                    >
                      <code className="font-mono text-[11px] text-gb-green whitespace-nowrap">{cmd}</code>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyOne(s)}
                      className={`font-mono text-[11px] font-semibold text-crt-amber transition-colors ${
                        isRetro ? 'hover:text-neon-magenta underline-offset-4 hover:underline' : 'hover:text-[var(--c-link)]'
                      }`}
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
