import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export default function NotFound() {
  return (
    <div className="container-page">
      <PageHeader title="track not found.">This page doesn’t exist, or it has moved.</PageHeader>
      <div className="flex flex-wrap gap-3">
        <Link href="/" className="btn btn-solid">
          back to the start
        </Link>
        <Link href="/projects" className="btn">
          see projects
        </Link>
      </div>
    </div>
  );
}
