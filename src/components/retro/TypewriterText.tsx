import { useEffect, useRef, useState } from 'react';

interface Props {
  text: string;
  speed?: number; // ms per char
  startDelay?: number;
  className?: string;
  onDone?: () => void;
}

export default function TypewriterText({
  text,
  speed = 28,
  startDelay = 0,
  className = '',
  onDone,
}: Props) {
  const [shown, setShown] = useState(0);
  const [skipped, setSkipped] = useState(false);
  const doneRef = useRef(false);

  useEffect(() => {
    if (skipped) {
      setShown(text.length);
      if (!doneRef.current) {
        doneRef.current = true;
        onDone?.();
      }
      return;
    }
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setShown(text.length);
      onDone?.();
      return;
    }
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const start = setTimeout(() => {
      const tick = () => {
        i += 1;
        setShown(i);
        if (i < text.length) {
          timer = setTimeout(tick, speed);
        } else if (!doneRef.current) {
          doneRef.current = true;
          onDone?.();
        }
      };
      tick();
    }, startDelay);
    return () => {
      clearTimeout(start);
      clearTimeout(timer!);
    };
  }, [text, speed, startDelay, skipped, onDone]);

  const handleSkip = () => setSkipped(true);

  return (
    <p
      className={`whitespace-pre-wrap leading-relaxed ${className}`}
      onClick={handleSkip}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleSkip()}
      role="button"
      tabIndex={0}
      aria-label="クリックでスキップ"
    >
      {text.slice(0, shown)}
      {shown < text.length && <span className="caret-inline">▌</span>}
    </p>
  );
}
