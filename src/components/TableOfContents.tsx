interface TocItem {
  id: string;
  title: string;
  level?: 2 | 3;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <nav className="bg-gray-50 rounded-xl p-6 my-8" aria-label="Table des matières">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Sommaire</h2>
      <ol className="space-y-2">
        {items.map((item, index) => (
          <li key={item.id} className={item.level === 3 ? 'ml-4' : ''}>
            <a
              href={`#${item.id}`}
              className="text-ocean-600 hover:text-ocean-800 transition-colors flex items-start"
            >
              <span className="text-gray-400 mr-2 text-sm">
                {item.level === 3 ? '–' : `${index + 1}.`}
              </span>
              <span className="text-sm">{item.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
