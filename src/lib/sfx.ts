import { getAudioContextConstructor, isGlobalMuted, setGlobalMuted } from './audio';

export type SfxName = 'click' | 'hover' | 'select' | 'back' | 'levelup' | 'boot';

// --- Synth fallback: WebAudio chiptune blips (no asset files needed) ---
let actx: AudioContext | null = null;

function ensureCtx(): AudioContext | null {
  if (!actx) {
    const Ctor = getAudioContextConstructor();
    if (!Ctor) return null;
    actx = new Ctor();
  }
  return actx;
}

function blip(freq: number, dur = 0.08, type: OscillatorType = 'square', vol = 0.08) {
  const ctx = ensureCtx();
  if (!ctx) return;
  if (isGlobalMuted()) return;
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

export function play(name: SfxName): void {
  if (typeof window === 'undefined' || isGlobalMuted()) return;
  switch (name) {
    case 'click':
      blip(880, 0.05);
      return;
    case 'hover':
      blip(1320, 0.03, 'square', 0.04);
      return;
    case 'select':
      blip(660, 0.05);
      setTimeout(() => blip(990, 0.07), 50);
      return;
    case 'back':
      blip(440, 0.05);
      setTimeout(() => blip(330, 0.06), 40);
      return;
    case 'levelup':
      [523, 659, 784, 1046].forEach((frequency, index) => {
        setTimeout(() => blip(frequency, 0.12, 'square', 0.1), index * 90);
      });
      return;
    case 'boot':
      blip(220, 0.2, 'sawtooth', 0.06);
      setTimeout(() => blip(440, 0.15), 200);
      setTimeout(() => blip(660, 0.2), 350);
      return;
  }
}

export function setMuted(muted: boolean): void {
  setGlobalMuted(muted);
}

export function isMuted(): boolean {
  return isGlobalMuted();
}
