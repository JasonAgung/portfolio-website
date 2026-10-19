'use client';

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
export const KEYS = ['C', 'D', 'E', 'F', 'G', 'A', 'B'] as const;
export type MusicalKey = (typeof KEYS)[number];

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  musicalKey: MusicalKey;
  setMusicalKey: (key: MusicalKey) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Runs in <head> before paint: dark by default (it's a late-night record), plus the saved colour key.
export const themeScript = `(function(){try{var d=document.documentElement;var t=localStorage.getItem('theme')||'dark';if(t==='dark'){d.classList.add('dark')}var k=localStorage.getItem('key');if(k&&'CDEFGAB'.indexOf(k)>-1&&k.length===1){d.dataset.key=k}}catch(e){}})()`;

function save(name: string, value: string) {
  try {
    localStorage.setItem(name, value);
  } catch {
    // Storage can be blocked; the choice still applies for this visit.
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [musicalKey, setKeyState] = useState<MusicalKey>('C');

  useEffect(() => {
    const root = document.documentElement;
    setTheme(root.classList.contains('dark') ? 'dark' : 'light');
    const k = root.dataset.key as MusicalKey | undefined;
    if (k && KEYS.includes(k)) setKeyState(k);
  }, []);

  const toggleTheme = useCallback(() => {
    const next: Theme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', next === 'dark');
    setTheme(next);
    save('theme', next);
  }, []);

  const setMusicalKey = useCallback((key: MusicalKey) => {
    document.documentElement.dataset.key = key;
    setKeyState(key);
    save('key', key);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, musicalKey, setMusicalKey }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
