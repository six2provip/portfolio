'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

export function useStudioAudio() {
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const droneNodeRef = useRef<OscillatorNode | null>(null);
  const droneGainRef = useRef<GainNode | null>(null);

  // Initialize from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('khang_os_audio_enabled');
      if (saved === 'true') {
        setIsMuted(false);
      }
    } catch {
      // ignore
    }
  }, []);

  const getAudioContext = useCallback(() => {
    if (typeof window === 'undefined') return null;
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  }, []);

  // Ambient studio low hum
  const startAmbientDrone = useCallback(() => {
    const ctx = getAudioContext();
    if (!ctx || droneNodeRef.current) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(55, ctx.currentTime); // Low A

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(120, ctx.currentTime);

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.015, ctx.currentTime + 3); // subtle fade in

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      droneNodeRef.current = osc;
      droneGainRef.current = gain;
    } catch {
      // Audio context error handling
    }
  }, [getAudioContext]);

  const stopAmbientDrone = useCallback(() => {
    if (droneGainRef.current && audioCtxRef.current) {
      try {
        const ctx = audioCtxRef.current;
        droneGainRef.current.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.8);
        setTimeout(() => {
          droneNodeRef.current?.stop();
          droneNodeRef.current?.disconnect();
          droneNodeRef.current = null;
          droneGainRef.current = null;
        }, 850);
      } catch {
        droneNodeRef.current = null;
        droneGainRef.current = null;
      }
    }
  }, []);

  const toggleSound = useCallback(() => {
    setIsMuted((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('khang_os_audio_enabled', String(!next));
      } catch {
        // ignore
      }
      if (!next) {
        startAmbientDrone();
      } else {
        stopAmbientDrone();
      }
      return next;
    });
  }, [startAmbientDrone, stopAmbientDrone]);

  const playClick = useCallback(() => {
    if (isMuted) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(750, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.045);
    } catch {
      // audio error handling
    }
  }, [isMuted, getAudioContext]);

  const playHover = useCallback(() => {
    if (isMuted) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(580, ctx.currentTime);

      gain.gain.setValueAtTime(0.02, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.025);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.026);
    } catch {
      // audio error handling
    }
  }, [isMuted, getAudioContext]);

  const playTransition = useCallback(() => {
    if (isMuted) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(140, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(360, ctx.currentTime + 0.18);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.2);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.21);
    } catch {
      // audio error handling
    }
  }, [isMuted, getAudioContext]);

  const playSuccess = useCallback(() => {
    if (isMuted) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      [523.25, 659.25, 783.99].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.06);

        gain.gain.setValueAtTime(0.04, ctx.currentTime + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.06 + 0.12);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.06);
        osc.stop(ctx.currentTime + idx * 0.06 + 0.13);
      });
    } catch {
      // audio error handling
    }
  }, [isMuted, getAudioContext]);

  return {
    isMuted,
    toggleSound,
    playClick,
    playHover,
    playTransition,
    playSuccess
  };
}
