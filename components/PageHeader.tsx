interface PageHeaderProps {
  path: string;
  title: string;
  children?: React.ReactNode;
}

// A small path label (the quiet terminal nod), a big title and a plain intro.
export default function PageHeader({ path, title, children }: PageHeaderProps) {
  return (
    <header className="pb-12 pt-14 sm:pt-20">
      <p className="label">
        <span className="text-sage">~</span>/{path}
      </p>
      <h1 className="mt-3 font-mono text-[clamp(2.2rem,6vw,4.25rem)] font-extrabold leading-[1] tracking-tight [font-stretch:112.5%]">
        {title}
        <span className="text-blush">.</span>
      </h1>
      {children && <div className="mt-5 max-w-[56ch] text-[18px] text-muted">{children}</div>}
    </header>
  );
}
