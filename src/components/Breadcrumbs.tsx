import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant?: 'default' | 'light';
}

export default function Breadcrumbs({ items, variant = 'light' }: BreadcrumbsProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://exploreportugalvan.com${item.href}`
    }))
  };

  const styles = {
    default: {
      text: 'text-gray-500',
      icon: 'text-gray-400',
      current: 'text-gray-900 font-medium',
      hover: 'hover:text-ocean-600',
    },
    light: {
      text: 'text-white/80',
      icon: 'text-white/50',
      current: 'text-white font-medium',
      hover: 'hover:text-white',
    },
  };

  const style = styles[variant];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <nav aria-label="Fil d'Ariane">
        <ol className={`flex flex-wrap items-center text-sm ${style.text}`}>
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <svg className={`w-4 h-4 mx-2 ${style.icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
              {index === items.length - 1 ? (
                <span className={style.current}>{item.name}</span>
              ) : (
                <Link href={item.href} className={`${style.hover} transition-colors`}>
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
