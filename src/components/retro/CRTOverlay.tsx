import { useEffect, useRef, useState } from 'react';
import { localizedPath, otherLocale, type Locale } from '../../lib/i18n';

const STORAGE_KEY = 'akq-crt-on';

interface Props {
  locale: Locale;
  currentPath: string;
}

export default function CRTOverlay({ locale, currentPath }: Props) {
  const targetLocale = otherLocale(locale);
  const languageLabel = targetLocale === 'en' ? 'English' : '日本語';
  const [enabled, setEnabled] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null) setEnabled(stored === '1');
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, enabled ? '1' : '0');
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
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
      // Vignette
      const grad = ctx.createRadialGradient(w / 2, h / 2, h * 0.3, w / 2, h / 2, h * 0.75);
      grad.addColorStop(0, 'rgba(0,0,0,0)');
      grad.addColorStop(1, 'rgba(0,0,0,0.55)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      // Subtle flicker
      if (shouldAnimate && frame % 6 === 0) {
        ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.015})`;
        ctx.fillRect(0, 0, w, h);
      }
      // Random horizontal noise band
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
  }, [enabled]);

  return (
    <>
      {enabled && (
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
        <a
          href={localizedPath(targetLocale, currentPath)}
          hrefLang={targetLocale}
          lang={targetLocale}
          aria-label={targetLocale === 'en' ? 'Switch to English' : '日本語に切り替える'}
          className="inline-flex items-center font-pixel-jp text-sm px-3 py-2 border-2 border-neon-cyan text-neon-cyan bg-shadow-ink/80 hover:bg-neon-cyan/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon-cyan transition-colors"
        >
          {languageLabel}
        </a>
      </div>
    </>
  );
}
