'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/contexts/ThemeContext';

const links = [
  { href: '/projects', label: 'projects' },
  { href: '/experience', label: 'experience' },
  { href: '/about', label: 'about' },
];

export default function Nav() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="container-page flex h-20 items-center justify-between gap-4">
      <Link href="/" className="font-serif text-[19px] italic" aria-current={pathname === '/' ? 'page' : undefined}>
        jason kelvin agung
      </Link>
      <nav aria-label="Main" className="flex items-center gap-1 sm:gap-3">
        <ul className="hidden items-center gap-5 sm:flex">
          {links.map((l) => {
            const active = pathname.startsWith(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={active ? 'page' : undefined}
                  className={`font-mono text-[13px] tracking-wide transition-colors ${
                    active ? 'text-ink underline decoration-accent decoration-2 underline-offset-[7px]' : 'text-muted hover:text-ink'
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          type="button"
          onClick={toggleTheme}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-ink/10 hover:text-ink"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? (
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
              <circle cx="12" cy="12" r="4.5" />
              <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
            </svg>
          ) : (
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
            </svg>
          )}
        </button>
      </nav>
      {/* Phones: links in their own row */}
      <ul className="fixed inset-x-0 bottom-0 z-50 flex justify-around border-t border-line bg-bg/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-md sm:hidden">
        {[{ href: '/', label: 'home' }, ...links].map((l) => {
          const active = l.href === '/' ? pathname === '/' : pathname.startsWith(l.href);
          return (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={active ? 'page' : undefined}
                className={`flex min-h-[52px] items-center px-3 font-mono text-[13px] ${active ? 'text-accent' : 'text-muted'}`}
              >
                {l.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
