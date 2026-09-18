'use client';

import { useState, useEffect } from 'react';
import { X, MousePointer, Move, Hand } from 'lucide-react';

export function ControlGuide() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem('khang_os_controls_dismissed');
      if (!dismissed) {
        setIsVisible(true);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    try {
      localStorage.setItem('khang_os_controls_dismissed', 'true');
    } catch {
      // ignore
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-20 left-6 z-30 pointer-events-auto hidden md:block animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="relative rounded-xl border border-white/10 bg-black/80 p-3.5 shadow-2xl backdrop-blur-md max-w-xs">
        <button
          onClick={handleDismiss}
          className="absolute top-2.5 right-2.5 rounded p-1 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          title="Dismiss guide"
        >
          <X className="h-3.5 w-3.5" />
        </button>

        <div className="flex items-center gap-2 mb-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
          <span className="font-mono text-[11px] font-bold tracking-widest text-zinc-300 uppercase">
            CONTROLS
          </span>
        </div>

        <div className="space-y-2 text-xs font-mono text-zinc-400">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Move className="h-3.5 w-3.5 text-sky-400" />
              <span>WASD / ARROWS</span>
            </div>
            <span className="text-zinc-500">MOVE</span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <MousePointer className="h-3.5 w-3.5 text-emerald-400" />
              <span>MOUSE MOVE</span>
            </div>
            <span className="text-zinc-500">LOOK</span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Hand className="h-3.5 w-3.5 text-indigo-400" />
              <span>LEFT CLICK</span>
            </div>
            <span className="text-zinc-500">INTERACT</span>
          </div>
        </div>

        <div className="mt-3 pt-2 border-t border-white/10 text-[10px] font-mono text-zinc-500 flex justify-between items-center">
          <span>ROOM JUMPS IN BOTTOM DOCK</span>
          <button
            onClick={handleDismiss}
            className="text-sky-400 hover:underline"
          >
            GOT IT
          </button>
        </div>
      </div>
    </div>
  );
}
