'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import Cover from '@/components/Cover';
import PageHeader from '@/components/PageHeader';
import TrackRow from '@/components/TrackRow';
import { linkLabel, projects, type Project } from '@/content/projects';

const sides = [
  { id: 'a' as const, label: 'side a', note: 'work and research' },
  { id: 'b' as const, label: 'side b', note: 'made for fun, or for class' },
];

export default function ProjectsClient() {
  const [open, setOpen] = useState<string | null>(null);
  const [zoomed, setZoomed] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Deep links like /projects#tango-solver open that track.
  useEffect(() => {
    const fromHash = () => {
      const slug = decodeURIComponent(window.location.hash.slice(1));
      if (projects.some((p) => p.slug === slug)) {
        setOpen(slug);
        requestAnimationFrame(() => document.getElementById(`track-${slug}`)?.scrollIntoView({ block: 'start' }));
      }
    };
    fromHash();
    window.addEventListener('hashchange', fromHash);
    return () => window.removeEventListener('hashchange', fromHash);
  }, []);

  const toggle = useCallback((slug: string) => {
    setOpen((cur) => {
      const next = cur === slug ? null : slug;
      history.replaceState(null, '', next ? `#${next}` : window.location.pathname);
      return next;
    });
  }, []);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (zoomed && !d.open) d.showModal();
    if (!zoomed && d.open) d.close();
  }, [zoomed]);

  return (
    <div className="container-page">
      <PageHeader title="projects">
        The full tracklist. Side A is work and research, side B is what I made for fun or for class. Open any track for the
        details.
      </PageHeader>

      {sides.map((side) => (
        <section key={side.id} className="mb-20" aria-labelledby={`side-${side.id}`}>
          <h2 id={`side-${side.id}`} className="flex items-baseline gap-3 border-b border-line pb-3">
            <span className="font-serif text-[clamp(1.6rem,3vw,2.1rem)] italic">{side.label}</span>
            <span className="credit">{side.note}</span>
          </h2>
          <ol>
            {projects.map((p, i) =>
              p.side !== side.id ? null : (
                <li key={p.slug} id={`track-${p.slug}`} className="scroll-mt-6 border-b border-line">
                  <button
                    type="button"
                    onClick={() => toggle(p.slug)}
                    aria-expanded={open === p.slug}
                    aria-controls={`details-${p.slug}`}
                    className="group block w-full py-6 text-left"
                  >
                    <TrackRow project={p} number={i + 1} />
                  </button>
                  {open === p.slug && <Details project={p} onZoom={setZoomed} />}
                </li>
              ),
            )}
          </ol>
        </section>
      ))}

      <dialog
        ref={dialogRef}
        onClose={() => setZoomed(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setZoomed(null);
        }}
        aria-label={zoomed ? `Screenshot of ${zoomed.title}` : 'Screenshot'}
        className="m-auto w-[min(94vw,1200px)] overflow-hidden rounded-[4px] bg-surface p-0 text-ink backdrop:bg-black/80"
      >
        {zoomed?.image && (
          <div>
            <div className="flex items-center justify-between gap-4 px-5 py-3">
              <span className="truncate font-serif text-[18px] lowercase italic">{zoomed.title}</span>
              <button type="button" onClick={() => setZoomed(null)} className="btn min-h-[38px] px-4" autoFocus>
                close
              </button>
            </div>
            <div className="relative h-[78vh] bg-bg">
              <Image src={zoomed.image} alt={zoomed.imageAlt ?? ''} fill sizes="94vw" className="object-contain" />
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}

function Details({ project: p, onZoom }: { project: Project; onZoom: (p: Project) => void }) {
  return (
    <div id={`details-${p.slug}`} className="grid gap-8 pb-10 sm:pl-[4rem] md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-12">
      {p.image ? (
        <button
          type="button"
          onClick={() => onZoom(p)}
          className="group relative block aspect-[16/10] w-full self-start overflow-hidden rounded-[3px] bg-surface shadow-[0_24px_50px_-28px_rgba(0,0,0,0.6)]"
          aria-label={`Enlarge screenshot of ${p.title}`}
        >
          <Image src={p.image} alt={p.imageAlt ?? ''} fill sizes="(min-width: 768px) 480px, 100vw" className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]" />
        </button>
      ) : (
        <div className="max-w-[320px] self-start">
          <Cover title={p.title.toLowerCase()} bottomLeft={p.kind.toLowerCase()} bottomRight={p.context?.toLowerCase()} />
        </div>
      )}

      <div>
        <p className="max-w-[60ch] text-[18px] leading-relaxed">{p.description}</p>
        <dl className="mt-6 grid grid-cols-[7.5rem_1fr] gap-x-4 gap-y-2 text-[16px]">
          <dt className="credit pt-0.5">recorded at</dt>
          <dd>{p.context ?? 'On my own'}</dd>
          <dt className="credit pt-0.5">instruments</dt>
          <dd>{p.technologies.join(', ')}</dd>
          <dt className="credit pt-0.5">status</dt>
          <dd>{p.status === 'ongoing' ? 'Ongoing' : 'Completed'}</dd>
        </dl>
        {p.link && (
          <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn btn-solid mt-7">
            {linkLabel(p.link)}
          </a>
        )}
      </div>
    </div>
  );
}
