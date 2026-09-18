'use client';

import { useRef } from 'react';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { InteractiveItem } from '../InteractiveItem';

interface AboutZoneProps {
  onOpenAbout: () => void;
}

export function AboutZone({ onOpenAbout }: AboutZoneProps) {
  const cardRef = useRef<Group>(null);

  useFrame((state) => {
    if (cardRef.current) {
      const t = state.clock.getElapsedTime();
      cardRef.current.position.y = 1.9 + Math.sin(t * 1.2) * 0.05;
      cardRef.current.rotation.y = Math.sin(t * 0.5) * 0.08;
    }
  });

  return (
    <group position={[0, 0, -8]}>
      {/* Architectural Gallery Pedestal */}
      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.8, 1.0, 0.9]} />
        <meshStandardMaterial color="#11141e" roughness={0.7} metalness={0.4} />
      </mesh>

      {/* Pedestal Top Accent Glass Trim */}
      <mesh position={[0, 1.01, 0]}>
        <boxGeometry args={[1.84, 0.02, 0.94]} />
        <meshBasicMaterial color="#34d399" transparent opacity={0.5} />
      </mesh>

      {/* Backdrop Gallery Signage */}
      <Text
        position={[0, 3.5, -0.6]}
        fontSize={0.34}
        letterSpacing={0.12}
        color="#f8fafc"
        anchorX="center"
        anchorY="middle"
      >
        NGUYỄN GIA KHANG
      </Text>
      <Text
        position={[0, 3.15, -0.6]}
        fontSize={0.13}
        letterSpacing={0.2}
        color="#34d399"
        anchorX="center"
        anchorY="middle"
      >
        FULLSTACK DEVELOPER • FPT POLYTECHNIC 12/2023
      </Text>

      {/* INTERACTIVE HOLOGRAPHIC PROFILE CARD */}
      <InteractiveItem
        id="about-terminal"
        label="VIEW PROFILE & SKILLS"
        hint="Click to inspect background & timeline"
        position={[0, 0, 0]}
        onInteract={onOpenAbout}
        tooltipOffset={[0, 2.8, 0]}
      >
        <group ref={cardRef} position={[0, 1.9, 0]}>
          {/* Holographic ID Slate */}
          <mesh castShadow>
            <boxGeometry args={[1.5, 1.0, 0.04]} />
            <meshStandardMaterial
              color="#0d111a"
              metalness={0.7}
              roughness={0.2}
              transparent
              opacity={0.88}
            />
          </mesh>

          {/* Slate Border Neon Trim */}
          <mesh position={[0, 0, 0.025]}>
            <planeGeometry args={[1.48, 0.98]} />
            <meshBasicMaterial color="#131b2c" />
          </mesh>

          {/* Profile Name & Tagline on Slate */}
          <Text
            position={[0, 0.28, 0.035]}
            fontSize={0.11}
            letterSpacing={0.1}
            color="#38bdf8"
            anchorX="center"
            anchorY="middle"
          >
            NGUYỄN GIA KHANG
          </Text>
          <Text
            position={[0, 0.12, 0.035]}
            fontSize={0.075}
            letterSpacing={0.08}
            color="#e2e8f0"
            anchorX="center"
            anchorY="middle"
          >
            Fullstack Developer
          </Text>
          <Text
            position={[0, -0.06, 0.035]}
            fontSize={0.055}
            color="#94a3b8"
            anchorX="center"
            anchorY="middle"
          >
            Python • FastAPI • React • Next.js • AI
          </Text>
          <Text
            position={[0, -0.22, 0.035]}
            fontSize={0.055}
            color="#34d399"
            anchorX="center"
            anchorY="middle"
          >
            FPT Polytechnic Graduated 12/2023
          </Text>
          <Text
            position={[0, -0.34, 0.035]}
            fontSize={0.055}
            letterSpacing={0.06}
            color="#64748b"
            anchorX="center"
            anchorY="middle"
          >
            [ CLICK FOR FULL RESUME & TIMELINE ]
          </Text>
        </group>
      </InteractiveItem>
    </group>
  );
}
