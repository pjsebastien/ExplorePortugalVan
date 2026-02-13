import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AffiliateCTA, Section, Breadcrumbs, InternalLink } from '@/components';

export const metadata: Metadata = {
  title: "Location Van Porto - Explorez le Nord du Portugal",
  description: "Location de van à Porto : loueurs, tarifs, accès aéroport et avantages de partir du nord pour découvrir le Douro et la côte atlantique.",
  alternates: {
    canonical: "https://exploreportugalvan.com/location-van-porto",
  },
};

const breadcrumbs = [
  { name: "Accueil", href: "/" },
  { name: "Location van Porto", href: "/location-van-porto" },
];

export default function PortoPage() {
  return (
    <>
      {/* Hero pro */}
      <section className="bg-gradient-to-r from-nature-700 to-nature-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-4">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Location van Porto
              </h1>
              <p className="text-lg text-nature-100 mb-6">
                Découvrez le nord du Portugal et la vallée du Douro depuis la deuxième ville du pays.
                Tarifs compétitifs et accès direct aux régions les moins touristiques.
              </p>
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">-15%</div>
                  <div className="text-sm text-nature-200">vs Lisbonne</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">1h</div>
                  <div className="text-sm text-nature-200">Douro</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">1h30</div>
                  <div className="text-sm text-nature-200">Peneda-Gerês</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">11km</div>
                  <div className="text-sm text-nature-200">aéroport</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/prix-location-van-portugal" className="px-4 py-2 bg-white/90 text-gray-800 rounded-lg text-sm font-medium hover:bg-white shadow-sm">Voir les prix</Link>
                <Link href="/road-trip-portugal-van" className="px-4 py-2 bg-white/90 text-gray-800 rounded-lg text-sm font-medium hover:bg-white shadow-sm">Guide road trip</Link>
              </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 gap-2">
              <div className="relative h-28 rounded-lg overflow-hidden">
                <Image src="/images/location-van-porto.jpg" alt="Porto" fill className="object-cover" sizes="150px" />
              </div>
              <div className="relative h-28 rounded-lg overflow-hidden">
                <Image src="/images/road-trip-portugal.jpg" alt="Douro" fill className="object-cover" sizes="150px" />
              </div>
              <div className="relative h-28 rounded-lg overflow-hidden">
                <Image src="/images/hero-portugal-van.jpg" alt="Van" fill className="object-cover" sizes="150px" />
              </div>
              <div className="relative h-28 rounded-lg overflow-hidden">
                <Image src="/images/itineraire-portugal.jpg" alt="Route" fill className="object-cover" sizes="150px" />
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
              Porto, deuxième ville du Portugal, offre une alternative intéressante à <InternalLink href="/location-van-lisbonne">Lisbonne</InternalLink> pour
              démarrer votre <InternalLink href="/">location de van au Portugal</InternalLink>.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Point de départ idéal pour explorer le nord sauvage du pays, la vallée du Douro
              et le seul parc national portugais : Peneda-Gerês. Les <InternalLink href="/prix-location-van-portugal">tarifs</InternalLink> y sont
              souvent 10-15% moins chers qu&apos;à Lisbonne, surtout en haute saison.
            </p>
          </div>
          <div className="bg-nature-50 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Aéroport Francisco Sá Carneiro</h3>
            <p className="text-gray-600 text-sm mb-4">
              À 11km au nord du centre-ville. Bien desservi par les compagnies low-cost
              avec des vols directs depuis de nombreuses villes européennes.
            </p>
            <p className="text-sm text-nature-700 font-medium">Code IATA: OPO</p>
          </div>
        </div>
      </Section>

      {/* Avantages */}
      <Section background="gray">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
          Pourquoi louer un van à Porto
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Tarifs compétitifs</h3>
            <p className="text-gray-600 text-sm">
              Les <InternalLink href="/prix-location-van-portugal">prix de location</InternalLink> sont souvent
              10-15% moins chers qu&apos;à Lisbonne en haute saison.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-sand-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-sand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Accès au nord sauvage</h3>
            <p className="text-gray-600 text-sm">
              À 1h30 du parc national Peneda-Gerês, idéal pour les amateurs de nature préservée.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-nature-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-nature-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Vallée du Douro</h3>
            <p className="text-gray-600 text-sm">
              Les vignobles UNESCO à 1h de route. Routes panoramiques exceptionnelles pour les vans.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Moins touristique</h3>
            <p className="text-gray-600 text-sm">
              Le nord du Portugal attire moins de monde que l&apos;<InternalLink href="/location-van-algarve">Algarve</InternalLink>. Plus d&apos;authenticité.
            </p>
          </div>
        </div>
      </Section>

      {/* Accès aéroport */}
      <Section>
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
          Accès depuis l&apos;aéroport Francisco Sá Carneiro
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 mb-6">
              L&apos;aéroport de Porto (OPO) est situé à 11 km au nord du centre-ville.
              Bien desservi par les compagnies low-cost, il reçoit des vols directs
              de nombreuses villes européennes.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-900">Métro (ligne E - Violette)</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Relie l&apos;aéroport au centre-ville (Trindade) en 30-35 minutes.
                  Ticket à 2,60€ (zone 4).
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-900">Navette loueur</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Plusieurs loueurs proposent un service de navette gratuit.
                  Confirmez lors de la réservation.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-900">Taxi/Uber</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Environ 20-25€ pour le centre. Tarif fixe pour les taxis officiels.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Vols directs fréquents depuis :</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Paris</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Lyon</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Marseille</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Bordeaux</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Bruxelles</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Genève</span>
              </div>
            </div>

            <div className="bg-nature-50 border-l-4 border-nature-500 p-5">
              <h4 className="font-semibold text-nature-800 mb-2">Astuce budget</h4>
              <p className="text-nature-800 text-sm">
                Les vols vers Porto sont parfois moins chers que vers Lisbonne,
                surtout avec les compagnies low-cost. Comparez les deux options !
              </p>
            </div>
          </div>
        </div>
      </Section>

      <AffiliateCTA
        variant="hero"
        title="Louez votre van à Porto"
        description="Comparez les offres des loueurs portuans et partez à l'aventure."
        buttonText="Voir les offres"
              />

      {/* Itinéraires */}
      <Section background="gray">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
          Itinéraires depuis Porto
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">La vallée du Douro (1-3 jours)</h3>
            <p className="text-gray-600 text-sm mb-4">
              Remontez le fleuve vers Pinhão et Régua. Routes sinueuses entre les terrasses
              de vignobles. Dégustations dans les quintas. Couchers de soleil inoubliables.
              Consultez notre guide <InternalLink href="/dormir-en-van-portugal">où dormir</InternalLink>.
            </p>
            <div className="flex gap-2 text-xs">
              <span className="bg-sand-100 text-sand-700 px-2 py-1 rounded">100-150 km</span>
              <span className="bg-nature-100 text-nature-700 px-2 py-1 rounded">UNESCO</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Peneda-Gerês (2-4 jours)</h3>
            <p className="text-gray-600 text-sm mb-4">
              Le seul parc national du Portugal. Montagnes, cascades, villages en granit.
              Routes étroites mais praticables en van. Attention au <InternalLink href="/camping-sauvage-portugal-van">camping réglementé</InternalLink>.
            </p>
            <div className="flex gap-2 text-xs">
              <span className="bg-sand-100 text-sand-700 px-2 py-1 rounded">120 km</span>
              <span className="bg-nature-100 text-nature-700 px-2 py-1 rounded">Randonnée</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">La côte nord jusqu&apos;à la Galice (2-3 jours)</h3>
            <p className="text-gray-600 text-sm mb-4">
              Viana do Castelo, Caminha et les plages sauvages du nord. Possibilité de
              pousser jusqu&apos;en Galice espagnole. Moins fréquenté que le sud.
            </p>
            <div className="flex gap-2 text-xs">
              <span className="bg-sand-100 text-sand-700 px-2 py-1 rounded">80-150 km</span>
              <span className="bg-ocean-100 text-ocean-700 px-2 py-1 rounded">Plages</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Circuit complet vers le sud (7-10 jours)</h3>
            <p className="text-gray-600 text-sm mb-4">
              Descendez la côte atlantique : Aveiro, Nazaré, Ericeira, <InternalLink href="/location-van-lisbonne">Lisbonne</InternalLink>,
              Alentejo, <InternalLink href="/location-van-algarve">Algarve</InternalLink>. Notre <InternalLink href="/itineraire-portugal-10-jours-van">itinéraire 10 jours</InternalLink>.
            </p>
            <div className="flex gap-2 text-xs">
              <span className="bg-sand-100 text-sand-700 px-2 py-1 rounded">600+ km</span>
              <span className="bg-ocean-100 text-ocean-700 px-2 py-1 rounded">Complet</span>
            </div>
          </div>
        </div>
      </Section>

      {/* À ne pas manquer */}
      <Section>
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
          À ne pas manquer autour de Porto
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-ocean-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <div>
                <strong className="text-gray-900">Matosinhos</strong>
                <p className="text-gray-600 mt-1 text-sm">
                  Plage de Porto avec excellents restaurants de poisson grillé.
                  Aire de camping-car à proximité.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-ocean-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <div>
                <strong className="text-gray-900">Guimarães</strong>
                <p className="text-gray-600 mt-1 text-sm">
                  Berceau de la nation portugaise. Centre historique UNESCO.
                  À 50 km de Porto.
                </p>
              </div>
            </li>
          </ul>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-ocean-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <div>
                <strong className="text-gray-900">Braga</strong>
                <p className="text-gray-600 mt-1 text-sm">
                  Plus ancienne ville du Portugal. Sanctuaire du Bom Jesus
                  et son escalier baroque monumental.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-ocean-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <div>
                <strong className="text-gray-900">Aveiro</strong>
                <p className="text-gray-600 mt-1 text-sm">
                  La Venise portugaise. Canaux, moliceiros colorés et maisons rayées
                  de Costa Nova. 75 km au sud.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Section>

      <AffiliateCTA
        variant="default"
        title="Comparez les offres à Porto"
        description="Trouvez le van idéal pour explorer le nord du Portugal."
        buttonText="Voir les disponibilités"
              />

      {/* Navigation */}
      <Section background="gray">
        <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Autres points de départ</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/location-van-lisbonne" className="group p-5 bg-white rounded-xl hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900 group-hover:text-ocean-600 mb-1">Location van Lisbonne</h3>
            <p className="text-sm text-gray-600">Position centrale, plus grand choix</p>
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
