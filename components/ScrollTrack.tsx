'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

const WORDS_PER_MINUTE = 200;

function clock(seconds: number) {
  const s = Math.max(0, Math.round(seconds));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

// Reading the page is "playing" it: a thin progress line along the top, and a small
// "1:24 / 3:05" chip. The length of the song is the page's estimated reading time.
// Updates go straight to the DOM (no React re-render per scroll frame).
export default function ScrollTrack() {
  const pathname = usePathname();
  const barRef = useRef<HTMLDivElement>(null);
  const chipRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef<HTMLSpanElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const main = document.getElementById('main');
    const words = main?.innerText.split(/\s+/).filter(Boolean).length ?? 0;
    const duration = Math.max(30, Math.round((words / WORDS_PER_MINUTE) * 60));
    let frame = 0;
    let idle: ReturnType<typeof setTimeout> | undefined;

    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`;
      if (timeRef.current) timeRef.current.textContent = `${clock(progress * duration)} / ${clock(duration)}`;
      if (chipRef.current) chipRef.current.dataset.visible = String(window.scrollY > 120);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
      if (iconRef.current) iconRef.current.dataset.playing = 'true';
      clearTimeout(idle);
      idle = setTimeout(() => {
        if (iconRef.current) iconRef.current.dataset.playing = 'false';
      }, 900);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
      clearTimeout(idle);
    };
  }, [pathname]);

  return (
    <>
      <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px]">
        <div ref={barRef} className="h-full origin-left bg-accent" style={{ transform: 'scaleX(0)' }} />
      </div>
      <div
        ref={chipRef}
        aria-hidden="true"
        data-visible="false"
        className="pointer-events-none fixed right-4 top-3 z-[60] flex items-center gap-2 rounded-full border border-line bg-surface/85 px-3 py-1.5 font-mono text-[11.5px] tabular-nums text-muted opacity-0 backdrop-blur-md transition-[opacity,transform] duration-200 [transition-timing-function:var(--ease-out)] data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 sm:right-6 [&:not([data-visible=true])]:-translate-y-1"
      >
        <span ref={iconRef} data-playing="false" className="group/icon relative inline-flex h-2.5 w-2.5 text-accent">
          {/* play while scrolling, pause when still */}
          <svg viewBox="0 0 10 10" className="absolute inset-0 fill-current opacity-0 transition-opacity duration-150 group-data-[playing=true]/icon:opacity-100">
            <path d="M2 1v8l7-4z" />
          </svg>
          <svg viewBox="0 0 10 10" className="absolute inset-0 fill-current opacity-100 transition-opacity duration-150 group-data-[playing=true]/icon:opacity-0">
            <path d="M2 1h2v8H2zM6 1h2v8H6z" />
          </svg>
        </span>
        <span ref={timeRef}>0:00 / 0:30</span>
      </div>
    </>
  );
}
