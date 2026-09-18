'use client';

import * as THREE from 'three';

export function StudioFloor() {
  return (
    <group position={[0, 0, 0]}>
      {/* Main Studio Floor (Receives Shadows) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[44, 44]} />
        <meshStandardMaterial
          color="#0a0c13"
          roughness={0.82}
          metalness={0.18}
        />
      </mesh>

      {/* Subtle floor grid overlay */}
      <gridHelper
        args={[44, 44, '#1b2233', '#111624']}
        position={[0, 0.005, 0]}
      />

      {/* Architectural Studio Outer Boundary Walls */}
      {/* Back Wall */}
      <mesh position={[0, 4, -18]} receiveShadow>
        <boxGeometry args={[44, 8, 0.4]} />
        <meshStandardMaterial color="#08090f" roughness={0.9} />
      </mesh>
      {/* Left Wall */}
      <mesh position={[-20, 4, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[36, 8, 0.4]} />
        <meshStandardMaterial color="#08090f" roughness={0.9} />
      </mesh>
      {/* Right Wall */}
      <mesh position={[20, 4, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[36, 8, 0.4]} />
        <meshStandardMaterial color="#08090f" roughness={0.9} />
      </mesh>

      {/* Floor light strip runway from Entry to Workspace */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 5]}>
        <planeGeometry args={[0.08, 10]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.4} />
      </mesh>

      {/* Floor light strip runway connecting to Lab (Left) */}
      <mesh rotation={[-Math.PI / 2, 0, Math.PI / 4]} position={[-4.5, 0.01, -1.5]}>
        <planeGeometry args={[0.06, 9]} />
        <meshBasicMaterial color="#818cf8" transparent opacity={0.35} />
      </mesh>

      {/* Floor light strip runway connecting to Gaming (Right) */}
      <mesh rotation={[-Math.PI / 2, 0, -Math.PI / 4]} position={[4.5, 0.01, -1.5]}>
        <planeGeometry args={[0.06, 9]} />
        <meshBasicMaterial color="#f43f5e" transparent opacity={0.35} />
      </mesh>

      {/* Floor light strip connecting to About terminal (North) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, -4]}>
        <planeGeometry args={[0.06, 6]} />
        <meshBasicMaterial color="#34d399" transparent opacity={0.35} />
      </mesh>

      {/* Modern wall baseboard LED trim */}
      <mesh position={[0, 0.08, -17.75]}>
        <boxGeometry args={[40, 0.08, 0.05]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.25} />
      </mesh>
    </group>
  );
}
