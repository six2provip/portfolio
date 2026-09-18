'use client';

import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { InteractiveItem } from '../InteractiveItem';

interface WorkspaceZoneProps {
  onOpenProjects: () => void;
}

const CODE_SCRIPTS = [
  '// KHANG.OS — ARCHITECTURAL WORKSPACE',
  "import { FullstackEngineer } from '@khang/core';",
  "import { FastAPI, NextJS, ThreeJS } from '@khang/stack';",
  '',
  "const engineer = new FullstackEngineer('Nguyễn Gia Khang');",
  "engineer.setGitHub('https://github.com/six2provip');",
  '',
  'export async function deployProductionArchitecture() {',
  '  const runtime = await engineer.initializeRuntime();',
  '  const systems = [',
  '    "Dashboard SmartRetail [ERP / POS]",',
  '    "ERP Enterprise Orchestrator",',
  '    "Pulse Realtime Messaging",',
  '    "AI Developer Platform",',
  '    "Interactive 3D WebGL Map",',
  '    "Developer Toolbox"',
  '  ];',
  '  return runtime.mountShowcase(systems);',
  '}',
  '// Status: READY • Click monitor to explore'
];

export function WorkspaceZone({ onOpenProjects }: WorkspaceZoneProps) {
  const animState = useRef({
    lineIndex: 0,
    charIndex: 0,
    elapsed: 0,
    lastUpdate: 0,
    cursorBlink: true,
    cursorElapsed: 0
  });

  const { canvas, ctx, texture } = useMemo(() => {
    if (typeof window === 'undefined') {
      return { canvas: null, ctx: null, texture: null };
    }
    const c = document.createElement('canvas');
    c.width = 1024;
    c.height = 512;
    const context = c.getContext('2d');
    const tex = new THREE.CanvasTexture(c);
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    return { canvas: c, ctx: context, texture: tex };
  }, []);

  // Animate live coding texture in useFrame
  useFrame((state, delta) => {
    if (!ctx || !texture) return;
    const s = animState.current;
    s.elapsed += delta;
    s.cursorElapsed += delta;

    // Toggle cursor every 400ms
    if (s.cursorElapsed > 0.4) {
      s.cursorBlink = !s.cursorBlink;
      s.cursorElapsed = 0;
    }

    // Type a new character every 35ms
    if (s.elapsed - s.lastUpdate > 0.035) {
      s.lastUpdate = s.elapsed;

      if (s.lineIndex < CODE_SCRIPTS.length) {
        const currentLine = CODE_SCRIPTS[s.lineIndex];
        if (s.charIndex < currentLine.length) {
          s.charIndex += 1;
        } else {
          s.lineIndex += 1;
          s.charIndex = 0;
        }
      } else {
        // Pause for 5 seconds when complete, then restart
        if (s.elapsed > 20) {
          s.lineIndex = 0;
          s.charIndex = 0;
          s.elapsed = 0;
          s.lastUpdate = 0;
        }
      }

      // Redraw Canvas
      // Background
      ctx.fillStyle = '#080a10';
      ctx.fillRect(0, 0, 1024, 512);

      // Top Tab Bar
      ctx.fillStyle = '#111420';
      ctx.fillRect(0, 0, 1024, 42);

      // Window controls
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(24, 21, 6, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#eab308';
      ctx.beginPath();
      ctx.arc(44, 21, 6, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#22c55e';
      ctx.beginPath();
      ctx.arc(64, 21, 6, 0, Math.PI * 2);
      ctx.fill();

      // Tab text
      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 14px monospace';
      ctx.fillText('khang.os / workspace.ts', 95, 26);

      ctx.fillStyle = '#64748b';
      ctx.font = '13px monospace';
      ctx.fillText('projects.data.ts', 330, 26);
      ctx.fillText('terminal.sh', 480, 26);

      // Render typed lines
      let y = 78;
      for (let i = 0; i <= Math.min(s.lineIndex, CODE_SCRIPTS.length - 1); i++) {
        const fullLine = CODE_SCRIPTS[i];
        const lineToDraw = i === s.lineIndex ? fullLine.substring(0, s.charIndex) : fullLine;

        // Syntax coloring
        if (lineToDraw.startsWith('//')) {
          ctx.fillStyle = '#64748b';
        } else if (lineToDraw.startsWith('import')) {
          ctx.fillStyle = '#c084fc';
        } else if (lineToDraw.startsWith('export') || lineToDraw.startsWith('const')) {
          ctx.fillStyle = '#f59e0b';
        } else if (lineToDraw.includes('"') || lineToDraw.includes("'")) {
          ctx.fillStyle = '#34d399';
        } else {
          ctx.fillStyle = '#e2e8f0';
        }

        ctx.font = '16px "Courier New", monospace';
        ctx.fillText(lineToDraw, 36, y);

        // Blinking cursor on active line
        if (i === s.lineIndex && s.cursorBlink) {
          const textWidth = ctx.measureText(lineToDraw).width;
          ctx.fillStyle = '#38bdf8';
          ctx.fillRect(38 + textWidth, y - 13, 8, 16);
        }

        y += 24;
      }

      // Right side Live Telemetry & Project preview panel
      ctx.fillStyle = '#0f1322';
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(620, 65, 370, 395, 12);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 18px monospace';
      ctx.fillText('PROJECT TELEMETRY', 645, 105);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '13px sans-serif';
      ctx.fillText('• Dashboard SmartRetail (ERP / POS)', 645, 145);
      ctx.fillText('• ERP Business Management', 645, 180);
      ctx.fillText('• Pulse Realtime Social Platform', 645, 215);
      ctx.fillText('• AI Developer Platform', 645, 250);
      ctx.fillText('• Interactive 3D WebGL Map', 645, 285);
      ctx.fillText('• Developer Toolbox Suite', 645, 320);

      // System telemetry bar
      ctx.fillStyle = '#161c30';
      ctx.roundRect(645, 345, 320, 35, 6);
      ctx.fill();

      ctx.fillStyle = '#34d399';
      ctx.font = '12px monospace';
      ctx.fillText(`SYSTEM: ONLINE • 60 FPS • PING 12ms`, 660, 367);

      // Call to action button on screen
      ctx.fillStyle = '#0284c7';
      ctx.roundRect(645, 395, 320, 48, 8);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 15px monospace';
      ctx.fillText('CLICK TO EXPLORE WORK [ENTER]', 670, 425);

      texture.needsUpdate = true;
    }
  });

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
        <mesh position={[0, 0.02, 0]} castShadow>
          <cylinderGeometry args={[0.1, 0.12, 0.03, 24]} />
          <meshStandardMaterial color="#1b1e2a" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[0.05, 0.35, 0]} rotation={[0, 0, -0.15]} castShadow>
          <cylinderGeometry args={[0.015, 0.015, 0.7, 16]} />
          <meshStandardMaterial color="#38bdf8" metalness={0.9} roughness={0.2} />
        </mesh>
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
        <mesh position={[0, 0.1, 0]} castShadow>
          <cylinderGeometry args={[0.3, 0.35, 0.08, 5]} />
          <meshStandardMaterial color="#11131a" metalness={0.8} />
        </mesh>
        <mesh position={[0, 0.35, 0]} castShadow>
          <cylinderGeometry args={[0.03, 0.03, 0.45, 12]} />
          <meshStandardMaterial color="#2d3748" metalness={0.9} />
        </mesh>
        <mesh position={[0, 0.6, 0]} castShadow>
          <boxGeometry args={[0.55, 0.08, 0.52]} />
          <meshStandardMaterial color="#181b26" roughness={0.8} />
        </mesh>
        <mesh position={[0, 1.05, 0.24]} rotation={[-0.08, 0, 0]} castShadow>
          <boxGeometry args={[0.52, 0.7, 0.06]} />
          <meshStandardMaterial color="#141720" roughness={0.9} />
        </mesh>
      </group>

      {/* INTERACTIVE ULTRAWIDE CURVED MONITOR WITH LIVE TYPING TEXTURE */}
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

        {/* Monitor Back Bezel */}
        <mesh position={[0, 0.6, 0]} castShadow>
          <boxGeometry args={[2.0, 0.7, 0.05]} />
          <meshStandardMaterial color="#11131a" metalness={0.6} roughness={0.4} />
        </mesh>

        {/* Active Monitor Screen with Live Animated Code Canvas */}
        <mesh position={[0, 0.6, 0.028]}>
          <planeGeometry args={[1.96, 0.66]} />
          {texture ? (
            <meshBasicMaterial map={texture} toneMapped={false} />
          ) : (
            <meshStandardMaterial
              color="#0d1117"
              emissive="#38bdf8"
              emissiveIntensity={0.3}
            />
          )}
        </mesh>

        {/* Dynamic Light radiating from screen onto desk */}
        <pointLight
          position={[0, 0.6, 0.4]}
          intensity={1.4}
          distance={2.8}
          color="#38bdf8"
        />
      </InteractiveItem>
    </group>
  );
}
