'use client';

import { Suspense } from 'react';
import { ZoneId } from '@/types';
import { QualityConfig } from '@/hooks/useQualitySettings';
import { MovementKeys } from '@/hooks/useKeyboardControls';
import { StudioFloor } from './zones/StudioFloor';
import { StudioLighting } from './effects/StudioLighting';
import { DustParticles } from './effects/DustParticles';
import { EntryZone } from './zones/EntryZone';
import { WorkspaceZone } from './zones/WorkspaceZone';
import { LabZone } from './zones/LabZone';
import { GamingZone } from './zones/GamingZone';
import { AboutZone } from './zones/AboutZone';
import { CameraDirector } from './CameraDirector';

interface StudioSceneProps {
  currentZone: ZoneId;
  onZoneChange: (zone: ZoneId) => void;
  onOpenProjects: () => void;
  onOpenLab: () => void;
  onOpenGaming: () => void;
  onOpenAbout: () => void;
  quality: QualityConfig;
  movement: MovementKeys;
  isFreeExplore: boolean;
}

export function StudioScene({
  currentZone,
  onZoneChange,
  onOpenProjects,
  onOpenLab,
  onOpenGaming,
  onOpenAbout,
  quality,
  movement,
  isFreeExplore
}: StudioSceneProps) {
  return (
    <>
      {/* Lighting setup based on quality shadows preset */}
      <StudioLighting shadows={quality.shadows} />

      {/* Atmospheric dust motes */}
      <DustParticles count={quality.particlesCount} />

      {/* Camera interpolator */}
      <CameraDirector
        currentZone={currentZone}
        movement={movement}
        isFreeExplore={isFreeExplore}
      />

      {/* Architectural ground and boundary */}
      <StudioFloor />

      {/* Zone 1: Entry Portal */}
      <EntryZone onEnterWorkspace={() => onZoneChange('workspace')} />

      {/* Zone 2: Workspace (Primary Desk & Ultrawide IDE) */}
      <WorkspaceZone onOpenProjects={onOpenProjects} />

      {/* Zone 3: The Lab (Left Wing) */}
      <LabZone onOpenLab={onOpenLab} />

      {/* Zone 4: Gaming Battlestation (Right Wing) */}
      <GamingZone onOpenGaming={onOpenGaming} />

      {/* Zone 5: About Holographic Terminal (North Gallery) */}
      <AboutZone onOpenAbout={onOpenAbout} />
    </>
  );
}
