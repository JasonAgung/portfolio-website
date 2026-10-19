import Image from 'next/image';
import type { Project } from '@/content/projects';

// One line of a tracklist: number, title, a short line, and where it was "recorded".
export default function TrackRow({ project: p, number, showPeek = false }: { project: Project; number: number; showPeek?: boolean }) {
  return (
    <span className="relative grid grid-cols-[2.25rem_1fr] items-baseline gap-x-4 sm:grid-cols-[3rem_1fr_auto]">
      <span className="relative font-mono text-[13px] text-muted">
        {/* The number turns into a play button on hover, like a music app */}
        <span className="inline-block transition-[opacity,transform] duration-200 ease-out group-hover:scale-75 group-hover:opacity-0 group-focus-visible:scale-75 group-focus-visible:opacity-0">
          {String(number).padStart(2, '0')}
        </span>
        <svg
          aria-hidden="true"
          viewBox="0 0 12 12"
          className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 scale-75 fill-accent opacity-0 transition-[opacity,transform] duration-200 ease-out group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100"
        >
          <path d="M2.5 1.2v9.6L10.5 6z" />
        </svg>
      </span>
      <span className="min-w-0">
        <span className="block font-serif text-[clamp(1.25rem,2.4vw,1.6rem)] lowercase leading-snug transition-colors group-hover:text-accent">
          {p.title}
          {p.status === 'ongoing' && <span className="credit ml-3 align-middle text-accent">ongoing</span>}
        </span>
        <span className="mt-1 block text-[17px] leading-snug text-muted">{p.summary}</span>
      </span>
      <span className="credit col-start-2 mt-2 sm:col-start-auto sm:mt-0 sm:text-right">{p.context ?? 'on my own'}</span>
      {showPeek && p.image && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-44 top-1/2 hidden w-44 -translate-y-[45%] rotate-[4deg] scale-95 overflow-hidden rounded-[3px] opacity-0 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)] transition-[opacity,transform] duration-500 [transition-timing-function:var(--ease-out)] group-hover:-translate-y-1/2 group-hover:rotate-2 group-hover:scale-100 group-hover:opacity-100 lg:block"
        >
          <Image src={p.image} alt="" width={176} height={110} className="aspect-[16/10] object-cover object-top" />
        </span>
      )}
    </span>
  );
}
