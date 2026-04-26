import { useEffect, useState } from 'react';
import { play } from '../../lib/sfx';

const STORAGE_KEY = 'akq-booted';

export default function BootSequence() {
  const [phase, setPhase] = useState<'off' | 'power' | 'logo' | 'done'>('off');

  useEffect(() => {
    const booted = sessionStorage.getItem(STORAGE_KEY) === '1';
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (booted || reduce) {
      setPhase('done');
      return;
    }
    setPhase('power');
    play('boot');
    const t1 = setTimeout(() => setPhase('logo'), 700);
    const t2 = setTimeout(() => {
      setPhase('done');
      sessionStorage.setItem(STORAGE_KEY, '1');
    }, 1800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
      aria-hidden="true"
    >
      {phase === 'power' && (
        <div className="font-pixel text-crt-amber text-xs animate-pulse">
          ▮ POWER ON ...
        </div>
      )}
      {phase === 'logo' && (
        <div className="text-center animate-fadeIn">
          <div className="font-pixel text-neon-magenta text-2xl md:text-4xl mb-2 tracking-widest leading-none flex items-center justify-center gap-3 md:gap-5 flex-wrap">
            <span>AI</span>
            <span className="font-pixel-jp text-[1.05em] leading-none -translate-y-[0.08em]">駆動開発</span>
            <span>QUEST</span>
          </div>
          <div className="font-pixel-jp text-phosphor/70 text-xs md:text-sm">
            PRESS ANY KEY TO START
          </div>
        </div>
      )}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: scale(0.95) } to { opacity: 1; transform: scale(1) } }
        .animate-fadeIn { animation: fadeIn .5s ease-out both; }
      `}</style>
    </div>
  );
}
