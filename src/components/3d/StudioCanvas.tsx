'use client';

import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { ZoneId } from '@/types';
import { QualityConfig } from '@/hooks/useQualitySettings';
import { MovementKeys } from '@/hooks/useKeyboardControls';
import { StudioScene } from './StudioScene';

interface StudioCanvasProps {
  currentZone: ZoneId;
  onZoneChange: (zone: ZoneId) => void;
  onOpenProjects: () => void;
  onOpenLab: () => void;
  onOpenGaming: () => void;
  onOpenAbout: () => void;
  quality: QualityConfig;
  movement: MovementKeys;
  isFreeExplore: boolean;
  onWebGLError?: () => void;
}

function CanvasFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#07080c] text-center">
      <div className="flex flex-col items-center gap-3">
        <div className="h-6 w-6 rounded-full border-2 border-sky-400 border-t-transparent animate-spin" />
        <span className="font-mono text-xs text-sky-400 tracking-widest">
          RENDERING 3D STUDIO...
        </span>
      </div>
    </div>
  );
}

export function StudioCanvas({
  currentZone,
  onZoneChange,
  onOpenProjects,
  onOpenLab,
  onOpenGaming,
  onOpenAbout,
  quality,
  movement,
  isFreeExplore,
  onWebGLError
}: StudioCanvasProps) {
  const [hasWebGLError, setHasWebGLError] = useState(false);

  // Check WebGL availability
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      if (!gl) {
        setHasWebGLError(true);
        onWebGLError?.();
      }
    } catch {
      setHasWebGLError(true);
      onWebGLError?.();
    }
  }, [onWebGLError]);

  if (hasWebGLError) {
    return null;
  }

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden bg-[#07080c]">
      <Canvas
        shadows={quality.shadows}
        dpr={quality.dpr}
        gl={{
          antialias: quality.antialias,
          powerPreference: 'high-performance',
          alpha: false
        }}
        camera={{
          position: [0, 2.8, 14.5],
          fov: 48,
          near: 0.1,
          far: 60
        }}
        onCreated={({ gl }) => {
          gl.setClearColor('#07080c');
        }}
      >
        <Suspense fallback={null}>
          <StudioScene
            currentZone={currentZone}
            onZoneChange={onZoneChange}
            onOpenProjects={onOpenProjects}
            onOpenLab={onOpenLab}
            onOpenGaming={onOpenGaming}
            onOpenAbout={onOpenAbout}
            quality={quality}
            movement={movement}
            isFreeExplore={isFreeExplore}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
