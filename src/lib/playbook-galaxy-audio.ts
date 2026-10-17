import { getAudioContextConstructor, isGlobalMuted } from './audio';

type Vector = readonly [number, number, number];

export interface GalaxyAudioPose {
  position: Vector;
  forward: Vector;
  up: Vector;
}

// Original ambient score, synthesized locally without recordings or samples.
export function createGalaxyAmbience(onPlaying: (playing: boolean) => void, onError: (error: unknown) => void) {
  const Constructor = getAudioContextConstructor();
  if (!Constructor) throw new Error('Web Audio is not supported');
  const context = new Constructor();
  const master = context.createGain();
  master.gain.value = 0.18;
  const limiter = context.createDynamicsCompressor();
  limiter.threshold.value = -15;
  limiter.ratio.value = 5;
  master.connect(limiter).connect(context.destination);
  const reverb = context.createConvolver();
  const wet = context.createGain();
  wet.gain.value = 0.32;
  reverb.connect(wet).connect(master);
  const impulse = context.createBuffer(2, Math.floor(context.sampleRate * 2.8), context.sampleRate);
  let seed = 73;
  for (let channel = 0; channel < 2; channel++) {
    const data = impulse.getChannelData(channel);
    for (let index = 0; index < data.length; index++) {
      seed = (seed * 16807) % 2147483647;
      data[index] = (seed / 2147483647 * 2 - 1) * Math.pow(1 - index / data.length, 3);
    }
  }
  reverb.buffer = impulse;
  const chords = [[50, 57, 61, 64], [43, 54, 57, 62], [47, 54, 57, 62], [45, 52, 59, 62]];
  const melody = [0, 2, 1, 4, 2, 3, 1, 2];
  const notes = [74, 78, 81, 85, 88];
  const beat = 0.85;
  let step = 0;
  let nextTime = 0;
  let timer: ReturnType<typeof setInterval> | undefined;
  let disposed = false;
  const events = new AbortController();

  function tone(midi: number, time: number, duration: number, volume: number, pad = false, position?: Vector) {
    const oscillator = context.createOscillator();
    oscillator.type = pad ? 'triangle' : 'sine';
    oscillator.frequency.value = 440 * 2 ** ((midi - 69) / 12);
    const envelope = context.createGain();
    envelope.gain.setValueAtTime(0, time);
    envelope.gain.linearRampToValueAtTime(volume, time + (pad ? 1.8 : 0.035));
    envelope.gain.exponentialRampToValueAtTime(0.0001, time + duration);
    const filter = context.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = pad ? 850 : 3200;
    oscillator.connect(envelope).connect(filter);
    let panner: PannerNode | undefined;
    if (position) {
      panner = context.createPanner();
      panner.panningModel = 'HRTF';
      panner.distanceModel = 'inverse';
      panner.refDistance = 28;
      panner.rolloffFactor = 0.3;
      panner.positionX.value = position[0];
      panner.positionY.value = position[1];
      panner.positionZ.value = position[2];
      filter.connect(panner).connect(master);
    } else filter.connect(master);
    filter.connect(reverb);
    oscillator.onended = () => {
      oscillator.disconnect();
      envelope.disconnect();
      filter.disconnect();
      panner?.disconnect();
    };
    oscillator.start(time);
    oscillator.stop(time + duration + 0.05);
  }

  function schedule() {
    if (disposed || context.state !== 'running') return;
    master.gain.setTargetAtTime(isGlobalMuted() ? 0 : 0.18, context.currentTime, 0.15);
    if (nextTime < context.currentTime) nextTime = context.currentTime + 0.08;
    while (nextTime < context.currentTime + 0.5) {
      const chord = chords[Math.floor(step / 8) % chords.length];
      if (step % 8 === 0) {
        chord.forEach((note) => tone(note, nextTime, beat * 10, 0.038, true));
        tone(chord[0] - 12, nextTime, beat * 7, 0.06, true);
      }
      if (step % 2 === 0) {
        const angle = step * 0.73;
        tone(notes[melody[Math.floor(step / 2) % melody.length]], nextTime, 3.5, 0.065, false,
          [Math.cos(angle) * 22, 3 + Math.sin(angle) * 5, Math.sin(angle) * 22]);
      }
      nextTime += beat;
      step++;
    }
  }

  async function start() {
    if (disposed) return;
    await context.resume();
    if (disposed) return;
    if (context.state !== 'running') throw new Error('Audio playback requires a user gesture');
    if (timer === undefined) {
      nextTime = Math.max(nextTime, context.currentTime + 0.1);
      timer = setInterval(schedule, 200);
      schedule();
    }
    onPlaying(true);
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearInterval(timer);
      timer = undefined;
      onPlaying(false);
      void context.suspend().catch((error) => { if (!disposed) onError(error); });
    } else {
      void start().catch((error) => { if (!disposed) onError(error); });
    }
  }, { signal: events.signal });
  context.addEventListener('statechange', () => {
    if (!disposed) onPlaying(context.state === 'running');
  }, { signal: events.signal });

  return {
    start,
    setPose({ position, forward, up }: GalaxyAudioPose) {
      if (disposed) return;
      const listener = context.listener;
      listener.positionX.value = position[0];
      listener.positionY.value = position[1];
      listener.positionZ.value = position[2];
      listener.forwardX.value = forward[0];
      listener.forwardY.value = forward[1];
      listener.forwardZ.value = forward[2];
      listener.upX.value = up[0];
      listener.upY.value = up[1];
      listener.upZ.value = up[2];
    },
    dispose() {
      disposed = true;
      events.abort();
      clearInterval(timer);
      master.disconnect();
      reverb.disconnect();
      wet.disconnect();
      limiter.disconnect();
      void context.close().catch((error) => console.error('[Playbook galaxy] Could not close audio context:', error));
      onPlaying(false);
    },
  };
}

export type GalaxyAmbience = ReturnType<typeof createGalaxyAmbience>;
