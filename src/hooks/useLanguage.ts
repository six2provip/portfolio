'use client';

import { useState, useEffect, useCallback } from 'react';
import { Language, translations } from '@/data/i18n';

export function useLanguage() {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('khang_os_lang') as Language | null;
      if (saved === 'en' || saved === 'vi') {
        setLang(saved);
      } else {
        // Auto-detect browser language
        if (typeof window !== 'undefined' && navigator.language.startsWith('vi')) {
          setLang('vi');
        }
      }
    } catch {
      // ignore
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'en' ? 'vi' : 'en';
      try {
        localStorage.setItem('khang_os_lang', next);
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  return {
    lang,
    t: translations[lang],
    toggleLanguage,
    setLanguage: (newLang: Language) => {
      setLang(newLang);
      try {
        localStorage.setItem('khang_os_lang', newLang);
      } catch {
        // ignore
      }
    }
  };
}
