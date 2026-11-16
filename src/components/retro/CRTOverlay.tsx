import { useEffect, useRef, useState } from 'react';
import { localizedPath, otherLocale, stripBase, type Locale } from '../../lib/i18n';
import { getCurrentSiteTheme, SITE_THEME_EVENT, type SiteTheme } from '../../lib/theme';

const STORAGE_KEY = 'akq-crt-on';

interface Props {
  locale: Locale;
  currentPath: string;
}

function parseClientRoute(pathname: string): { locale: Locale; path: string } {
  const stripped = stripBase(pathname);
  if (stripped === '/en' || stripped.startsWith('/en/')) {
    return { locale: 'en', path: stripped.slice(3) || '/' };
  }
  return { locale: 'ja', path: stripped || '/' };
}

export default function CRTOverlay({ locale, currentPath }: Props) {
  const [route, setRoute] = useState<{ locale: Locale; path: string }>({ locale, path: currentPath });
  const [siteTheme, setSiteTheme] = useState<SiteTheme>('phosphor');
  const [enabled, setEnabled] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    setSiteTheme(getCurrentSiteTheme());
    setRoute(parseClientRoute(window.location.pathname));

    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null) setEnabled(stored === '1');

    const onThemeChange = (e: Event) => {
      const detail = (e as CustomEvent<{ theme?: SiteTheme }>).detail;
      setSiteTheme(detail?.theme === 'retro' ? 'retro' : getCurrentSiteTheme());
    };
    const onPageLoad = () => {
      setSiteTheme(getCurrentSiteTheme());
      setRoute(parseClientRoute(window.location.pathname));
    };

    window.addEventListener(SITE_THEME_EVENT, onThemeChange);
    document.addEventListener('astro:page-load', onPageLoad);
    return () => {
      window.removeEventListener(SITE_THEME_EVENT, onThemeChange);
      document.removeEventListener('astro:page-load', onPageLoad);
    };
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, enabled ? '1' : '0');
    } catch {}
  }, [enabled]);

  useEffect(() => {
    if (siteTheme !== 'retro' || !enabled) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const shouldAnimate = !reduce;
    let frame = 0;

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      const grad = ctx.createRadialGradient(w / 2, h / 2, h * 0.3, w / 2, h / 2, h * 0.75);
      grad.addColorStop(0, 'rgba(0,0,0,0)');
      grad.addColorStop(1, 'rgba(0,0,0,0.55)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      if (shouldAnimate && frame % 6 === 0) {
        ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.015})`;
        ctx.fillRect(0, 0, w, h);
      }
      if (shouldAnimate && Math.random() < 0.012) {
        const y = Math.random() * h;
        ctx.fillStyle = 'rgba(0,240,255,0.06)';
        ctx.fillRect(0, y, w, 2);
      }
      frame += 1;
      if (shouldAnimate) rafRef.current = requestAnimationFrame(draw);
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (!shouldAnimate) draw();
    };

    resize();
    window.addEventListener('resize', resize);
    if (shouldAnimate) draw();

    return () => {
      window.removeEventListener('resize', resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [siteTheme, enabled]);

  const targetLocale = otherLocale(route.locale);
  const languageLabel = targetLocale === 'en' ? 'English' : '日本語';
  const isRetro = siteTheme === 'retro';

  return (
    <>
      {isRetro && enabled && (
        <>
          <div className="crt-overlay crt-lines crt-vignette" aria-hidden="true" />
          <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="crt-overlay"
            style={{
              position: 'fixed',
              inset: 0,
              pointerEvents: 'none',
              zIndex: 49,
              mixBlendMode: 'screen',
            }}
          />
        </>
      )}
      <div className="crt-overlay fixed bottom-4 left-4 z-[60] flex items-stretch gap-2">
        {isRetro && (
          <button
            type="button"
            onClick={() => setEnabled((v) => !v)}
            className="font-pixel text-[10px] px-3 py-2 border-2 bg-shadow-ink/80 hover:bg-neon-cyan/20 transition-colors"
            style={{
              borderColor: enabled ? '#00f0ff' : '#444',
              color: enabled ? '#00f0ff' : '#888',
              boxShadow: enabled ? '0 0 8px #00f0ff' : 'none',
            }}
            aria-pressed={enabled}
          >
            CRT: {enabled ? 'ON' : 'OFF'}
          </button>
        )}
        <a
          href={localizedPath(targetLocale, route.path)}
          hrefLang={targetLocale}
          lang={targetLocale}
          aria-label={targetLocale === 'en' ? 'Switch to English' : '日本語に切り替える'}
          className={
            isRetro
              ? 'inline-flex items-center font-pixel-jp text-sm px-3 py-2 border-2 border-neon-cyan text-neon-cyan bg-shadow-ink/80 hover:bg-neon-cyan/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon-cyan transition-colors'
              : 'inline-flex items-center font-body text-[0.78rem] font-medium px-3 py-1.5 rounded-[3px] border border-[var(--c-border-strong)] text-phosphor-body bg-[var(--c-bg-hud)] backdrop-blur-md shadow-hud hover:text-phosphor hover:border-neon-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon-cyan transition-colors'
          }
        >
          {languageLabel}
        </a>
      </div>
    </>
  );
}
