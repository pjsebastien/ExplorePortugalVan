import Link from 'next/link';

const footerLinks = {
  explorer: [
    { name: 'Road trip Portugal', href: '/road-trip-portugal-van' },
    { name: 'Itinéraire 10 jours', href: '/itineraire-portugal-10-jours-van' },
    { name: 'Camping sauvage', href: '/camping-sauvage-portugal-van' },
    { name: 'Dormir en van', href: '/dormir-en-van-portugal' },
  ],
  louer: [
    { name: 'Location van Lisbonne', href: '/location-van-lisbonne' },
    { name: 'Location van Porto', href: '/location-van-porto' },
    { name: 'Location van Algarve', href: '/location-van-algarve' },
    { name: 'Prix et tarifs', href: '/prix-location-van-portugal' },
  ],
  infos: [
    { name: 'FAQ', href: '/faq-location-van-portugal' },
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'Politique de confidentialité', href: '/politique-confidentialite' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-display font-bold">
                Explore<span className="text-sand-400">Portugal</span>Van
              </span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Votre guide complet pour la location de van au Portugal.
              Découvrez les plus beaux itinéraires, conseils pratiques et
              meilleures offres de location.
            </p>
          </div>

          {/* Explorer */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Explorer
            </h3>
            <ul className="space-y-3">
              {footerLinks.explorer.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Louer */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Louer un van
            </h3>
            <ul className="space-y-3">
              {footerLinks.louer.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Infos */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Informations
            </h3>
            <ul className="space-y-3">
              {footerLinks.infos.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ExplorePortugalVan.com - Tous droits réservés
            </p>
            <p className="text-gray-500 text-xs mt-2 md:mt-0">
              Ce site contient des liens affiliés. En réservant via nos liens,
              vous nous soutenez sans frais supplémentaires.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
