'use client';

import Navigation from '@/components/Navigation';
import SocialLinks from '@/components/SocialLinks';
import { useEffect, useState } from 'react';

export default function AboutClient() {
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    setShowContent(true);
  }, []);

  const skillCategories = [
    {
      category: 'Artificial Intelligence & Data Science',
      items: ['Python', 'Scikit-learn', 'NumPy', 'Pandas', 'Vertex AI', 'Generative AI Frameworks']
    },
    {
      category: 'Software Engineering & Development',
      items: ['Go', 'C / C++', 'JavaScript', 'SQL', 'Java', 'Next.js / React']
    },
    {
      category: 'Communication & Interpersonal',
      items: ['Technical Communication', 'Public Speaking', 'Academic Mentoring', 'Project Leadership']
    }
  ];

  const interests = [
    { name: 'Artificial Intelligence (AI)', icon: '🧠', link: null },
    { name: 'Performance Optimization', icon: '⚡', link: null },
    { name: 'Software Engineering', icon: '💻', link: null },
    { name: 'Music', icon: '🎵', link: 'https://open.spotify.com/user/jason.kelvin.agung?' },
    { name: 'Technology & Gadgets', icon: '📱', link: null },
    { name: 'Algorithmic Puzzles', icon: '🧩', link: null },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-cream dark:bg-black py-16 section-padding">
        <div className="max-width-container">
          <div className={`transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white font-mono mb-2">
                About Me
              </h1>
              <p className="text-sage-600 dark:text-sage-400 font-mono text-sm">~/about</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <div className="bg-white dark:bg-gray-900/90 border border-sage-200 dark:border-sage-500/30 rounded-2xl p-6 shadow-soft hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-blush-500"></div>
                    <div className="w-3 h-3 rounded-full bg-sage-400"></div>
                    <div className="w-3 h-3 rounded-full bg-sage-500"></div>
                  </div>
                  <span className="text-gray-500 text-sm font-mono">Profile</span>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">About</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-mono">
                      Information Technology graduate from Universitas Katolik Parahyangan (UNPAR) with a strong foundation in Computer Science principles. 
                      I am passionate about Artificial Intelligence, Performance Optimization, and Software Engineering. 
                      Beyond my technical abilities, I am a collaborative team player with experience in organizing workshops and communicating complex technical concepts to diverse audiences.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Contact</h3>
                    <div className="space-y-2 text-gray-700 dark:text-gray-300 font-mono">
                      <p className="flex items-center gap-2 hover:text-sage-600 transition-colors">
                        <span className="text-sage-500">📍</span> Bandung, Indonesia
                      </p>
                      <p className="flex items-center gap-2 hover:text-sage-600 transition-colors">
                        <span className="text-sage-500">📱</span> (+62) 895-0615-2580
                      </p>
                      <p className="flex items-center gap-2 hover:text-sage-600 transition-colors">
                        <span className="text-sage-500">📧</span> jason.kelvin.agung@gmail.com
                      </p>
                    </div>
                    
                    <div className="mt-4">
                      <SocialLinks />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-900/90 border border-sage-200 dark:border-sage-500/30 rounded-2xl p-6 shadow-soft hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Technical & Core Skills</h3>
                  <div className="space-y-4 font-mono">
                    {skillCategories.map((cat) => (
                      <div key={cat.category}>
                        <p className="text-xs text-sage-600 dark:text-sage-400 font-semibold mb-2">{cat.category}</p>
                        <div className="flex flex-wrap gap-2">
                          {cat.items.map((item) => (
                            <span 
                              key={item}
                              className="text-xs px-3 py-1 bg-sage-50 dark:bg-sage-900/30 text-gray-700 dark:text-gray-300 rounded-full border border-sage-200 dark:border-sage-700/40"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-900/90 border border-sage-200 dark:border-sage-500/30 rounded-2xl p-6 shadow-soft hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Interests</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {interests.map((interest) => (
                      interest.link ? (
                        <a
                          key={interest.name}
                          href={interest.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-3 p-3 bg-cream dark:bg-sage-900/20 rounded-xl hover:bg-sage-50 dark:hover:bg-sage-900/30 hover:scale-105 transition-all duration-200 cursor-pointer"
                        >
                          <span className="text-2xl">{interest.icon}</span>
                          <span className="text-gray-700 dark:text-gray-300 group-hover:underline font-mono text-sm">{interest.name}</span>
                        </a>
                      ) : (
                        <div 
                          key={interest.name}
                          className="flex items-center gap-3 p-3 bg-cream dark:bg-sage-900/20 rounded-xl hover:bg-sage-50 dark:hover:bg-sage-900/30 hover:scale-105 transition-all duration-200 cursor-pointer"
                        >
                          <span className="text-2xl">{interest.icon}</span>
                          <span className="text-gray-700 dark:text-gray-300 font-mono text-sm">{interest.name}</span>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center font-mono">
                Education History
              </h2>
              
              <div className="bg-white dark:bg-gray-900/90 border border-sage-200 dark:border-sage-500/30 rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all duration-300">
                <div className="space-y-6">
                  <div className="border-l-4 border-sage-500 pl-6 hover:border-sage-600 transition-colors">
                    <div className="relative font-mono">
                      <div className="absolute -left-8 w-4 h-4 bg-sage-500 rounded-full ring-4 ring-sage-100 dark:ring-sage-900/30"></div>
                      <p className="text-sm text-sage-600 dark:text-sage-400 mb-1">Bachelor Degree • Graduated</p>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Universitas Katolik Parahyangan (UNPAR)</h4>
                      <p className="text-sky-600 dark:text-sky-400 font-semibold">Bachelor of Computer Science (Sarjana Komputer)</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">2022 – 2026 • Final Grade (GPA): 3.67</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                        <span className="font-semibold text-sage-600 dark:text-sage-400">Thesis:</span> Comparative Analysis of Backtracking and Simulated Annealing Algorithms for Solving the Tango Logic Puzzle
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-sage-300 pl-6 hover:border-sage-400 transition-colors">
                    <div className="relative font-mono">
                      <div className="absolute -left-8 w-4 h-4 bg-sage-300 rounded-full ring-4 ring-sage-100 dark:ring-sage-900/30"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Graduated</p>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">SANTO ALOYSIUS (SMA)</h4>
                      <p className="text-blue-600 dark:text-blue-400">High School Diploma</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">2019 – 2022</p>
                    </div>
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