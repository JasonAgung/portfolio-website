import type { Metadata } from 'next';
import ExperienceClient from './ExperienceClient';

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Work and organisation experience of Jason Kelvin Agung: AI Implementation Specialist at DEUS, Applied AI & Research Intern at TalentSource, HMPSIF and more.',
};

export default function ExperiencePage() {
  return <ExperienceClient />;
}
