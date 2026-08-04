import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Jason Kelvin Agung - Computer Science Graduate, AI Implementation Specialist, and Software Engineer',
};

export default function AboutPage() {
  return <AboutClient />;
}