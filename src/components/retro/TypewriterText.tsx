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
  const textRef = useRef(text);

  useEffect(() => {
    if (textRef.current !== text) {
      textRef.current = text;
      doneRef.current = false;
      setShown(0);
      setSkipped(false);
      return;
    }

    const complete = () => {
      setShown(text.length);
      if (!doneRef.current) {
        doneRef.current = true;
        onDone?.();
      }
    };

    if (skipped) {
      complete();
      return;
    }
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      complete();
      return;
    }

    setShown(0);
    let i = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let cancelled = false;
    const start = setTimeout(() => {
      const tick = () => {
        if (cancelled) return;
        i += 1;
        setShown(i);
        if (i < text.length) {
          timer = setTimeout(tick, speed);
        } else {
          complete();
        }
      };
      tick();
    }, startDelay);
    return () => {
      cancelled = true;
      clearTimeout(start);
      if (timer) clearTimeout(timer);
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
