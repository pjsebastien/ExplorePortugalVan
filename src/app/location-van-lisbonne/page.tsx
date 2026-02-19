import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AffiliateCTA, Section, Breadcrumbs, InternalLink } from '@/components';

export const metadata: Metadata = {
  title: "Location van Lisbonne | Loueurs et départ aéroport",
  description: "Louez un van aménagé à Lisbonne : comparatif des loueurs, retrait à l'aéroport et avantages de partir de la capitale pour explorer le Portugal.",
  alternates: {
    canonical: "https://www.exploreportugalvan.com/location-van-lisbonne/",
  },
  openGraph: {
    title: "Location van Lisbonne | Loueurs et départ aéroport",
    description: "Louez un van aménagé à Lisbonne : comparatif des loueurs et retrait à l'aéroport.",
    url: "https://www.exploreportugalvan.com/location-van-lisbonne/",
    type: "article",
    locale: "fr_FR",
    siteName: "ExplorePortugalVan",
    images: [
      {
        url: "https://www.exploreportugalvan.com/images/location-van-lisbonne.jpg",
        width: 1200,
        height: 630,
        alt: "Location de van aménagé à Lisbonne pour explorer le Portugal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Location van Lisbonne | Loueurs et départ aéroport",
    description: "Louez un van aménagé à Lisbonne : comparatif des loueurs et retrait à l'aéroport.",
    images: ["https://www.exploreportugalvan.com/images/location-van-lisbonne.jpg"],
  },
};

const breadcrumbs = [
  { name: "Accueil", href: "/" },
  { name: "Location van Lisbonne", href: "/location-van-lisbonne/" },
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Location de van à Lisbonne",
  "description": "Guide complet pour louer un van aménagé à Lisbonne : loueurs, tarifs et accès depuis l'aéroport.",
  "image": "https://www.exploreportugalvan.com/images/location-van-lisbonne.jpg",
  "author": { "@type": "Organization", "name": "ExplorePortugalVan" },
  "publisher": { "@type": "Organization", "name": "ExplorePortugalVan", "url": "https://www.exploreportugalvan.com/", "logo": { "@type": "ImageObject", "url": "https://www.exploreportugalvan.com/images/favicon.png" } },
  "datePublished": "2024-08-01",
  "dateModified": "2025-01-15",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.exploreportugalvan.com/location-van-lisbonne/" }
};

export default function LisbonnePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      {/* Hero pro */}
      <section className="bg-gradient-to-r from-ocean-800 to-ocean-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-4">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Location de van à Lisbonne
              </h1>
              <p className="text-lg text-ocean-100 mb-6">
                Partez à l&apos;aventure depuis la capitale portugaise. Le plus grand choix de vans,
                position centrale idéale pour explorer le nord comme le sud du pays.
              </p>
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm text-ocean-200">loueurs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">7km</div>
                  <div className="text-sm text-ocean-200">aéroport-centre</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">300km</div>
                  <div className="text-sm text-ocean-200">vers Porto</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">280km</div>
                  <div className="text-sm text-ocean-200">vers Algarve</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/prix-location-van-portugal" className="px-4 py-2 bg-white/90 text-gray-800 rounded-lg text-sm font-medium hover:bg-white shadow-sm">Voir les prix</Link>
                <Link href="/itineraire-portugal-10-jours-van" className="px-4 py-2 bg-white/90 text-gray-800 rounded-lg text-sm font-medium hover:bg-white shadow-sm">Itinéraire 10 jours</Link>
              </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 gap-2">
              <div className="relative h-28 rounded-lg overflow-hidden">
                <Image src="/images/location-van-lisbonne.jpg" alt="Vue sur les toits colorés de Lisbonne depuis le quartier de l'Alfama" fill className="object-cover" sizes="150px" />
              </div>
              <div className="relative h-28 rounded-lg overflow-hidden">
                <Image src="/images/hero-portugal-van.jpg" alt="Van aménagé garé face à l'océan Atlantique au Portugal" fill className="object-cover" sizes="150px" />
              </div>
              <div className="relative h-28 rounded-lg overflow-hidden">
                <Image src="/images/road-trip-portugal.jpg" alt="Route côtière du Portugal idéale pour un road trip en van" fill className="object-cover" sizes="150px" />
              </div>
              <div className="relative h-28 rounded-lg overflow-hidden">
                <Image src="/images/itineraire-portugal.jpg" alt="Carte des itinéraires en van au départ de Lisbonne vers le nord et le sud" fill className="object-cover" sizes="150px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <Section>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Lisbonne constitue le point de départ idéal pour votre <InternalLink href="/">location de van au Portugal</InternalLink>.
              Capitale du pays et principal hub aérien, la ville offre le plus grand choix de loueurs
              et de véhicules.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Sa position centrale permet d&apos;explorer aussi bien le nord (direction <InternalLink href="/location-van-porto">Porto</InternalLink> et
              le Douro) que le sud (<InternalLink href="/location-van-algarve">Algarve</InternalLink> et ses plages) lors de votre
              <InternalLink href="/road-trip-portugal-van"> road trip</InternalLink>. De plus, les
              <InternalLink href="/prix-location-van-portugal"> tarifs</InternalLink> y sont souvent compétitifs
              grâce à la concurrence entre loueurs.
            </p>
          </div>
          <div className="bg-ocean-50 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Aéroport Humberto Delgado</h3>
            <p className="text-gray-600 text-sm mb-4">
              À seulement 7km du centre-ville, l&apos;un des aéroports les plus accessibles d&apos;Europe.
              Navettes gratuites proposées par la plupart des loueurs.
            </p>
            <p className="text-sm text-ocean-700 font-medium">Code IATA: LIS</p>
          </div>
        </div>
      </Section>

      {/* Avantages */}
      <Section background="gray">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
          Avantages de louer un van à Lisbonne
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Position centrale</h3>
            <p className="text-gray-600 text-sm">
              À mi-chemin entre <InternalLink href="/location-van-porto">Porto</InternalLink> et
              l&apos;<InternalLink href="/location-van-algarve">Algarve</InternalLink>.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-sand-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-sand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Meilleure offre</h3>
            <p className="text-gray-600 text-sm">
              Le plus grand nombre de loueurs et de véhicules disponibles au Portugal.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-nature-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-nature-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Flexibilité</h3>
            <p className="text-gray-600 text-sm">
              Options de restitution dans d&apos;autres villes (Porto, Faro) pour éviter les allers-retours.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Découvrir Lisbonne</h3>
            <p className="text-gray-600 text-sm">
              Profitez d&apos;une journée pour explorer la capitale avant de prendre la route.
            </p>
          </div>
        </div>
      </Section>

      {/* Accès aéroport */}
      <Section>
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
          Accès depuis l&apos;aéroport de Lisbonne
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 mb-6">
              L&apos;aéroport Humberto Delgado (LIS) est situé à seulement 7 km du centre-ville,
              ce qui en fait l&apos;un des aéroports les plus accessibles d&apos;Europe. Plusieurs
              options pour rejoindre votre loueur de van :
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-900">Navette loueur</h4>
                <p className="text-sm text-gray-600 mt-1">
                  La plupart des loueurs proposent une navette gratuite depuis l&apos;aéroport.
                  Contactez-les à l&apos;avance pour organiser le transfert.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-900">Métro (ligne rouge)</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Station &quot;Aeroporto&quot; reliée au centre-ville en 20-25 minutes.
                  Ticket à 1,65€.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-900">Taxi/Uber</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Environ 15-20€ pour le centre-ville. Pratique avec beaucoup de bagages.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-ocean-50 border-l-4 border-ocean-500 p-6 mb-6">
              <h4 className="font-semibold text-ocean-800 mb-2">Conseil</h4>
              <p className="text-ocean-800">
                Privilégiez les loueurs qui livrent le van directement à l&apos;aéroport ou
                qui viennent vous chercher. Cela simplifie grandement la logistique,
                surtout après un long vol.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-4">Vols directs fréquents depuis :</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Paris</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Lyon</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Marseille</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Bordeaux</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Nantes</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Toulouse</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Bruxelles</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Genève</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <AffiliateCTA
        variant="hero"
        title="Comparez les loueurs à Lisbonne"
        description="Trouvez le van idéal au meilleur prix parmi les loueurs lisboètes."
        buttonText="Voir les offres"
              />

      {/* Itinéraires depuis Lisbonne */}
      <Section background="gray">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
          Itinéraires populaires depuis Lisbonne
        </h2>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-sand-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-sand-700 font-bold text-lg">S</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Direction Sud - Algarve</h3>
            <p className="text-gray-600 text-sm mb-3">
              250-300 km jusqu&apos;à l&apos;<InternalLink href="/location-van-algarve">Algarve</InternalLink>. Passez par l&apos;Alentejo
              et ses plaines, découvrez Évora (UNESCO) avant de rejoindre les plages dorées.
            </p>
            <span className="text-xs text-gray-500">Durée suggérée : 5-7 jours</span>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-ocean-700 font-bold text-lg">N</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Direction Nord - Porto et Douro</h3>
            <p className="text-gray-600 text-sm mb-3">
              300 km jusqu&apos;à <InternalLink href="/location-van-porto">Porto</InternalLink>. Route côtière via Nazaré,
              Ericeira et les villages de pêcheurs. Explorez la vallée du Douro.
            </p>
            <span className="text-xs text-gray-500">Durée suggérée : 5-7 jours</span>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-nature-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-nature-700 font-bold text-lg">C</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Circuit complet Nord-Sud</h3>
            <p className="text-gray-600 text-sm mb-3">
              L&apos;<InternalLink href="/itineraire-portugal-10-jours-van">itinéraire idéal en 10 jours</InternalLink> :
              montez vers Porto, redescendez par l&apos;intérieur jusqu&apos;à l&apos;Algarve.
            </p>
            <span className="text-xs text-gray-500">Durée suggérée : 10-14 jours</span>
          </div>
        </div>
      </Section>

      {/* À voir autour de Lisbonne */}
      <Section>
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
          Premières étapes autour de Lisbonne
        </h2>

        <p className="text-gray-700 mb-6">
          Avant de partir vers le nord ou le sud, prenez le temps de découvrir
          les environs immédiats de Lisbonne, accessibles en van. Consultez notre guide
          <InternalLink href="/dormir-en-van-portugal"> où dormir en van</InternalLink> pour chaque étape.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-ocean-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <div>
                <strong className="text-gray-900">Sintra (30 km)</strong>
                <p className="text-gray-600 mt-1 text-sm">
                  Palais féeriques et forêts mystérieuses. Stationnement difficile
                  dans le centre, privilégiez les parkings extérieurs.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-ocean-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <div>
                <strong className="text-gray-900">Cascais et Estoril (25 km)</strong>
                <p className="text-gray-600 mt-1 text-sm">
                  Stations balnéaires chics avec plages agréables.
                  Aire de camping-car disponible à Cascais.
                </p>
              </div>
            </li>
          </ul>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-ocean-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <div>
                <strong className="text-gray-900">Cabo da Roca (40 km)</strong>
                <p className="text-gray-600 mt-1 text-sm">
                  Point le plus occidental de l&apos;Europe continentale.
                  Parking avec vue spectaculaire sur les falaises.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-ocean-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <div>
                <strong className="text-gray-900">Arrábida (40 km sud)</strong>
                <p className="text-gray-600 mt-1 text-sm">
                  Parc naturel avec plages paradisiaques. Attention au
                  <InternalLink href="/camping-sauvage-portugal-van"> stationnement réglementé</InternalLink>.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Section>

      <AffiliateCTA
        variant="default"
        title="Prêt à explorer le Portugal ?"
        description="Comparez les offres de location de van à Lisbonne."
        buttonText="Voir les disponibilités"
              />

      {/* Navigation */}
      <Section background="gray">
        <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Autres points de départ</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/location-van-porto" className="group p-5 bg-white rounded-xl hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900 group-hover:text-ocean-600 mb-1">Location van Porto</h3>
            <p className="text-sm text-gray-600">Pour explorer le nord et le Douro</p>
          </Link>
          <Link href="/location-van-algarve" className="group p-5 bg-white rounded-xl hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900 group-hover:text-ocean-600 mb-1">Location van Algarve</h3>
            <p className="text-sm text-gray-600">Accès direct aux plages du sud</p>
          </Link>
        </div>
      </Section>
    </>
  );
}
