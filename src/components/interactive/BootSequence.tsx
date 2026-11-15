import { useEffect, useState } from 'react';
import { play } from '../../lib/sfx';

const STORAGE_KEY = 'akq-booted';

interface Props {
  locale?: 'ja' | 'en';
  copy?: {
    brandMiddle: string;
  };
}

export default function BootSequence({ locale = 'ja', copy }: Props) {
  const [phase, setPhase] = useState<'off' | 'power' | 'logo' | 'done'>('off');

  useEffect(() => {
    const booted = sessionStorage.getItem(STORAGE_KEY) === '1';
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Only show the boot animation when the user lands on the home page directly.
    // Deep links (playbook, hands-on, etc.) skip straight to the content.
    const path = window.location.pathname.replace(/\/+$/, '');
    const base = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');
    const homePath = locale === 'en' ? `${base}/en` : base;
    const isHome = path === homePath || path === '' || path === '/';
    if (booted || reduce || !isHome) {
      setPhase('done');
      if (!isHome) sessionStorage.setItem(STORAGE_KEY, '1');
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
      className="fixed inset-0 z-[100] bg-[#04080e] flex items-center justify-center"
      style={{
        backgroundImage:
          'radial-gradient(640px 320px at 50% 45%, rgba(94, 234, 212, 0.12), transparent 72%)',
      }}
      aria-hidden="true"
    >
      {phase === 'power' && (
        <div className="font-mono text-neon-cyan text-xs tracking-[0.18em] uppercase animate-pulse">
          ▮ TELEMETRY LINK ONLINE ...
        </div>
      )}
      {phase === 'logo' && (
        <div className="text-center animate-fadeIn">
          <div className="font-display text-neon-cyan text-2xl md:text-4xl font-bold mb-2.5 tracking-[0.12em] leading-none flex items-center justify-center gap-3 md:gap-5 flex-wrap">
            <span>AI</span>
            <span className="font-body text-[#ecf7fb] text-[0.95em] font-bold leading-none">{copy?.brandMiddle ?? '駆動開発'}</span>
            <span>QUEST</span>
          </div>
          <div className="font-mono text-[#728fa3] text-xs tracking-[0.14em] uppercase">
            SYSTEM READY
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
