'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  status: 'Completed' | 'In Progress' | 'Planning';
  link: string;
  category: 
  | 'Web Development' 
  | 'Marketing' 
  | 'IoT' 
  | 'Tools' 
  | 'Security' 
  | 'Games' 
  | 'Data Science'
  | 'AI / Machine Learning'
  | 'Education / Training';
  image?: string;
}

export default function ProjectsClient() {
  const [showContent, setShowContent] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [modalImage, setModalImage] = useState<string | null>(null);
  
  useEffect(() => {
    setShowContent(true);
  }, []);

  const projects: Project[] = [
    {
      title: 'Portfolio Website',
      description: 'This Website !!!, A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring dark/light mode toggle.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
      status: 'In Progress',
      link: 'https://github.com/JasonAgung/portfolio-website',
      category: 'Web Development',
    },
    {
      title: 'GenAI Platforms for ML Algorithm Development',
      description: 'Accelerating ML development using Generative AI platforms with a real-world case study on Black Soldier Fly (BSF) farming. The project explores data preparation, model building, and evaluation using three GenAI platforms.',
      technologies: ['GenAI Platforms', 'Machine Learning', 'Data Analysis', 'AI-assisted Development'],
      status: 'In Progress',
      link: 'https://github.com/JasonAgung/portfolio-website',
      category: 'AI / Machine Learning'
    },
    {
      title: 'GenAI Prompt Engineering Workshop',
      description: 'Designing and delivering an engaging workshop in Bahasa Indonesia to teach effective prompt engineering techniques. Includes workshop slides, practical exercises, testing, rehearsal, promotion, and live execution.',
      technologies: ['GenAI Tools', 'Prompt Engineering', 'Education', 'Presentation Design'],
      status: 'In Progress',
      link: 'https://github.com/JasonAgung/portfolio-website',
      category: 'Education / Training'
    },

    {
      title: 'Overhauling and Updating TS Website',
      description: 'Redesigning and modernizing the TalentSource website to be more attractive, stylish, and user-friendly using GenAI-powered web builders and design tools. Includes re-layouting, content updates, and final presentation.',
      technologies: ['Wix (AI)', 'Jimdo', 'Framer AI', 'GenAI Design Tools'],
      status: 'In Progress',
      link: 'https://github.com/JasonAgung/tango-puzzle',
      category: 'Web Development'
    },
    {
      title: 'Tango Puzzle',
      description: 'This repository contains a complete implementation of the Tango logic puzzle game with an intelligent solver using Constraint Satisfaction Problem (CSP) techniques.',
      technologies: ['Python', 'CSP', 'Algorithms', 'PyGame'],
      status: 'In Progress',
      link: 'https://github.com/JasonAgung/tango-puzzle',
      category: 'Games',
      image: '/tango-puzzle.png',
    },
    {
      title: 'Chord Transposer',
      description: 'A powerful tool for transposing musical chord charts to different keys. Available as a command-line tool, desktop GUI application, and web interface.',
      technologies: ['Python', 'Tkinter', 'Flask', 'HTML/CSS'],
      status: 'Completed',
      link: 'https://github.com/JasonAgung/chord-transposer',
      category: 'Tools',
      image: '/chord-transposer.png',
    },
    {
      title: 'Machine Learning Wine Quality Analysis',
      description: 'This project presents an end-to-end implementation of machine learning using the Wine Quality dataset from the UCI Machine Learning Repository. It involves acquiring data from a public source, performing exploratory data analysis and preprocessing, and evaluating their performance to gain insights into the factors that influence wine quality.',
      technologies: ['Python', 'Machine Learning', 'Data Analysis', 'Scikit-learn', 'Pandas', 'NumPy'],
      status: 'Completed',
      link: 'https://colab.research.google.com/drive/1cxumsTr8CsfzBDncoAzBVc03C334vAdU?usp=sharing',
      category: 'Data Science',
      image: '/wine-quality.png',
    },
    {
      title: 'Information Retrieval',
      description: 'A simple web-based Information Retrieval system that demonstrates TF-IDF (Term Frequency-Inverse Document Frequency) algorithm for document ranking and search.',
      technologies: ['JavaScript', 'HTML/CSS', 'TF-IDF', 'Search Algorithms'],
      status: 'Completed',
      link: 'https://github.com/JasonAgung/information-retrieval',
      category: 'Web Development',
      image: '/information-retrieval.png',
    },
    {
      title: 'Rainbow Attack',
      description: 'An educational web application that demonstrates how rainbow table attacks work on password hashes. This tool is designed for learning about cryptographic vulnerabilities and understanding why modern password storage methods are important.',
      technologies: ['JavaScript', 'HTML/CSS', 'Cryptography'],
      status: 'Completed',
      link: 'https://github.com/JasonAgung/rainbow-attack',
      category: 'Security',
      image: '/rainbow-table.png',
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
      case 'IoT':
        return '🌟';
      case 'Tools':
        return '🛠️';
      case 'Security':
        return '🔒';
      case 'Games':
        return '🎮';
      case 'Data Science':
        return '📊';
      case 'AI / Machine Learning':
        return '🤖';
      case 'Education / Training':
        return '📚';
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
                    {project.image && (
                      <div 
                        className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-800 cursor-pointer"
                        onClick={() => setModalImage(project.image!)}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
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
                        
                        {!['GenAI Platforms for ML Algorithm Development', 'GenAI Prompt Engineering Workshop', 'Overhauling and Updating TS Website'].includes(project.title) && (
                          <Link 
                            href={project.link}
                            className="inline-flex items-center gap-2 text-sage-600 dark:text-sage-400 hover:text-sage-700 dark:hover:text-sage-300 font-mono text-sm transition-colors group"
                          >
                            <span className="border-b border-transparent group-hover:border-sage-600 dark:group-hover:border-sage-300 transition-all">View Project</span>
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        )}
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
      
      {modalImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setModalImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <Image
              src={modalImage}
              alt="Full size screenshot"
              fill
              className="object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              onClick={() => setModalImage(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}