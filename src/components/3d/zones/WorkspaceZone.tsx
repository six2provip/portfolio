'use client';

import { useMemo } from 'react';
import * as THREE from 'three';
import { InteractiveItem } from '../InteractiveItem';

interface WorkspaceZoneProps {
  onOpenProjects: () => void;
}

export function WorkspaceZone({ onOpenProjects }: WorkspaceZoneProps) {
  // Generate high-resolution procedural canvas texture for the ultrawide monitor screen
  const screenTexture = useMemo(() => {
    if (typeof window === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    // Dark IDE background
    ctx.fillStyle = '#080a10';
    ctx.fillRect(0, 0, 1024, 512);

    // Top editor header / tabs
    ctx.fillStyle = '#111420';
    ctx.fillRect(0, 0, 1024, 40);

    // Window controls
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(24, 20, 6, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#eab308';
    ctx.beginPath();
    ctx.arc(44, 20, 6, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#22c55e';
    ctx.beginPath();
    ctx.arc(64, 20, 6, 0, Math.PI * 2);
    ctx.fill();

    // Tab title
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 15px monospace';
    ctx.fillText('khang.os / workspace.tsx', 96, 25);

    ctx.fillStyle = '#64748b';
    ctx.font = '14px monospace';
    ctx.fillText('projects.data.ts', 360, 25);
    ctx.fillText('terminal.sh', 520, 25);

    // Code area
    const lines = [
      { text: '// KHANG.OS — ARCHITECTURAL WORKSPACE', color: '#64748b' },
      { text: "import { Developer, Systems } from '@khang/core';", color: '#c084fc' },
      { text: "const engineer = new Developer('Nguyễn Gia Khang');", color: '#38bdf8' },
      { text: '', color: '#fff' },
      { text: 'export async function buildNextGenerationExperience() {', color: '#f59e0b' },
      { text: '  const stack = ["Python", "FastAPI", "React", "Next.js", "MongoDB", "AI"];', color: '#34d399' },
      { text: '  const ready = await Systems.verifyIntegrity({ status: "ONLINE" });', color: '#94a3b8' },
      { text: '  return engineer.launchProjects(stack);', color: '#38bdf8' },
      { text: '}', color: '#f59e0b' },
      { text: '', color: '#fff' },
      { text: '▶ STATUS: 6 PROJECTS READY FOR EXPLORATION', color: '#34d399' },
      { text: '▶ CLICK SCREEN TO OPEN COMPLETE SHOWCASE', color: '#38bdf8' }
    ];

    let y = 80;
    lines.forEach((line) => {
      ctx.fillStyle = line.color;
      ctx.font = '17px "Courier New", monospace';
      ctx.fillText(line.text, 36, y);
      y += 28;
    });

    // Right side project preview card
    ctx.fillStyle = '#101422';
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2;
    ctx.roundRect(620, 70, 360, 380, 10);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 20px monospace';
    ctx.fillText('PROJECT SHOWCASE', 650, 115);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '14px sans-serif';
    ctx.fillText('• Dashboard SmartRetail (ERP / POS)', 650, 160);
    ctx.fillText('• ERP Business Management', 650, 195);
    ctx.fillText('• Pulse Social Platform', 650, 230);
    ctx.fillText('• AI Developer Platform', 650, 265);
    ctx.fillText('• Interactive 3D Map', 650, 300);
    ctx.fillText('• Developer Toolbox', 650, 335);

    // Call to action button on screen
    ctx.fillStyle = '#0284c7';
    ctx.roundRect(650, 375, 300, 48, 6);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 16px monospace';
    ctx.fillText('CLICK TO EXPLORE [ENTER]', 680, 405);

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    return texture;
  }, []);

  return (
    <group position={[0, 0, 0]}>
      {/* Developer Desk Surface */}
      <mesh position={[0, 0.95, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 0.08, 1.4]} />
        <meshStandardMaterial color="#171a24" roughness={0.65} metalness={0.2} />
      </mesh>

      {/* Desk Leg Left Frame */}
      <mesh position={[-1.45, 0.47, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.06, 0.94, 1.2]} />
        <meshStandardMaterial color="#0f1118" roughness={0.5} metalness={0.7} />
      </mesh>

      {/* Desk Leg Right Frame */}
      <mesh position={[1.45, 0.47, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.06, 0.94, 1.2]} />
        <meshStandardMaterial color="#0f1118" roughness={0.5} metalness={0.7} />
      </mesh>

      {/* Desk Cable Management / Modesty Panel */}
      <mesh position={[0, 0.55, -0.55]} castShadow>
        <boxGeometry args={[2.8, 0.6, 0.03]} />
        <meshStandardMaterial color="#11131a" roughness={0.8} />
      </mesh>

      {/* Desk Mat */}
      <mesh position={[0, 0.995, 0.1]} receiveShadow>
        <boxGeometry args={[1.8, 0.01, 0.7]} />
        <meshStandardMaterial color="#0c0e14" roughness={0.9} />
      </mesh>

      {/* Mechanical Keyboard */}
      <mesh position={[-0.1, 1.015, 0.22]} castShadow receiveShadow>
        <boxGeometry args={[0.65, 0.025, 0.22]} />
        <meshStandardMaterial color="#1e2230" roughness={0.6} metalness={0.3} />
      </mesh>

      {/* Wireless Mouse */}
      <mesh position={[0.45, 1.015, 0.24]} castShadow receiveShadow>
        <boxGeometry args={[0.1, 0.025, 0.16]} />
        <meshStandardMaterial color="#232838" roughness={0.5} metalness={0.4} />
      </mesh>

      {/* Minimalist Desk Task Lamp */}
      <group position={[-1.2, 0.99, -0.3]}>
        {/* Lamp Base */}
        <mesh position={[0, 0.02, 0]} castShadow>
          <cylinderGeometry args={[0.1, 0.12, 0.03, 24]} />
          <meshStandardMaterial color="#1b1e2a" metalness={0.8} roughness={0.3} />
        </mesh>
        {/* Lamp Stem */}
        <mesh position={[0.05, 0.35, 0]} rotation={[0, 0, -0.15]} castShadow>
          <cylinderGeometry args={[0.015, 0.015, 0.7, 16]} />
          <meshStandardMaterial color="#38bdf8" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Lamp Head */}
        <mesh position={[0.22, 0.68, 0.15]} rotation={[0.4, 0, -0.3]} castShadow>
          <boxGeometry args={[0.25, 0.03, 0.08]} />
          <meshStandardMaterial color="#0f1118" metalness={0.8} />
        </mesh>
      </group>

      {/* Minimalist Desk Plant in Matte Pot */}
      <group position={[1.2, 0.99, -0.3]}>
        <mesh position={[0, 0.08, 0]} castShadow>
          <cylinderGeometry args={[0.08, 0.06, 0.16, 16]} />
          <meshStandardMaterial color="#181a22" roughness={0.8} />
        </mesh>
        {/* Foliage Spheres */}
        <mesh position={[0, 0.2, 0]} castShadow>
          <sphereGeometry args={[0.09, 12, 12]} />
          <meshStandardMaterial color="#10b981" roughness={0.7} />
        </mesh>
      </group>

      {/* Ceramic Coffee Mug */}
      <mesh position={[0.9, 1.05, 0.2]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.1, 16]} />
        <meshStandardMaterial color="#f1f5f9" roughness={0.4} />
      </mesh>

      {/* Ergonomic Office Chair */}
      <group position={[0, 0, 0.85]}>
        {/* Chair Base */}
        <mesh position={[0, 0.1, 0]} castShadow>
          <cylinderGeometry args={[0.3, 0.35, 0.08, 5]} />
          <meshStandardMaterial color="#11131a" metalness={0.8} />
        </mesh>
        {/* Stem */}
        <mesh position={[0, 0.35, 0]} castShadow>
          <cylinderGeometry args={[0.03, 0.03, 0.45, 12]} />
          <meshStandardMaterial color="#2d3748" metalness={0.9} />
        </mesh>
        {/* Seat Cushion */}
        <mesh position={[0, 0.6, 0]} castShadow>
          <boxGeometry args={[0.55, 0.08, 0.52]} />
          <meshStandardMaterial color="#181b26" roughness={0.8} />
        </mesh>
        {/* Mesh Backrest */}
        <mesh position={[0, 1.05, 0.24]} rotation={[-0.08, 0, 0]} castShadow>
          <boxGeometry args={[0.52, 0.7, 0.06]} />
          <meshStandardMaterial color="#141720" roughness={0.9} />
        </mesh>
      </group>

      {/* INTERACTIVE ULTRAWIDE CURVED MONITOR */}
      <InteractiveItem
        id="projects-monitor"
        label="PROJECTS SHOWCASE"
        hint="Click monitor to explore all work"
        position={[0, 1.0, -0.3]}
        onInteract={onOpenProjects}
        tooltipOffset={[0, 1.15, 0]}
      >
        {/* Monitor Stand Base */}
        <mesh position={[0, 0.015, -0.1]} castShadow>
          <cylinderGeometry args={[0.18, 0.22, 0.02, 32]} />
          <meshStandardMaterial color="#1e2230" metalness={0.8} roughness={0.3} />
        </mesh>
        {/* Monitor Arm */}
        <mesh position={[0, 0.28, -0.1]} castShadow>
          <cylinderGeometry args={[0.03, 0.035, 0.55, 16]} />
          <meshStandardMaterial color="#2b3042" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* Monitor Back Bezel (Slightly curved geometry) */}
        <mesh position={[0, 0.6, 0]} castShadow>
          <boxGeometry args={[2.0, 0.7, 0.05]} />
          <meshStandardMaterial color="#11131a" metalness={0.6} roughness={0.4} />
        </mesh>

        {/* Active Monitor Screen with Custom Dynamic IDE Canvas Texture */}
        <mesh position={[0, 0.6, 0.028]}>
          <planeGeometry args={[1.96, 0.66]} />
          {screenTexture ? (
            <meshBasicMaterial map={screenTexture} toneMapped={false} />
          ) : (
            <meshStandardMaterial
              color="#0d1117"
              emissive="#38bdf8"
              emissiveIntensity={0.2}
            />
          )}
        </mesh>

        {/* Subtle Ambient Light radiating from screen onto the desk */}
        <pointLight
          position={[0, 0.6, 0.4]}
          intensity={1.2}
          distance={2.5}
          color="#38bdf8"
        />
      </InteractiveItem>
    </group>
  );
}
