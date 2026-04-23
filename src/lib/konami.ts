// Konami code: ↑ ↑ ↓ ↓ ← → ← → B A
export const KONAMI = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export function listenKonami(onMatch: () => void): () => void {
  let buffer: string[] = [];
  const handler = (e: KeyboardEvent) => {
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    buffer.push(key);
    if (buffer.length > KONAMI.length) buffer = buffer.slice(-KONAMI.length);
    if (buffer.length === KONAMI.length && buffer.every((k, i) => k === KONAMI[i])) {
      buffer = [];
      onMatch();
    }
  };
  window.addEventListener('keydown', handler);
  return () => window.removeEventListener('keydown', handler);
}
