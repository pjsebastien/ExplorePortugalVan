'use client';

import { useState, useEffect } from 'react';

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after a small delay and after scrolling a bit
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      }
    };

    // Initial check
    if (window.scrollY > 300) {
      setIsVisible(true);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {isOpen ? (
        <div className="bg-gradient-to-r from-ocean-600 to-ocean-700 rounded-2xl p-4 shadow-2xl max-w-sm animate-in slide-in-from-bottom-4 duration-300">
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            aria-label="Fermer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="text-white mb-3">
            <p className="font-bold text-sm">Trouvez votre van idéal</p>
            <p className="text-xs text-ocean-100">Comparez les meilleures offres</p>
          </div>

          <a
            href="https://www.yescapa.fr/campervan-hire/portugal?ae=620&aev=vanecosse"
            target="_blank"
            rel="nofollow noopener sponsored"
            className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-sand-400 text-gray-900 font-bold text-sm rounded-xl hover:bg-sand-300 transition-all hover:scale-[1.02] shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            Voir les offres
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 bg-gradient-to-r from-ocean-600 to-ocean-700 text-white px-4 py-3 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
          aria-label="Voir les offres de location"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          <span className="font-bold text-sm">Voir les offres</span>
        </button>
      )}
    </div>
  );
}
