'use client';

import { useState, useEffect } from 'react';

export interface MovementKeys {
  forward: boolean;
  backward: boolean;
  left: boolean;
  right: boolean;
  shift: boolean;
}

export function useKeyboardControls() {
  const [movement, setMovement] = useState<MovementKeys>({
    forward: false,
    backward: false,
    left: false,
    right: false,
    shift: false
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger movement if inside an input or textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.metaKey ||
        e.ctrlKey
      ) {
        return;
      }

      switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
          setMovement((prev) => ({ ...prev, forward: true }));
          break;
        case 'KeyS':
        case 'ArrowDown':
          setMovement((prev) => ({ ...prev, backward: true }));
          break;
        case 'KeyA':
        case 'ArrowLeft':
          setMovement((prev) => ({ ...prev, left: true }));
          break;
        case 'KeyD':
        case 'ArrowRight':
          setMovement((prev) => ({ ...prev, right: true }));
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          setMovement((prev) => ({ ...prev, shift: true }));
          break;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
          setMovement((prev) => ({ ...prev, forward: false }));
          break;
        case 'KeyS':
        case 'ArrowDown':
          setMovement((prev) => ({ ...prev, backward: false }));
          break;
        case 'KeyA':
        case 'ArrowLeft':
          setMovement((prev) => ({ ...prev, left: false }));
          break;
        case 'KeyD':
        case 'ArrowRight':
          setMovement((prev) => ({ ...prev, right: false }));
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          setMovement((prev) => ({ ...prev, shift: false }));
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return movement;
}
