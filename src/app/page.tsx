'use client';

import { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { ZoneId, ExperienceMode, Project } from '@/types';
import { useStudioAudio } from '@/hooks/useStudioAudio';
import { useQualitySettings } from '@/hooks/useQualitySettings';
import { useKeyboardControls } from '@/hooks/useKeyboardControls';

import { NavigationBar } from '@/components/hud/NavigationBar';
import { RoomNavigator } from '@/components/hud/RoomNavigator';
import { ControlGuide } from '@/components/hud/ControlGuide';
import { Portfolio2D } from '@/components/portfolio2d/Portfolio2D';

import { IntroOverlay } from '@/components/modals/IntroOverlay';
import { ProjectModal } from '@/components/modals/ProjectModal';
import { CommandPalette } from '@/components/modals/CommandPalette';
import { ResumeModal } from '@/components/modals/ResumeModal';

// Dynamically import 3D Studio Canvas with SSR disabled to prevent hydration issues
const StudioCanvas = dynamic(
  () => import('@/components/3d/StudioCanvas').then((mod) => mod.StudioCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 flex items-center justify-center bg-[#07080c] text-sky-400 font-mono text-xs">
        INITIALIZING 3D SPATIAL ENGINE...
      </div>
    )
  }
);

export default function Home() {
  const [experienceMode, setExperienceMode] = useState<ExperienceMode>('3d');
  const [currentZone, setCurrentZone] = useState<ZoneId>('entry');
  const [isFreeExplore, setIsFreeExplore] = useState<boolean>(false);

  // Modals state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  // Audio, Quality and Keyboard hooks
  const audio = useStudioAudio();
  const quality = useQualitySettings();
  const movement = useKeyboardControls();

  // Zone transition handler with audio blip
  const handleZoneChange = useCallback((zone: ZoneId) => {
    setCurrentZone(zone);
    audio.playTransition();
  }, [audio]);

  // Global CMD+K / CTRL+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
        audio.playClick();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [audio]);

  // Fallback to 2D if WebGL fails
  const handleWebGLError = useCallback(() => {
    setExperienceMode('2d');
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-[#07080c] text-white selection:bg-sky-500 selection:text-black">
      {/* Global Cinematic Intro Overlay */}
      <IntroOverlay
        onEnterStudio={() => {
          setExperienceMode('3d');
          handleZoneChange('workspace');
          audio.playClick();
        }}
        onViewProjects={() => {
          setExperienceMode('2d');
          const el = document.getElementById('projects');
          el?.scrollIntoView({ behavior: 'smooth' });
          audio.playClick();
        }}
      />

      {/* Global Fixed HUD Navigation */}
      <NavigationBar
        currentZone={currentZone}
        onZoneChange={handleZoneChange}
        experienceMode={experienceMode}
        onToggleExperienceMode={() => {
          setExperienceMode((prev) => (prev === '3d' ? '2d' : '3d'));
          audio.playClick();
        }}
        isMuted={audio.isMuted}
        onToggleSound={audio.toggleSound}
        quality={quality.quality}
        onChangeQuality={quality.changeQuality}
        onOpenCommandPalette={() => {
          setIsCommandPaletteOpen(true);
          audio.playClick();
        }}
        onOpenProjects={() => {
          if (experienceMode === '3d') {
            handleZoneChange('workspace');
          } else {
            const el = document.getElementById('projects');
            el?.scrollIntoView({ behavior: 'smooth' });
          }
          audio.playClick();
        }}
        onOpenLab={() => {
          if (experienceMode === '3d') {
            handleZoneChange('lab');
          } else {
            const el = document.getElementById('lab');
            el?.scrollIntoView({ behavior: 'smooth' });
          }
          audio.playClick();
        }}
        onOpenAbout={() => {
          if (experienceMode === '3d') {
            handleZoneChange('about');
          } else {
            setIsResumeOpen(true);
          }
          audio.playClick();
        }}
      />

      {/* 3D Studio Experience Container */}
      <div
        className={`relative w-full ${
          experienceMode === '3d'
            ? 'h-screen overflow-hidden'
            : 'hidden'
        }`}
      >
        <StudioCanvas
          currentZone={currentZone}
          onZoneChange={handleZoneChange}
          onOpenProjects={() => {
            import('@/data/projects').then(({ projects }) => {
              setSelectedProject(projects[0]);
            });
            audio.playClick();
          }}
          onOpenLab={() => {
            setExperienceMode('2d');
            setTimeout(() => {
              const el = document.getElementById('lab');
              el?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
            audio.playClick();
          }}
          onOpenGaming={() => {
            setExperienceMode('2d');
            setTimeout(() => {
              const el = document.getElementById('gaming');
              el?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
            audio.playClick();
          }}
          onOpenAbout={() => {
            setIsResumeOpen(true);
            audio.playClick();
          }}
          quality={quality.config}
          movement={movement}
          isFreeExplore={isFreeExplore}
          onWebGLError={handleWebGLError}
        />

        {/* Floating Bottom Room Navigator */}
        <RoomNavigator
          currentZone={currentZone}
          onZoneChange={handleZoneChange}
          isFreeExplore={isFreeExplore}
          onToggleFreeExplore={() => setIsFreeExplore((prev) => !prev)}
        />

        {/* Desktop Controls Quick Help */}
        <ControlGuide />
      </div>

      {/* Accessible 2D Experience (Always present in DOM for search engines, screen readers, and direct access) */}
      <div className={experienceMode === '2d' ? 'block' : 'hidden'}>
        <Portfolio2D
          onSwitchTo3D={() => {
            setExperienceMode('3d');
            handleZoneChange('workspace');
            audio.playClick();
          }}
          onSelectProject={(project) => {
            setSelectedProject(project);
            audio.playClick();
          }}
          onOpenResume={() => {
            setIsResumeOpen(true);
            audio.playClick();
          }}
          onSuccessSound={audio.playSuccess}
        />
      </div>

      {/* Semantic crawlable outline when 3D is active */}
      {experienceMode === '3d' && (
        <div className="sr-only" aria-label="Accessible portfolio content">
          <h2>Fullstack Developer — Nguyễn Gia Khang (KHANG.OS)</h2>
          <p>Graduated FPT Polytechnic 12/2023. Core stack: Python, FastAPI, React, Next.js, MongoDB, Three.js.</p>
          <p>Featured projects include Dashboard SmartRetail, ERP Business Management, Pulse, AI Developer Platform, Interactive 3D Map, and Developer Toolbox.</p>
        </div>
      )}

      {/* Cinematic Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => {
          setSelectedProject(null);
          audio.playClick();
        }}
      />

      {/* Command Palette (CMD+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onSelectZone={(zone) => {
          setExperienceMode('3d');
          handleZoneChange(zone);
        }}
        onSelectProject={(project) => {
          setSelectedProject(project);
        }}
        onOpenResume={() => {
          setIsResumeOpen(true);
        }}
      />

      {/* Resume & Education Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => {
          setIsResumeOpen(false);
          audio.playClick();
        }}
      />
    </main>
  );
}
