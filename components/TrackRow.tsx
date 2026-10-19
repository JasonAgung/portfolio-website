import Image from 'next/image';
import type { Project } from '@/content/projects';

// One line of a tracklist: number, title, a short line, and where it was "recorded".
export default function TrackRow({ project: p, number, showPeek = false }: { project: Project; number: number; showPeek?: boolean }) {
  return (
    <span className="relative grid grid-cols-[2.25rem_1fr] items-baseline gap-x-4 sm:grid-cols-[3rem_1fr_auto]">
      <span className="font-mono text-[13px] text-muted">{String(number).padStart(2, '0')}</span>
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
          className="pointer-events-none absolute right-44 top-1/2 hidden w-44 -translate-y-1/2 rotate-2 overflow-hidden rounded-[3px] opacity-0 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)] transition-[opacity,transform] duration-300 group-hover:-translate-y-[55%] group-hover:opacity-100 lg:block"
        >
          <Image src={p.image} alt="" width={176} height={110} className="aspect-[16/10] object-cover object-top" />
        </span>
      )}
    </span>
  );
}
