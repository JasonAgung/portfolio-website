import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Jason Kelvin Agung - IT Student, Web Developer, and Marketing Communications professional',
};

export default function AboutPage() {
  return <AboutClient />;
}