import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AffiliateCTA, Section, Breadcrumbs, InternalLink } from '@/components';

export const metadata: Metadata = {
  title: "Road trip Portugal en van | Itinéraires et spots",
  description: "Organisez votre road trip au Portugal en van aménagé. Les plus beaux itinéraires, spots secrets, routes côtières et conseils de vanlifers pour une aventure inoubliable.",
  alternates: {
    canonical: "https://www.exploreportugalvan.com/road-trip-portugal-van/",
  },
  openGraph: {
    title: "Road trip Portugal en van | Itinéraires et spots",
    description: "Organisez votre road trip au Portugal en van aménagé. Les plus beaux itinéraires et conseils de vanlifers.",
    url: "https://www.exploreportugalvan.com/road-trip-portugal-van/",
  },
  twitter: {
    title: "Road trip Portugal en van | Itinéraires et spots",
    description: "Organisez votre road trip au Portugal en van aménagé. Les plus beaux itinéraires et conseils de vanlifers.",
  },
};

const breadcrumbs = [
  { name: "Accueil", href: "/" },
  { name: "Road trip Portugal", href: "/road-trip-portugal-van" },
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Road trip au Portugal en van",
  "description": "Organisez votre road trip au Portugal en van aménagé. Les plus beaux itinéraires, spots secrets et conseils.",
  "author": { "@type": "Organization", "name": "ExplorePortugalVan" },
  "publisher": { "@type": "Organization", "name": "ExplorePortugalVan" },
  "datePublished": "2024-06-15",
  "dateModified": "2025-02-15",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.exploreportugalvan.com/road-trip-portugal-van/" }
};

export default function RoadTripPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      {/* Hero compact */}
      <section className="bg-gradient-to-r from-ocean-800 to-ocean-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Road trip au Portugal en van
              </h1>
              <p className="text-lg text-ocean-100 mb-6">
                Des falaises de l&apos;Algarve aux vignobles du Douro, planifiez votre aventure sur les plus
                belles routes du Portugal. Ce guide couvre les régions incontournables, les étapes clés
                et tous les conseils pratiques.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/itineraire-portugal-10-jours-van" className="px-4 py-2 bg-white/90 text-gray-800 rounded-lg text-sm font-medium hover:bg-white shadow-sm transition-colors">
                  Itinéraire 10 jours
                </Link>
                <Link href="/prix-location-van-portugal" className="px-4 py-2 bg-white/90 text-gray-800 rounded-lg text-sm font-medium hover:bg-white shadow-sm transition-colors">
                  Prix et budget
                </Link>
                <Link href="/dormir-en-van-portugal" className="px-4 py-2 bg-white/90 text-gray-800 rounded-lg text-sm font-medium hover:bg-white shadow-sm transition-colors">
                  Où dormir
                </Link>
              </div>
            </div>
            <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden">
              <Image
                src="/images/road-trip-portugal.jpg"
                alt="Route côtière du Portugal avec van"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <Section>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Un <strong>road trip au Portugal en van</strong> représente l&apos;une des plus belles aventures que l&apos;Europe
              peut offrir. Avec ses 850 kilomètres de côtes spectaculaires, son climat ensoleillé et ses
              infrastructures adaptées aux voyageurs nomades, le Portugal est devenu la destination
              favorite des vanlifers européens.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Ce guide vous accompagne dans chaque étape de votre préparation : des
              <InternalLink href="/location-van-lisbonne">points de départ</InternalLink> aux
              <InternalLink href="/dormir-en-van-portugal">meilleurs spots pour dormir</InternalLink>,
              en passant par les <InternalLink href="/prix-location-van-portugal">budgets à prévoir</InternalLink> et
              la <InternalLink href="/camping-sauvage-portugal-van">réglementation locale</InternalLink>.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Que vous disposiez d&apos;une semaine ou d&apos;un mois, le Portugal offre une diversité de paysages
              concentrée sur un petit territoire : plages de surf atlantiques, falaises ocre de l&apos;Algarve,
              vignobles en terrasses du Douro, villages blancs de l&apos;Alentejo et parcs naturels préservés.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-4">Accès rapide</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#cote-atlantique" className="text-ocean-600 hover:text-ocean-800">→ Côte Atlantique</a></li>
              <li><a href="#algarve" className="text-ocean-600 hover:text-ocean-800">→ Algarve</a></li>
              <li><a href="#parcs" className="text-ocean-600 hover:text-ocean-800">→ Parcs naturels</a></li>
              <li><a href="#villages" className="text-ocean-600 hover:text-ocean-800">→ Villages typiques</a></li>
              <li><a href="#conseils" className="text-ocean-600 hover:text-ocean-800">→ Conseils pratiques</a></li>
            </ul>
            <div className="mt-6 pt-4 border-t">
              <Link href="/itineraire-portugal-10-jours-van" className="text-ocean-600 font-medium text-sm hover:text-ocean-800">
                Voir l&apos;itinéraire détaillé 10 jours →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Côte atlantique */}
      <Section id="cote-atlantique" background="gray">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
          La côte atlantique : de Porto à Lisbonne
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-gray-700 mb-4">
              La côte atlantique portugaise offre un condensé d&apos;expériences uniques. De
              <InternalLink href="/location-van-porto">Porto</InternalLink> vers le sud, vous traversez
              des paysages variés où se mêlent forêts de pins maritimes, plages de surf réputées et
              villages de pêcheurs traditionnels.
            </p>
            <p className="text-gray-600 mb-4">
              Les principales étapes incluent <strong>Nazaré</strong> et ses vagues géantes (idéal pour les photographes),
              <strong>Peniche</strong> pour le surf et l&apos;accès aux îles Berlengas, <strong>Ericeira</strong> (réserve mondiale de surf),
              et <strong>Sintra</strong> avec ses palais féeriques avant d&apos;atteindre <InternalLink href="/location-van-lisbonne">Lisbonne</InternalLink>.
            </p>
            <p className="text-gray-600">
              Cette portion se prête parfaitement à un <InternalLink href="/itineraire-portugal-10-jours-van">circuit de 5-7 jours</InternalLink>,
              avec de nombreuses <InternalLink href="/dormir-en-van-portugal">aires pour stationner</InternalLink> le long du parcours.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Nazaré</h4>
              <p className="text-gray-600 text-sm">Canyon sous-marin créant les plus grandes vagues surfées. Fort de São Miguel avec vue panoramique. Aire camping-car à proximité.</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Peniche & Ericeira</h4>
              <p className="text-gray-600 text-sm">Spots de surf variés pour tous niveaux. Îles Berlengas accessibles en bateau. Ambiance surf décontractée.</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Sintra</h4>
              <p className="text-gray-600 text-sm">Palais de Pena, Quinta da Regaleira. Stationnement limité au centre, privilégier les parkings extérieurs.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Algarve */}
      <Section id="algarve">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
          L&apos;Algarve : le sud ensoleillé
        </h2>
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <p className="text-gray-700 mb-4">
              L&apos;<InternalLink href="/location-van-algarve">Algarve</InternalLink> représente souvent l&apos;apothéose d&apos;un road trip portugais.
              Ses falaises ocre sculptées par l&apos;érosion, ses grottes marines et ses plages de sable fin créent
              des paysages d&apos;une beauté saisissante. C&apos;est la région la plus ensoleillée du Portugal avec
              300 jours de soleil par an.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Lagos et la Ponta da Piedade</strong> offrent les formations rocheuses les plus spectaculaires,
              explorables en kayak. La <strong>grotte de Benagil</strong>, accessible uniquement par la mer,
              figure parmi les merveilles naturelles les plus photographiées d&apos;Europe. Plus à l&apos;est,
              <strong>Tavira</strong> séduit par son authenticité préservée.
            </p>
            <p className="text-gray-600">
              Pour échapper au tourisme de masse, la <strong>Costa Vicentina</strong> s&apos;étend sur la côte ouest jusqu&apos;au
              Cap Saint-Vincent. Ce parc naturel protégé offre plages sauvages et paysages préservés, bien que
              la <InternalLink href="/camping-sauvage-portugal-van">réglementation</InternalLink> y soit stricte.
            </p>
          </div>
          <div className="relative h-64 lg:h-auto rounded-xl overflow-hidden">
            <Image
              src="/images/location-van-algarve.jpg"
              alt="Falaises dorées de l'Algarve vues depuis la côte lors d'un road trip en van"
              fill
              className="object-cover"
              sizes="400px"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-sand-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-sand-700">Ponta da Piedade</div>
            <div className="text-sm text-gray-600">Lagos</div>
          </div>
          <div className="bg-sand-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-sand-700">Benagil</div>
            <div className="text-sm text-gray-600">Grotte marine</div>
          </div>
          <div className="bg-sand-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-sand-700">Praia da Marinha</div>
            <div className="text-sm text-gray-600">Top 10 Europe</div>
          </div>
          <div className="bg-sand-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-sand-700">Cap Saint-Vincent</div>
            <div className="text-sm text-gray-600">Extrémité SO</div>
          </div>
        </div>
      </Section>

      <AffiliateCTA
        variant="compact"
        title="Réservez votre van pour l'aventure"
        description="Comparez les offres des meilleurs loueurs au Portugal."
        buttonText="Voir les offres"
              />

      {/* Parcs naturels */}
      <Section id="parcs" background="gray">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
          Les parcs naturels à ne pas manquer
        </h2>
        <p className="text-gray-700 mb-6">
          Au-delà des côtes, le Portugal cache des trésors naturels dans ses terres intérieures. Ces espaces
          préservés offrent une alternative au littoral touristique et permettent une immersion totale dans la nature.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl">
            <h3 className="font-semibold text-gray-900 mb-2">Peneda-Gerês</h3>
            <p className="text-gray-600 text-sm mb-3">
              Seul parc national du Portugal. Montagnes, cascades, villages en granit. À 1h30 de <InternalLink href="/location-van-porto">Porto</InternalLink>.
            </p>
            <span className="text-xs bg-nature-100 text-nature-700 px-2 py-1 rounded">Randonnée</span>
          </div>
          <div className="bg-white p-5 rounded-xl">
            <h3 className="font-semibold text-gray-900 mb-2">Serra da Estrela</h3>
            <p className="text-gray-600 text-sm mb-3">
              Plus haute montagne du Portugal continental. Routes panoramiques accessibles en van, neige en hiver.
            </p>
            <span className="text-xs bg-ocean-100 text-ocean-700 px-2 py-1 rounded">Montagne</span>
          </div>
          <div className="bg-white p-5 rounded-xl">
            <h3 className="font-semibold text-gray-900 mb-2">Vallée du Douro</h3>
            <p className="text-gray-600 text-sm mb-3">
              UNESCO. Terrasses viticoles spectaculaires. Routes sinueuses entre les quintas. Dégustation de porto.
            </p>
            <span className="text-xs bg-sand-100 text-sand-700 px-2 py-1 rounded">Vignobles</span>
          </div>
          <div className="bg-white p-5 rounded-xl">
            <h3 className="font-semibold text-gray-900 mb-2">Alentejo</h3>
            <p className="text-gray-600 text-sm mb-3">
              Plaines ondulantes, chênes-lièges centenaires, villages blancs. La région la moins peuplée du pays.
            </p>
            <span className="text-xs bg-nature-100 text-nature-700 px-2 py-1 rounded">Authenticité</span>
          </div>
        </div>
      </Section>

      {/* Villages */}
      <Section id="villages">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
          Villages typiques et étapes culturelles
        </h2>
        <p className="text-gray-700 mb-6">
          Un <InternalLink href="/">road trip au Portugal</InternalLink> ne serait pas complet sans la découverte
          de ses villages authentiques. Ces étapes permettent de s&apos;immerger dans la culture locale et
          de goûter à la gastronomie traditionnelle.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-4">
            <div className="w-10 h-10 bg-ocean-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-ocean-600 font-bold">1</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Óbidos</h4>
              <p className="text-gray-600 text-sm">Village médiéval fortifié. Célèbre ginjinha servie en coupes de chocolat. Parking à l&apos;extérieur des murailles.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-4">
            <div className="w-10 h-10 bg-ocean-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-ocean-600 font-bold">2</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Monsaraz</h4>
              <p className="text-gray-600 text-sm">Village fortifié de l&apos;Alentejo. Vues panoramiques sur le lac d&apos;Alqueva. Spots nocturnes à proximité.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-4">
            <div className="w-10 h-10 bg-ocean-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-ocean-600 font-bold">3</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Marvão</h4>
              <p className="text-gray-600 text-sm">Forteresse perchée près de la frontière espagnole. Routes sinueuses mais accessibles. Vue imprenable.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-4">
            <div className="w-10 h-10 bg-ocean-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-ocean-600 font-bold">4</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Tavira</h4>
              <p className="text-gray-600 text-sm">Algarve oriental authentique. Maisons blanchies, pont romain, îles-barrières accessibles en bateau.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Conseils */}
      <Section id="conseils" background="gray">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
          Conseils pratiques pour votre road trip
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Planification</h3>
            <p className="text-gray-600 mb-4">
              Prévoyez 150-200 km par jour maximum pour profiter des paysages et des arrêts spontanés.
              Un <InternalLink href="/itineraire-portugal-10-jours-van">itinéraire de 10 jours</InternalLink>
              permet de découvrir les essentiels sans se presser. Réservez votre van
              <InternalLink href="/prix-location-van-portugal">2-3 mois à l&apos;avance</InternalLink> en haute saison.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Approvisionnement</h3>
            <p className="text-gray-600 mb-4">
              Les supermarchés Pingo Doce, Continente et Lidl sont présents partout. Les stations-service
              offrent des prix compétitifs. Pour l&apos;eau et la vidange, utilisez les
              <InternalLink href="/dormir-en-van-portugal">aires de service équipées</InternalLink>.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">À emporter</h3>
            <ul className="space-y-2 text-gray-600 mb-4">
              <li className="flex items-center"><span className="w-2 h-2 bg-ocean-500 rounded-full mr-3"></span>Adaptateur électrique (prises EU)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-ocean-500 rounded-full mr-3"></span>Crème solaire et anti-moustiques</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-ocean-500 rounded-full mr-3"></span>Équipement de plage / snorkeling</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-ocean-500 rounded-full mr-3"></span>Vêtements en couches (nuits fraîches)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-ocean-500 rounded-full mr-3"></span>Application <a href="https://www.park4night.com/" target="_blank" rel="noopener noreferrer" className="text-ocean-600 hover:text-ocean-800">Park4Night</a></li>
            </ul>
            <div className="bg-ocean-50 rounded-lg p-4">
              <p className="text-sm text-ocean-800">
                <strong>Sécurité :</strong> Le Portugal est sûr pour les vanlifers. Évitez les objets de valeur
                visibles et privilégiez les <InternalLink href="/dormir-en-van-portugal">aires officielles</InternalLink>
                pour dormir.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <AffiliateCTA
        variant="hero"
        title="Prêt à partir à l'aventure ?"
        description="Comparez les offres de location et réservez votre van pour le Portugal."
        buttonText="Voir les offres"
              />

      {/* Navigation */}
      <Section>
        <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
          Continuez votre préparation
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/itineraire-portugal-10-jours-van" className="group p-5 bg-gray-50 rounded-xl hover:bg-ocean-50 transition-colors">
            <h3 className="font-semibold text-gray-900 group-hover:text-ocean-700 mb-1">Itinéraire 10 jours</h3>
            <p className="text-sm text-gray-600">Programme détaillé jour par jour</p>
          </Link>
          <Link href="/prix-location-van-portugal" className="group p-5 bg-gray-50 rounded-xl hover:bg-ocean-50 transition-colors">
            <h3 className="font-semibold text-gray-900 group-hover:text-ocean-700 mb-1">Prix et budget</h3>
            <p className="text-sm text-gray-600">Tarifs et estimation des coûts</p>
          </Link>
          <Link href="/dormir-en-van-portugal" className="group p-5 bg-gray-50 rounded-xl hover:bg-ocean-50 transition-colors">
            <h3 className="font-semibold text-gray-900 group-hover:text-ocean-700 mb-1">Où dormir</h3>
            <p className="text-sm text-gray-600">Aires, campings et spots</p>
          </Link>
        </div>
      </Section>
    </>
  );
}
