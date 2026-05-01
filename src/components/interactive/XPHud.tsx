import { useEffect, useState } from 'react';
import { play } from '../../lib/sfx';

export default function XPHud() {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [popupKey, setPopupKey] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    let last = 0;
    const onScroll = () => {
      const y = window.scrollY;
      const delta = Math.abs(y - last);
      last = y;
      if (delta > 8) {
        setXp((prev) => {
          const next = prev + Math.min(Math.floor(delta / 40), 2);
          if (next >= 1000) {
            const inPresent = document.body.classList.contains('present-mode');
            play('levelup');
            setLevel((l) => l + 1);
            if (!inPresent) setPopupKey((k) => k + 1);
            return next - 1000;
          }
          return next;
        });
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div
        className="xp-hud fixed top-4 right-4 z-[60] font-pixel text-[10px] bg-shadow-ink/80 border-2 border-crt-amber px-3 py-2 select-none"
        style={{ boxShadow: '0 0 8px #ffb000' }}
        aria-live="polite"
      >
        <div className="text-crt-amber mb-1">LV.{level}</div>
        <div className="w-32 h-2 bg-shadow-ink border border-crt-amber relative overflow-hidden">
          <div
            className="h-full bg-crt-amber transition-[width] duration-150"
            style={{ width: `${xp / 10}%`, boxShadow: '0 0 6px #ffb000' }}
          />
        </div>
        <div className="text-[8px] text-crt-amber/80 mt-1">EXP {xp}/1000</div>
      </div>
      {popupKey > 0 && (
        <div
          key={popupKey}
          className="pointer-events-none fixed inset-0 z-[70] flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="font-pixel text-3xl md:text-5xl text-crt-amber animate-levelup">
            LEVEL UP！
          </div>
        </div>
      )}
      <style>{`
        @keyframes levelup-pop {
          0% { transform: scale(0.4); opacity: 0; }
          20% { transform: scale(1.15); opacity: 1; }
          80% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        .animate-levelup {
          animation: levelup-pop 1.2s ease-out forwards;
          text-shadow: 0 0 12px #ffb000, 4px 4px 0 #05060f;
        }
      `}</style>
    </>
  );
}
