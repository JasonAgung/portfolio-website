import Image from 'next/image';
import Link from 'next/link';
import Terminal from '@/components/Terminal';
import { hasCv } from '@/lib/cv';
import { now, profile } from '@/content/profile';
import { projects } from '@/content/projects';

const nowColors = ['text-sage', 'text-sky', 'text-blush'];

export default function Home() {
  const cv = hasCv();
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="container-page">
      {/* Hero */}
      <section className="grid items-center gap-x-14 gap-y-12 pt-14 sm:pt-20 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="label">
            <span className="text-sage">●</span> {profile.location}
          </p>
          <h1 className="mt-4 font-mono text-[clamp(2.6rem,7vw,4.6rem)] font-extrabold leading-[0.95] tracking-tight [font-stretch:112.5%]">
            Jason
            <br />
            Kelvin
            <br />
            Agung<span aria-hidden="true" className="cursor-block ml-2" />
          </h1>
          <p className="mt-7 text-[20px] font-semibold leading-snug">
            {profile.role} at{' '}
            <a href="https://deushcs.com/" target="_blank" rel="noopener noreferrer" className="link">
              {profile.company}
            </a>
          </p>
          <p className="mt-3 max-w-md text-muted">
            Hiii 👋, sooo this is the page where you’ll find everything about me (kinda). Think of it as a little digital
            museum of my life (don’t worry, I’m not dead yet).
          </p>
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

        <div className="lg:col-span-7">
          <Terminal hasCv={cv} />
        </div>
      </section>

      {/* Right now */}
      <section className="mt-28" aria-labelledby="now-heading">
        <h2 id="now-heading" className="font-mono text-[clamp(1.5rem,3vw,2rem)] font-extrabold tracking-tight [font-stretch:112.5%]">
          Right now<span className="text-blush">.</span>
        </h2>
        <ul className="mt-8 grid gap-8 md:grid-cols-3">
          {now.map((n, i) => (
            <li key={n.label} className="border-t-2 border-ink pt-4">
              <p className={`font-mono text-[13px] font-semibold [font-stretch:87.5%] ${nowColors[i]}`}>{n.label}</p>
              <p className="mt-2 text-[17px] leading-relaxed">{n.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Selected projects */}
      <section className="mt-28" aria-labelledby="projects-heading">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="projects-heading" className="font-mono text-[clamp(1.5rem,3vw,2rem)] font-extrabold tracking-tight [font-stretch:112.5%]">
            Selected projects<span className="text-blush">.</span>
          </h2>
          <Link href="/projects" className="link text-[16px]">
            See all {projects.length} projects
          </Link>
        </div>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/projects#${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border-2 border-ink bg-raised transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-hard"
              >
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
                <div className="flex flex-1 flex-col p-5">
                  {p.context && <p className="label">{p.context}</p>}
                  <h3 className="mt-2 text-[19px] font-bold leading-snug group-hover:underline">{p.title}</h3>
                  <p className="mt-2 text-[16px] text-muted">{p.summary}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
