'use client';

import Link from 'next/link';
import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { commits, type Commit, type Lane } from '@/content/experience';

type Filter = 'all' | Lane;

const filters: { id: Filter; label: string; dot?: string }[] = [
  { id: 'all', label: '--all' },
  { id: 'main', label: 'main (work)', dot: 'bg-sage' },
  { id: 'org', label: 'org (community)', dot: 'bg-blush' },
];

// Lane centres inside the 56px gutter
const X = { main: 14, org: 40 };
const DOT_TOP = 10;

export default function ExperienceClient() {
  const [filter, setFilter] = useState<Filter>('all');
  const shown = filter === 'all' ? commits : commits.filter((c) => c.lane === filter);
  const branching = filter === 'all';
  const lastOrg = branching ? shown.map((c) => c.lane).lastIndexOf('org') : -1;

  return (
    <div className="container-page">
      <PageHeader path="~/experience" command="git log --graph --all" title="Experience">
        Every job and organisation I’ve been part of, as a git history. Work lives on <span className="font-semibold text-sage">main</span>;
        organisations and community have their own <span className="font-semibold text-blush">org</span> branch.
      </PageHeader>

      <div role="group" aria-label="Filter history" className="mb-12 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
            className={`inline-flex min-h-[40px] items-center gap-2 rounded-md border-2 border-ink px-3.5 text-[14px] font-semibold transition-[transform,box-shadow] duration-100 ${
              filter === f.id ? 'bg-ink text-paper' : 'bg-raised shadow-hard-sm hover:-translate-y-px'
            }`}
          >
            {f.dot && <span aria-hidden="true" className={`h-2.5 w-2.5 rounded-full ${f.dot}`} />}
            {f.label}
          </button>
        ))}
      </div>

      <ol aria-label="Experience, most recent first">
        {shown.map((c, i) => {
          const lane: Lane = branching ? c.lane : 'main';
          const orgLine = branching && i <= lastOrg;
          return (
            <li key={c.hash}>
              <div className="flex">
                <Gutter
                  first={i === 0}
                  last={i === shown.length - 1 && !(i === lastOrg)}
                  lane={lane}
                  color={c.lane}
                  orgLine={orgLine}
                  orgEnds={i === lastOrg}
                  milestone={c.milestone}
                />
                <CommitBody commit={c} />
              </div>
              {i === lastOrg && <Fork />}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function Gutter({
  first,
  last,
  lane,
  color,
  orgLine,
  orgEnds,
  milestone,
}: {
  first: boolean;
  last: boolean;
  lane: Lane;
  color: Lane;
  orgLine: boolean;
  orgEnds: boolean;
  milestone?: boolean;
}) {
  const dotColor = milestone ? 'bg-paper' : color === 'org' ? 'bg-blush' : 'bg-sage';
  return (
    <div aria-hidden="true" className="relative w-14 shrink-0">
      {/* main line */}
      <span
        className="absolute w-[2px] bg-sage"
        style={{ left: X.main - 1, top: first ? DOT_TOP + 8 : 0, bottom: last ? 'auto' : 0, height: last ? DOT_TOP + 8 : undefined }}
      />
      {/* org line */}
      {orgLine && (
        <span
          className="absolute w-[2px] bg-blush"
          style={{ left: X.org - 1, top: 0, bottom: orgEnds ? 'auto' : 0, height: orgEnds ? DOT_TOP + 8 : undefined }}
        />
      )}
      <span
        className={`absolute h-4 w-4 rounded-full border-2 border-ink ${dotColor} ${milestone ? 'ring-4 ring-butter-soft' : ''}`}
        style={{ left: X[lane] - 8, top: DOT_TOP }}
      />
    </div>
  );
}

// The org branch splitting off main, drawn below its oldest commit.
function Fork() {
  return (
    <div aria-hidden="true" className="relative h-10 w-14">
      <span className="absolute inset-y-0 w-[2px] bg-sage" style={{ left: X.main - 1 }} />
      <svg className="absolute inset-0" width="56" height="40" viewBox="0 0 56 40" fill="none">
        <path d={`M${X.org} 0 C${X.org} 22, ${X.main} 18, ${X.main} 40`} stroke="rgb(var(--blush))" strokeWidth="2" />
      </svg>
    </div>
  );
}

function CommitBody({ commit: c }: { commit: Commit }) {
  return (
    <article className="min-w-0 flex-1 pb-14">
      <p className="text-[14px] leading-6">
        <span className="text-butter">{c.hash}</span>{' '}
        {c.refs?.map((r) => (
          <span
            key={r}
            className={`mr-1.5 inline-block rounded px-1.5 text-[12px] font-semibold leading-5 ${
              r.startsWith('HEAD') ? 'bg-sky-soft text-sky' : r.startsWith('tag') ? 'bg-butter-soft text-butter' : 'bg-blush-soft text-blush'
            }`}
          >
            {r}
          </span>
        ))}
        <span className="text-muted">
          {c.type}({c.scope})
        </span>
      </p>
      <h2 className="mt-2 font-display text-[clamp(1.25rem,2.6vw,1.6rem)] font-extrabold leading-tight [font-stretch:112.5%]">
        {c.role}
      </h2>
      <p className="mt-1 text-[15px]">
        {c.orgLink ? (
          <a href={c.orgLink} target="_blank" rel="noopener noreferrer" className="link font-semibold">
            {c.org}
          </a>
        ) : (
          <span className="font-semibold">{c.org}</span>
        )}
        <span className="text-muted">
          {'  '}
          {c.period}
          {c.location && `, ${c.location}`}
        </span>
      </p>

      <ul className="mt-4 max-w-3xl space-y-1.5">
        {c.bullets.map((b) => (
          <li
            key={b}
            className={`flex gap-3 rounded px-3 py-1.5 text-[15px] leading-relaxed ${
              c.lane === 'org' ? 'bg-blush-soft/45' : 'bg-sage-soft/45'
            }`}
          >
            <span aria-hidden="true" className={`select-none font-bold ${c.lane === 'org' ? 'text-blush' : 'text-sage'}`}>
              +
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {c.initiatives && (
        <div className="mt-5 max-w-xl">
          <p className="comment text-sm">{'// '}key initiatives</p>
          <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-[14px]">
            {c.initiatives.map((it) => (
              <div key={it.name} className="contents">
                <dt className="font-semibold">{it.name}</dt>
                <dd className="text-muted">
                  <span aria-hidden="true" className="mr-2 text-line">
                    |
                  </span>
                  {it.role}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      {c.more && (
        <p className="mt-4 text-[15px]">
          <Link href={c.more.href} className="link">
            {c.more.label}
          </Link>
        </p>
      )}
    </article>
  );
}
