'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Projects() {
  const [showContent, setShowContent] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  useEffect(() => {
    setShowContent(true);
  }, []);

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring dark/light mode toggle.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
      status: 'In Progress',
      link: '#',
      category: 'Web Development',
    },
    {
      title: 'Social Media Campaign Manager',
      description: 'Developed social media management strategies and created engaging content for Instagram, including posts, stories, and banners.',
      technologies: ['Instagram', 'Canva', 'Content Strategy'],
      status: 'Completed',
      link: '#',
      category: 'Marketing',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'text-sage-600 dark:text-sage-400';
      case 'In Progress':
        return 'text-amber-600 dark:text-amber-400';
      case 'Planning':
        return 'text-sky-600 dark:text-sky-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web Development':
        return '✨';
      case 'Marketing':
        return '🎨';
      case 'IoT':
        return '🌟';
      default:
        return '💫';
    }
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-cream dark:bg-gray-950 py-16 section-padding">
        <div className="max-width-container">
          <div className={`transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 font-mono">
                Projects
              </h1>
              <p className="text-gray-600 dark:text-gray-400 font-mono text-sm">~/projects</p>
            </div>

            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <div 
                    key={index}
                    className={`bg-white dark:bg-gray-900/90 border border-sage-200 dark:border-sage-500/30 rounded-2xl overflow-hidden shadow-soft transition-all duration-300 hover:shadow-soft-lg transform font-mono ${hoveredIndex === index ? 'scale-[1.02]' : ''}`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-blush-400"></div>
                          <div className="w-3 h-3 rounded-full bg-sage-400"></div>
                          <div className="w-3 h-3 rounded-full bg-sage-500"></div>
                        </div>
                        <span className="text-gray-500 text-sm font-mono">{project.title}</span>
                      </div>
                      
                      <div>
                        <div className="mb-4">
                          <p className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                            <span className="text-2xl mr-2">{getCategoryIcon(project.category)}</span> {project.title}
                          </p>
                          <p className={`text-sm ${getStatusColor(project.status)} font-medium`}>
                            ⟨ {project.status} ⟩
                          </p>
                        </div>
                        
                        <div className="mb-4">
                          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                        
                        <div className="mb-4">
                          <p className="text-gray-500 text-sm mb-2">✧ Technologies:</p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span 
                                key={techIndex}
                                className="text-xs px-3 py-1.5 bg-sage-50 dark:bg-sage-900/30 text-sage-700 dark:text-sage-300 rounded-full font-mono border border-sage-200 dark:border-sage-500/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <Link 
                          href={project.link}
                          className="inline-flex items-center gap-2 text-sage-600 dark:text-sage-400 hover:text-sage-700 dark:hover:text-sage-300 font-mono text-sm transition-colors group"
                        >
                          <span className="border-b border-transparent group-hover:border-sage-600 dark:group-hover:border-sage-300 transition-all">View Project</span>
                          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 p-8 bg-white dark:bg-gray-900/90 rounded-2xl border border-sage-200 dark:border-sage-500/30 text-center shadow-soft font-mono">
                <div>
                  <div className="mb-4">
                    <span className="text-4xl">✨</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{projects.length}</p>
                  <p className="text-sage-600 dark:text-sage-400 text-sm">Total Projects</p>
                  <div className="mt-4 flex justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blush-400"></div>
                    <div className="w-2 h-2 rounded-full bg-sage-400"></div>
                    <div className="w-2 h-2 rounded-full bg-sage-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}