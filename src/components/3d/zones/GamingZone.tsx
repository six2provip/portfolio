'use client';

import { useMemo } from 'react';
import * as THREE from 'three';
import { Text } from '@react-three/drei';
import { InteractiveItem } from '../InteractiveItem';

interface GamingZoneProps {
  onOpenGaming: () => void;
}

export function GamingZone({ onOpenGaming }: GamingZoneProps) {
  // Generate tactical radar texture for gaming screen
  const tacticalTexture = useMemo(() => {
    if (typeof window === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.fillStyle = '#0a080c';
    ctx.fillRect(0, 0, 512, 512);

    // Tactical Radar Circles
    ctx.strokeStyle = 'rgba(244, 63, 94, 0.4)';
    ctx.lineWidth = 2;
    [80, 160, 220].forEach((r) => {
      ctx.beginPath();
      ctx.arc(256, 256, r, 0, Math.PI * 2);
      ctx.stroke();
    });

    // Crosshairs
    ctx.beginPath();
    ctx.moveTo(256, 30);
    ctx.lineTo(256, 482);
    ctx.moveTo(30, 256);
    ctx.lineTo(482, 256);
    ctx.stroke();

    // Top banner
    ctx.fillStyle = '#f43f5e';
    ctx.font = 'bold 22px monospace';
    ctx.fillText('LEAGUE OF LEGENDS // TOP LANE', 50, 60);

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 22px monospace';
    ctx.fillText('VALORANT // ENTRY FRAGGER', 50, 460);

    // Tactical target blips
    ctx.fillStyle = '#f43f5e';
    ctx.beginPath();
    ctx.arc(320, 200, 8, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#34d399';
    ctx.beginPath();
    ctx.arc(200, 310, 8, 0, Math.PI * 2);
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);

  return (
    <group position={[9, 0, -3]}>
      {/* Gaming Desk Base */}
      <mesh position={[0, 0.95, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.6, 0.07, 1.2]} />
        <meshStandardMaterial color="#121016" roughness={0.7} metalness={0.3} />
      </mesh>

      {/* Desk Frame Legs */}
      <mesh position={[-1.2, 0.47, 0]} castShadow>
        <boxGeometry args={[0.06, 0.94, 1.0]} />
        <meshStandardMaterial color="#0b0a0e" metalness={0.8} />
      </mesh>
      <mesh position={[1.2, 0.47, 0]} castShadow>
        <boxGeometry args={[0.06, 0.94, 1.0]} />
        <meshStandardMaterial color="#0b0a0e" metalness={0.8} />
      </mesh>

      {/* Controlled Crimson/Rose Edge Glow Strip along back of desk */}
      <mesh position={[0, 0.96, -0.58]}>
        <boxGeometry args={[2.5, 0.02, 0.02]} />
        <meshBasicMaterial color="#f43f5e" />
      </mesh>

      {/* Overhead Zone Label */}
      <Text
        position={[0, 3.2, 0]}
        fontSize={0.32}
        letterSpacing={0.15}
        color="#f43f5e"
        anchorX="center"
        anchorY="middle"
      >
        GAMING BATTLESTATION
      </Text>
      <Text
        position={[0, 2.85, 0]}
        fontSize={0.11}
        letterSpacing={0.15}
        color="#94a3b8"
        anchorX="center"
        anchorY="middle"
      >
        LEAGUE OF LEGENDS • VALORANT
      </Text>

      {/* INTERACTIVE BATTLESTATION RIG */}
      <InteractiveItem
        id="gaming-rig"
        label="GAMING PROFILE"
        hint="Click to inspect gaming telemetry"
        position={[0, 1.0, -0.1]}
        onInteract={onOpenGaming}
        tooltipOffset={[0, 1.3, 0]}
      >
        {/* Main Gaming Monitor (Center-Left) */}
        <group position={[-0.45, 0.5, 0]} rotation={[0, 0.15, 0]}>
          <mesh castShadow>
            <boxGeometry args={[1.0, 0.6, 0.04]} />
            <meshStandardMaterial color="#0f0e13" metalness={0.7} />
          </mesh>
          <mesh position={[0, 0, 0.022]}>
            <planeGeometry args={[0.96, 0.56]} />
            {tacticalTexture ? (
              <meshBasicMaterial map={tacticalTexture} />
            ) : (
              <meshBasicMaterial color="#f43f5e" />
            )}
          </mesh>
        </group>

        {/* Secondary Vertical Monitor (Right) */}
        <group position={[0.55, 0.55, -0.05]} rotation={[0, -0.25, 0]}>
          <mesh castShadow>
            <boxGeometry args={[0.55, 0.8, 0.04]} />
            <meshStandardMaterial color="#0f0e13" metalness={0.7} />
          </mesh>
          <mesh position={[0, 0, 0.022]}>
            <planeGeometry args={[0.51, 0.76]} />
            <meshStandardMaterial
              color="#0d0a10"
              emissive="#38bdf8"
              emissiveIntensity={0.25}
            />
          </mesh>
        </group>

        {/* Headset on Stand */}
        <group position={[1.0, 0.2, 0.1]}>
          {/* Stand Pole */}
          <mesh position={[0, 0.15, 0]} castShadow>
            <cylinderGeometry args={[0.015, 0.015, 0.32, 16]} />
            <meshStandardMaterial color="#1a1820" metalness={0.8} />
          </mesh>
          {/* Headset Arc */}
          <mesh position={[0, 0.28, 0]} rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[0.08, 0.02, 12, 24, Math.PI]} />
            <meshStandardMaterial color="#2d121c" roughness={0.6} />
          </mesh>
        </group>

        {/* Gaming Keyboard with subtle RGB backlight */}
        <mesh position={[-0.1, 0.015, 0.25]} castShadow>
          <boxGeometry args={[0.6, 0.025, 0.2]} />
          <meshStandardMaterial color="#1c141e" roughness={0.6} />
        </mesh>

        {/* Gaming Mouse */}
        <mesh position={[0.4, 0.015, 0.26]} castShadow>
          <boxGeometry args={[0.08, 0.025, 0.14]} />
          <meshStandardMaterial color="#221724" roughness={0.5} />
        </mesh>
      </InteractiveItem>
    </group>
  );
}
