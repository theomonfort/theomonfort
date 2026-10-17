import { useEffect, useRef, useState } from 'react';
import { GALAXY_AUDIO_MODE_EVENT, getAudioContextConstructor, isGalaxyAudioMode } from '../../lib/audio';

const STORAGE_KEY = 'akq-bgm-on';

// Procedural 8-bit BGM via WebAudio — endless arpeggio loop
function startSynthLoop(ctx: AudioContext): { stop: () => void; gain: GainNode } {
  const master = ctx.createGain();
  master.gain.value = 0.04;
  master.connect(ctx.destination);

  // Pentatonic minor scale notes (A minor pentatonic), pleasant 8bit
  const notes = [220, 261.63, 293.66, 329.63, 392, 440, 523.25, 587.33];
  const seq = [0, 2, 4, 2, 5, 4, 2, 0, 3, 5, 7, 5, 4, 2, 4, 2];
  let step = 0;
  const tempo = 0.18; // seconds per step

  const tick = () => {
    const now = ctx.currentTime;
    const noteIdx = seq[step % seq.length];
    const freq = notes[noteIdx];
    // Lead
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = 'square';
    o.frequency.value = freq;
    g.gain.setValueAtTime(0.15, now);
    g.gain.exponentialRampToValueAtTime(0.001, now + tempo * 0.95);
    o.connect(g).connect(master);
    o.start(now);
    o.stop(now + tempo);
    // Bass every 4 steps
    if (step % 4 === 0) {
      const b = ctx.createOscillator();
      const bg = ctx.createGain();
      b.type = 'triangle';
      b.frequency.value = freq / 2;
      bg.gain.setValueAtTime(0.25, now);
      bg.gain.exponentialRampToValueAtTime(0.001, now + tempo * 4);
      b.connect(bg).connect(master);
      b.start(now);
      b.stop(now + tempo * 4);
    }
    step += 1;
  };

  const interval = setInterval(tick, tempo * 1000);
  tick();

  return {
    gain: master,
    stop: () => {
      clearInterval(interval);
      master.disconnect();
    },
  };
}

export default function BGMPlayer({ feedbackUrl }: { feedbackUrl?: string }) {
  const [playing, setPlaying] = useState(false);
  const [galaxyMode, setGalaxyMode] = useState(false);
  const playingRef = useRef(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const handleRef = useRef<{ stop: () => void } | null>(null);

  useEffect(() => {
    const syncGalaxyMode = () => {
      const active = isGalaxyAudioMode();
      setGalaxyMode(active);
      if (active) {
        handleRef.current?.stop();
        handleRef.current = null;
      } else if (playingRef.current && ctxRef.current && !handleRef.current) {
        handleRef.current = startSynthLoop(ctxRef.current);
      }
    };
    syncGalaxyMode();
    document.addEventListener(GALAXY_AUDIO_MODE_EVENT, syncGalaxyMode);
    return () => {
      document.removeEventListener(GALAXY_AUDIO_MODE_EVENT, syncGalaxyMode);
      handleRef.current?.stop();
      ctxRef.current?.close();
    };
  }, []);

  const toggle = () => {
    if (isGalaxyAudioMode()) return;
    if (playing) {
      handleRef.current?.stop();
      handleRef.current = null;
      setPlaying(false);
      playingRef.current = false;
      localStorage.setItem(STORAGE_KEY, '0');
    } else {
      const Ctor = getAudioContextConstructor();
      if (!Ctor) return;
      const ctx: AudioContext = ctxRef.current ?? new Ctor();
      ctxRef.current = ctx;
      if (ctx.state === 'suspended') void ctx.resume();
      handleRef.current = startSynthLoop(ctx);
      setPlaying(true);
      playingRef.current = true;
      localStorage.setItem(STORAGE_KEY, '1');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-[60] flex items-center gap-2">
      {feedbackUrl && (
        <a
          href={feedbackUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bgm-bug-report"
          aria-label="Report a bug / open feedback form (new tab)"
          title="Report a bug"
        />
      )}
      <button
        type="button"
        onClick={toggle}
        disabled={galaxyMode}
        title={galaxyMode ? 'Use the ambience button in the 3D map' : undefined}
        className="bgm-player font-pixel text-[10px] px-3 py-2 border-2 bg-shadow-ink/80 hover:bg-neon-magenta/20 transition-colors flex items-center gap-2"
        style={{
          borderColor: playing && !galaxyMode ? '#ff2e88' : '#444',
          color: playing && !galaxyMode ? '#ff2e88' : '#888',
          boxShadow: playing && !galaxyMode ? '0 0 8px #ff2e88' : 'none',
        }}
        aria-pressed={playing && !galaxyMode}
        aria-label="BGM toggle"
      >
        <span aria-hidden="true">{playing && !galaxyMode ? '♪♪' : '🎵'}</span>
        BGM: {galaxyMode ? '3D' : playing ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}
