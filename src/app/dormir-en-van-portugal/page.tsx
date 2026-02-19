import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AffiliateCTA, Section, Breadcrumbs, InternalLink } from '@/components';

export const metadata: Metadata = {
  title: "Dormir en van au Portugal | Aires et spots",
  description: "Où passer la nuit en van au Portugal ? Aires officielles, campings, spots autorisés et meilleures applications pour trouver un endroit légal et sécurisé.",
  alternates: {
    canonical: "https://www.exploreportugalvan.com/dormir-en-van-portugal/",
  },
  openGraph: {
    title: "Dormir en van au Portugal | Aires et spots",
    description: "Aires officielles, campings et spots autorisés pour passer la nuit en van au Portugal.",
    url: "https://www.exploreportugalvan.com/dormir-en-van-portugal/",
    type: "article",
    locale: "fr_FR",
    siteName: "ExplorePortugalVan",
    images: [
      {
        url: "https://www.exploreportugalvan.com/images/dormir-van-portugal.jpg",
        width: 1200,
        height: 630,
        alt: "Où dormir en van au Portugal - Aires et spots autorisés",
      },
    ],
  },
  twitter: {
    title: "Dormir en van au Portugal | Aires et spots",
    description: "Aires officielles, campings et spots autorisés pour passer la nuit en van au Portugal.",
    card: "summary_large_image",
    images: ["https://www.exploreportugalvan.com/images/dormir-van-portugal.jpg"],
  },
};

const breadcrumbs = [
  { name: "Accueil", href: "/" },
  { name: "Dormir en van", href: "/dormir-en-van-portugal/" },
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Où dormir en van au Portugal",
  "description": "Guide complet des aires officielles, campings et spots pour dormir en van au Portugal.",
  "author": { "@type": "Organization", "name": "ExplorePortugalVan" },
  "publisher": { "@type": "Organization", "name": "ExplorePortugalVan", "url": "https://www.exploreportugalvan.com/", "logo": { "@type": "ImageObject", "url": "https://www.exploreportugalvan.com/images/favicon.png" } },
  "image": "https://www.exploreportugalvan.com/images/dormir-van-portugal.jpg",
  "datePublished": "2024-07-10",
  "dateModified": "2025-02-01",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.exploreportugalvan.com/dormir-en-van-portugal/" }
};

export default function DormirPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      {/* Hero pro */}
      <section className="bg-gradient-to-r from-ocean-700 to-ocean-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-4">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Où dormir en van au Portugal
              </h1>
              <p className="text-lg text-ocean-100 mb-6">
                Aires officielles, campings et spots pour passer la nuit
                en toute légalité. Applications, bonnes pratiques et conseils.
              </p>
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">200+</div>
                  <div className="text-sm text-ocean-200">aires officielles</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">0-25€</div>
                  <div className="text-sm text-ocean-200">par nuit</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">4</div>
                  <div className="text-sm text-ocean-200">apps utiles</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm text-ocean-200">légal</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/camping-sauvage-portugal-van" className="px-4 py-2 bg-white/90 text-gray-800 rounded-lg text-sm font-medium hover:bg-white shadow-sm">Réglementation</Link>
                <Link href="/road-trip-portugal-van" className="px-4 py-2 bg-white/90 text-gray-800 rounded-lg text-sm font-medium hover:bg-white shadow-sm">Guide road trip</Link>
              </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 gap-2">
              <div className="relative h-28 rounded-lg overflow-hidden">
                <Image src="/images/dormir-van-portugal.jpg" alt="Van aménagé stationné pour la nuit avec vue sur le coucher de soleil au Portugal" fill className="object-cover" sizes="150px" />
              </div>
              <div className="relative h-28 rounded-lg overflow-hidden">
                <Image src="/images/location-van-algarve.jpg" alt="Aire de camping-car officielle en Algarve avec vue sur les falaises" fill className="object-cover" sizes="150px" />
              </div>
              <div className="relative h-28 rounded-lg overflow-hidden">
                <Image src="/images/location-van-porto.jpg" alt="Aire de stationnement pour van près de Porto avec vue sur l'océan" fill className="object-cover" sizes="150px" />
              </div>
              <div className="relative h-28 rounded-lg overflow-hidden">
                <Image src="/images/camping-sauvage-portugal.jpg" alt="Spot nature pour van au Portugal dans un cadre préservé" fill className="object-cover" sizes="150px" />
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
              Trouver où dormir en van au Portugal demande une bonne connaissance des règles locales
              et des infrastructures disponibles. Depuis le renforcement de la réglementation sur le
              <InternalLink href="/camping-sauvage-portugal-van"> camping sauvage</InternalLink>, il est
              important de connaître les alternatives légales pour profiter sereinement de votre
              <InternalLink href="/road-trip-portugal-van"> road trip</InternalLink>.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Ce guide recense toutes les options pour dormir en van au Portugal : aires officielles,
              campings traditionnels, zones de stationnement autorisé et applications indispensables.
              Avec plus de 200 aires de camping-car dans tout le pays, vous trouverez toujours
              un endroit légal et agréable pour passer la nuit.
            </p>
          </div>
          <div className="bg-ocean-50 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Applications essentielles</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li><a href="https://www.park4night.com/" target="_blank" rel="noopener noreferrer" className="text-ocean-600 hover:text-ocean-800"><strong>Park4Night</strong></a> - La référence vanlife</li>
              <li><a href="https://www.ioverlander.com/" target="_blank" rel="noopener noreferrer" className="text-ocean-600 hover:text-ocean-800"><strong>iOverlander</strong></a> - Spots communautaires</li>
              <li><a href="https://www.campercontact.com/" target="_blank" rel="noopener noreferrer" className="text-ocean-600 hover:text-ocean-800"><strong>Campercontact</strong></a> - Aires officielles</li>
              <li><strong>Google Maps offline</strong> - Navigation sans réseau</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Aires officielles */}
      <Section background="gray">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
          Aires de camping-car officielles
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-gray-700 mb-6">
              Le Portugal dispose d&apos;un réseau croissant d&apos;aires de camping-car officielles,
              appelées &quot;Áreas de Serviço para Autocaravanas&quot;. Ces espaces dédiés offrent des
              services essentiels pour les voyageurs en van et garantissent une nuit en toute légalité.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Services proposés</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
              <li>Bornes eau potable et vidange eaux usées</li>
              <li>Vidange cassette WC chimique</li>
              <li>Électricité (selon les aires)</li>
              <li>Wifi (parfois)</li>
              <li>Douches et sanitaires (aires premium)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Tarifs moyens</h3>
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-white p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-ocean-600">Gratuit</div>
                <div className="text-xs text-gray-600">Aires municipales basiques</div>
              </div>
              <div className="bg-white p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-ocean-600">5-15€</div>
                <div className="text-xs text-gray-600">Aires avec services</div>
              </div>
              <div className="bg-white p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-ocean-600">15-25€</div>
                <div className="text-xs text-gray-600">Premium (électricité, wifi)</div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Aires recommandées par région</h3>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-xl">
                <h4 className="font-semibold text-gray-900"><InternalLink href="/location-van-algarve">Algarve</InternalLink></h4>
                <p className="text-sm text-gray-600 mt-1">Aires de Lagos, Sagres, Tavira - Emplacements face à la mer.</p>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <h4 className="font-semibold text-gray-900"><InternalLink href="/location-van-lisbonne">Centre (Lisbonne)</InternalLink></h4>
                <p className="text-sm text-gray-600 mt-1">Aires de Cascais, Ericeira, Nazaré - Proches des attractions.</p>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <h4 className="font-semibold text-gray-900"><InternalLink href="/location-van-porto">Nord (Porto)</InternalLink></h4>
                <p className="text-sm text-gray-600 mt-1">Aires de Matosinhos, Viana do Castelo - Accès plages.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Campings */}
      <Section>
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
          Campings traditionnels
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 mb-6">
              Les campings portugais accueillent généralement les vans et camping-cars. Ils offrent
              un niveau de confort supérieur et sont idéaux pour les séjours de plusieurs jours
              dans une même région lors de votre <InternalLink href="/road-trip-portugal-van">road trip</InternalLink>.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Avantages des campings</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
              <li>Sanitaires complets (douches chaudes, WC)</li>
              <li>Piscine et espaces de loisirs</li>
              <li>Restaurant ou snack-bar sur place</li>
              <li>Sécurité et surveillance</li>
              <li>Proximité des plages ou centres-villes</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Tarifs indicatifs</h3>
            <p className="text-gray-700 mb-4">
              Comptez entre 20 et 40€ par nuit pour un emplacement van/camping-car avec 2 personnes.
              Les campings 4-5 étoiles en bord de mer en haute saison peuvent atteindre 50-60€.
              Consultez notre page <InternalLink href="/prix-location-van-portugal">prix et budget</InternalLink> pour
              estimer vos coûts totaux.
            </p>

            <div className="bg-ocean-50 border-l-4 border-ocean-500 p-6">
              <h4 className="font-semibold text-ocean-800 mb-2">Réservation recommandée</h4>
              <p className="text-ocean-800">
                En juillet-août, les campings populaires affichent souvent complet.
                Réservez à l&apos;avance via les plateformes de camping ou directement
                sur le site du camping.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <AffiliateCTA
        variant="compact"
        title="Réservez votre camping"
        description="Trouvez et réservez les meilleurs campings au Portugal."
        buttonText="Voir les campings"
              />

      {/* Zones autorisées */}
      <Section background="gray">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
          Zones de stationnement autorisé
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 mb-6">
              Certaines zones permettent le stationnement nocturne des vans sans être considérées
              comme du camping. La distinction est importante : stationner pour dormir dans son
              véhicule n&apos;est pas la même chose que camper avec table et chaises dehors.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Règle générale</h3>
            <p className="text-gray-700 mb-6">
              Le stationnement d&apos;un véhicule (même pour dormir) est autorisé là où le stationnement
              classique l&apos;est, sauf indication contraire. En revanche, &quot;camper&quot; (sortir du matériel,
              s&apos;installer à l&apos;extérieur) est interdit hors des zones dédiées. Consultez notre guide
              complet sur le <InternalLink href="/camping-sauvage-portugal-van">camping sauvage</InternalLink>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Zones à éviter</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
              <li><strong>Parcs naturels :</strong> Réglementation stricte, amendes fréquentes</li>
              <li><strong>Zones côtières protégées :</strong> Costa Vicentina notamment</li>
              <li><strong>Centres-villes :</strong> Stationnement limité dans le temps</li>
              <li><strong>Panneaux d&apos;interdiction :</strong> Symbole camping-car barré</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Zones généralement tolérées</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Parkings de supermarchés (avec accord du gérant)</li>
              <li>Parkings de restaurants (consommation appréciée)</li>
              <li>Zones industrielles calmes</li>
              <li>Spots référencés sur <a href="https://www.park4night.com/" target="_blank" rel="noopener noreferrer" className="text-ocean-600 hover:text-ocean-800">Park4Night</a> avec bons avis</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Applications */}
      <Section>
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
          Applications indispensables
        </h2>

        <p className="text-gray-700 mb-8">
          Ces applications vous aideront à trouver les meilleurs spots pour dormir en van au Portugal :
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-2"><a href="https://www.park4night.com/" target="_blank" rel="noopener noreferrer" className="hover:text-ocean-600">Park4Night ↗</a></h3>
            <p className="text-gray-600 text-sm mb-3">
              La référence pour les vanlifers. Des milliers de spots recensés avec photos,
              avis et services disponibles. Indispensable au Portugal.
            </p>
            <span className="text-xs text-nature-600 font-medium bg-nature-50 px-2 py-1 rounded">Gratuit / Premium</span>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-2"><a href="https://www.ioverlander.com/" target="_blank" rel="noopener noreferrer" className="hover:text-ocean-600">iOverlander ↗</a></h3>
            <p className="text-gray-600 text-sm mb-3">
              Application communautaire mondiale avec spots vérifiés. Moins fournie que
              Park4Night au Portugal mais complémentaire.
            </p>
            <span className="text-xs text-nature-600 font-medium bg-nature-50 px-2 py-1 rounded">Gratuit</span>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-2"><a href="https://www.campercontact.com/" target="_blank" rel="noopener noreferrer" className="hover:text-ocean-600">Campercontact ↗</a></h3>
            <p className="text-gray-600 text-sm mb-3">
              Spécialisée dans les aires de camping-car officielles. Informations précises
              sur les services et tarifs.
            </p>
            <span className="text-xs text-sand-600 font-medium bg-sand-50 px-2 py-1 rounded">Freemium</span>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">Google Maps</h3>
            <p className="text-gray-600 text-sm mb-3">
              Téléchargez les cartes du Portugal pour naviguer sans connexion.
              Utile dans les zones rurales.
            </p>
            <span className="text-xs text-nature-600 font-medium bg-nature-50 px-2 py-1 rounded">Gratuit</span>
          </div>
        </div>

        <div className="bg-sand-50 border-l-4 border-sand-500 p-6">
          <h4 className="font-semibold text-sand-800 mb-2">Conseil</h4>
          <p className="text-sand-800">
            Consultez les avis récents sur <a href="https://www.park4night.com/" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-sand-600">Park4Night</a>. La réglementation ayant évolué,
            certains spots autrefois tolérés ne le sont plus. Filtrez par date
            pour avoir des informations actualisées.
          </p>
        </div>
      </Section>

      {/* Bonnes pratiques */}
      <Section background="gray">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
          Bonnes pratiques pour dormir en van
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-ocean-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <div>
                <strong className="text-gray-900">Arrivez tard, partez tôt</strong>
                <p className="text-gray-600 mt-1">
                  Installez-vous après 20h et partez avant 9h pour minimiser votre impact.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-ocean-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <div>
                <strong className="text-gray-900">Ne laissez aucune trace</strong>
                <p className="text-gray-600 mt-1">
                  Emportez tous vos déchets. Ne vidangez jamais vos eaux usées dans la nature.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-ocean-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <div>
                <strong className="text-gray-900">Restez discret</strong>
                <p className="text-gray-600 mt-1">
                  Évitez de sortir tables, chaises et auvents. Gardez un profil bas.
                </p>
              </div>
            </li>
          </ul>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-ocean-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <div>
                <strong className="text-gray-900">Respectez les locaux</strong>
                <p className="text-gray-600 mt-1">
                  Bruit minimal, pas de musique forte, stationnement sans gêner.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-ocean-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <div>
                <strong className="text-gray-900">Alternez avec les aires payantes</strong>
                <p className="text-gray-600 mt-1">
                  Soutenez les infrastructures locales en utilisant régulièrement les aires officielles.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Section>

      <AffiliateCTA
        variant="default"
        title="Louez votre van pour l'aventure"
        description="Comparez les meilleures offres de location au Portugal."
        buttonText="Voir les offres"
              />

      {/* Navigation */}
      <Section background="gray">
        <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">En savoir plus</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/camping-sauvage-portugal-van" className="group p-5 bg-white rounded-xl hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900 group-hover:text-ocean-600 mb-1">Camping sauvage</h3>
            <p className="text-sm text-gray-600">Réglementation détaillée</p>
          </Link>
          <Link href="/road-trip-portugal-van" className="group p-5 bg-white rounded-xl hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900 group-hover:text-ocean-600 mb-1">Road trip Portugal</h3>
            <p className="text-sm text-gray-600">Guide complet par région</p>
          </Link>
          <Link href="/prix-location-van-portugal" className="group p-5 bg-white rounded-xl hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900 group-hover:text-ocean-600 mb-1">Prix et budget</h3>
            <p className="text-sm text-gray-600">Estimation des coûts</p>
          </Link>
        </div>
      </Section>
    </>
  );
}
