'use client';

import { useSwipeNavigation } from '@/hooks/useSwipeNavigation';
import { useEffect, useState, useRef } from 'react';

export default function SwipeNavigation() {
  const { currentRoute, routes, currentIndex } = useSwipeNavigation();
  const [showIndicator, setShowIndicator] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const [showSwipeHint, setShowSwipeHint] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    // Check if hint has been shown before
    const hintShown = localStorage.getItem('swipeHintShown');
    if (!hintShown) {
      setShowSwipeHint(true);
      // Hide hint after 5 seconds
      setTimeout(() => {
        setShowSwipeHint(false);
        localStorage.setItem('swipeHintShown', 'true');
      }, 5000);
    }
  }, []);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartX.current || !touchStartY.current) return;

      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const deltaX = currentX - touchStartX.current;
      const deltaY = currentY - touchStartY.current;

      // Only show indicators if horizontal movement is greater than vertical
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 30) {
        setShowIndicator(true);
        if (deltaX > 0) {
          setSwipeDirection('right');
        } else {
          setSwipeDirection('left');
        }
      }
    };

    const handleTouchEnd = () => {
      setShowIndicator(false);
      setSwipeDirection(null);
      touchStartX.current = null;
      touchStartY.current = null;
    };

    if (window.innerWidth <= 768) {
      document.addEventListener('touchstart', handleTouchStart);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  const routeLabels = {
    '/': 'Home',
    '/about': 'About',
    '/experience': 'Experience',
    '/projects': 'Projects'
  };

  return (
    <>
      {/* Page dots indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:hidden z-40">
        {routes.map((route) => (
          <div
            key={route}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentRoute === route
                ? 'bg-sage-600 dark:bg-sage-400 w-6'
                : 'bg-sage-300 dark:bg-sage-700'
            }`}
          />
        ))}
      </div>

      {/* Swipe hint on first visit */}
      {showSwipeHint && (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 md:hidden z-40 text-sage-600 dark:text-sage-400 text-xs font-mono animate-pulse">
          ← Swipe to navigate →
        </div>
      )}

      {/* Navigation hints */}
      <>
        {currentIndex > 0 && (
          <div className={`fixed left-4 top-1/2 transform -translate-y-1/2 md:hidden z-40 transition-all duration-300 ${
            showIndicator ? (swipeDirection === 'right' ? 'opacity-100 scale-100' : 'opacity-30 scale-90') : 'opacity-0 scale-75 pointer-events-none'
          }`}>
            <div className="bg-sage-100 dark:bg-sage-900/50 backdrop-blur-sm rounded-full p-3 shadow-lg">
              <span className="text-sage-600 dark:text-sage-400 text-sm font-mono">
                ← {routeLabels[routes[currentIndex - 1] as keyof typeof routeLabels]}
              </span>
            </div>
          </div>
        )}
        
        {currentIndex < routes.length - 1 && (
          <div className={`fixed right-4 top-1/2 transform -translate-y-1/2 md:hidden z-40 transition-all duration-300 ${
            showIndicator ? (swipeDirection === 'left' ? 'opacity-100 scale-100' : 'opacity-30 scale-90') : 'opacity-0 scale-75 pointer-events-none'
          }`}>
            <div className="bg-sage-100 dark:bg-sage-900/50 backdrop-blur-sm rounded-full p-3 shadow-lg">
              <span className="text-sage-600 dark:text-sage-400 text-sm font-mono">
                {routeLabels[routes[currentIndex + 1] as keyof typeof routeLabels]} →
              </span>
            </div>
          </div>
        )}
      </>
    </>
  );
}