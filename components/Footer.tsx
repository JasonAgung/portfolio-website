import { profile, socials } from '@/content/profile';

export default function Footer() {
  return (
    <footer className="mt-28 border-t border-line">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 md:items-end">
        <div>
          <p className="label">Get in touch</p>
          <p className="mt-3 font-mono text-[clamp(1.3rem,2.6vw,1.75rem)] font-extrabold leading-snug [font-stretch:112.5%]">
            Thanks for visiting<span className="text-blush">.</span>
          </p>
          <p className="mt-2 text-[18px]">
            Say hi at{' '}
            <a href={`mailto:${profile.email}`} className="link break-words">
              {profile.email}
            </a>
          </p>
        </div>
        <div className="md:text-right">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
            {socials
              .filter((s) => s.name !== 'Email')
              .map((s) => (
                <li key={s.name}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="link">
                    {s.name}
                  </a>
                </li>
              ))}
          </ul>
          <p className="label mt-6">© 2026 Jason Kelvin Agung</p>
        </div>
      </div>
    </footer>
  );
}
