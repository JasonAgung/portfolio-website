'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export const windows = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/experience', label: 'experience' },
  { href: '/projects', label: 'projects' },
];

function bandungTime() {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Jakarta',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date());
}

// A tmux status line, doubling as the site navigation.
export default function StatusBar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(bandungTime());
    const id = setInterval(() => setTime(bandungTime()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <nav
      aria-label="Main"
      className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-[#11140F] bg-term pb-[env(safe-area-inset-bottom)] font-mono text-[13px] text-term-ink"
    >
      <div className="flex h-11 items-stretch">
        <Link
          href="/"
          className="hidden items-center bg-pastel-sage px-3 font-semibold text-[#1F241D] sm:flex"
          aria-label="Jason Kelvin Agung, home"
        >
          [jka]
        </Link>
        <ul className="flex min-w-0 flex-1 items-stretch overflow-x-auto">
          {windows.map((w, i) => {
            const active = w.href === '/' ? pathname === '/' : pathname.startsWith(w.href);
            return (
              <li key={w.href} className="flex">
                <Link
                  href={w.href}
                  aria-current={active ? 'page' : undefined}
                  className={`flex items-center whitespace-nowrap px-2.5 transition-colors sm:px-3 ${
                    active
                      ? 'bg-pastel-blush font-semibold text-[#1F241D]'
                      : 'text-term-ink hover:bg-term-line hover:text-pastel-blush'
                  }`}
                >
                  <span className="hidden text-current opacity-70 sm:inline">{i}:</span>
                  {w.label}
                  {active && <span aria-hidden="true">*</span>}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-stretch">
          {time && (
            <span className="hidden items-center px-3 text-term-dim md:flex" title="Local time in Bandung (WIB)">
              bandung {time} WIB
            </span>
          )}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex min-w-[44px] items-center justify-center gap-1.5 bg-term-line px-3 text-pastel-butter transition-colors hover:bg-pastel-butter hover:text-[#1F241D]"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
            <span className="hidden sm:inline">{theme === 'dark' ? 'light' : 'dark'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
