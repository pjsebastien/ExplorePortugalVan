import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AffiliateCTA, Section, Breadcrumbs, InternalLink } from '@/components';

export const metadata: Metadata = {
  title: "Camping Sauvage Portugal en Van - Réglementation 2025",
  description: "Camping sauvage au Portugal en van : réglementation actuelle, amendes, zones interdites et alternatives légales pour dormir dans la nature.",
  alternates: {
    canonical: "https://exploreportugalvan.com/camping-sauvage-portugal-van",
  },
};

const breadcrumbs = [
  { name: "Accueil", href: "/" },
  { name: "Camping sauvage", href: "/camping-sauvage-portugal-van" },
];

export default function CampingSauvagePage() {
  return (
    <>
      {/* Hero pro */}
      <section className="bg-gradient-to-r from-red-700 to-red-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-4">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm mb-4">
                ⚠️ Réglementation 2025
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Camping sauvage au Portugal
              </h1>
              <p className="text-lg text-red-100 mb-6">
                Le camping sauvage est officiellement interdit au Portugal. Connaître la réglementation,
                les zones à éviter et les alternatives légales pour voyager sereinement.
              </p>
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">60-600€</div>
                  <div className="text-sm text-red-200">amendes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">2021</div>
                  <div className="text-sm text-red-200">loi renforcée</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">200+</div>
                  <div className="text-sm text-red-200">alternatives</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">GNR</div>
                  <div className="text-sm text-red-200">contrôles</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/dormir-en-van-portugal" className="px-4 py-2 bg-white/90 text-gray-800 rounded-lg text-sm font-medium hover:bg-white shadow-sm">Alternatives légales</Link>
                <Link href="/road-trip-portugal-van" className="px-4 py-2 bg-white/90 text-gray-800 rounded-lg text-sm font-medium hover:bg-white shadow-sm">Guide road trip</Link>
              </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 gap-2">
              <div className="relative h-28 rounded-lg overflow-hidden">
                <Image src="/images/camping-sauvage-portugal.jpg" alt="Nature Portugal" fill className="object-cover" sizes="150px" />
              </div>
              <div className="relative h-28 rounded-lg overflow-hidden">
                <Image src="/images/location-van-algarve.jpg" alt="Algarve" fill className="object-cover" sizes="150px" />
              </div>
              <div className="relative h-28 rounded-lg overflow-hidden">
                <Image src="/images/dormir-van-portugal.jpg" alt="Van Portugal" fill className="object-cover" sizes="150px" />
              </div>
              <div className="relative h-28 rounded-lg overflow-hidden">
                <Image src="/images/itineraire-portugal.jpg" alt="Route Portugal" fill className="object-cover" sizes="150px" />
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
              Le camping sauvage au Portugal a longtemps été toléré, faisant du pays une destination
              prisée des vanlifers européens. Cependant, face à l&apos;afflux de camping-cars et aux
              problèmes environnementaux associés, la réglementation s&apos;est durcie ces dernières années.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Il est désormais essentiel de connaître les règles en vigueur pour éviter les amendes
              et voyager sereinement lors de votre <InternalLink href="/road-trip-portugal-van">road trip</InternalLink>.
              Heureusement, de nombreuses <InternalLink href="/dormir-en-van-portugal">alternatives légales</InternalLink> existent
              pour profiter de la nature portugaise en toute légalité.
            </p>
          </div>
          <div className="bg-red-50 border-l-4 border-red-500 p-5">
            <h3 className="text-lg font-semibold text-red-800 mb-2">⚠️ Attention</h3>
            <p className="text-red-800 text-sm">
              Le camping sauvage est officiellement interdit sur l&apos;ensemble du territoire portugais,
              avec une application particulièrement stricte dans les zones côtières et les parcs
              naturels depuis 2021.
            </p>
          </div>
        </div>
      </Section>

      {/* Réglementation actuelle */}
      <Section background="gray">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
          Réglementation actuelle
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ce que dit la loi</h3>
            <p className="text-gray-700 mb-4">
              Le décret-loi n° 310/2002 et ses modifications ultérieures définissent le cadre légal
              du camping au Portugal. En substance :
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
              <li>Le camping est autorisé uniquement dans les espaces dédiés (campings, aires officielles)</li>
              <li>Le &quot;caravanage&quot; (stationner un véhicule aménagé pour y dormir avec installation extérieure) est interdit hors des zones prévues</li>
              <li>Le simple stationnement nocturne est plus nuancé (voir ci-dessous)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Distinction importante</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-5 rounded-xl">
                <h4 className="font-semibold text-red-800 mb-2">❌ Camping (interdit)</h4>
                <p className="text-sm text-red-700">
                  Installation de tables, chaises, auvent, barbecue à l&apos;extérieur du véhicule.
                  Pose de cales, extension de l&apos;espace de vie au-delà du véhicule.
                </p>
              </div>
              <div className="bg-nature-50 p-5 rounded-xl">
                <h4 className="font-semibold text-nature-800 mb-2">✓ Stationnement (toléré*)</h4>
                <p className="text-sm text-nature-700">
                  Rester dans son véhicule fermé pour dormir, sans installation extérieure,
                  dans un lieu où le stationnement est autorisé.
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-500 italic mt-4">
              *La tolérance varie selon les municipalités et les zones. Des panneaux d&apos;interdiction
              spécifiques aux camping-cars peuvent être présents.
            </p>
          </div>
        </div>
      </Section>

      {/* Amendes */}
      <Section>
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
          Amendes et sanctions possibles
        </h2>

        <p className="text-gray-700 mb-6">
          Les sanctions pour camping sauvage au Portugal peuvent être significatives :
        </p>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="divide-y">
            <div className="flex justify-between items-center p-4">
              <span className="text-gray-700">Camping sauvage (infraction simple)</span>
              <span className="font-semibold text-red-600">60-300€</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50">
              <span className="text-gray-700">Camping dans un parc naturel</span>
              <span className="font-semibold text-red-600">200-2000€</span>
            </div>
            <div className="flex justify-between items-center p-4">
              <span className="text-gray-700">Feu non autorisé / dommages environnementaux</span>
              <span className="font-semibold text-red-600">500-5000€</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50">
              <span className="text-gray-700">Rejet d&apos;eaux usées dans la nature</span>
              <span className="font-semibold text-red-600">300-3000€</span>
            </div>
          </div>
        </div>

        <p className="text-gray-700">
          Les contrôles se sont intensifiés, notamment dans les zones touristiques populaires
          comme l&apos;<InternalLink href="/location-van-algarve">Algarve</InternalLink> et la Costa Vicentina. La GNR (Garde Nationale Républicaine) effectue
          des patrouilles régulières, surtout en été.
        </p>
      </Section>

      {/* Zones interdites */}
      <Section background="gray">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
          Zones strictement interdites
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Parcs naturels</h3>
            <p className="text-gray-700 mb-4">
              Les parcs naturels portugais appliquent une politique de tolérance zéro :
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
              <li><strong>Parc Naturel du Sud-Ouest Alentejano et Costa Vicentina :</strong> Surveillance renforcée</li>
              <li><strong>Parc National Peneda-Gerês :</strong> Contrôles réguliers aux entrées</li>
              <li><strong>Parc Naturel de la Ria Formosa :</strong> Zone côtière très protégée</li>
              <li><strong>Parc Naturel de l&apos;Arrábida :</strong> Proche de <InternalLink href="/location-van-lisbonne">Lisbonne</InternalLink>, très surveillé</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Zones côtières sensibles</h3>
            <p className="text-gray-700 mb-4">
              Les falaises et plages emblématiques sont particulièrement contrôlées :
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
              <li>Ponta da Piedade (Lagos)</li>
              <li>Praia da Marinha et Benagil</li>
              <li>Cap Saint-Vincent et Sagres</li>
              <li>Plages de la Costa Vicentina</li>
              <li>Nazaré et ses environs</li>
            </ul>

            <div className="bg-sand-50 border-l-4 border-sand-500 p-5">
              <h4 className="font-semibold text-sand-800 mb-2">Pourquoi ces restrictions ?</h4>
              <p className="text-sand-800 text-sm">
                L&apos;afflux massif de camping-cars a engendré des problèmes de pollution, d&apos;érosion
                des sols et de dégradation des sites naturels.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <AffiliateCTA
        variant="compact"
        title="Trouvez des hébergements légaux"
        description="Aires officielles et campings avec vues exceptionnelles."
        buttonText="Voir les options"
              />

      {/* Alternatives légales */}
      <Section>
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
          Alternatives légales pour dormir dans la nature
        </h2>

        <p className="text-gray-700 mb-8">
          Bonne nouvelle : de nombreuses alternatives légales permettent de profiter de la nature
          portugaise en van. Consultez notre guide complet <InternalLink href="/dormir-en-van-portugal">Dormir en van au Portugal</InternalLink>.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Aires de camping-car</h3>
            <p className="text-gray-600 text-sm mb-3">
              Plus de 200 aires officielles au Portugal, souvent avec vue mer et services complets.
              Prix modérés (gratuit à 20€/nuit).
            </p>
            <Link href="/dormir-en-van-portugal" className="text-ocean-600 text-sm font-medium">
              Voir les aires →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Campings nature</h3>
            <p className="text-gray-600 text-sm mb-3">
              Des campings en pleine nature, souvent dans des fermes ou domaines privés,
              offrant une expérience authentique.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Spots Park4Night</h3>
            <p className="text-gray-600 text-sm mb-3">
              La communauté référence les spots où le stationnement nocturne reste toléré.
              Vérifiez les avis récents.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Chez l&apos;habitant</h3>
            <p className="text-gray-600 text-sm mb-3">
              Plateformes comme HomeCamper ou Gamping proposent des emplacements
              chez des particuliers, souvent dans des cadres idylliques.
            </p>
          </div>
        </div>
      </Section>

      {/* Bonnes pratiques */}
      <Section background="gray">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
          Bonnes pratiques éco-responsables
        </h2>

        <p className="text-gray-700 mb-6">
          Que vous stationniez en aire officielle ou en zone tolérée, adoptez ces comportements
          pour préserver l&apos;environnement et l&apos;image des vanlifers :
        </p>

        <div className="grid lg:grid-cols-2 gap-6">
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="w-8 h-8 bg-nature-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-4 h-4 text-nature-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <strong className="text-gray-900">Utilisez les bornes de vidange</strong>
                <p className="text-gray-600 mt-1 text-sm">
                  Ne vidangez jamais vos eaux grises ou noires dans la nature.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-8 h-8 bg-nature-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-4 h-4 text-nature-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <strong className="text-gray-900">Emportez tous vos déchets</strong>
                <p className="text-gray-600 mt-1 text-sm">
                  Y compris les déchets biodégradables. Utilisez des sacs poubelle.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-8 h-8 bg-nature-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-4 h-4 text-nature-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <strong className="text-gray-900">Respectez la faune et la flore</strong>
                <p className="text-gray-600 mt-1 text-sm">
                  Ne cueillez pas de plantes, ne nourrissez pas les animaux sauvages.
                </p>
              </div>
            </li>
          </ul>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="w-8 h-8 bg-nature-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-4 h-4 text-nature-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <strong className="text-gray-900">Pas de feu en extérieur</strong>
                <p className="text-gray-600 mt-1 text-sm">
                  Le risque d&apos;incendie est majeur au Portugal, surtout en été.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-8 h-8 bg-nature-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-4 h-4 text-nature-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <strong className="text-gray-900">Soutenez l&apos;économie locale</strong>
                <p className="text-gray-600 mt-1 text-sm">
                  Consommez dans les commerces locaux, visitez les marchés.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Section>

      <AffiliateCTA
        variant="default"
        title="Voyagez sereinement"
        description="Louez votre van et découvrez le Portugal en respectant l'environnement."
        buttonText="Voir les offres de location"
              />

      {/* Navigation */}
      <Section background="gray">
        <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">En savoir plus</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/dormir-en-van-portugal" className="group p-5 bg-white rounded-xl hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900 group-hover:text-ocean-600 mb-1">Où dormir</h3>
            <p className="text-sm text-gray-600">Aires et alternatives légales</p>
          </Link>
          <Link href="/road-trip-portugal-van" className="group p-5 bg-white rounded-xl hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900 group-hover:text-ocean-600 mb-1">Road trip</h3>
            <p className="text-sm text-gray-600">Guide complet par région</p>
          </Link>
          <Link href="/faq-location-van-portugal" className="group p-5 bg-white rounded-xl hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900 group-hover:text-ocean-600 mb-1">FAQ</h3>
            <p className="text-sm text-gray-600">Questions fréquentes</p>
          </Link>
        </div>
      </Section>
    </>
  );
}
