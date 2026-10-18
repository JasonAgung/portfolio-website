import Image from 'next/image';
import Link from 'next/link';
import Terminal from '@/components/Terminal';
import { hasCv } from '@/lib/cv';
import { now, profile } from '@/content/profile';
import { projects } from '@/content/projects';
import { commits } from '@/content/experience';

const stickers = [
  { text: 'made in bandung', className: 'bg-pastel-sky -rotate-3 lg:-top-5 lg:left-8' },
  { text: 'unpar cs ’26', className: 'bg-pastel-butter rotate-2 lg:-top-3 lg:right-10' },
  { text: 'plays in a band', className: 'bg-pastel-blush rotate-3 lg:top-[342px] lg:right-12' },
  { text: 'logic puzzle nerd', className: 'bg-pastel-sage -rotate-2 lg:top-[344px] lg:-left-4' },
];

const tilt = ['-rotate-1', 'rotate-1', '-rotate-[0.6deg]'];

export default function Home() {
  const cv = hasCv();
  const featured = projects.filter((p) => p.featured);
  const recent = commits.slice(0, 4);

  return (
    <div className="container-page">
      {/* Hero */}
      <section className="grid items-center gap-x-12 gap-y-14 pt-14 sm:pt-20 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="comment">{'// '}hello, world</p>
          <h1 className="mt-2 font-display text-[clamp(2.9rem,8vw,5.4rem)] font-extrabold leading-[0.92] tracking-tight [font-stretch:112.5%]">
            Jason
            <br />
            Kelvin
            <br />
            Agung<span aria-hidden="true" className="cursor-block ml-2" />
          </h1>
          <p className="mt-7 text-lg font-semibold leading-snug">
            {profile.role} at{' '}
            <a href="https://deushcs.com/" target="_blank" rel="noopener noreferrer" className="link">
              {profile.company}
            </a>
            , Bandung.
          </p>
          <p className="mt-4 max-w-md text-muted">
            Hiii 👋, sooo this is the page where you’ll find everything about me (kinda). Think of it as a little digital
            museum of my life.
          </p>
          <p className="comment mt-1">{'// '}don’t worry, i’m not dead yet</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {cv ? (
              <a href={profile.cvPath} className="keycap keycap-primary" download>
                Download CV
              </a>
            ) : (
              <a href={`mailto:${profile.email}`} className="keycap keycap-primary">
                Email me
              </a>
            )}
            <Link href="/projects" className="keycap">
              See projects
            </Link>
          </div>
        </div>

        <div className="relative lg:col-span-7">
          <ul className="mb-6 flex flex-wrap gap-2.5 lg:mb-0" aria-label="A few facts">
            {stickers.map((s) => (
              <li key={s.text} className={`sticker z-10 lg:absolute ${s.className}`}>
                {s.text}
              </li>
            ))}
          </ul>
          <Terminal hasCv={cv} />
        </div>
      </section>

      {/* Right now */}
      <section className="mt-28" aria-labelledby="now-heading">
        <h2 id="now-heading" className="font-display text-3xl font-extrabold tracking-tight [font-stretch:112.5%] sm:text-4xl">
          Right now
        </h2>
        <p className="comment mt-1">{'// '}last updated october 2026</p>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-12">
          {/* now.md in an editor */}
          <div className="overflow-hidden rounded-lg border-2 border-ink bg-raised shadow-hard lg:col-span-7">
            <div className="flex border-b-2 border-ink bg-sage-soft/60 text-[13px]">
              <span className="border-r-2 border-ink bg-raised px-4 py-2 font-semibold">now.md</span>
              <span className="px-4 py-2 text-muted">README.md</span>
            </div>
            <ol className="py-4 text-[15px]">
              <EditorLine n={1}>
                <span className="text-sage"># </span>
                <span className="font-semibold">now</span>
              </EditorLine>
              <EditorLine n={2}>{' '}</EditorLine>
              {now.map((item, i) => (
                <EditorLine key={item.label} n={i + 3}>
                  <span className="text-blush">- </span>
                  <span className="font-semibold text-butter">**{item.label}:**</span> {item.text}
                </EditorLine>
              ))}
            </ol>
          </div>

          {/* git log --oneline */}
          <div className="flex flex-col overflow-hidden rounded-lg border-2 border-[#11140F] bg-term text-[14px] text-term-ink shadow-hard lg:col-span-5">
            <p className="border-b border-term-line px-4 py-2.5 text-[13px] text-term-dim">
              <span className="text-pastel-sage">~$</span> git log --oneline -4
            </p>
            <ul className="flex-1 space-y-2.5 px-4 py-4">
              {recent.map((c) => (
                <li key={c.hash} className="leading-snug">
                  <span className="text-pastel-butter">{c.hash}</span>{' '}
                  {c.refs && <span className="text-pastel-sky">({c.refs.join(', ')}) </span>}
                  <span>
                    {c.type}({c.scope}): {c.role}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/experience"
              className="border-t border-term-line px-4 py-3 text-[13px] text-pastel-blush hover:bg-term-line"
            >
              git log --graph --all <span className="text-term-dim">(see the full history)</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="mt-28" aria-labelledby="exhibits-heading">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="exhibits-heading" className="font-display text-3xl font-extrabold tracking-tight [font-stretch:112.5%] sm:text-4xl">
              On display
            </h2>
            <p className="comment mt-1">{'// '}three favourites from the museum</p>
          </div>
          <Link href="/projects" className="keycap">
            ls ~/projects
          </Link>
        </div>

        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <li key={p.slug}>
              <Link
                href={`/projects#${p.slug}`}
                className={`group block overflow-hidden rounded-lg border-2 border-ink bg-raised shadow-hard transition-transform duration-200 hover:rotate-0 hover:-translate-y-1 ${tilt[i % tilt.length]}`}
              >
                <p className="border-b-2 border-ink px-3 py-1.5 text-[13px] text-muted">{p.slug}/</p>
                {p.image && (
                  <div className="relative aspect-[16/10] border-b-2 border-ink bg-paper">
                    <Image
                      src={p.image}
                      alt={p.imageAlt ?? ''}
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                )}
                <div className="p-4">
                  {p.context && <p className="text-[13px] text-muted">{p.context}</p>}
                  <h3 className="mt-1 font-display text-[17px] font-bold leading-snug group-hover:underline">{p.title}</h3>
                  <p className="mt-2 text-[15px] text-muted">{p.summary}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function EditorLine({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <li className="grid grid-cols-[3rem_1fr] pr-5">
      <span aria-hidden="true" className="select-none pr-4 text-right text-muted/60">
        {n}
      </span>
      <span className="min-w-0">{children}</span>
    </li>
  );
}
