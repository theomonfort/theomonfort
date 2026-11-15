import { localizedPath, otherLocale, type Locale } from '../../lib/i18n';

interface Props {
  locale: Locale;
  currentPath: string;
}

export default function CRTOverlay({ locale, currentPath }: Props) {
  const targetLocale = otherLocale(locale);
  const languageLabel = targetLocale === 'en' ? 'English' : '日本語';

  return (
    <div className="crt-overlay fixed bottom-4 left-4 z-[60] flex items-stretch gap-2">
      <a
        href={localizedPath(targetLocale, currentPath)}
        hrefLang={targetLocale}
        lang={targetLocale}
        aria-label={targetLocale === 'en' ? 'Switch to English' : '日本語に切り替える'}
        className="inline-flex items-center font-body text-[0.78rem] font-medium px-3 py-1.5 rounded-[3px] border border-[rgba(94,234,212,0.32)] text-[#bad0de] bg-[rgba(9,18,28,0.90)] backdrop-blur-md shadow-hud hover:text-[#ecf7fb] hover:border-neon-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon-cyan transition-colors"
      >
        {languageLabel}
      </a>
    </div>
  );
}
