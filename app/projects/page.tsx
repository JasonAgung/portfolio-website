import { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Portfolio of projects by Jason Kelvin Agung - AI, Machine Learning, Web Development, and Algorithm Research projects',
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}