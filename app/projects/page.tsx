import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Projects by Jason Kelvin Agung: an AI reporting engine, a Tango puzzle solver thesis, machine learning for BSF farming, a chord transposer and more.',
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
