'use client';

import { useRef } from 'react';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { InteractiveItem } from '../InteractiveItem';

interface EntryZoneProps {
  onEnterWorkspace: () => void;
}

export function EntryZone({ onEnterWorkspace }: EntryZoneProps) {
  const beaconRef = useRef<Group>(null);

  useFrame((state) => {
    if (beaconRef.current) {
      beaconRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
    }
  });

  return (
    <group position={[0, 0, 10]}>
      {/* Architectural Portal Columns */}
      {/* Left Pillar */}
      <mesh position={[-2.8, 2.2, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.3, 4.4, 0.4]} />
        <meshStandardMaterial color="#121622" roughness={0.7} metalness={0.4} />
      </mesh>
      {/* Right Pillar */}
      <mesh position={[2.8, 2.2, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.3, 4.4, 0.4]} />
        <meshStandardMaterial color="#121622" roughness={0.7} metalness={0.4} />
      </mesh>

      {/* Top Header Beam */}
      <mesh position={[0, 4.3, 0]} castShadow receiveShadow>
        <boxGeometry args={[5.9, 0.3, 0.4]} />
        <meshStandardMaterial color="#121622" roughness={0.7} metalness={0.4} />
      </mesh>

      {/* Glowing Architectural LED Line */}
      <mesh position={[0, 4.1, 0.21]}>
        <planeGeometry args={[5.4, 0.03]} />
        <meshBasicMaterial color="#38bdf8" />
      </mesh>

      {/* Primary Brand Signage: KHANG.OS */}
      <Text
        position={[0, 3.6, 0.22]}
        fontSize={0.48}
        letterSpacing={0.15}
        color="#f8fafc"
        anchorX="center"
        anchorY="middle"
      >
        KHANG.OS
      </Text>

      {/* Status Subtitle: DIGITAL STUDIO ONLINE */}
      <Text
        position={[0, 3.1, 0.22]}
        fontSize={0.13}
        letterSpacing={0.2}
        color="#38bdf8"
        anchorX="center"
        anchorY="middle"
      >
        DIGITAL STUDIO • ONLINE
      </Text>

      {/* Interactive Gateway Node in front of entrance */}
      <InteractiveItem
        id="entry-gate"
        label="ENTER WORKSPACE"
        hint="Click to step inside"
        position={[0, 0.4, -0.8]}
        onInteract={onEnterWorkspace}
        tooltipOffset={[0, 1.2, 0]}
      >
        {/* Glowing Pedestal Base */}
        <mesh position={[0, 0.05, 0]}>
          <cylinderGeometry args={[0.6, 0.7, 0.1, 32]} />
          <meshStandardMaterial color="#121520" roughness={0.6} metalness={0.5} />
        </mesh>
        <mesh position={[0, 0.11, 0]}>
          <ringGeometry args={[0.45, 0.55, 32]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.7} />
        </mesh>

        {/* Rotating Holographic Beacon Node */}
        <group ref={beaconRef} position={[0, 0.7, 0]}>
          <mesh>
            <octahedronGeometry args={[0.22, 0]} />
            <meshStandardMaterial
              color="#38bdf8"
              emissive="#0284c7"
              emissiveIntensity={0.6}
              wireframe
            />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#38bdf8"
              emissiveIntensity={1}
            />
          </mesh>
        </group>
      </InteractiveItem>
    </group>
  );
}
