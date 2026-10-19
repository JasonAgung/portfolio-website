export default function PageHeader({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <header className="pb-14 pt-12 sm:pt-20">
      <h1 className="font-serif text-[clamp(3rem,9vw,6.5rem)] font-light italic leading-[0.9] tracking-tight">{title}</h1>
      {children && <div className="mt-6 max-w-[52ch] text-[19px] text-muted">{children}</div>}
    </header>
  );
}
