import Link from 'next/link';
import { ReactNode } from 'react';

interface InternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function InternalLink({ href, children, className = '' }: InternalLinkProps) {
  return (
    <Link
      href={href}
      className={`text-ocean-600 hover:text-ocean-800 underline decoration-ocean-300 hover:decoration-ocean-600 transition-colors ${className}`}
    >
      {children}
    </Link>
  );
}
