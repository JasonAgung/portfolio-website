'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/experience', label: 'Experience' },
    { href: '/projects', label: 'Projects' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl backdrop-saturate-150">
      <div className="max-width-container section-padding">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-mono text-sage-600 dark:text-sage-400 text-sm hover:text-sage-700 dark:hover:text-sage-300 transition-colors">
            <span className="text-sage-400 dark:text-sage-600">&lt;</span>JKA<span className="text-sage-400 dark:text-sage-600">/&gt;</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-mono transition-all duration-200 ${
                  isActive(link.href)
                    ? 'text-sage-600 dark:text-sage-400 font-semibold'
                    : 'text-gray-500 dark:text-gray-400 hover:text-sage-500 dark:hover:text-sage-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border-2 border-sage-300 dark:border-sage-600/30 bg-sage-50 dark:bg-gray-900 hover:bg-sage-100 dark:hover:bg-sage-900/10 transition-all hover:scale-105 flex items-center justify-center w-10 h-10"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>

          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border-2 border-sage-300 dark:border-sage-600/30 bg-sage-50 dark:bg-gray-900 hover:bg-sage-100 dark:hover:bg-sage-900/10 transition-all hover:scale-105 flex items-center justify-center w-10 h-10"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full border-2 border-sage-300 dark:border-sage-600/30 bg-sage-50 dark:bg-gray-900 hover:bg-sage-100 dark:hover:bg-sage-900/10 transition-all hover:scale-105 flex items-center justify-center w-10 h-10"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-4 flex flex-col justify-center">
                <span className={`absolute block h-0.5 w-5 bg-sage-700 dark:bg-sage-400 transition-all duration-300 ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
                <span className={`absolute block h-0.5 w-5 bg-sage-700 dark:bg-sage-400 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`absolute block h-0.5 w-5 bg-sage-700 dark:bg-sage-400 transition-all duration-300 ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
              </div>
            </button>
          </div>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64' : 'max-h-0'}`}>
          <div className="py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-sm font-mono transition-all duration-200 ${
                  isActive(link.href)
                    ? 'text-sage-600 dark:text-sage-400 font-semibold'
                    : 'text-gray-500 dark:text-gray-400 hover:text-sage-500 dark:hover:text-sage-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}