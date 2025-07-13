import { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Portfolio of projects by Jason Kelvin Agung - Web Development, Marketing, and Technology projects',
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}