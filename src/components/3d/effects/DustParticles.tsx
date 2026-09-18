'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface DustParticlesProps {
  count?: number;
}

export function DustParticles({ count = 120 }: DustParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Spread across studio dimensions [-16 to 16, 0.2 to 6, -16 to 16]
      pos[i * 3] = (Math.random() - 0.5) * 32;
      pos[i * 3 + 1] = Math.random() * 5 + 0.2;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 32;

      spd[i * 3] = (Math.random() - 0.5) * 0.003;
      spd[i * 3 + 1] = Math.random() * 0.002 + 0.001;
      spd[i * 3 + 2] = (Math.random() - 0.5) * 0.003;
    }
    return [pos, spd];
  }, [count]);

  useFrame(() => {
    if (!pointsRef.current) return;
    const geometry = pointsRef.current.geometry;
    const positionAttr = geometry.attributes.position as THREE.BufferAttribute;
    const array = positionAttr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      array[i * 3] += speeds[i * 3];
      array[i * 3 + 1] += speeds[i * 3 + 1];
      array[i * 3 + 2] += speeds[i * 3 + 2];

      // Wrap around studio ceiling
      if (array[i * 3 + 1] > 6) {
        array[i * 3 + 1] = 0.2;
      }
      if (Math.abs(array[i * 3]) > 16) {
        array[i * 3] *= -0.95;
      }
      if (Math.abs(array[i * 3 + 2]) > 16) {
        array[i * 3 + 2] *= -0.95;
      }
    }
    positionAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#38bdf8"
        transparent
        opacity={0.35}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}
