'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

// The site's pages, in album order
const queue = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/experience', label: 'experience' },
  { href: '/projects', label: 'projects' },
];

function indexOf(pathname: string) {
  if (pathname === '/') return 0;
  return queue.findIndex((q, i) => i > 0 && pathname.startsWith(q.href));
}

// A small floating player: previous / next page, and the page "now playing".
// Tapping the title opens the queue. ← and → also skip.
export default function MiniPlayer() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const index = indexOf(pathname);
  const prev = index > 0 ? queue[index - 1] : null;
  const next = index >= 0 && index < queue.length - 1 ? queue[index + 1] : null;

  useEffect(() => setOpen(false), [pathname]);

  // Close the queue on outside click or Escape
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // ← / → skip to the previous / next page
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
      const t = e.target as HTMLElement;
      if (t.closest('input, textarea, select, [contenteditable="true"]') || document.querySelector('dialog[open]')) return;
      if (e.key === 'ArrowRight' && next) router.push(next.href);
      if (e.key === 'ArrowLeft' && prev) router.push(prev.href);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev, router]);

  const current = index >= 0 ? queue[index].label : 'unknown track';

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-[calc(1rem+env(safe-area-inset-bottom))]">
      <div ref={rootRef} className="pointer-events-auto relative">
        {open && (
          <div className="absolute bottom-full left-1/2 mb-2 w-60 -translate-x-1/2">
            <div
              id="queue"
              className="origin-bottom rounded-2xl border border-line bg-surface/95 p-2 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.55)] backdrop-blur-md"
              style={{ animation: 'pop-in 0.2s var(--ease-out)' }}
            >
              <p className="credit px-3 pb-1 pt-1.5">queue</p>
              <ol aria-label="Pages">
              {queue.map((q, i) => (
                <li key={q.href}>
                  <Link
                    href={q.href}
                    aria-current={i === index ? 'page' : undefined}
                    className={`flex min-h-[44px] items-center gap-3 rounded-xl px-3 text-[17px] transition-colors hover:bg-ink/5 ${
                      i === index ? 'text-accent' : ''
                    }`}
                  >
                    <span className="w-5 font-mono text-[12px] text-muted">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-serif italic">{q.label}</span>
                  </Link>
                </li>
              ))}
              </ol>
            </div>
          </div>
        )}

        <nav
          aria-label="Player"
          className="flex items-center gap-0.5 rounded-full border border-line bg-surface/85 p-1 shadow-[0_16px_40px_-18px_rgba(0,0,0,0.6)] backdrop-blur-md"
        >
          <Skip direction="prev" target={prev} />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="queue"
            aria-label={`Now playing: ${current}. Show all pages`}
            className="flex h-10 items-center gap-2.5 rounded-full px-4 transition-[background-color,transform] duration-150 hover:bg-ink/5 active:scale-[0.97]"
          >
            <span aria-hidden="true" className="flex h-3 items-end gap-[2px]">
              {[0, 0.3, 0.15].map((d) => (
                <span key={d} className="h-full w-[2.5px] origin-bottom animate-bar rounded-full bg-accent" style={{ animationDelay: `${d}s` }} />
              ))}
            </span>
            <span className="credit hidden sm:inline">now playing</span>
            <span className="font-serif text-[17px] italic">{current}</span>
          </button>
          <Skip direction="next" target={next} />
        </nav>
      </div>
    </div>
  );
}

function Skip({ direction, target }: { direction: 'prev' | 'next'; target: { href: string; label: string } | null }) {
  const icon =
    direction === 'prev' ? (
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
        <path d="M3 2h2v12H3zM14 2v12L6 8z" />
      </svg>
    ) : (
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
        <path d="M11 2h2v12h-2zM2 2v12l8-6z" />
      </svg>
    );
  const base = 'flex h-10 w-10 items-center justify-center rounded-full';
  if (!target) {
    return <span className={`${base} text-muted/40`}>{icon}</span>;
  }
  return (
    <Link
      href={target.href}
      aria-label={`${direction === 'prev' ? 'Previous' : 'Next'}: ${target.label}`}
      title={`${direction === 'prev' ? '←' : '→'} ${target.label}`}
      className={`${base} text-muted transition-[color,background-color,transform] duration-150 hover:bg-ink/5 hover:text-ink active:scale-[0.95]`}
    >
      {icon}
    </Link>
  );
}
