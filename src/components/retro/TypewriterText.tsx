import { useEffect, useMemo, useRef, useState } from 'react';

interface Props {
  text: string;
  speed?: number; // ms per char
  startDelay?: number;
  className?: string;
  skipLabel?: string;
  onDone?: () => void;
}

interface Segment {
  bold: boolean;
  value: string;
}

function tokenize(text: string): Segment[] {
  const segments: Segment[] = [];
  const re = /\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) {
      segments.push({ bold: false, value: text.slice(last, m.index) });
    }
    segments.push({ bold: true, value: m[1] });
    last = m.index + m[0].length;
  }
  if (last < text.length) {
    segments.push({ bold: false, value: text.slice(last) });
  }
  return segments;
}

export default function TypewriterText({
  text,
  speed = 28,
  startDelay = 0,
  className = '',
  skipLabel = 'クリックでスキップ',
  onDone,
}: Props) {
  const segments = useMemo(() => tokenize(text), [text]);
  const totalLength = useMemo(
    () => segments.reduce((sum, s) => sum + s.value.length, 0),
    [segments]
  );
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
      setShown(totalLength);
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
        if (i < totalLength) {
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
  }, [text, speed, startDelay, skipped, onDone, totalLength]);

  const handleSkip = () => setSkipped(true);

  let remaining = shown;
  const rendered: React.ReactNode[] = [];
  segments.forEach((seg, idx) => {
    if (remaining <= 0) return;
    const take = Math.min(seg.value.length, remaining);
    const slice = seg.value.slice(0, take);
    remaining -= take;
    if (seg.bold) {
      rendered.push(
        <strong key={idx} className="font-bold text-phosphor">
          {slice}
        </strong>
      );
    } else {
      rendered.push(<span key={idx}>{slice}</span>);
    }
  });

  return (
    <p
      className={`whitespace-pre-wrap leading-relaxed ${className}`}
      onClick={handleSkip}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleSkip()}
      role="button"
      tabIndex={0}
      aria-label={skipLabel}
    >
      {rendered}
      {shown < totalLength && <span className="caret-inline">▌</span>}
    </p>
  );
}
