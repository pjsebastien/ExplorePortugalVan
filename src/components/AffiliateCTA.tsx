interface AffiliateCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  href?: string;
  variant?: 'default' | 'compact' | 'hero';
}

export default function AffiliateCTA({
  title = "Trouvez votre van idéal",
  description = "Comparez les meilleures offres de location de van au Portugal et réservez en toute confiance.",
  buttonText = "Voir les offres de location",
  href = "https://www.yescapa.fr/campervan-hire/portugal?ae=620&aev=vanecosse",
  variant = 'default',
}: AffiliateCTAProps) {
  if (variant === 'compact') {
    return (
      <div className="bg-gradient-to-r from-ocean-600 to-ocean-700 rounded-xl p-6 my-8 shadow-lg">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm text-ocean-100 mt-1">{description}</p>
          </div>
          <a
            href={href}
            target="_blank"
            rel="nofollow noopener sponsored"
            className="inline-flex items-center px-6 py-3 bg-sand-400 text-gray-900 font-bold rounded-full hover:bg-sand-300 transition-colors whitespace-nowrap shadow-md"
          >
            {buttonText}
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div className="relative overflow-hidden bg-gradient-to-br from-ocean-700 via-ocean-800 to-ocean-900 rounded-2xl p-8 lg:p-12 my-12 shadow-xl">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-ocean-100 text-lg mb-8">
            {description}
          </p>
          <a
            href={href}
            target="_blank"
            rel="nofollow noopener sponsored"
            className="inline-flex items-center px-10 py-4 bg-sand-400 text-gray-900 font-bold text-lg rounded-full hover:bg-sand-300 transition-all hover:scale-105 shadow-lg"
          >
            {buttonText}
            <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="bg-gradient-to-r from-ocean-50 to-ocean-100 border-2 border-ocean-200 rounded-2xl p-8 my-10 shadow-md">
      <div className="flex flex-col lg:flex-row items-center gap-6">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-ocean-600 rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </div>
        </div>
        <div className="flex-grow text-center lg:text-left">
          <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
            {title}
          </h3>
          <p className="text-gray-700">
            {description}
          </p>
        </div>
        <div className="flex-shrink-0">
          <a
            href={href}
            target="_blank"
            rel="nofollow noopener sponsored"
            className="inline-flex items-center px-8 py-4 bg-ocean-600 text-white font-bold rounded-full hover:bg-ocean-700 transition-all hover:scale-105 shadow-lg"
          >
            {buttonText}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
