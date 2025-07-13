'use client';

import Navigation from '@/components/Navigation';
import SocialLinks from '@/components/SocialLinks';
import Link from 'next/link';
import { useEffect, useState, useMemo } from 'react';

export default function Home() {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [mounted, setMounted] = useState(false);
  const fullText = "Jason Kelvin Agung";
  
  const matrixElements = useMemo(() => 
    Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 10,
      value: Math.random() > 0.5 ? '1' : '0'
    })), []);
  
  useEffect(() => {
    setMounted(true);
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-cream dark:bg-gray-950">
        <div className="fixed inset-0 bg-cream dark:bg-gray-950">
          {mounted && (
            <div className="absolute inset-0 opacity-10">
              {matrixElements.map((element) => (
                <div
                  key={element.id}
                  className="absolute text-sage-400 dark:text-sage-500 text-xs font-mono animate-matrix-fall opacity-20"
                  style={{
                    left: `${element.left}%`,
                    animationDelay: `${element.delay}s`,
                    animationDuration: `${element.duration}s`
                  }}
                >
                  {element.value}
                </div>
              ))}
            </div>
          )}
        </div>

        <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center section-padding z-10">
          <div className="max-width-container">
            <div className="bg-white dark:bg-gray-900/90 backdrop-blur-sm border-2 border-sage-300 dark:border-sage-600/30 rounded-2xl p-8 md:p-12 shadow-lg dark:shadow-2xl dark:shadow-sage-600/20">
              <div className="text-left mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-blush-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
                    <div className="w-3 h-3 rounded-full bg-sage-400"></div>
                  </div>
                  <span className="text-gray-500 text-sm font-mono">terminal@jason-portfolio</span>
                </div>
                
                <div className="font-mono">
                  <p className="text-sage-600 dark:text-sage-400 mb-2">$ whoami</p>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    {text}
                    <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} text-sage-500 dark:text-sage-400`}>_</span>
                  </h1>
                  
                  <div className="space-y-6">
                    <div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{/* Roles */}</p>
                      <p className="text-gray-700 dark:text-gray-300">
                        IT Student • Web Developer • Marketing Communications
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{/* Location & Education */}</p>
                      <div className="text-gray-700 dark:text-gray-300">
                        <p>📍 Bandung, Indonesia</p>
                        <p>🎓 Universitas Katolik Parahyangan</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{/* About */}</p>
                      <div className="text-gray-700 dark:text-gray-300 max-w-2xl">
                        <p className="mb-2">Hiii 👋, sooo this is the page where you&apos;ll find everything about me (kinda).</p>
                        <p className="mb-2">Think of it as a little digital museum of my life (don&apos;t worry i&apos;m not dead yet)</p>
                        <p>Feel free to click around 🖱️ and explore what I&apos;ve been up to these past few years! 🚀</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href="/about"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-sage-500/10 border-2 border-sage-400 text-sage-700 dark:text-sage-400 rounded-full font-mono hover:bg-sage-500/20 transition-all hover:scale-105"
                      >
                        Learn More
                      </Link>
                      <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500/10 border-2 border-sky-400 text-sky-700 dark:text-sky-400 rounded-full font-mono hover:bg-sky-500/20 transition-all hover:scale-105"
                      >
                        View Projects
                      </Link>
                    </div>
                    
                    <div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{/* Connect */}</p>
                      <SocialLinks className="justify-start" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </section>

        <section className="relative py-24 section-padding bg-gradient-to-b from-cream to-white dark:from-gray-950 dark:to-gray-900 z-10">
          <div className="max-width-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-mono mb-2">
                Quick Overview
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-mono">~/overview</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-900 border-2 border-sky-300 dark:border-sky-600/30 p-6 rounded-2xl hover:border-sky-400 dark:hover:border-sky-500/60 transition-all group hover:scale-105 hover:shadow-lg">
                <div className="font-mono mb-4">
                  <span className="text-sky-600 dark:text-sky-400">&lt;Education</span>
                  <span className="text-gray-500"> /&gt;</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-mono text-sm">
                  <span className="text-gray-500">{'//'}</span> Currently pursuing IT
                  <br />
                  <span className="text-gray-500">{'//'}</span> @ Universitas Katolik Parahyangan
                  <br />
                  <span className="text-gray-500">{'//'}</span> Expected: 2026
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 border-2 border-sage-300 dark:border-sage-600/30 p-6 rounded-2xl hover:border-sage-400 dark:hover:border-sage-500/60 transition-all group hover:scale-105 hover:shadow-lg">
                <div className="font-mono mb-4">
                  <span className="text-sage-600 dark:text-sage-400">&lt;Experience</span>
                  <span className="text-gray-500"> /&gt;</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-mono text-sm">
                  <span className="text-gray-500">{'//'}</span> Marketing Communications
                  <br />
                  <span className="text-gray-500">{'//'}</span> Social Media Management
                  <br />
                  <span className="text-gray-500">{'//'}</span> Intern @ 3 Companies
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 border-2 border-blush-300 dark:border-blush-500/30 p-6 rounded-2xl hover:border-blush-400 dark:hover:border-blush-400/60 transition-all group hover:scale-105 hover:shadow-lg">
                <div className="font-mono mb-4">
                  <span className="text-blush-500 dark:text-blush-400">&lt;Interests</span>
                  <span className="text-gray-500"> /&gt;</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-mono text-sm">
                  <span className="text-gray-500">{'//'}</span> IoT && Music
                  <br />
                  <span className="text-gray-500">{'//'}</span> Software && Technology
                  <br />
                  <span className="text-gray-500">{'//'}</span> Gaming.isAwesome()
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}