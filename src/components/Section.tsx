import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'ocean' | 'sand';
  narrow?: boolean;
  border?: boolean;
}

export default function Section({ children, className = '', id, background = 'white', narrow = false, border = true }: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-100',
    ocean: 'bg-ocean-50',
    sand: 'bg-sand-50',
  };

  const borders = {
    white: 'border-gray-100',
    gray: 'border-gray-200',
    ocean: 'border-ocean-100',
    sand: 'border-sand-100',
  };

  return (
    <section
      id={id}
      className={`py-12 lg:py-20 ${backgrounds[background]} ${border ? `border-b ${borders[background]}` : ''} ${className}`}
    >
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${narrow ? 'max-w-4xl' : 'max-w-6xl'}`}>
        {children}
      </div>
    </section>
  );
}
