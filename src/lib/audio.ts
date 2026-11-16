type AudioContextConstructor = typeof AudioContext;

export type WebAudioWindow = Window &
  typeof globalThis & {
    webkitAudioContext?: AudioContextConstructor;
    __akq_muted?: boolean;
  };

function getAudioWindow(): WebAudioWindow | null {
  if (typeof window === 'undefined') return null;
  return window as WebAudioWindow;
}

export function getAudioContextConstructor(): AudioContextConstructor | null {
  const audioWindow = getAudioWindow();
  if (!audioWindow) return null;
  return audioWindow.AudioContext ?? audioWindow.webkitAudioContext ?? null;
}

export function setGlobalMuted(muted: boolean): void {
  const audioWindow = getAudioWindow();
  if (audioWindow) audioWindow.__akq_muted = muted;
}

export function isGlobalMuted(): boolean {
  return Boolean(getAudioWindow()?.__akq_muted);
}
