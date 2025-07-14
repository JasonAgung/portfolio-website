'use client';

import { useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface SwipeHandlers {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

export function useSwipeNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const routes = ['/', '/about', '/experience', '/projects'];
  
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStartX.current || !touchStartY.current) return;

      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;

      const deltaX = touchEndX - touchStartX.current;
      const deltaY = touchEndY - touchStartY.current;

      // Check if swipe is more horizontal than vertical
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Minimum swipe distance threshold (50px)
        if (Math.abs(deltaX) > 50) {
          const currentIndex = routes.indexOf(pathname);
          
          if (deltaX > 0 && currentIndex > 0) {
            // Swipe right - go to previous page
            router.push(routes[currentIndex - 1]);
          } else if (deltaX < 0 && currentIndex < routes.length - 1) {
            // Swipe left - go to next page
            router.push(routes[currentIndex + 1]);
          }
        }
      }

      touchStartX.current = null;
      touchStartY.current = null;
    };

    // Only add listeners on mobile devices
    if (window.innerWidth <= 768) {
      document.addEventListener('touchstart', handleTouchStart);
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [pathname, router]);

  return {
    currentRoute: pathname,
    routes,
    currentIndex: routes.indexOf(pathname),
  };
}