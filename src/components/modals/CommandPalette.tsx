'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { projects } from '@/data/projects';
import { experiments } from '@/data/experiments';
import { skillGroups } from '@/data/skills';
import { ZoneId, Project } from '@/types';
import {
  Search,
  Layers,
  FlaskConical,
  User,
  Compass,
  Code2,
  Gamepad2,
  ArrowRight,
  Sparkles,
  X
} from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectZone: (zone: ZoneId) => void;
  onSelectProject: (project: Project) => void;
  onOpenResume: () => void;
}

interface CommandItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'NAVIGATION' | 'PROJECT' | 'LAB' | 'SKILL' | 'ACTION';
  icon: typeof Search;
  action: () => void;
}

export function CommandPalette({
  isOpen,
  onClose,
  onSelectZone,
  onSelectProject,
  onOpenResume
}: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Global CMD+K and CTRL+K listener
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const allCommands = useMemo<CommandItem[]>(() => {
    const list: CommandItem[] = [
      // Sections
      {
        id: 'nav-entry',
        title: 'Entrance Portal',
        subtitle: 'Return to the studio entrance',
        category: 'NAVIGATION',
        icon: Compass,
        action: () => onSelectZone('entry')
      },
      {
        id: 'nav-workspace',
        title: 'Developer Workspace',
        subtitle: 'Visit developer desk & interactive monitor',
        category: 'NAVIGATION',
        icon: Code2,
        action: () => onSelectZone('workspace')
      },
      {
        id: 'nav-lab',
        title: 'The Lab',
        subtitle: 'Visit experimental research pod',
        category: 'NAVIGATION',
        icon: FlaskConical,
        action: () => onSelectZone('lab')
      },
      {
        id: 'nav-gaming',
        title: 'Gaming Battlestation',
        subtitle: 'League of Legends & Valorant setup',
        category: 'NAVIGATION',
        icon: Gamepad2,
        action: () => onSelectZone('gaming')
      },
      {
        id: 'nav-about',
        title: 'About Nguyễn Gia Khang',
        subtitle: 'Profile, education & background',
        category: 'NAVIGATION',
        icon: User,
        action: () => onSelectZone('about')
      },
      {
        id: 'action-resume',
        title: 'View Resume',
        subtitle: 'Inspect education & experience summary',
        category: 'ACTION',
        icon: Sparkles,
        action: onOpenResume
      }
    ];

    // Projects
    projects.forEach((proj) => {
      list.push({
        id: `proj-${proj.id}`,
        title: proj.title,
        subtitle: `${proj.categoryLabel} • ${proj.technologies.slice(0, 3).join(', ')}`,
        category: 'PROJECT',
        icon: Layers,
        action: () => onSelectProject(proj)
      });
    });

    // Experiments
    experiments.forEach((exp) => {
      list.push({
        id: `exp-${exp.id}`,
        title: exp.title,
        subtitle: `${exp.category} • Status: ${exp.status}`,
        category: 'LAB',
        icon: FlaskConical,
        action: () => onSelectZone('lab')
      });
    });

    return list;
  }, [onSelectZone, onSelectProject, onOpenResume]);

  // Filter commands by search query
  const filteredCommands = useMemo(() => {
    if (!query.trim()) return allCommands;
    const q = query.toLowerCase();
    return allCommands.filter(
      (cmd) =>
        cmd.title.toLowerCase().includes(q) ||
        cmd.subtitle.toLowerCase().includes(q) ||
        cmd.category.toLowerCase().includes(q)
    );
  }, [allCommands, query]);

  // Keyboard navigation inside palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(filteredCommands.length, 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % Math.max(filteredCommands.length, 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
          onClose();
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-150">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-xl overflow-hidden rounded-2xl border border-white/15 bg-[#0c0e17] shadow-2xl text-white">
        {/* Search Bar Input */}
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3.5">
          <Search className="h-5 w-5 text-sky-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search projects, technologies, lab experiments, sections..."
            className="flex-1 bg-transparent text-sm md:text-base text-white placeholder:text-zinc-500 focus:outline-none font-mono"
          />
          <button
            onClick={onClose}
            className="rounded p-1 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Command Items List */}
        <div className="max-h-[380px] overflow-y-auto p-2 divide-y divide-white/5">
          {filteredCommands.length === 0 ? (
            <div className="py-12 text-center text-sm font-mono text-zinc-500">
              NO COMMANDS OR PROJECTS FOUND FOR &quot;{query}&quot;
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const Icon = cmd.icon;
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  onClick={() => {
                    cmd.action();
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between rounded-xl px-3.5 py-2.5 text-left transition-all ${
                    isSelected
                      ? 'bg-sky-500/15 border border-sky-400/30 text-white'
                      : 'text-zinc-300 hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`p-1.5 rounded-lg ${
                        isSelected ? 'bg-sky-400/20 text-sky-400' : 'bg-white/5 text-zinc-400'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-sm text-white truncate">
                        {cmd.title}
                      </div>
                      <div className="text-[11px] font-mono text-zinc-400 truncate">
                        {cmd.subtitle}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0 ml-3">
                    <span className="rounded bg-white/5 px-2 py-0.5 text-[9px] font-mono uppercase text-zinc-400">
                      {cmd.category}
                    </span>
                    <ArrowRight
                      className={`h-3.5 w-3.5 transition-transform ${
                        isSelected ? 'text-sky-400 translate-x-0.5' : 'text-zinc-600'
                      }`}
                    />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer Shortcut Bar */}
        <div className="flex items-center justify-between border-t border-white/10 px-4 py-2 text-[10px] font-mono text-zinc-500 bg-[#090b10]">
          <div className="flex items-center gap-2">
            <span>↑↓ NAVIGATE</span>
            <span>↵ SELECT</span>
            <span>ESC CLOSE</span>
          </div>
          <span>KHANG.OS CMD-PALETTE</span>
        </div>
      </div>
    </div>
  );
}
