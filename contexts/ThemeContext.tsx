'use client';

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

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

// Page background per theme, also used for the browser chrome (iOS Safari tints its
// toolbars with theme-color; matching it removes the darker band at the screen edges).
const BG = { dark: '#17110F', light: '#E9DED6' };

// Runs in <head> before paint: dark by default (it's a late-night record), the saved
// colour key, and the theme-color meta so Safari's bars match the page.
export const themeScript = `(function(){try{var d=document.documentElement;var t=localStorage.getItem('theme')||'dark';var dark=t==='dark';if(dark){d.classList.add('dark')}var k=localStorage.getItem('key');if(k&&'CDEFGAB'.indexOf(k)>-1&&k.length===1){d.dataset.key=k}var m=document.querySelector('meta[name=\\'theme-color\\']');if(!m){m=document.createElement('meta');m.setAttribute('name','theme-color');document.head.appendChild(m)}m.setAttribute('content',dark?'${BG.dark}':'${BG.light}')}catch(e){}})()`;

function setThemeColor(theme: Theme) {
  const m = document.querySelector('meta[name="theme-color"]');
  if (m) m.setAttribute('content', BG[theme]);
}

function save(name: string, value: string) {
  try {
    localStorage.setItem(name, value);
  } catch {
    // Storage can be blocked; the choice still applies for this visit.
  }
}

// Cross-fade the whole page when colours change, where the browser supports it.
function withTransition(update: () => void) {
  const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
  if (!doc.startViewTransition) {
    update();
    return;
  }
  doc.startViewTransition(() => flushSync(update));
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
    withTransition(() => {
      document.documentElement.classList.toggle('dark', next === 'dark');
      setTheme(next);
    });
    setThemeColor(next);
    save('theme', next);
  }, []);

  const setMusicalKey = useCallback((key: MusicalKey) => {
    withTransition(() => {
      document.documentElement.dataset.key = key;
      setKeyState(key);
    });
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
