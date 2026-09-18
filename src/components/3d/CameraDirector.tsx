'use client';

import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { ZoneId } from '@/types';
import { MovementKeys } from '@/hooks/useKeyboardControls';

interface CameraDirectorProps {
  currentZone: ZoneId;
  movement: MovementKeys;
  isFreeExplore?: boolean;
}

const ZONE_TARGETS: Record<ZoneId, { position: [number, number, number]; lookAt: [number, number, number] }> = {
  entry: {
    position: [0, 2.8, 14.5],
    lookAt: [0, 2.2, 8]
  },
  workspace: {
    position: [0, 1.9, 3.2],
    lookAt: [0, 1.3, -0.4]
  },
  lab: {
    position: [-7.8, 2.4, 0.8],
    lookAt: [-9, 1.8, -3]
  },
  gaming: {
    position: [7.8, 2.4, 0.8],
    lookAt: [9, 1.8, -3]
  },
  about: {
    position: [0, 2.2, -4.5],
    lookAt: [0, 1.8, -8]
  }
};

export function CameraDirector({ currentZone, movement, isFreeExplore = false }: CameraDirectorProps) {
  const { camera } = useThree();
  const currentTargetPos = useRef(new THREE.Vector3(0, 2.8, 14.5));
  const currentLookAt = useRef(new THREE.Vector3(0, 2.2, 8));
  const freePosition = useRef(new THREE.Vector3(0, 2.0, 3.5));
  const freeLookAt = useRef(new THREE.Vector3(0, 1.5, 0));

  // Sync to initial zone target
  useEffect(() => {
    const target = ZONE_TARGETS[currentZone];
    if (target) {
      currentTargetPos.current.set(...target.position);
      currentLookAt.current.set(...target.lookAt);
    }
  }, [currentZone]);

  useFrame((state, delta) => {
    // Respect reduced motion preference if active
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const lerpFactor = prefersReducedMotion ? 1 : Math.min(delta * 2.8, 0.15);

    if (isFreeExplore) {
      // WASD navigation
      const speed = (movement.shift ? 6.0 : 3.5) * delta;
      const forwardDir = new THREE.Vector3();
      camera.getWorldDirection(forwardDir);
      forwardDir.y = 0;
      forwardDir.normalize();

      const sideDir = new THREE.Vector3();
      sideDir.crossVectors(camera.up, forwardDir).normalize();

      if (movement.forward) freePosition.current.addScaledVector(forwardDir, speed);
      if (movement.backward) freePosition.current.addScaledVector(forwardDir, -speed);
      if (movement.left) freePosition.current.addScaledVector(sideDir, speed);
      if (movement.right) freePosition.current.addScaledVector(sideDir, -speed);

      // Clamp exploration bounds within the studio
      freePosition.current.x = THREE.MathUtils.clamp(freePosition.current.x, -16, 16);
      freePosition.current.z = THREE.MathUtils.clamp(freePosition.current.z, -14, 15);
      freePosition.current.y = 2.0;

      camera.position.lerp(freePosition.current, Math.min(delta * 8, 1));
      freeLookAt.current.copy(camera.position).add(forwardDir.multiplyScalar(5));
      camera.lookAt(freeLookAt.current);
    } else {
      // Smooth interpolation to currentZone presets
      const target = ZONE_TARGETS[currentZone];
      if (target) {
        // Subtle mouse parallax
        const mouseX = state.pointer.x * 0.4;
        const mouseY = state.pointer.y * 0.25;

        const desiredPos = new THREE.Vector3(
          target.position[0] + mouseX,
          target.position[1] + mouseY,
          target.position[2]
        );

        camera.position.lerp(desiredPos, lerpFactor);
        currentLookAt.current.lerp(new THREE.Vector3(...target.lookAt), lerpFactor);
        camera.lookAt(currentLookAt.current);
      }
    }
  });

  return null;
}
