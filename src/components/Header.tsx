'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Road Trip', href: '/road-trip-portugal-van' },
  { name: 'Itinéraire 10 jours', href: '/itineraire-portugal-10-jours-van' },
  { name: 'Prix', href: '/prix-location-van-portugal' },
  { name: 'Dormir en van', href: '/dormir-en-van-portugal' },
  { name: 'Camping sauvage', href: '/camping-sauvage-portugal-van' },
  { name: 'FAQ', href: '/faq-location-van-portugal' },
];

const cities = [
  { name: 'Lisbonne', href: '/location-van-lisbonne' },
  { name: 'Porto', href: '/location-van-porto' },
  { name: 'Algarve', href: '/location-van-algarve' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/favicon.png"
              alt="ExplorePortugalVan"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl lg:text-2xl font-display font-bold text-ocean-600">
              Explore<span className="text-sand-500">Portugal</span>Van
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.slice(0, 4).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-ocean-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}

            {/* Cities Dropdown */}
            <div className="relative">
              <button
                onClick={() => setCitiesOpen(!citiesOpen)}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-ocean-600 transition-colors flex items-center"
              >
                Villes
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {citiesOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg py-2">
                  {cities.map((city) => (
                    <Link
                      key={city.name}
                      href={city.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-ocean-50 hover:text-ocean-600"
                      onClick={() => setCitiesOpen(false)}
                    >
                      Location van {city.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navigation.slice(4).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-ocean-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/prix-location-van-portugal"
              className="inline-flex items-center px-5 py-2.5 bg-ocean-600 text-white text-sm font-medium rounded-full hover:bg-ocean-700 transition-colors"
            >
              Voir les prix
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-ocean-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t mt-2 pt-2">
              <p className="text-sm font-medium text-gray-500 mb-2">Location par ville</p>
              {cities.map((city) => (
                <Link
                  key={city.name}
                  href={city.href}
                  className="block py-2 text-gray-700 hover:text-ocean-600 pl-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
