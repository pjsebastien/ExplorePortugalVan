import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AffiliateCTA, Section, InternalLink } from '@/components';

export const metadata: Metadata = {
  title: "Location van Portugal | Comparez et réservez votre van aménagé",
  description: "Louez un van aménagé au Portugal et partez à l'aventure. Comparatif des loueurs, tarifs, itinéraires et astuces pour votre road trip sur la côte atlantique.",
  alternates: {
    canonical: "https://www.exploreportugalvan.com/",
  },
  openGraph: {
    title: "Location van Portugal | Comparez et réservez votre van aménagé",
    description: "Louez un van aménagé au Portugal et partez à l'aventure. Comparatif des loueurs, tarifs et astuces pour votre road trip.",
    url: "https://www.exploreportugalvan.com/",
  },
  twitter: {
    title: "Location van Portugal | Comparez et réservez votre van aménagé",
    description: "Louez un van aménagé au Portugal et partez à l'aventure. Comparatif des loueurs, tarifs et astuces pour votre road trip.",
  },
};

const schemaWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "ExplorePortugalVan",
  "url": "https://www.exploreportugalvan.com/",
  "description": "Louez un van aménagé au Portugal. Comparatif des loueurs, tarifs, itinéraires et astuces pour votre road trip sur la côte atlantique.",
  "inLanguage": "fr",
  "publisher": {
    "@type": "Organization",
    "name": "ExplorePortugalVan",
    "url": "https://www.exploreportugalvan.com/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.exploreportugalvan.com/images/favicon.png"
    }
  }
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebsite) }}
      />

      {/* Hero Section - Professional with grid images */}
      <section className="bg-gradient-to-br from-ocean-900 via-ocean-800 to-ocean-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-ocean-200 font-medium mb-3">Votre aventure commence ici</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Location de van au Portugal
              </h1>
              <p className="text-lg text-ocean-100 mb-8 leading-relaxed">
                Explorez les falaises dorées de l&apos;Algarve, surfez sur la côte atlantique et découvrez
                les villages authentiques du Douro. Le Portugal en van, c&apos;est la liberté de voyager
                à votre rythme sur plus de 850 km de côtes spectaculaires.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/prix-location-van-portugal"
                  className="inline-flex items-center justify-center px-6 py-3 bg-sand-500 text-gray-900 font-semibold rounded-lg hover:bg-sand-400 transition-colors"
                >
                  Comparer les prix
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link
                  href="/itineraire-portugal-10-jours-van"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
                >
                  Voir l&apos;itinéraire 10 jours
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <Image src="/images/location-van-algarve.jpg" alt="Falaises de l'Algarve" fill className="object-cover" sizes="200px" />
                </div>
                <div className="relative h-44 rounded-lg overflow-hidden">
                  <Image src="/images/road-trip-portugal.jpg" alt="Route côtière Portugal" fill className="object-cover" sizes="200px" />
                </div>
              </div>
              <div className="space-y-3 pt-6">
                <div className="relative h-44 rounded-lg overflow-hidden">
                  <Image src="/images/hero-portugal-van.jpg" alt="Van face à l'océan" fill className="object-cover" sizes="200px" />
                </div>
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <Image src="/images/dormir-van-portugal.jpg" alt="Coucher de soleil en van" fill className="object-cover" sizes="200px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick access - User journey */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <Link href="#pourquoi" className="px-4 py-2 bg-gray-100 rounded-full hover:bg-ocean-100 hover:text-ocean-700 transition-colors">Pourquoi le Portugal</Link>
            <Link href="#regions" className="px-4 py-2 bg-gray-100 rounded-full hover:bg-ocean-100 hover:text-ocean-700 transition-colors">Régions à explorer</Link>
            <Link href="/prix-location-van-portugal" className="px-4 py-2 bg-gray-100 rounded-full hover:bg-ocean-100 hover:text-ocean-700 transition-colors">Prix et budget</Link>
            <Link href="/itineraire-portugal-10-jours-van" className="px-4 py-2 bg-gray-100 rounded-full hover:bg-ocean-100 hover:text-ocean-700 transition-colors">Itinéraire 10 jours</Link>
            <Link href="#ou-louer" className="px-4 py-2 bg-gray-100 rounded-full hover:bg-ocean-100 hover:text-ocean-700 transition-colors">Où louer</Link>
            <Link href="/faq-location-van-portugal" className="px-4 py-2 bg-gray-100 rounded-full hover:bg-ocean-100 hover:text-ocean-700 transition-colors">FAQ</Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <Section>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Le <strong>Portugal s&apos;impose comme la destination phare</strong> pour les amateurs de van aménagé en Europe.
              Avec ses 300 jours de soleil par an, son coût de la vie abordable et ses infrastructures adaptées aux voyageurs
              nomades, <InternalLink href="/road-trip-portugal-van">le road trip en van au Portugal</InternalLink> représente l&apos;expérience
              parfaite pour découvrir ce pays authentique.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              De <InternalLink href="/location-van-lisbonne">Lisbonne</InternalLink> aux plages sauvages de la Costa Vicentina,
              de <InternalLink href="/location-van-porto">Porto</InternalLink> et sa vallée du Douro jusqu&apos;aux falaises
              spectaculaires de l&apos;<InternalLink href="/location-van-algarve">Algarve</InternalLink>, chaque kilomètre offre
              un nouveau panorama. Les <InternalLink href="/prix-location-van-portugal">tarifs de location</InternalLink> restent
              accessibles et la conduite est facile sur un réseau routier de qualité.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Que vous soyez un couple en quête d&apos;évasion, une famille souhaitant transmettre le goût du voyage, ou un
              solo-traveler combinant travail et aventure, ce guide vous accompagne dans toutes les étapes de votre projet :
              du choix du véhicule aux <InternalLink href="/dormir-en-van-portugal">meilleurs spots pour dormir</InternalLink>,
              en passant par la <InternalLink href="/camping-sauvage-portugal-van">réglementation sur le camping</InternalLink>.
            </p>
          </div>
          <div className="bg-ocean-50 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Le Portugal en chiffres</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center"><span className="w-2 h-2 bg-ocean-500 rounded-full mr-3"></span><strong>850 km</strong>&nbsp;de côtes</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-ocean-500 rounded-full mr-3"></span><strong>300+</strong>&nbsp;jours de soleil/an</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-ocean-500 rounded-full mr-3"></span><strong>200+</strong>&nbsp;aires camping-car</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-ocean-500 rounded-full mr-3"></span><strong>60-130€</strong>&nbsp;/jour en moyenne</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-ocean-500 rounded-full mr-3"></span><strong>4</strong>&nbsp;sites UNESCO</li>
            </ul>
            <Link href="/prix-location-van-portugal" className="inline-block mt-6 text-ocean-600 font-medium hover:text-ocean-800">
              Voir le détail des prix →
            </Link>
          </div>
        </div>
      </Section>

      {/* Pourquoi le Portugal */}
      <Section id="pourquoi" background="gray">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
          Pourquoi louer un van aménagé au Portugal ?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white p-5 rounded-xl">
            <div className="w-10 h-10 bg-ocean-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Budget maîtrisé</h3>
            <p className="text-gray-600 text-sm">Transport et hébergement combinés. Économisez jusqu&apos;à 50% vs circuit classique. <InternalLink href="/prix-location-van-portugal">Voir les tarifs</InternalLink>.</p>
          </div>
          <div className="bg-white p-5 rounded-xl">
            <div className="w-10 h-10 bg-sand-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-sand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Climat idéal</h3>
            <p className="text-gray-600 text-sm">300 jours de soleil. Voyagez toute l&apos;année, l&apos;<InternalLink href="/location-van-algarve">Algarve</InternalLink> reste douce même en hiver.</p>
          </div>
          <div className="bg-white p-5 rounded-xl">
            <div className="w-10 h-10 bg-nature-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-nature-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Diversité paysages</h3>
            <p className="text-gray-600 text-sm">Falaises, plages de surf, vignobles, montagnes. Découvrez notre <InternalLink href="/itineraire-portugal-10-jours-van">itinéraire 10 jours</InternalLink>.</p>
          </div>
          <div className="bg-white p-5 rounded-xl">
            <div className="w-10 h-10 bg-ocean-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Liberté totale</h3>
            <p className="text-gray-600 text-sm">Modifiez votre parcours selon vos envies. <InternalLink href="/dormir-en-van-portugal">200+ aires</InternalLink> pour stationner.</p>
          </div>
        </div>
        <p className="mt-8 text-gray-700">
          Le Portugal offre un <strong>rapport qualité-prix imbattable</strong> en Europe. La gastronomie est excellente et abordable
          (comptez 10-15€ pour un repas complet), le carburant moins cher qu&apos;en France, et l&apos;accueil des locaux est chaleureux.
          Les <InternalLink href="/road-trip-portugal-van">routes panoramiques</InternalLink> sont bien entretenues et les distances
          restent raisonnables : de <InternalLink href="/location-van-porto">Porto</InternalLink> à l&apos;<InternalLink href="/location-van-algarve">Algarve</InternalLink>,
          comptez seulement 500 km.
        </p>
      </Section>

      {/* Régions */}
      <Section id="regions">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-3">
          Les régions incontournables en van
        </h2>
        <p className="text-gray-600 mb-8">Chaque région du Portugal offre une expérience unique. Voici les principales destinations pour votre <InternalLink href="/road-trip-portugal-van">road trip</InternalLink>.</p>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="bg-white border rounded-xl overflow-hidden">
            <div className="relative h-40">
              <Image src="/images/location-van-algarve.jpg" alt="Algarve falaises dorées" fill className="object-cover" sizes="400px" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Algarve</h3>
              <p className="text-gray-600 text-sm mb-3">
                Les falaises ocre de Ponta da Piedade, la grotte de Benagil, Praia da Marinha... Le sud du Portugal offre les
                paysages les plus spectaculaires. La Costa Vicentina ajoute une touche sauvage avec ses plages de surf préservées.
              </p>
              <Link href="/location-van-algarve" className="text-ocean-600 text-sm font-medium hover:text-ocean-800">
                Location van Algarve →
              </Link>
            </div>
          </div>

          <div className="bg-white border rounded-xl overflow-hidden">
            <div className="relative h-40">
              <Image src="/images/road-trip-portugal.jpg" alt="Côte atlantique Portugal" fill className="object-cover" sizes="400px" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Côte Atlantique</h3>
              <p className="text-gray-600 text-sm mb-3">
                De <InternalLink href="/location-van-lisbonne">Lisbonne</InternalLink> à <InternalLink href="/location-van-porto">Porto</InternalLink>,
                la côte atlantique déroule ses plages de surf (Ericeira, Peniche, Nazaré), ses villages de pêcheurs et la Serra de Sintra.
              </p>
              <Link href="/road-trip-portugal-van" className="text-ocean-600 text-sm font-medium hover:text-ocean-800">
                Guide road trip complet →
              </Link>
            </div>
          </div>

          <div className="bg-white border rounded-xl overflow-hidden">
            <div className="relative h-40">
              <Image src="/images/location-van-porto.jpg" alt="Porto et le Douro" fill className="object-cover" sizes="400px" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Porto et le Douro</h3>
              <p className="text-gray-600 text-sm mb-3">
                La vallée du Douro (UNESCO) offre des routes panoramiques entre vignobles en terrasses. Le nord abrite aussi
                le parc national Peneda-Gerês, seul parc national portugais, idéal pour la randonnée.
              </p>
              <Link href="/location-van-porto" className="text-ocean-600 text-sm font-medium hover:text-ocean-800">
                Location van Porto →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <AffiliateCTA
        variant="compact"
        title="Trouvez votre van idéal"
        description="Comparez les offres des loueurs partenaires et réservez au meilleur prix."
        buttonText="Comparer les offres"
              />

      {/* Budget */}
      <Section background="gray">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Combien coûte la location d&apos;un van au Portugal ?
            </h2>
            <p className="text-gray-700 mb-4">
              Les <InternalLink href="/prix-location-van-portugal">prix de location</InternalLink> varient selon la saison,
              le type de véhicule et la durée. En moyenne, comptez <strong>60 à 130€ par jour</strong> pour un van aménagé classique.
            </p>
            <p className="text-gray-600 mb-4">
              La haute saison (juillet-août) affiche des tarifs 30-40% plus élevés. Pour un meilleur rapport qualité-prix,
              privilégiez le printemps (avril-juin) ou l&apos;automne (septembre-octobre) : météo agréable, moins de monde, et
              tarifs accessibles.
            </p>
            <p className="text-gray-600 mb-6">
              Au-delà de la location, prévoyez environ 30-50€/jour pour le carburant, la nourriture et les aires de
              <InternalLink href="/dormir-en-van-portugal">stationnement</InternalLink>. Notre guide
              <InternalLink href="/prix-location-van-portugal">prix et budget</InternalLink> détaille tous les coûts.
            </p>
            <Link href="/prix-location-van-portugal" className="inline-flex items-center text-ocean-600 font-medium hover:text-ocean-800">
              Consulter le guide budget complet
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold mb-4">Tarifs indicatifs par type de véhicule</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-gray-700">Van compact (2 places)</span>
                <span className="font-semibold text-ocean-600">60-90€/jour</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-gray-700">Van aménagé (2-4 places)</span>
                <span className="font-semibold text-ocean-600">90-130€/jour</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-gray-700">Fourgon grand volume</span>
                <span className="font-semibold text-ocean-600">120-180€/jour</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Camping-car familial</span>
                <span className="font-semibold text-ocean-600">150-250€/jour</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">* Prix moyens en moyenne saison. Caution: 500-2000€.</p>
          </div>
        </div>
      </Section>

      {/* Où louer */}
      <Section id="ou-louer">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-3">
          Où louer votre van au Portugal ?
        </h2>
        <p className="text-gray-600 mb-8">
          Trois principales villes proposent des locations de van. Le choix dépend de votre <InternalLink href="/itineraire-portugal-10-jours-van">itinéraire prévu</InternalLink> et de votre aéroport d&apos;arrivée.
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          <Link href="/location-van-lisbonne" className="group bg-white border rounded-xl p-6 hover:border-ocean-300 hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-ocean-600">Lisbonne</h3>
            <p className="text-gray-600 text-sm mb-3">
              <strong>Le plus grand choix.</strong> Position centrale idéale pour explorer le nord comme le sud.
              Principal hub aérien, nombreux loueurs disponibles.
            </p>
            <span className="text-ocean-600 text-sm font-medium">Voir les offres Lisbonne →</span>
          </Link>

          <Link href="/location-van-porto" className="group bg-white border rounded-xl p-6 hover:border-ocean-300 hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-ocean-600">Porto</h3>
            <p className="text-gray-600 text-sm mb-3">
              <strong>Tarifs compétitifs.</strong> Point de départ parfait pour le Douro et le nord sauvage.
              À 1h30 du parc national Peneda-Gerês.
            </p>
            <span className="text-ocean-600 text-sm font-medium">Voir les offres Porto →</span>
          </Link>

          <Link href="/location-van-algarve" className="group bg-white border rounded-xl p-6 hover:border-ocean-300 hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-ocean-600">Algarve (Faro)</h3>
            <p className="text-gray-600 text-sm mb-3">
              <strong>Accès direct aux plages.</strong> Idéal pour un séjour concentré sur le sud.
              Vols low-cost nombreux vers Faro.
            </p>
            <span className="text-ocean-600 text-sm font-medium">Voir les offres Algarve →</span>
          </Link>
        </div>
      </Section>

      {/* Réglementation */}
      <Section background="gray">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Réglementation : où dormir en van ?
            </h2>
            <p className="text-gray-700 mb-4">
              Le <InternalLink href="/camping-sauvage-portugal-van">camping sauvage est officiellement interdit</InternalLink> au
              Portugal depuis 2021, particulièrement sur les zones côtières et dans les parcs naturels. Des amendes de 60 à 600€
              peuvent être appliquées.
            </p>
            <p className="text-gray-600 mb-4">
              Mais pas d&apos;inquiétude : plus de <strong>200 aires de camping-car officielles</strong> existent dans le pays,
              avec des tarifs allant de gratuit à 25€/nuit. De nombreux campings accueillent également les vans.
            </p>
            <p className="text-gray-600 mb-6">
              L&apos;application <a href="https://www.park4night.com/" target="_blank" rel="noopener noreferrer" className="text-ocean-600 font-semibold hover:text-ocean-800">Park4Night</a> recense des milliers de spots vérifiés par la communauté vanlife.
              Notre guide <InternalLink href="/dormir-en-van-portugal">Où dormir en van</InternalLink> détaille toutes les options légales.
            </p>
            <div className="flex gap-4">
              <Link href="/camping-sauvage-portugal-van" className="text-ocean-600 font-medium hover:text-ocean-800">
                Réglementation complète →
              </Link>
              <Link href="/dormir-en-van-portugal" className="text-ocean-600 font-medium hover:text-ocean-800">
                Trouver où dormir →
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Documents nécessaires</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-nature-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Permis B valide (suffisant pour tous les vans)</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-nature-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Pièce d&apos;identité ou passeport</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-nature-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Carte bancaire pour la caution</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-nature-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Application <a href="https://www.park4night.com/" target="_blank" rel="noopener noreferrer" className="text-ocean-600 hover:text-ocean-800">Park4Night</a> (recommandée)</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-ocean-50 rounded-lg">
              <p className="text-sm text-ocean-800">
                <strong>Conseil :</strong> Vérifiez si votre carte bancaire premium inclut une assurance location véhicule
                pour éviter le supplément assurance du loueur.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <AffiliateCTA
        variant="hero"
        title="Prêt à partir à l'aventure ?"
        description="Comparez les meilleures offres de location de van au Portugal et réservez votre liberté."
        buttonText="Voir les offres de location"
              />

      {/* Navigation pages */}
      <Section>
        <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
          Tout ce qu&apos;il faut savoir pour votre road trip
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href="/road-trip-portugal-van" className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-ocean-50 transition-colors">
            <div className="w-10 h-10 bg-ocean-100 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-5 h-5 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Road trip Portugal</h3>
              <p className="text-sm text-gray-500">Guide complet des régions</p>
            </div>
          </Link>
          <Link href="/itineraire-portugal-10-jours-van" className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-ocean-50 transition-colors">
            <div className="w-10 h-10 bg-sand-100 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-5 h-5 text-sand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Itinéraire 10 jours</h3>
              <p className="text-sm text-gray-500">Programme jour par jour</p>
            </div>
          </Link>
          <Link href="/prix-location-van-portugal" className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-ocean-50 transition-colors">
            <div className="w-10 h-10 bg-nature-100 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-5 h-5 text-nature-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Prix et budget</h3>
              <p className="text-sm text-gray-500">Tarifs détaillés</p>
            </div>
          </Link>
          <Link href="/dormir-en-van-portugal" className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-ocean-50 transition-colors">
            <div className="w-10 h-10 bg-ocean-100 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-5 h-5 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Où dormir en van</h3>
              <p className="text-sm text-gray-500">Aires et spots</p>
            </div>
          </Link>
          <Link href="/camping-sauvage-portugal-van" className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-ocean-50 transition-colors">
            <div className="w-10 h-10 bg-sand-100 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-5 h-5 text-sand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Camping sauvage</h3>
              <p className="text-sm text-gray-500">Réglementation 2025</p>
            </div>
          </Link>
          <Link href="/faq-location-van-portugal" className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-ocean-50 transition-colors">
            <div className="w-10 h-10 bg-nature-100 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-5 h-5 text-nature-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">FAQ</h3>
              <p className="text-sm text-gray-500">Questions fréquentes</p>
            </div>
          </Link>
        </div>
      </Section>
    </>
  );
}
