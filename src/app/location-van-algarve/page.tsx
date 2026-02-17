import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AffiliateCTA, Section, Breadcrumbs, InternalLink } from '@/components';

export const metadata: Metadata = {
  title: "Location van Algarve | Falaises, plages et soleil toute l'année",
  description: "Louez un van en Algarve depuis Faro et explorez les plus belles plages d'Europe. Falaises dorées, grottes marines et 300 jours de soleil par an.",
  alternates: {
    canonical: "https://www.exploreportugalvan.com/location-van-algarve",
  },
};

const breadcrumbs = [
  { name: "Accueil", href: "/" },
  { name: "Location van Algarve", href: "/location-van-algarve" },
];

export default function AlgarvePage() {
  return (
    <>
      {/* Hero pro */}
      <section className="bg-gradient-to-r from-sand-600 to-sand-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-4">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Location de van en Algarve
              </h1>
              <p className="text-lg text-sand-100 mb-6">
                Les plus belles plages d&apos;Europe à portée de van. Falaises dorées, grottes marines
                et 300 jours de soleil par an. Accès direct depuis l&apos;aéroport de Faro.
              </p>
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">300</div>
                  <div className="text-sm text-sand-200">jours soleil/an</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">150+</div>
                  <div className="text-sm text-sand-200">plages</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">1h</div>
                  <div className="text-sm text-sand-200">Lagos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">1h30</div>
                  <div className="text-sm text-sand-200">Sagres</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/prix-location-van-portugal" className="px-4 py-2 bg-white/90 text-gray-800 rounded-lg text-sm font-medium hover:bg-white shadow-sm">Voir les prix</Link>
                <Link href="/dormir-en-van-portugal" className="px-4 py-2 bg-white/90 text-gray-800 rounded-lg text-sm font-medium hover:bg-white shadow-sm">Où dormir</Link>
              </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 gap-2">
              <div className="relative h-28 rounded-lg overflow-hidden">
                <Image src="/images/location-van-algarve.jpg" alt="Algarve" fill className="object-cover" sizes="150px" />
              </div>
              <div className="relative h-28 rounded-lg overflow-hidden">
                <Image src="/images/camping-sauvage-portugal.jpg" alt="Plages" fill className="object-cover" sizes="150px" />
              </div>
              <div className="relative h-28 rounded-lg overflow-hidden">
                <Image src="/images/road-trip-portugal.jpg" alt="Road trip" fill className="object-cover" sizes="150px" />
              </div>
              <div className="relative h-28 rounded-lg overflow-hidden">
                <Image src="/images/dormir-van-portugal.jpg" alt="Van" fill className="object-cover" sizes="150px" />
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
              L&apos;Algarve, région la plus méridionale du Portugal, est réputée pour ses falaises
              spectaculaires, ses grottes marines et ses plages de sable doré.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Louer un van en Algarve via l&apos;aéroport de Faro vous permet d&apos;accéder directement à ce paradis
              méditerranéen sans transit par <InternalLink href="/location-van-lisbonne">Lisbonne</InternalLink> ou
              <InternalLink href="/location-van-porto"> Porto</InternalLink>. Idéal si vous souhaitez vous concentrer
              sur les plages du sud lors de votre <InternalLink href="/road-trip-portugal-van">road trip</InternalLink>.
            </p>
          </div>
          <div className="bg-sand-50 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Aéroport de Faro</h3>
            <p className="text-gray-600 text-sm mb-4">
              Principal point d&apos;entrée en Algarve. Nombreux vols low-cost depuis toute l&apos;Europe,
              souvent l&apos;option la plus économique pour rejoindre le Portugal.
            </p>
            <p className="text-sm text-sand-700 font-medium">Code IATA: FAO</p>
          </div>
        </div>
      </Section>

      {/* Avantages */}
      <Section background="gray">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
          Avantages de louer en Algarve
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-sand-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-sand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">300 jours de soleil</h3>
            <p className="text-gray-600 text-sm">
              Le climat le plus doux du Portugal. Même en hiver, les températures
              restent agréables (15-18°C).
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Paysages iconiques</h3>
            <p className="text-gray-600 text-sm">
              Ponta da Piedade, Benagil, Praia da Marinha... Les plages les plus
              photographiées d&apos;Europe.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-nature-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-nature-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Costa Vicentina</h3>
            <p className="text-gray-600 text-sm">
              Accès direct à la côte ouest sauvage et préservée. Surf, randonnée
              et nature brute.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Accès rapide</h3>
            <p className="text-gray-600 text-sm">
              En 1h de route, vous êtes sur les plus belles plages.
              Pas de longue route avant l&apos;aventure.
            </p>
          </div>
        </div>
      </Section>

      {/* Accès Faro */}
      <Section>
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
          Accès depuis l&apos;aéroport de Faro
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 mb-6">
              L&apos;aéroport de Faro (FAO) est le principal point d&apos;entrée en Algarve.
              Il accueille de nombreux vols low-cost depuis toute l&apos;Europe, ce qui en fait
              souvent l&apos;option la plus économique pour rejoindre le Portugal.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-900 text-sm">Faro → Lagos</h4>
                <p className="text-sm text-gray-600 mt-1">
                  85 km - environ 1h15 par l&apos;A22
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-900 text-sm">Faro → Sagres</h4>
                <p className="text-sm text-gray-600 mt-1">
                  115 km - environ 1h30
                </p>
              </div>
            </div>

            <div className="bg-sand-50 border-l-4 border-sand-500 p-5">
              <h4 className="font-semibold text-sand-800 mb-2">Péages en Algarve</h4>
              <p className="text-sand-800 text-sm">
                L&apos;autoroute A22 (Via do Infante) est à péage électronique. Les loueurs
                proposent généralement un boîtier de télépéage. Alternative : la nationale N125 (gratuite).
              </p>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Vols directs fréquents depuis :</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Paris</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Lyon</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Nantes</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Bordeaux</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Bruxelles</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Londres</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Amsterdam</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Berlin</span>
              </div>
            </div>

            <div className="bg-ocean-50 border-l-4 border-ocean-500 p-5">
              <h4 className="font-semibold text-ocean-800 mb-2">Bon à savoir</h4>
              <p className="text-ocean-800 text-sm">
                Les vols vers Faro sont souvent très abordables en basse saison.
                Idéal pour un road trip hivernal au soleil !
              </p>
            </div>
          </div>
        </div>
      </Section>

      <AffiliateCTA
        variant="hero"
        title="Louez votre van en Algarve"
        description="Comparez les offres depuis Faro et commencez votre aventure sur les plus belles plages d'Europe."
        buttonText="Voir les offres"
              />

      {/* Spots incontournables */}
      <Section background="gray">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
          Spots incontournables en Algarve
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Ponta da Piedade (Lagos)</h3>
            <p className="text-gray-600 text-sm mb-3">
              Formations rocheuses sculptées par l&apos;érosion, arches naturelles et grottes.
              Le spot le plus emblématique de l&apos;Algarve. Kayak recommandé pour explorer les grottes.
            </p>
            <p className="text-xs text-gray-500">
              Parking limité, arrivez tôt en saison. Aire de camping à 5 km.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Grotte de Benagil</h3>
            <p className="text-gray-600 text-sm mb-3">
              La grotte marine la plus célèbre du Portugal, avec son dôme naturel ouvert sur le ciel.
              Accessible uniquement par la mer (kayak, paddle, bateau ou nage).
            </p>
            <p className="text-xs text-gray-500">
              Parking payant à Benagil. Excursions en kayak depuis la plage.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Praia da Marinha</h3>
            <p className="text-gray-600 text-sm mb-3">
              Régulièrement classée parmi les plus belles plages du monde. Falaises ocre,
              eaux cristallines et formations rocheuses spectaculaires.
            </p>
            <p className="text-xs text-gray-500">
              Grand parking en haut des falaises. Escalier d&apos;accès à la plage.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Cap Saint-Vincent (Sagres)</h3>
            <p className="text-gray-600 text-sm mb-3">
              Extrémité sud-ouest de l&apos;Europe continentale. Couchers de soleil légendaires.
              Point de départ pour explorer la Costa Vicentina vers le nord.
            </p>
            <p className="text-xs text-gray-500">
              Aire de camping-car à Sagres. Consultez les <InternalLink href="/dormir-en-van-portugal">spots pour dormir</InternalLink>.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm lg:col-span-2">
            <h3 className="text-xl font-semibold mb-3">Tavira et l&apos;Algarve oriental</h3>
            <p className="text-gray-600 text-sm mb-3">
              Moins touristique, plus authentique. Architecture mauresque préservée,
              îles-barrières accessibles en bateau, parc naturel de la Ria Formosa.
              Idéal pour le calme hors saison.
            </p>
            <p className="text-xs text-gray-500">
              Aire de camping-car à Tavira.
            </p>
          </div>
        </div>
      </Section>

      {/* Conseils */}
      <Section>
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
          Conseils pour l&apos;Algarve en van
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Réglementation stricte</h3>
            <p className="text-gray-700 mb-6">
              L&apos;Algarve applique strictement les règles contre le <InternalLink href="/camping-sauvage-portugal-van">camping sauvage</InternalLink>.
              Les contrôles sont fréquents, surtout en été sur les spots populaires.
              Privilégiez les <InternalLink href="/dormir-en-van-portugal">aires officielles et les campings</InternalLink>.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Meilleure période</h3>
            <p className="text-gray-700">
              L&apos;été (juillet-août) est très touristique avec des <InternalLink href="/prix-location-van-portugal">prix élevés</InternalLink> et
              des parkings bondés. Le printemps (avril-juin) et l&apos;automne (septembre-octobre)
              offrent le meilleur compromis : météo agréable, mer chaude et moins de monde.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Costa Vicentina vs Algarve centrale</h3>
            <p className="text-gray-700 mb-6">
              La côte ouest (Costa Vicentina) est plus sauvage et moins fréquentée que
              la côte sud classique. Idéale pour les amateurs de nature, de surf et de
              tranquillité. Attention : parc naturel avec réglementation stricte.
            </p>

            <div className="bg-ocean-50 border-l-4 border-ocean-500 p-5">
              <h4 className="font-semibold text-ocean-800 mb-2">Circuit suggéré (5-7 jours)</h4>
              <p className="text-ocean-800 text-sm">
                Faro → Tavira (1 nuit) → Olhão/Fuseta (1 nuit) → Albufeira/Carvoeiro (1 nuit) →
                Lagos (2 nuits) → Sagres (1-2 nuits) → Retour Faro ou
                continuation vers <InternalLink href="/location-van-lisbonne">Lisbonne</InternalLink>.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <AffiliateCTA
        variant="default"
        title="Réservez votre van pour l'Algarve"
        description="Les plus belles plages d'Europe vous attendent."
        buttonText="Comparer les offres"
              />

      {/* Navigation */}
      <Section background="gray">
        <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Autres points de départ</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/location-van-lisbonne" className="group p-5 bg-white rounded-xl hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900 group-hover:text-ocean-600 mb-1">Location van Lisbonne</h3>
            <p className="text-sm text-gray-600">Plus grand choix, position centrale</p>
          </Link>
          <Link href="/location-van-porto" className="group p-5 bg-white rounded-xl hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900 group-hover:text-ocean-600 mb-1">Location van Porto</h3>
            <p className="text-sm text-gray-600">Pour explorer le nord et le Douro</p>
          </Link>
        </div>
      </Section>
    </>
  );
}
