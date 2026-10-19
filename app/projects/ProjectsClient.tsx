'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { linkLabel, projects, type Project } from '@/content/projects';

const posterColors = ['bg-pastel-sky', 'bg-pastel-butter', 'bg-pastel-blush', 'bg-pastel-sage'];

export default function ProjectsClient() {
  const [selected, setSelected] = useState(projects[0].slug);
  const [zoomed, setZoomed] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Deep links like /projects#tango-solver open that project.
  useEffect(() => {
    const fromHash = () => {
      const slug = decodeURIComponent(window.location.hash.slice(1));
      if (projects.some((p) => p.slug === slug)) {
        setSelected(slug);
        requestAnimationFrame(() => document.getElementById(`row-${slug}`)?.scrollIntoView({ block: 'center' }));
      }
    };
    fromHash();
    window.addEventListener('hashchange', fromHash);
    return () => window.removeEventListener('hashchange', fromHash);
  }, []);

  const select = useCallback((slug: string) => {
    setSelected(slug);
    history.replaceState(null, '', `#${slug}`);
  }, []);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (zoomed && !d.open) d.showModal();
    if (!zoomed && d.open) d.close();
  }, [zoomed]);

  const current = projects.find((p) => p.slug === selected) ?? projects[0];

  return (
    <div className="container-page">
      <PageHeader path="projects" title="Projects">
        Things I’ve built, researched and taught. Pick one to see the details.
      </PageHeader>

      <div className="grid items-start gap-10 lg:grid-cols-12">
        <ul className="space-y-1 lg:col-span-5">
          {projects.map((p) => {
            const active = p.slug === selected;
            return (
              <li key={p.slug} id={`row-${p.slug}`} className="scroll-mt-24">
                <button
                  type="button"
                  onClick={() => select(p.slug)}
                  aria-expanded={active}
                  aria-controls={`details-${p.slug}`}
                  className={`group w-full rounded-lg border-2 px-4 py-3 text-left transition-colors ${
                    active ? 'border-ink bg-blush-soft' : 'border-transparent hover:bg-raised'
                  }`}
                >
                  <span className="flex items-baseline justify-between gap-3">
                    <span className="text-[17px] font-semibold leading-snug">{p.title}</span>
                    <span className="label shrink-0">{p.kind}</span>
                  </span>
                  <span className="mt-1 block text-[15px] leading-snug text-muted">
                    {p.status === 'ongoing' && <span className="mr-2 font-semibold text-butter">Ongoing</span>}
                    {p.summary}
                  </span>
                </button>
                {active && (
                  <div className="mb-6 mt-3 lg:hidden">
                    <Details id={`details-${p.slug}`} project={p} onZoom={setZoomed} />
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div className="sticky top-24 hidden lg:col-span-7 lg:block">
          <Details project={current} onZoom={setZoomed} />
        </div>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setZoomed(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setZoomed(null);
        }}
        aria-label={zoomed ? `Screenshot of ${zoomed.title}` : 'Screenshot'}
        className="m-auto w-[min(94vw,1200px)] overflow-hidden rounded-xl border-2 border-ink bg-raised p-0 text-ink shadow-hard backdrop:bg-[#11140F]/80"
      >
        {zoomed?.image && (
          <div>
            <div className="flex items-center justify-between gap-4 border-b-2 border-ink px-4 py-2">
              <span className="truncate text-[15px] font-semibold">{zoomed.title}</span>
              <button type="button" onClick={() => setZoomed(null)} className="rounded-md px-3 py-1.5 font-mono text-[13px] hover:bg-blush-soft" autoFocus>
                Close
              </button>
            </div>
            <div className="relative h-[78vh] bg-paper">
              <Image src={zoomed.image} alt={zoomed.imageAlt ?? ''} fill sizes="94vw" className="object-contain" />
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}

function Details({ id, project: p, onZoom }: { id?: string; project: Project; onZoom: (p: Project) => void }) {
  const poster = posterColors[p.slug.length % posterColors.length];
  return (
    <article id={id} aria-live="polite" className="overflow-hidden rounded-xl border-2 border-ink bg-raised shadow-hard">
      {p.image ? (
        <button
          type="button"
          onClick={() => onZoom(p)}
          className="group relative block aspect-[16/10] w-full border-b-2 border-ink bg-paper"
          aria-label={`Enlarge screenshot of ${p.title}`}
        >
          <Image src={p.image} alt={p.imageAlt ?? ''} fill sizes="(min-width: 1024px) 640px, 100vw" className="object-cover object-top" />
          <span className="absolute bottom-3 right-3 rounded-md bg-[#11140F]/80 px-2.5 py-1 font-mono text-[12px] text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            Click to enlarge
          </span>
        </button>
      ) : (
        <div className={`flex aspect-[16/10] items-end border-b-2 border-ink p-6 text-[#22281F] sm:p-8 ${poster}`}>
          <p className="font-mono text-[clamp(1.2rem,2.6vw,1.9rem)] font-extrabold leading-tight [font-stretch:100%]">{p.summary}</p>
        </div>
      )}

      <div className="p-5 sm:p-7">
        <p className="label flex flex-wrap gap-x-3">
          {p.context && <span>{p.context}</span>}
          <span className={p.status === 'ongoing' ? 'text-butter' : 'text-sage'}>{p.status === 'ongoing' ? 'Ongoing' : 'Completed'}</span>
        </p>
        <h2 className="mt-2 text-[clamp(1.3rem,2.4vw,1.6rem)] font-bold leading-tight">{p.title}</h2>
        <p className="mt-3 max-w-[65ch] text-[17px] leading-relaxed">{p.description}</p>

        <p className="label mt-6">Built with</p>
        <ul className="mt-2 flex flex-wrap gap-1.5">
          {p.technologies.map((t) => (
            <li key={t} className="rounded-full bg-sage-soft/70 px-3 py-1 text-[14px]">
              {t}
            </li>
          ))}
        </ul>

        {p.link && (
          <a href={p.link} target="_blank" rel="noopener noreferrer" className="keycap keycap-primary mt-7">
            {linkLabel(p.link)}
          </a>
        )}
      </div>
    </article>
  );
}
