'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay to avoid layout shift
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setIsVisible(false);
    // Here you could initialize analytics
  };

  const acceptEssential = () => {
    localStorage.setItem('cookie-consent', 'essential');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          <div className="flex-grow">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-ocean-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Ce site utilise des cookies</h3>
                <p className="text-sm text-gray-600">
                  Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic.
                  En continuant, vous acceptez notre{' '}
                  <Link href="/politique-confidentialite" className="text-ocean-600 hover:underline">
                    politique de confidentialité
                  </Link>.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 lg:flex-shrink-0">
            <button
              onClick={acceptEssential}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Essentiels uniquement
            </button>
            <button
              onClick={acceptAll}
              className="px-4 py-2 text-sm font-medium text-white bg-ocean-600 rounded-lg hover:bg-ocean-700 transition-colors"
            >
              Accepter tout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
