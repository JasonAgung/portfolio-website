'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NotFound() {
  const pathname = usePathname();
  return (
    <div className="container-page pt-20">
      <p className="text-[15px] text-muted">
        <span className="text-sage">jason@bandung</span>:<span className="text-sky">~</span>$ cd {pathname}
      </p>
      <p className="mt-1 text-blush">cd: no such file or directory: {pathname}</p>
      <h1 className="mt-8 font-display text-[clamp(4rem,16vw,10rem)] font-extrabold leading-none [font-stretch:112.5%]">
        404<span aria-hidden="true" className="cursor-block ml-3" />
      </h1>
      <p className="mt-6 max-w-lg text-[17px]">This room of the museum doesn’t exist (yet). Try one of these instead:</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="keycap keycap-primary">
          cd ~
        </Link>
        <Link href="/projects" className="keycap">
          cd projects
        </Link>
        <Link href="/experience" className="keycap">
          cd experience
        </Link>
      </div>
    </div>
  );
}
