'use client';

import React, { useState, useRef, ReactNode } from 'react';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';

interface InteractiveItemProps {
  id: string;
  label?: string;
  hint?: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number] | number;
  children: ReactNode;
  onInteract?: () => void;
  onHoverChange?: (hovered: boolean) => void;
  tooltipOffset?: [number, number, number];
}

export function InteractiveItem({
  id,
  label,
  hint = 'Click to interact',
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  children,
  onInteract,
  onHoverChange,
  tooltipOffset = [0, 1.2, 0]
}: InteractiveItemProps) {
  const groupRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);

  // Micro-motion on hover
  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const targetY = hovered ? 0.05 : 0;
    groupRef.current.position.y += (targetY - (groupRef.current.position.y - position[1])) * Math.min(delta * 8, 1);
  });

  const handlePointerOver = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setHovered(true);
    document.body.style.cursor = 'pointer';
    onHoverChange?.(true);
  };

  const handlePointerOut = () => {
    setHovered(false);
    document.body.style.cursor = 'default';
    onHoverChange?.(false);
  };

  const handleClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    onInteract?.();
  };

  return (
    <group
      ref={groupRef}
      position={position}
      rotation={rotation}
      scale={scale}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    >
      {children}

      {/* Floating tooltip badge when hovered */}
      {hovered && label && (
        <Html
          position={tooltipOffset}
          center
          distanceFactor={10}
          className="pointer-events-none select-none transition-all duration-200"
        >
          <div className="flex flex-col items-center animate-in fade-in zoom-in-95 duration-150">
            <div className="rounded-md bg-black/90 border border-sky-400/40 px-3 py-1.5 shadow-2xl backdrop-blur-md flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-mono font-bold tracking-wider text-sky-400 uppercase leading-none">
                  {label}
                </span>
                <span className="text-[9px] font-mono text-zinc-400 leading-tight mt-0.5">
                  {hint}
                </span>
              </div>
            </div>
            {/* Arrow caret */}
            <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-black/90" />
          </div>
        </Html>
      )}
    </group>
  );
}
