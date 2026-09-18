'use client';

import { useRef } from 'react';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { InteractiveItem } from '../InteractiveItem';

interface LabZoneProps {
  onOpenLab: () => void;
}

export function LabZone({ onOpenLab }: LabZoneProps) {
  const centralCoreRef = useRef<Group>(null);
  const ring1Ref = useRef<Group>(null);
  const ring2Ref = useRef<Group>(null);
  const orbitalNodeRef = useRef<Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (centralCoreRef.current) {
      centralCoreRef.current.rotation.x = t * 0.3;
      centralCoreRef.current.rotation.y = t * 0.45;
      centralCoreRef.current.position.y = 1.8 + Math.sin(t * 1.5) * 0.08;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = t * 0.5;
      ring1Ref.current.rotation.x = Math.sin(t * 0.3) * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -t * 0.4;
      ring2Ref.current.rotation.z = Math.cos(t * 0.4) * 0.25;
    }
    if (orbitalNodeRef.current) {
      orbitalNodeRef.current.rotation.y = t * 0.8;
    }
  });

  return (
    <group position={[-9, 0, -3]}>
      {/* High-tech Pedestal Base */}
      <mesh position={[0, 0.2, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.5, 1.8, 0.4, 32]} />
        <meshStandardMaterial color="#0e111a" roughness={0.6} metalness={0.7} />
      </mesh>

      {/* Glowing Outer Base Ring */}
      <mesh position={[0, 0.41, 0]}>
        <ringGeometry args={[1.25, 1.45, 32]} />
        <meshBasicMaterial color="#818cf8" transparent opacity={0.65} />
      </mesh>

      {/* Lab Pillar Structure */}
      <mesh position={[0, 0.85, 0]} castShadow>
        <cylinderGeometry args={[0.4, 0.7, 0.9, 16]} />
        <meshStandardMaterial color="#141826" roughness={0.5} metalness={0.8} />
      </mesh>

      {/* Overhead Signage Label */}
      <Text
        position={[0, 3.4, 0]}
        fontSize={0.32}
        letterSpacing={0.15}
        color="#818cf8"
        anchorX="center"
        anchorY="middle"
      >
        THE LAB
      </Text>
      <Text
        position={[0, 3.05, 0]}
        fontSize={0.11}
        letterSpacing={0.18}
        color="#94a3b8"
        anchorX="center"
        anchorY="middle"
      >
        AI • MCP • WEBGL • EXPERIMENTS
      </Text>

      {/* INTERACTIVE HOLOGRAPHIC EXPERIMENT CORE */}
      <InteractiveItem
        id="lab-core"
        label="OPEN THE LAB"
        hint="Explore experimental systems"
        position={[0, 0, 0]}
        onInteract={onOpenLab}
        tooltipOffset={[0, 2.7, 0]}
      >
        {/* Floating Holographic Core Group */}
        <group ref={centralCoreRef} position={[0, 1.8, 0]}>
          {/* Wireframe Icosahedron */}
          <mesh>
            <icosahedronGeometry args={[0.55, 0]} />
            <meshStandardMaterial
              color="#818cf8"
              emissive="#4338ca"
              emissiveIntensity={0.6}
              wireframe
            />
          </mesh>

          {/* Glowing Inner Core */}
          <mesh>
            <sphereGeometry args={[0.22, 16, 16]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#818cf8"
              emissiveIntensity={1.2}
            />
          </mesh>
        </group>

        {/* Orbiting Gyro Rings */}
        <group position={[0, 1.8, 0]}>
          <group ref={ring1Ref}>
            <mesh>
              <torusGeometry args={[0.85, 0.015, 16, 64]} />
              <meshBasicMaterial color="#38bdf8" transparent opacity={0.7} />
            </mesh>
          </group>
          <group ref={ring2Ref}>
            <mesh>
              <torusGeometry args={[1.05, 0.015, 16, 64]} />
              <meshBasicMaterial color="#818cf8" transparent opacity={0.6} />
            </mesh>
          </group>
        </group>

        {/* Orbiting Data Satellite Nodes */}
        <group ref={orbitalNodeRef} position={[0, 1.8, 0]}>
          <mesh position={[1.4, 0.2, 0]}>
            <boxGeometry args={[0.12, 0.12, 0.12]} />
            <meshStandardMaterial color="#34d399" emissive="#059669" emissiveIntensity={0.8} />
          </mesh>
          <mesh position={[-1.4, -0.2, 0]}>
            <octahedronGeometry args={[0.1, 0]} />
            <meshStandardMaterial color="#38bdf8" emissive="#0284c7" emissiveIntensity={0.8} />
          </mesh>
        </group>
      </InteractiveItem>
    </group>
  );
}
