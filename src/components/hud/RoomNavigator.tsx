'use client';

import { ZoneId } from '@/types';
import { Compass, Monitor, FlaskConical, Gamepad2, User } from 'lucide-react';

interface RoomNavigatorProps {
  currentZone: ZoneId;
  onZoneChange: (zone: ZoneId) => void;
  isFreeExplore: boolean;
  onToggleFreeExplore: () => void;
}

const ZONES: { id: ZoneId; label: string; icon: typeof Compass; color: string }[] = [
  { id: 'entry', label: 'ENTRY', icon: Compass, color: 'text-sky-400' },
  { id: 'workspace', label: 'WORKSPACE', icon: Monitor, color: 'text-sky-400' },
  { id: 'lab', label: 'LAB', icon: FlaskConical, color: 'text-indigo-400' },
  { id: 'gaming', label: 'GAMING', icon: Gamepad2, color: 'text-rose-400' },
  { id: 'about', label: 'ABOUT', icon: User, color: 'text-emerald-400' }
];

export function RoomNavigator({
  currentZone,
  onZoneChange,
  isFreeExplore,
  onToggleFreeExplore
}: RoomNavigatorProps) {
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-30 pointer-events-auto">
      <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/75 p-1.5 shadow-2xl backdrop-blur-xl">
        {ZONES.map((zone) => {
          const Icon = zone.icon;
          const isActive = currentZone === zone.id && !isFreeExplore;
          return (
            <button
              key={zone.id}
              onClick={() => {
                if (isFreeExplore) onToggleFreeExplore();
                onZoneChange(zone.id);
              }}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-mono font-medium transition-all ${
                isActive
                  ? 'bg-white/15 text-white shadow-sm border border-white/20'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className={`h-3.5 w-3.5 ${isActive ? zone.color : 'text-zinc-400'}`} />
              <span className="hidden sm:inline tracking-wider">{zone.label}</span>
            </button>
          );
        })}

        <div className="h-4 w-px bg-white/15 mx-1" />

        {/* Free Explore / WASD Toggle */}
        <button
          onClick={onToggleFreeExplore}
          className={`flex items-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-mono transition-all ${
            isFreeExplore
              ? 'bg-sky-500/25 text-sky-300 border border-sky-400/40'
              : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
          }`}
          title="Toggle free WASD exploration mode"
        >
          <span className="text-[10px] tracking-wider">
            {isFreeExplore ? 'EXPLORING' : 'FREE CAM'}
          </span>
        </button>
      </div>
    </div>
  );
}
