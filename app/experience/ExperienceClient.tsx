'use client';

import Navigation from '@/components/Navigation';
import { useEffect, useState } from 'react';

export default function ExperienceClient() {
  const [showContent, setShowContent] = useState(false);
  const [expandedOrg, setExpandedOrg] = useState<number | null>(null);
  
  useEffect(() => {
    setShowContent(true);
  }, []);

  const workExperience = [
    {
      company: 'GLAMIFY',
      companyLink: 'https://www.instagram.com/glamify.id/',
      position: 'Marketing Communications Intern',
      year: '2023',
      description: 'Worked on marketing campaigns and communications strategies for beauty and fashion products.',
    },
    {
      company: 'EXECUTIVE',
      companyLink: 'https://www.instagram.com/id_executive/',
      position: 'Marketing Communications Intern',
      year: '2022',
      description: 'Assisted in developing marketing materials and managing brand communications for one of the biggest brands in retail.',
    },
    {
      company: 'PORCAFE',
      companyLink: 'https://www.instagram.com/porcafe.bandung/',
      position: 'Social Media Management Team',
      year: '2020',
      description: 'Designing Instagram posts, stories, banners for food and beverage marketing campaigns.',
    },
  ];

  const organizationExperience = [
    {
      organization: 'Departemen Remaja GII HOK IM TONG',
      organizationLink: 'https://www.instagram.com/arisegeneration.gii/',
      position: 'Church Youth Ministry Team',
      period: '2024 - Present',
      description: 'Active member in church youth ministry, organizing events and spiritual activities.',
      projects: [
        { name: 'Resfeber 2023', role: 'Event Team', icon: '🎪' },
        { name: 'Jingle Wave 2023', role: 'Event Team', icon: '🎄' },
        { name: 'Arise Teens Camp 2024', role: 'Event Team', icon: '⛺' },
        { name: 'Retrouvailles 2024', role: 'Event and Worship Team', icon: '🎵' },
      ],
    },
    {
      organization: 'HMPSIF (Himpunan Mahasiswa Program Studi Informatika)',
      organizationLink: 'https://www.instagram.com/hmpsif_unpar/',
      position: 'Academic Division',
      period: '2023 - 2024',
      description: 'Contributed to academic activities and student development programs in the IT department.',
      projects: [
        { name: 'I-CARE 2023', role: 'Vice Chief Executive', icon: '💼' },
        { name: 'SIAP IF 2023', role: 'Vice Head of Event Team', icon: '🎯' },
        { name: 'THORMATICS 2023', role: 'Head of External Communication', icon: '📢' },
        { name: 'WOMTICS 2023', role: 'Head of Event Team', icon: '👥' },
      ],
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
                          <a 
                            href={job.companyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sage-600 dark:text-sage-400 hover:text-sage-700 dark:hover:text-sage-300 hover:underline transition-colors inline-flex items-center gap-1"
                          >
                            {job.company}
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
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
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {org.position}
                          </h3>
                          <a 
                            href={org.organizationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sage-600 dark:text-sage-400 hover:text-sage-700 dark:hover:text-sage-300 hover:underline transition-colors inline-flex items-center gap-1"
                          >
                            {org.organization}
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                        <span className="text-sm text-sage-600 dark:text-sage-400 bg-sage-400/10 dark:bg-sage-400/20 px-3 py-1 rounded-full">
                          {org.period}
                        </span>
                      </div>
                      <div className="mt-4 pl-2 border-l-2 border-sage-400/30 dark:border-sage-400/50">
                        <p className="text-gray-700 dark:text-gray-300">
                          {org.description}
                        </p>
                        
                        {org.projects && (
                          <div className="mt-4">
                            <button
                              onClick={() => setExpandedOrg(expandedOrg === index ? null : index)}
                              className="flex items-center gap-2 text-sage-600 dark:text-sage-400 hover:text-sage-700 dark:hover:text-sage-300 transition-colors text-sm"
                            >
                              <span className={`transform transition-transform ${expandedOrg === index ? 'rotate-90' : ''}`}>
                                ▶
                              </span>
                              View Projects ({org.projects.length})
                            </button>
                            
                            {expandedOrg === index && (
                              <div className="mt-3 space-y-2 animate-fadeIn">
                                {org.projects.map((project, pIndex) => (
                                  <div 
                                    key={pIndex}
                                    className="flex items-start gap-3 p-3 bg-sage-50 dark:bg-sage-900/20 rounded-lg border border-sage-200 dark:border-sage-700/30"
                                  >
                                    <span className="text-2xl">{project.icon}</span>
                                    <div className="flex-1">
                                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                                        {project.name}
                                      </h4>
                                      <p className="text-xs text-gray-600 dark:text-gray-400">
                                        {project.role}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
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