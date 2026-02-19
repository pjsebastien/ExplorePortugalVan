import { Metadata } from 'next';
import Link from 'next/link';
import { AffiliateCTA, Section, Breadcrumbs, InternalLink } from '@/components';

export const metadata: Metadata = {
  title: "Prix location van Portugal | Tarifs et budget",
  description: "Combien coûte la location d'un van au Portugal ? Comparatif des tarifs par saison, type de véhicule et astuces pour économiser sur votre road trip.",
  alternates: {
    canonical: "https://www.exploreportugalvan.com/prix-location-van-portugal/",
  },
  openGraph: {
    title: "Prix location van Portugal | Tarifs et budget",
    description: "Comparatif des tarifs de location de van au Portugal par saison et type de véhicule.",
    url: "https://www.exploreportugalvan.com/prix-location-van-portugal/",
    type: "article",
    locale: "fr_FR",
    siteName: "ExplorePortugalVan",
    images: [
      {
        url: "https://www.exploreportugalvan.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tarifs et budget pour la location de van au Portugal",
      },
    ],
  },
  twitter: {
    title: "Prix location van Portugal | Tarifs et budget",
    description: "Comparatif des tarifs de location de van au Portugal par saison et type de véhicule.",
    card: "summary_large_image",
    images: ["https://www.exploreportugalvan.com/images/og-image.jpg"],
  },
};

const breadcrumbs = [
  { name: "Accueil", href: "/" },
  { name: "Prix location van", href: "/prix-location-van-portugal/" },
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Prix de la location de van au Portugal",
  "description": "Comparatif des tarifs de location de van au Portugal par saison, type de véhicule et durée.",
  "author": { "@type": "Organization", "name": "ExplorePortugalVan" },
  "publisher": { "@type": "Organization", "name": "ExplorePortugalVan", "url": "https://www.exploreportugalvan.com/", "logo": { "@type": "ImageObject", "url": "https://www.exploreportugalvan.com/images/favicon.png" } },
  "image": "https://www.exploreportugalvan.com/images/og-image.jpg",
  "datePublished": "2024-07-01",
  "dateModified": "2025-02-05",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.exploreportugalvan.com/prix-location-van-portugal/" }
};

export default function PrixPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      {/* Hero pro */}
      <section className="bg-gradient-to-r from-nature-700 to-nature-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Prix de la location de van au Portugal
              </h1>
              <p className="text-lg text-nature-100 mb-6">
                Tarifs actuels, budget détaillé et conseils pour économiser. Comparez les prix selon la saison,
                le type de véhicule et la durée de location pour planifier votre
                <InternalLink href="/road-trip-portugal-van" className="text-white underline ml-1">road trip</InternalLink>.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="#tarifs" className="px-4 py-2 bg-white/90 text-gray-800 rounded-lg text-sm font-medium hover:bg-white shadow-sm">Tarifs par saison</Link>
                <Link href="#vehicules" className="px-4 py-2 bg-white/90 text-gray-800 rounded-lg text-sm font-medium hover:bg-white shadow-sm">Types de véhicules</Link>
                <Link href="#budget" className="px-4 py-2 bg-white/90 text-gray-800 rounded-lg text-sm font-medium hover:bg-white shadow-sm">Budget global</Link>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Prix moyens constatés</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-white/20">
                  <span>Van compact</span>
                  <span className="font-bold">60-90€/jour</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/20">
                  <span>Van aménagé standard</span>
                  <span className="font-bold">90-130€/jour</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/20">
                  <span>Fourgon grand volume</span>
                  <span className="font-bold">120-180€/jour</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Camping-car familial</span>
                  <span className="font-bold">150-250€/jour</span>
                </div>
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
              Comprendre les <strong>prix de location de van au Portugal</strong> est essentiel pour planifier
              votre budget. Les tarifs varient selon plusieurs facteurs : saison, type de véhicule, durée
              et point de départ (<InternalLink href="/location-van-lisbonne">Lisbonne</InternalLink>,
              <InternalLink href="/location-van-porto">Porto</InternalLink> ou
              <InternalLink href="/location-van-algarve">Algarve</InternalLink>).
            </p>
            <p className="text-gray-600 leading-relaxed">
              En moyenne, comptez <strong>60 à 130€ par jour</strong> pour un van aménagé classique.
              La haute saison (juillet-août) affiche des tarifs 30-40% plus élevés. Ce guide détaille
              tous les coûts à prévoir pour votre <InternalLink href="/itineraire-portugal-10-jours-van">road trip</InternalLink>.
            </p>
          </div>
          <div className="bg-sand-50 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Conseil</h3>
            <p className="text-gray-600 text-sm">Réservez 2-3 mois à l&apos;avance en haute saison pour bénéficier des meilleurs tarifs et du plus grand choix de véhicules.</p>
          </div>
        </div>
      </Section>

      {/* Tarifs par saison */}
      <Section id="tarifs" background="gray">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Tarifs selon la saison</h2>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="bg-white rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Haute saison</h3>
                <p className="text-xs text-gray-500">Juillet - Août</p>
              </div>
            </div>
            <div className="space-y-2 text-sm mb-4">
              <div className="flex justify-between"><span>Van compact</span><span className="font-semibold">90-120€</span></div>
              <div className="flex justify-between"><span>Van standard</span><span className="font-semibold">120-160€</span></div>
              <div className="flex justify-between"><span>Fourgon</span><span className="font-semibold">160-220€</span></div>
            </div>
            <p className="text-xs text-gray-500">Réservation 2-3 mois à l&apos;avance</p>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-ocean-200">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-nature-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-nature-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Moyenne saison</h3>
                <p className="text-xs text-ocean-600 font-medium">Recommandé</p>
              </div>
            </div>
            <div className="space-y-2 text-sm mb-4">
              <div className="flex justify-between"><span>Van compact</span><span className="font-semibold">70-95€</span></div>
              <div className="flex justify-between"><span>Van standard</span><span className="font-semibold">95-130€</span></div>
              <div className="flex justify-between"><span>Fourgon</span><span className="font-semibold">130-180€</span></div>
            </div>
            <p className="text-xs text-gray-500">Avril-Juin, Sept-Oct</p>
          </div>

          <div className="bg-white rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-ocean-100 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Basse saison</h3>
                <p className="text-xs text-gray-500">Novembre - Mars</p>
              </div>
            </div>
            <div className="space-y-2 text-sm mb-4">
              <div className="flex justify-between"><span>Van compact</span><span className="font-semibold">50-75€</span></div>
              <div className="flex justify-between"><span>Van standard</span><span className="font-semibold">75-110€</span></div>
              <div className="flex justify-between"><span>Fourgon</span><span className="font-semibold">100-150€</span></div>
            </div>
            <p className="text-xs text-gray-500">Économies jusqu&apos;à 40%</p>
          </div>
        </div>
      </Section>

      {/* Types de véhicules */}
      <Section id="vehicules">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Types de véhicules</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-4 font-semibold rounded-tl-lg">Véhicule</th>
                <th className="p-4 font-semibold">Capacité</th>
                <th className="p-4 font-semibold">Équipements</th>
                <th className="p-4 font-semibold rounded-tr-lg">Prix moyen</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-medium">Van compact</td>
                <td className="p-4">2 pers.</td>
                <td className="p-4 text-sm text-gray-600">Lit, rangements basiques</td>
                <td className="p-4 text-ocean-600 font-semibold">60-90€</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4 font-medium">Van aménagé (California, Marco Polo)</td>
                <td className="p-4">2-4 pers.</td>
                <td className="p-4 text-sm text-gray-600">Cuisine, toit relevable, eau</td>
                <td className="p-4 text-ocean-600 font-semibold">90-130€</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Fourgon aménagé (Ducato, Master)</td>
                <td className="p-4">2-4 pers.</td>
                <td className="p-4 text-sm text-gray-600">Douche, WC, grand espace</td>
                <td className="p-4 text-ocean-600 font-semibold">120-180€</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 font-medium rounded-bl-lg">Camping-car intégral</td>
                <td className="p-4">4-6 pers.</td>
                <td className="p-4 text-sm text-gray-600">Tout confort, salon</td>
                <td className="p-4 text-ocean-600 font-semibold rounded-br-lg">150-250€</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <AffiliateCTA variant="compact" title="Comparez les prix" description="Trouvez le meilleur tarif parmi nos loueurs partenaires." buttonText="Voir les offres"  />

      {/* Assurance et caution */}
      <Section background="gray">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Assurance et caution</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Caution</h3>
            <p className="text-gray-600 mb-4">
              La caution varie selon le véhicule : 500-1000€ (compact), 1000-1500€ (standard), 1500-2500€ (fourgon/camping-car).
              Elle est bloquée sur carte bancaire et restituée après vérification.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Options d&apos;assurance</h3>
            <p className="text-gray-600">
              L&apos;assurance de base inclut la responsabilité civile avec franchise élevée (1000-2000€).
              L&apos;<strong>assurance tous risques</strong> (+15-25€/jour) réduit ou élimine la franchise.
              Vérifiez si votre carte bancaire premium offre une couverture.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Notre recommandation</h3>
            <div className="flex items-start gap-3 mb-4">
              <svg className="w-5 h-5 text-nature-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-600 text-sm">Optez pour l&apos;assurance tous risques pour voyager sereinement, surtout sur les routes côtières parfois étroites.</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-nature-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-600 text-sm">Vérifiez votre carte bancaire (Visa Premier, Gold MasterCard) pour éviter le supplément du loueur.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Budget global */}
      <Section id="budget">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Budget global estimatif</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 mb-4">
              Au-delà de la location, prévoyez ces dépenses pour un <InternalLink href="/itineraire-portugal-10-jours-van">séjour de 10 jours</InternalLink> en couple :
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center"><span className="w-2 h-2 bg-ocean-500 rounded-full mr-3"></span>Carburant : 150-200€ (~1400 km)</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-ocean-500 rounded-full mr-3"></span>Péages (optionnel) : 30-50€</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-ocean-500 rounded-full mr-3"></span><InternalLink href="/dormir-en-van-portugal">Camping/aires</InternalLink> : 100-200€</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-ocean-500 rounded-full mr-3"></span>Nourriture : 250-400€</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-ocean-500 rounded-full mr-3"></span>Activités : 100-200€</li>
            </ul>
          </div>
          <div className="bg-ocean-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-ocean-800 mb-4">Total 10 jours (2 pers.)</h3>
            <div className="text-4xl font-bold text-ocean-600 mb-2">1580 - 2200€</div>
            <p className="text-sm text-ocean-700">Soit 160-220€/jour pour 2, transport et hébergement inclus.</p>
            <div className="mt-4 pt-4 border-t border-ocean-200">
              <p className="text-sm text-ocean-800">Comparez avec un circuit classique (hôtels + voiture) : souvent 30-50% plus cher.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Navigation */}
      <Section background="gray">
        <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Continuez votre préparation</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/location-van-lisbonne" className="group p-5 bg-white rounded-xl hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900 group-hover:text-ocean-600 mb-1">Location Lisbonne</h3>
            <p className="text-sm text-gray-600">Plus grand choix de véhicules</p>
          </Link>
          <Link href="/location-van-porto" className="group p-5 bg-white rounded-xl hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900 group-hover:text-ocean-600 mb-1">Location Porto</h3>
            <p className="text-sm text-gray-600">Tarifs souvent moins chers</p>
          </Link>
          <Link href="/location-van-algarve" className="group p-5 bg-white rounded-xl hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900 group-hover:text-ocean-600 mb-1">Location Algarve</h3>
            <p className="text-sm text-gray-600">Accès direct aux plages</p>
          </Link>
        </div>
      </Section>
    </>
  );
}
