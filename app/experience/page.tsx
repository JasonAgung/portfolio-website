import { Metadata } from 'next';
import ExperienceClient from './ExperienceClient';

export const metadata: Metadata = {
  title: 'Experience | Jason Kelvin Agung',
  description: 'Professional work experience and organizational involvement of Jason Kelvin Agung - Marketing Communications and IT Student',
};

export default function ExperiencePage() {
  return <ExperienceClient />;
}