import type { Metadata } from 'next';
import Cover from '@/components/Cover';
import PageHeader from '@/components/PageHeader';
import { education, interests, languages, profile, skills } from '@/content/profile';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Jason Kelvin Agung: computer science graduate from UNPAR and AI Implementation Specialist in Bandung. Skills, interests, education and how to get in touch.',
};

export default function AboutPage() {
  return (
    <div className="container-page">
      <PageHeader title="about">The liner notes: who I am, what I play, and where I learned it.</PageHeader>

      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="mx-auto max-w-[340px] lg:sticky lg:top-10">
            <Cover title="liner notes" topRight="jka" bottomLeft="written in bandung" bottomRight="2026" />
          </div>
        </div>

        <div className="lg:col-span-8">
          <section aria-labelledby="hello">
            <h2 id="hello" className="font-serif text-[clamp(1.8rem,3.5vw,2.5rem)] italic leading-tight">
              Hi, I’m Jason.
            </h2>
            <div className="mt-6 max-w-[58ch] space-y-5 text-[20px] leading-[1.7]">
              <p>
                I’m a computer science graduate from UNPAR who gets excited about artificial intelligence, making code
                fast, and building software properly. These days I’m putting generative AI to work at DEUS, turning
                personality data into reports that feel written for one person.
              </p>
              <p>
                I also like the people side of tech. I’ve organised workshops, mentored students, and I enjoy explaining
                complicated things until they make sense to anyone in the room. Outside of work you’ll usually find me
                playing music, or stuck on a logic puzzle.
              </p>
            </div>
            <p className="mt-6 font-serif text-[22px] italic text-accent">jason</p>
          </section>

          <section className="mt-20" aria-labelledby="credits">
            <h2 id="credits" className="border-b border-line pb-3 font-serif text-[clamp(1.6rem,3vw,2.1rem)] italic">
              credits
            </h2>
            <dl className="divide-y divide-line">
              {skills.map((s) => (
                <Credit key={s.group} label={s.group}>
                  {s.items.join(', ')}
                </Credit>
              ))}
              <Credit label="languages">{languages.join(', ')}</Credit>
              <Credit label="on repeat">
                {interests.map((i, idx) => (
                  <span key={i.name}>
                    {i.href ? (
                      <a href={i.href} target="_blank" rel="noopener noreferrer" className="link">
                        {i.name}
                      </a>
                    ) : (
                      i.name
                    )}
                    {idx < interests.length - 1 && ', '}
                  </span>
                ))}
              </Credit>
              <Credit label="contact">
                <a href={`mailto:${profile.email}`} className="link break-words">
                  {profile.email}
                </a>
                <br />
                <a href={profile.phoneHref} className="link">
                  {profile.phone}
                </a>
              </Credit>
            </dl>
          </section>

          <section id="education" className="mt-20 scroll-mt-10" aria-labelledby="education-heading">
            <h2 id="education-heading" className="border-b border-line pb-3 font-serif text-[clamp(1.6rem,3vw,2.1rem)] italic">
              education
            </h2>
            <ol className="divide-y divide-line">
              {education.map((e) => (
                <li key={e.school} className="grid gap-x-6 gap-y-1 py-6 sm:grid-cols-[10rem_1fr]">
                  <p className="font-mono text-[13px] text-muted">{e.period.toLowerCase()}</p>
                  <div>
                    <h3 className="font-serif text-[clamp(1.2rem,2.2vw,1.5rem)] leading-snug">{e.school}</h3>
                    <p className="text-[17px] text-muted">{e.degree}</p>
                    {e.detail && <p className="mt-3 text-[18px]">{e.detail}</p>}
                    {e.thesis && (
                      <p className="mt-2 max-w-[60ch] text-[18px]">
                        <span className="italic">Thesis:</span> {e.thesis}
                      </p>
                    )}
                    {e.focus && (
                      <dl className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-[9rem_1fr]">
                        {e.focus.map((f) => (
                          <div key={f.area} className="contents">
                            <dt className="credit pt-0.5">{f.area}</dt>
                            <dd className="text-[16px] text-muted">{f.subjects}</dd>
                          </div>
                        ))}
                      </dl>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}

function Credit({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-x-6 gap-y-1 py-5 sm:grid-cols-[10rem_1fr]">
      <dt className="credit pt-1">{label}</dt>
      <dd className="text-[18px] leading-relaxed">{children}</dd>
    </div>
  );
}
