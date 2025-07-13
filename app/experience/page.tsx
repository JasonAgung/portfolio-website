'use client';

import Navigation from '@/components/Navigation';
import { useEffect, useState } from 'react';

export default function Experience() {
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    setShowContent(true);
  }, []);

  const workExperience = [
    {
      company: 'GLAMIFY',
      position: 'Marketing Communications Intern',
      year: '2023',
      description: 'Worked on marketing campaigns and communications strategies for beauty and fashion products.',
    },
    {
      company: 'PT. DELAMIBRANDS KHARISMA BUSANA',
      position: 'Marketing Communications Intern',
      year: '2022',
      description: 'Assisted in developing marketing materials and managing brand communications.',
    },
    {
      company: 'PT. SELERA DAMAI GRATIA (F&B COMPANY)',
      position: 'Social Media Management Team',
      year: '2020',
      description: 'Designing Instagram posts, stories, banners for food and beverage marketing campaigns.',
    },
  ];

  const organizationExperience = [
    {
      organization: 'Departemen Remaja GII HOK IM TONG',
      position: 'Church Youth Ministry Team',
      period: '2024 - Present',
      description: 'Active member in church youth ministry, organizing events and spiritual activities.',
    },
    {
      organization: 'HMPSIF',
      position: 'Academic Division',
      period: '2023 - 2024',
      description: 'Contributed to academic activities and student development programs in the IT department.',
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-cream dark:bg-gray-950 py-16 section-padding">
        <div className="max-width-container">
          <div className={`transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-bold font-mono text-gray-900 dark:text-white mb-2 relative inline-block">
                Experience
                <span className="absolute -top-6 -right-6 text-2xl animate-bounce">✨</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-400 font-mono text-sm">~/experience</p>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center flex items-center justify-center gap-3">
                <span className="text-sage-400">💼</span>
                Work Experience
              </h2>
              <div className="space-y-6">
                {workExperience.map((job, index) => (
                  <div 
                    key={index}
                    className="font-mono bg-white dark:bg-gray-900/90 border border-gray-300 dark:border-sage-400/30 rounded-2xl p-6 shadow-soft dark:shadow-sage-400/10 transition-all hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]"
                  >
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {job.position}
                          </h3>
                          <p className="text-sage-600 dark:text-sage-400">
                            {job.company}
                          </p>
                        </div>
                        <span className="text-sm text-sage-600 dark:text-sage-400 bg-sage-400/10 dark:bg-sage-400/20 px-3 py-1 rounded-full">
                          {job.year}
                        </span>
                      </div>
                      <div className="mt-4 pl-2 border-l-2 border-sage-400/30 dark:border-sage-400/50">
                        <p className="text-gray-700 dark:text-gray-300">
                          {job.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center flex items-center justify-center gap-3">
                <span className="text-sage-400">🌟</span>
                Organization Experience
              </h2>
              <div className="space-y-6">
                {organizationExperience.map((org, index) => (
                  <div 
                    key={index}
                    className="font-mono bg-white dark:bg-gray-900/90 border border-gray-300 dark:border-sage-400/30 rounded-2xl p-6 shadow-soft dark:shadow-sage-400/10 transition-all hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]"
                  >
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {org.position}
                          </h3>
                          <p className="text-sage-600 dark:text-sage-400">
                            {org.organization}
                          </p>
                        </div>
                        <span className="text-sm text-sage-600 dark:text-sage-400 bg-sage-400/10 dark:bg-sage-400/20 px-3 py-1 rounded-full">
                          {org.period}
                        </span>
                      </div>
                      <div className="mt-4 pl-2 border-l-2 border-sage-400/30 dark:border-sage-400/50">
                        <p className="text-gray-700 dark:text-gray-300">
                          {org.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-sage-400/10 dark:bg-sage-400/5 rounded-2xl border border-sage-400/20 dark:border-sage-400/30 text-center transition-all hover:scale-[1.01] hover:shadow-soft">
                <p className="font-mono text-gray-600 dark:text-gray-400 text-sm flex items-center justify-center gap-2">
                  <span className="text-lg">📊</span>
                  Total experience: {workExperience.length} work positions + {organizationExperience.length} organizations
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}