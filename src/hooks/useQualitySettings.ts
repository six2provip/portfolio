'use client';

import { useState, useEffect, useCallback } from 'react';
import { QualityLevel } from '@/types';

export interface QualityConfig {
  level: QualityLevel;
  dpr: [number, number];
  shadows: boolean;
  particlesCount: number;
  postProcessing: boolean;
  antialias: boolean;
}

export const QUALITY_PRESETS: Record<QualityLevel, QualityConfig> = {
  low: {
    level: 'low',
    dpr: [1, 1],
    shadows: false,
    particlesCount: 40,
    postProcessing: false,
    antialias: false
  },
  medium: {
    level: 'medium',
    dpr: [1, 1.5],
    shadows: true,
    particlesCount: 100,
    postProcessing: false,
    antialias: true
  },
  high: {
    level: 'high',
    dpr: [1, 2],
    shadows: true,
    particlesCount: 200,
    postProcessing: true,
    antialias: true
  }
};

export function useQualitySettings() {
  const [quality, setQuality] = useState<QualityLevel>('high');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('khang_os_quality_level') as QualityLevel | null;
      if (saved && (saved === 'low' || saved === 'medium' || saved === 'high')) {
        setQuality(saved);
        return;
      }

      // Auto-detect mobile / low memory / hardware concurrency
      if (typeof window !== 'undefined') {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const cores = navigator.hardwareConcurrency || 4;
        const memory = (navigator as unknown as { deviceMemory?: number }).deviceMemory || 8;

        if (isMobile || cores < 4 || memory < 4) {
          setQuality('medium');
        } else {
          setQuality('high');
        }
      }
    } catch {
      // ignore
    }
  }, []);

  const changeQuality = useCallback((level: QualityLevel) => {
    setQuality(level);
    try {
      localStorage.setItem('khang_os_quality_level', level);
    } catch {
      // ignore
    }
  }, []);

  return {
    quality,
    config: QUALITY_PRESETS[quality],
    changeQuality
  };
}
