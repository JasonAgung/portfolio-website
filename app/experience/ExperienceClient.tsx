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
      company: 'DEUS Human Capital Services',
      companyLink: 'https://deushcs.com/',
      position: 'AI Implementation Specialist',
      year: '06/01/2026 – Present',
      location: 'Bandung, Indonesia',
      description: [
        'Lead the transition of a gamified assessment system from static, template-based reporting to a dynamic Generative AI model.',
        'Engineered an automated pipeline to synthesize 32 personality subtraits into highly personalized, unique behavioral reports.',
        'Optimized report quality by designing advanced prompt frameworks that transform raw psychometric data into nuanced, human-like insights.',
      ],
    },
    {
      company: 'TalentSource Bandung',
      companyLink: 'https://www.bandungtalentsource.com/',
      position: 'Applied AI & Research Intern',
      year: '22/08/2025 – Present',
      location: 'Bandung, Indonesia',
      description: [
        'Spearheaded R&D of Machine Learning models for BSF farming optimization, utilizing ChatGPT & Google Vertex AI (AutoML) for synthetic data generation, model training, and deployment.',
        'Accelerated web development lifecycle by leveraging Generative AI tools (v0, Bolt.new, Gemini CLI) to overhaul and modernize the company website.',
        'Developed and delivered "GenAI & Prompt Engineering" workshops tailored for leading institutions and corporate clients, including Telkom, TelkomMedika, TelkomMetra, Asosiasi Dana Pensiun Indonesia (ADPI), and KWI Komisi Komunikasi Sosial.',
      ],
    },
    {
      company: 'HMPSIF (Informatics Student Association)',
      companyLink: 'https://www.instagram.com/hmpsif_unpar/',
      position: 'Academic Division Staff',
      year: '01/08/2023 – 01/08/2024',
      location: 'Bandung, Indonesia',
      description: [
        'Organized academic tutorials and peer-mentoring sessions for core Computer Science subjects (Algorithms, Logic).',
        'Acted as a liaison between students and faculty to improve academic resources.',
        'Organized charity events and provided IT education for underprivileged individuals.',
      ],
    },
    {
      company: 'GLAMIFY',
      companyLink: 'https://www.instagram.com/glamify.id/',
      position: 'Marketing Communications Intern',
      year: '2023',
      location: 'Bandung, Indonesia',
      description: 'Worked on marketing campaigns and communications strategies for beauty and fashion products.',
    },
    {
      company: 'EXECUTIVE',
      companyLink: 'https://www.instagram.com/id_executive/',
      position: 'Marketing Communications Intern',
      year: '2022',
      location: 'Bandung, Indonesia',
      description: 'Assisted in developing marketing materials and managing brand communications for retail operations.',
    },
    {
      company: 'PORCAFE',
      companyLink: 'https://www.instagram.com/porcafe.bandung/',
      position: 'Social Media Management Team',
      year: '2020',
      location: 'Bandung, Indonesia',
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
                    className="font-mono bg-white dark:bg-gray-900/90 border border-sage-200 dark:border-sage-500/30 rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 hover:scale-[1.01]"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-blush-400"></div>
                        <div className="w-3 h-3 rounded-full bg-sage-400"></div>
                        <div className="w-3 h-3 rounded-full bg-sage-500"></div>
                      </div>
                      <span className="text-gray-500 text-xs font-mono">job_0{index + 1}.sh</span>
                    </div>

                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {job.position}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 mt-1">
                            <a 
                              href={job.companyLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sage-600 dark:text-sage-400 hover:text-sage-700 dark:hover:text-sage-300 hover:underline transition-colors inline-flex items-center gap-1 font-semibold"
                            >
                              {job.company}
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                            {job.location && (
                              <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                                📍 {job.location}
                              </span>
                            )}
                          </div>
                        </div>
                        <span className="text-xs font-mono text-sage-600 dark:text-sage-400 bg-sage-400/10 dark:bg-sage-400/20 px-3 py-1 rounded-full whitespace-nowrap self-start border border-sage-300/30 dark:border-sage-500/20">
                          {job.year}
                        </span>
                      </div>

                      <div className="space-y-2.5 mt-4 pt-4 border-t border-sage-100 dark:border-sage-800/40">
                        {Array.isArray(job.description) ? (
                          job.description.map((item, descIndex) => (
                            <div key={descIndex} className="flex items-start gap-3 font-mono">
                              <span className="text-sage-600 dark:text-sage-400 shrink-0 font-bold">$</span>
                              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                {item}
                              </p>
                            </div>
                          ))
                        ) : (
                          <div className="flex items-start gap-3 font-mono">
                            <span className="text-sage-600 dark:text-sage-400 shrink-0 font-bold">$</span>
                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                              {job.description}
                            </p>
                          </div>
                        )}
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
              <div className="space-y-6 font-mono">
                {organizationExperience.map((org, index) => (
                  <div 
                    key={index}
                    className="bg-white dark:bg-gray-900/90 border border-sage-200 dark:border-sage-500/30 rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 hover:scale-[1.01]"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-blush-400"></div>
                        <div className="w-3 h-3 rounded-full bg-sage-400"></div>
                        <div className="w-3 h-3 rounded-full bg-sage-500"></div>
                      </div>
                      <span className="text-gray-500 text-xs font-mono">org_0{index + 1}.sh</span>
                    </div>

                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {org.position}
                          </h3>
                          <a 
                            href={org.organizationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sage-600 dark:text-sage-400 hover:text-sage-700 dark:hover:text-sage-300 hover:underline transition-colors inline-flex items-center gap-1 font-semibold text-sm mt-1"
                          >
                            {org.organization}
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                        <span className="text-xs font-mono text-sage-600 dark:text-sage-400 bg-sage-400/10 dark:bg-sage-400/20 px-3 py-1 rounded-full whitespace-nowrap self-start border border-sage-300/30 dark:border-sage-500/20">
                          {org.period}
                        </span>
                      </div>

                      <div className="mt-4 pt-4 border-t border-sage-100 dark:border-sage-800/40">
                        <div className="flex items-start gap-3 font-mono">
                          <span className="text-sage-600 dark:text-sage-400 shrink-0 font-bold">$</span>
                          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                            {org.description}
                          </p>
                        </div>
                        
                        {org.projects && (
                          <div className="mt-4 pt-2">
                            <button
                              onClick={() => setExpandedOrg(expandedOrg === index ? null : index)}
                              className="inline-flex items-center gap-2 px-3 py-1.5 bg-sage-50 dark:bg-sage-900/30 hover:bg-sage-100 dark:hover:bg-sage-800/40 text-sage-700 dark:text-sage-300 rounded-lg text-xs font-mono border border-sage-200/60 dark:border-sage-700/40 transition-all"
                            >
                              <span className={`transform transition-transform duration-200 ${expandedOrg === index ? 'rotate-90' : ''}`}>
                                ▶
                              </span>
                              View Key Initiatives ({org.projects.length})
                            </button>
                            
                            {expandedOrg === index && (
                              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 animate-fadeIn font-mono">
                                {org.projects.map((project, pIndex) => (
                                  <div 
                                    key={pIndex}
                                    className="flex items-center gap-3 p-3 bg-sage-50/70 dark:bg-gray-800/60 hover:bg-sage-100/80 dark:hover:bg-gray-800/90 rounded-xl border border-sage-200/70 dark:border-sage-700/50 shadow-sm transition-colors"
                                  >
                                    <span className="text-xl shrink-0">{project.icon}</span>
                                    <div className="flex-1 min-w-0">
                                      <h4 className="text-xs font-bold text-gray-900 dark:text-gray-100 truncate">
                                        {project.name}
                                      </h4>
                                      <p className="text-[11px] font-medium text-sage-700 dark:text-sage-300 truncate">
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