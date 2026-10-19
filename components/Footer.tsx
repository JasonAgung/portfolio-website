import KeyPicker from '@/components/KeyPicker';
import { profile, socials } from '@/content/profile';

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-line pb-24 sm:pb-0">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2">
        <div>
          <p className="font-serif text-[clamp(2rem,4.5vw,3rem)] italic leading-none">thanks for listening.</p>
          <p className="mt-5 text-[18px]">
            Say hi at{' '}
            <a href={`mailto:${profile.email}`} className="link break-words">
              {profile.email}
            </a>
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[13px]">
            {socials
              .filter((s) => s.name !== 'Email')
              .map((s) => (
                <li key={s.name}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="link lowercase">
                    {s.name}
                  </a>
                </li>
              ))}
          </ul>
        </div>
        <div className="md:justify-self-end">
          <KeyPicker />
          <p className="credit mt-3 max-w-[34ch]">
            Pick a key to change this site’s colours, the same way my chord transposer changes a song’s key.
          </p>
          <p className="credit mt-8">© 2026 jason kelvin agung, bandung</p>
        </div>
      </div>
    </footer>
  );
}
