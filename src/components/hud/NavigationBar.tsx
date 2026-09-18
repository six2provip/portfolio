'use client';

import { siteConfig } from '@/data/site';
import { ZoneId, ExperienceMode, QualityLevel } from '@/types';
import { Language, translations } from '@/data/i18n';
import {
  Volume2,
  VolumeX,
  Search,
  Layers,
  SlidersHorizontal,
  Terminal as TerminalIcon,
  Globe
} from 'lucide-react';

interface NavigationBarProps {
  currentZone: ZoneId;
  onZoneChange: (zone: ZoneId) => void;
  experienceMode: ExperienceMode;
  onToggleExperienceMode: () => void;
  isMuted: boolean;
  onToggleSound: () => void;
  quality: QualityLevel;
  onChangeQuality: (level: QualityLevel) => void;
  onOpenCommandPalette: () => void;
  onOpenProjects: () => void;
  onOpenLab: () => void;
  onOpenAbout: () => void;
  onOpenTerminal: () => void;
  lang: Language;
  onToggleLanguage: () => void;
}

export function NavigationBar({
  currentZone,
  onZoneChange,
  experienceMode,
  onToggleExperienceMode,
  isMuted,
  onToggleSound,
  quality,
  onChangeQuality,
  onOpenCommandPalette,
  onOpenProjects,
  onOpenLab,
  onOpenAbout,
  onOpenTerminal,
  lang,
  onToggleLanguage
}: NavigationBarProps) {
  const t = translations[lang];
  const nextQuality = quality === 'high' ? 'medium' : quality === 'medium' ? 'low' : 'high';

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3 md:px-6 md:py-4 pointer-events-none">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        {/* Brand Left Header */}
        <div className="pointer-events-auto flex items-center gap-3">
          <button
            onClick={() => onZoneChange('entry')}
            className="group flex items-center gap-2.5 rounded-lg border border-white/10 bg-black/60 px-3 py-1.5 backdrop-blur-md transition-all hover:border-sky-400/40 hover:bg-black/80"
          >
            <span className="flex h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
            <span className="font-mono text-xs md:text-sm font-bold tracking-widest text-white group-hover:text-sky-400 transition-colors">
              {siteConfig.brand}
            </span>
            <span className="hidden sm:inline-block font-mono text-[10px] text-zinc-400 border-l border-white/10 pl-2">
              STUDIO
            </span>
          </button>
        </div>

        {/* Center Quick Navigation Links */}
        <nav className="pointer-events-auto hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-black/50 p-1 backdrop-blur-md">
          <button
            onClick={() => {
              if (experienceMode === '3d') onZoneChange('workspace');
              else onOpenProjects();
            }}
            className={`rounded-full px-3.5 py-1 text-xs font-mono font-medium tracking-wider transition-all ${
              currentZone === 'workspace'
                ? 'bg-sky-500/20 text-sky-400 border border-sky-400/30'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {t.nav.workspace}
          </button>
          <button
            onClick={onOpenProjects}
            className="rounded-full px-3.5 py-1 text-xs font-mono font-medium tracking-wider text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
          >
            {t.nav.projects}
          </button>
          <button
            onClick={() => {
              if (experienceMode === '3d') onZoneChange('lab');
              else onOpenLab();
            }}
            className={`rounded-full px-3.5 py-1 text-xs font-mono font-medium tracking-wider transition-all ${
              currentZone === 'lab'
                ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-400/30'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {t.nav.lab}
          </button>
          <button
            onClick={() => {
              if (experienceMode === '3d') onZoneChange('gaming');
              const el = document.getElementById('gaming');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`rounded-full px-3.5 py-1 text-xs font-mono font-medium tracking-wider transition-all ${
              currentZone === 'gaming'
                ? 'bg-rose-500/20 text-rose-400 border border-rose-400/30'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {t.nav.gaming}
          </button>
          <button
            onClick={() => {
              if (experienceMode === '3d') onZoneChange('about');
              else onOpenAbout();
            }}
            className={`rounded-full px-3.5 py-1 text-xs font-mono font-medium tracking-wider transition-all ${
              currentZone === 'about'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-400/30'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {t.nav.about}
          </button>
        </nav>

        {/* Right Utility Controls */}
        <div className="pointer-events-auto flex items-center gap-2">
          {/* Quake Terminal Toggle */}
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/60 px-2.5 py-1.5 backdrop-blur-md text-xs font-mono text-zinc-300 hover:border-sky-400/40 hover:text-sky-300 transition-all"
            title="Open Interactive CLI Terminal (` or ~)"
          >
            <TerminalIcon className="h-3.5 w-3.5 text-sky-400" />
            <span className="hidden lg:inline text-[11px]">{t.nav.terminal}</span>
            <kbd className="hidden sm:inline rounded bg-white/10 px-1 py-0.2 text-[10px] text-zinc-400">~</kbd>
          </button>

          {/* Language Switcher */}
          <button
            onClick={onToggleLanguage}
            className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/60 px-2.5 py-1.5 backdrop-blur-md text-xs font-mono font-bold text-zinc-200 hover:border-emerald-400/40 hover:text-emerald-300 transition-all"
            title="Toggle Language (EN / VI)"
          >
            <Globe className="h-3.5 w-3.5 text-emerald-400" />
            <span>{lang.toUpperCase()}</span>
          </button>

          {/* Command Palette Button */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/60 px-2.5 py-1.5 backdrop-blur-md text-xs font-mono text-zinc-300 hover:border-white/20 hover:text-white transition-all"
            title="Search and commands (Ctrl+K or Cmd+K)"
          >
            <Search className="h-3.5 w-3.5 text-zinc-400" />
            <span className="hidden sm:inline text-[11px] text-zinc-400">CMD</span>
            <kbd className="hidden sm:inline rounded bg-white/10 px-1 py-0.2 text-[10px] text-zinc-300">K</kbd>
          </button>

          {/* 3D / 2D Mode Switcher */}
          <button
            onClick={onToggleExperienceMode}
            className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/60 px-2.5 py-1.5 backdrop-blur-md text-xs font-mono transition-all hover:border-sky-400/40"
            title="Toggle between 3D Spatial Studio and 2D Direct Interface"
          >
            <Layers className="h-3.5 w-3.5 text-sky-400" />
            <span className="font-bold text-white">
              {experienceMode === '3d' ? '3D' : '2D'}
            </span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            className="rounded-lg border border-white/10 bg-black/60 p-2 backdrop-blur-md text-zinc-400 hover:border-white/20 hover:text-white transition-all"
            title={isMuted ? 'Unmute procedural audio' : 'Mute audio'}
          >
            {isMuted ? (
              <VolumeX className="h-3.5 w-3.5 text-zinc-500" />
            ) : (
              <Volume2 className="h-3.5 w-3.5 text-sky-400" />
            )}
          </button>

          {/* Quality Selector (when in 3D mode) */}
          {experienceMode === '3d' && (
            <button
              onClick={() => onChangeQuality(nextQuality)}
              className="hidden sm:flex items-center gap-1 rounded-lg border border-white/10 bg-black/60 px-2.5 py-1.5 backdrop-blur-md text-[11px] font-mono text-zinc-400 hover:text-white hover:border-white/20 transition-all"
              title="Toggle graphics quality (Low, Medium, High)"
            >
              <SlidersHorizontal className="h-3 w-3" />
              <span className="uppercase">{quality}</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
