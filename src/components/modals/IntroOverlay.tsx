'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '@/data/site';
import { Terminal, ArrowRight, Layers, FastForward } from 'lucide-react';

interface IntroOverlayProps {
  onEnterStudio: () => void;
  onViewProjects: () => void;
}

export function IntroOverlay({ onEnterStudio, onViewProjects }: IntroOverlayProps) {
  const [hasVisited, setHasVisited] = useState<boolean | null>(null);
  const [step, setStep] = useState<number>(0);
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    try {
      const visited = localStorage.getItem('khang_os_intro_completed');
      if (visited === 'true') {
        setHasVisited(true);
        return;
      }
    } catch {
      // ignore
    }
    setHasVisited(false);

    // Cinematic boot sequence timeline
    const timers = [
      setTimeout(() => setStep(1), 350),  // SYSTEM ........ READY
      setTimeout(() => setStep(2), 750),  // WORLD ......... READY
      setTimeout(() => setStep(3), 1200), // ASSETS ........ READY
      setTimeout(() => {
        setStep(4);
        setIsReady(true);
      }, 1600)
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const handleComplete = (callback: () => void) => {
    try {
      localStorage.setItem('khang_os_intro_completed', 'true');
    } catch {
      // ignore
    }
    setHasVisited(true);
    callback();
  };

  // If already visited or dismissed, do not show
  if (hasVisited === true || hasVisited === null) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#07080c] px-4 py-8 text-white transition-opacity duration-500">
      {/* Background cyber grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient from-sky-500/10 via-transparent to-transparent pointer-events-none" />

      {/* Top right Skip Intro button */}
      <button
        onClick={() => handleComplete(onEnterStudio)}
        className="absolute top-6 right-6 flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-mono text-zinc-400 hover:border-white/30 hover:text-white transition-colors"
      >
        <FastForward className="h-3.5 w-3.5" />
        <span>SKIP INTRO</span>
      </button>

      <div className="relative w-full max-w-xl rounded-2xl border border-white/10 bg-[#0c0e16]/90 p-6 md:p-10 shadow-2xl backdrop-blur-2xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-500/80" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-xs text-zinc-400">
              BOOT SEQUENCE // {siteConfig.brand}
            </span>
          </div>
          <span className="font-mono text-[10px] text-sky-400 tracking-wider">
            v2.4.0-CORE
          </span>
        </div>

        {/* Boot sequence logs */}
        <div className="space-y-2 font-mono text-xs md:text-sm text-zinc-400 mb-8">
          <div className="text-zinc-500">
            &gt; INITIALIZING DIGITAL SPACE ARCHITECTURE...
          </div>
          <div className={`transition-opacity duration-300 ${step >= 1 ? 'opacity-100' : 'opacity-0'}`}>
            &gt; SYSTEM ............................ <span className="text-emerald-400 font-bold">READY</span>
          </div>
          <div className={`transition-opacity duration-300 ${step >= 2 ? 'opacity-100' : 'opacity-0'}`}>
            &gt; 3D SPATIAL STUDIO ................ <span className="text-emerald-400 font-bold">MOUNTED</span>
          </div>
          <div className={`transition-opacity duration-300 ${step >= 3 ? 'opacity-100' : 'opacity-0'}`}>
            &gt; HARDWARE ACCELERATION ............. <span className="text-emerald-400 font-bold">ONLINE</span>
          </div>
          <div className={`transition-opacity duration-300 ${step >= 4 ? 'opacity-100' : 'opacity-0'}`}>
            &gt; KHANG.OS RUNTIME ................. <span className="text-sky-400 font-bold">READY</span>
          </div>
        </div>

        {/* Hero Identity Banner */}
        <div className={`space-y-3 transition-all duration-500 ${isReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <div className="inline-flex items-center gap-2 rounded-md border border-sky-400/25 bg-sky-400/10 px-2.5 py-1 text-[11px] font-mono text-sky-300">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
            FULLSTACK DEVELOPER • SYSTEMS BUILDER
          </div>

          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            {siteConfig.name}
          </h1>

          <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-md">
            Building reliable systems, useful products, and interactive digital experiences.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => handleComplete(onEnterStudio)}
              className="flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-black hover:bg-sky-400 transition-colors shadow-lg shadow-sky-500/20"
            >
              <span>ENTER KHANG.OS</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              onClick={() => handleComplete(onViewProjects)}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-300 hover:border-white/30 hover:text-white transition-colors"
            >
              <Layers className="h-4 w-4" />
              <span>VIEW PROJECTS</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
