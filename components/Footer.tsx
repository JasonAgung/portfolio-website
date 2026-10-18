import { socials } from '@/content/profile';

export default function Footer() {
  return (
    <footer className="mt-24 border-t-2 border-dashed border-line">
      <div className="container-page py-12">
        <p className="text-muted">
          <span className="text-sage">~$</span> exit
        </p>
        <p className="text-muted">logout</p>
        <p className="mt-4 max-w-xl font-display text-xl font-bold leading-snug sm:text-2xl">
          Thanks for stopping by the museum.
          <br />
          <span className="text-muted">Connection to jason closed.</span>
        </p>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {socials.map((s) => (
            <li key={s.name}>
              <a
                href={s.href}
                className="link"
                {...(s.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {s.handle}
              </a>
            </li>
          ))}
        </ul>
        <p className="comment mt-10 text-sm">
          {'// '}© 2026 Jason Kelvin Agung. Built with Next.js, set in Martian Mono and Victor Mono.
        </p>
      </div>
    </footer>
  );
}
