import { Howl } from 'howler';

type SfxName = 'click' | 'hover' | 'select' | 'back' | 'levelup' | 'boot';

const sources: Record<SfxName, { src: string; volume?: number }> = {
  click: { src: 'data:audio/wav;base64,', volume: 0.4 },
  hover: { src: 'data:audio/wav;base64,', volume: 0.2 },
  select: { src: 'data:audio/wav;base64,', volume: 0.5 },
  back: { src: 'data:audio/wav;base64,', volume: 0.4 },
  levelup: { src: 'data:audio/wav;base64,', volume: 0.6 },
  boot: { src: 'data:audio/wav;base64,', volume: 0.5 },
};

// --- Synth fallback: WebAudio chiptune blips (no asset files needed) ---
let actx: AudioContext | null = null;
function ensureCtx(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!actx) {
    const Ctor =
      (window as any).AudioContext || (window as any).webkitAudioContext;
    if (!Ctor) return null;
    actx = new Ctor();
  }
  return actx;
}

function blip(freq: number, dur = 0.08, type: OscillatorType = 'square', vol = 0.08) {
  const ctx = ensureCtx();
  if (!ctx) return;
  if (typeof window !== 'undefined' && (window as any).__akq_muted) return;
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, ctx.currentTime);
  g.gain.setValueAtTime(vol, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
  o.connect(g).connect(ctx.destination);
  o.start();
  o.stop(ctx.currentTime + dur);
}

export function play(name: SfxName) {
  if (typeof window === 'undefined') return;
  if ((window as any).__akq_muted) return;
  switch (name) {
    case 'click':
      return blip(880, 0.05);
    case 'hover':
      return blip(1320, 0.03, 'square', 0.04);
    case 'select':
      blip(660, 0.05);
      setTimeout(() => blip(990, 0.07), 50);
      return;
    case 'back':
      blip(440, 0.05);
      setTimeout(() => blip(330, 0.06), 40);
      return;
    case 'levelup':
      [523, 659, 784, 1046].forEach((f, i) => setTimeout(() => blip(f, 0.12, 'square', 0.1), i * 90));
      return;
    case 'boot':
      blip(220, 0.2, 'sawtooth', 0.06);
      setTimeout(() => blip(440, 0.15), 200);
      setTimeout(() => blip(660, 0.2), 350);
      return;
  }
}

export function setMuted(muted: boolean) {
  if (typeof window === 'undefined') return;
  (window as any).__akq_muted = muted;
}

export function isMuted(): boolean {
  if (typeof window === 'undefined') return false;
  return Boolean((window as any).__akq_muted);
}

// Avoid unused-import warnings for Howl (kept for future BGM use)
export const _Howl = Howl;
