import { Metadata } from 'next';
import EducationClient from './EducationClient';

export const metadata: Metadata = {
  title: 'Education',
  description: 'Education history and academic background of Jason Kelvin Agung - IT Student at Universitas Katolik Parahyangan',
};

export default function EducationPage() {
  return <EducationClient />;
}