import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-page pt-20">
      <p className="label">
        <span className="text-blush">error</span> 404
      </p>
      <h1 className="mt-3 font-mono text-[clamp(2.2rem,6vw,4.25rem)] font-extrabold leading-[1] tracking-tight [font-stretch:112.5%]">
        Page not found<span className="text-blush">.</span>
      </h1>
      <p className="mt-5 max-w-lg text-[18px] text-muted">This page doesn’t exist, or it has moved. Try one of these instead.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="keycap keycap-primary">
          Go home
        </Link>
        <Link href="/projects" className="keycap">
          See projects
        </Link>
      </div>
    </div>
  );
}
