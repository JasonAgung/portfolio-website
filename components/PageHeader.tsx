interface PageHeaderProps {
  path: string;
  command: string;
  title: string;
  children?: React.ReactNode;
}

// Every page opens with the command that "produced" it, then a big title.
export default function PageHeader({ path, command, title, children }: PageHeaderProps) {
  return (
    <header className="pb-10 pt-14 sm:pt-20">
      <p className="text-[15px] text-muted">
        <span className="text-sage">jason@bandung</span>:<span className="text-sky">{path}</span>$ <span className="text-ink">{command}</span>
      </p>
      <h1 className="mt-3 font-display text-[clamp(2.4rem,7vw,5rem)] font-extrabold leading-[0.95] tracking-tight [font-stretch:112.5%]">
        {title}
      </h1>
      {children && <div className="mt-5 max-w-2xl text-[17px] text-muted">{children}</div>}
    </header>
  );
}
