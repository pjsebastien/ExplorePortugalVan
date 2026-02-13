import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AffiliateCTA, Section, Breadcrumbs, InternalLink } from '@/components';

export const metadata: Metadata = {
  title: "Itinéraire Portugal 10 Jours en Van - Guide Jour par Jour",
  description: "Itinéraire complet de 10 jours en van au Portugal. Programme jour par jour, distances, étapes et lieux où dormir pour un road trip réussi.",
  alternates: {
    canonical: "https://exploreportugalvan.com/itineraire-portugal-10-jours-van",
  },
};

const breadcrumbs = [
  { name: "Accueil", href: "/" },
  { name: "Itinéraire 10 jours", href: "/itineraire-portugal-10-jours-van" },
];

const itinerary = [
  { day: 1, title: "Lisbonne - Sintra", distance: "30 km", description: "Récupération du van et découverte de Sintra (Palais de Pena, Quinta da Regaleira).", sleep: "Aire de Cascais" },
  { day: 2, title: "Sintra - Ericeira - Peniche", distance: "80 km", description: "Route côtière vers les spots de surf. Ericeira et ses ruelles blanches.", sleep: "Peniche" },
  { day: 3, title: "Peniche - Nazaré - Óbidos", distance: "60 km", description: "Nazaré et ses vagues géantes, village médiéval d'Óbidos.", sleep: "Óbidos" },
  { day: 4, title: "Óbidos - Tomar - Coimbra", distance: "150 km", description: "Couvent du Christ (UNESCO) à Tomar, ville universitaire de Coimbra.", sleep: "Coimbra" },
  { day: 5, title: "Coimbra - Porto", distance: "120 km", description: "Route vers Porto. Ribeira, caves de vin de Porto, librairie Lello.", sleep: "Matosinhos" },
  { day: 6, title: "Porto - Vallée du Douro", distance: "100 km", description: "Vignobles en terrasses, routes panoramiques, dégustation en quinta.", sleep: "Pinhão" },
  { day: 7, title: "Porto - Aveiro - Lisbonne", distance: "300 km", description: "Aveiro (Venise portugaise), maisons rayées de Costa Nova.", sleep: "Lisbonne" },
  { day: 8, title: "Lisbonne - Évora - Alentejo", distance: "180 km", description: "Évora (UNESCO), plaines de l'Alentejo, village de Monsaraz.", sleep: "Lac Alqueva" },
  { day: 9, title: "Alentejo - Sagres", distance: "200 km", description: "Cap Saint-Vincent, coucher de soleil à l'extrémité sud-ouest.", sleep: "Sagres" },
  { day: 10, title: "Sagres - Lagos - Faro", distance: "100 km", description: "Ponta da Piedade, Praia da Marinha, grotte de Benagil. Restitution à Faro.", sleep: "-" },
];

export default function ItinerairePage() {
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
                Itinéraire Portugal 10 Jours en Van
              </h1>
              <p className="text-lg text-sand-100 mb-6">
                Le programme parfait pour découvrir les essentiels du Portugal : Lisbonne, Porto, Douro,
                Alentejo et Algarve. Environ 1400 km de routes panoramiques avec étapes et spots pour dormir.
              </p>
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">10</div>
                  <div className="text-sm text-sand-200">jours</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">~1400</div>
                  <div className="text-sm text-sand-200">km</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-sm text-sand-200">régions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm text-sand-200">étapes</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/prix-location-van-portugal" className="px-4 py-2 bg-white/90 text-gray-800 rounded-lg text-sm font-medium hover:bg-white shadow-sm">Budget estimatif</Link>
                <Link href="/dormir-en-van-portugal" className="px-4 py-2 bg-white/90 text-gray-800 rounded-lg text-sm font-medium hover:bg-white shadow-sm">Où dormir</Link>
              </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 gap-2">
              <div className="relative h-28 rounded-lg overflow-hidden">
                <Image src="/images/location-van-lisbonne.jpg" alt="Lisbonne" fill className="object-cover" sizes="150px" />
              </div>
              <div className="relative h-28 rounded-lg overflow-hidden">
                <Image src="/images/location-van-porto.jpg" alt="Porto" fill className="object-cover" sizes="150px" />
              </div>
              <div className="relative h-28 rounded-lg overflow-hidden">
                <Image src="/images/itineraire-portugal.jpg" alt="Route Portugal" fill className="object-cover" sizes="150px" />
              </div>
              <div className="relative h-28 rounded-lg overflow-hidden">
                <Image src="/images/location-van-algarve.jpg" alt="Algarve" fill className="object-cover" sizes="150px" />
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
              Cet <strong>itinéraire de 10 jours en van au Portugal</strong> vous emmène des ruelles de
              <InternalLink href="/location-van-lisbonne">Lisbonne</InternalLink> aux falaises de
              l&apos;<InternalLink href="/location-van-algarve">Algarve</InternalLink>, en passant par
              <InternalLink href="/location-van-porto">Porto</InternalLink>, la vallée du Douro et l&apos;Alentejo.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Le parcours est conçu pour équilibrer conduite, visites et moments de détente. La moyenne
              de 140 km par jour laisse du temps pour les arrêts spontanés et les découvertes imprévues.
              Consultez notre guide <InternalLink href="/dormir-en-van-portugal">Où dormir en van</InternalLink>
              pour chaque étape.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Cet itinéraire peut être adapté selon vos centres d&apos;intérêt : rallongez le séjour à Porto
              pour explorer le Douro, ou passez plus de temps en Algarve pour profiter des plages.
              Le <InternalLink href="/prix-location-van-portugal">budget</InternalLink> est estimé
              à 1600-2200€ pour 2 personnes tout compris.
            </p>
          </div>
          <div className="bg-ocean-50 rounded-xl p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Départ recommandé</h3>
            <p className="text-gray-600 text-sm mb-4">
              <InternalLink href="/location-van-lisbonne">Lisbonne</InternalLink> offre le meilleur choix de véhicules.
              Restitution possible à Faro pour éviter le retour.
            </p>
            <h3 className="font-semibold text-gray-900 mb-3">Meilleure période</h3>
            <p className="text-gray-600 text-sm">Avril-juin ou septembre-octobre pour un climat idéal et des tarifs modérés.</p>
          </div>
        </div>
      </Section>

      {/* Programme jour par jour */}
      <Section background="gray">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
          Programme jour par jour
        </h2>
        <div className="space-y-4">
          {itinerary.map((day) => (
            <div key={day.day} className="bg-white rounded-xl p-5 flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex items-center gap-4 md:w-48 flex-shrink-0">
                <div className="w-12 h-12 bg-ocean-100 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-ocean-600">J{day.day}</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{day.title}</div>
                  <div className="text-sm text-ocean-600">{day.distance}</div>
                </div>
              </div>
              <div className="flex-grow">
                <p className="text-gray-600">{day.description}</p>
              </div>
              {day.sleep !== "-" && (
                <div className="md:w-40 flex-shrink-0 text-right">
                  <span className="text-xs text-gray-500">Nuit :</span>
                  <div className="text-sm font-medium text-gray-900">{day.sleep}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      <AffiliateCTA
        variant="compact"
        title="Réservez votre van pour cet itinéraire"
        description="10 jours d'aventure sur les routes du Portugal."
        buttonText="Voir les disponibilités"
              />

      {/* Conseils */}
      <Section>
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
          Conseils pour cet itinéraire
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexibilité</h3>
            <p className="text-gray-600 mb-4">
              L&apos;avantage du van est de pouvoir modifier votre parcours selon vos envies. Si un endroit
              vous plaît, restez un jour de plus. Le jour 7 (longue route) peut être coupé en deux avec
              une nuit à Aveiro. Consultez <InternalLink href="/road-trip-portugal-van">notre guide road trip</InternalLink>
              pour plus de détails sur chaque région.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Variantes</h3>
            <p className="text-gray-600">
              <strong>Version courte (7 jours) :</strong> Concentrez-vous sur Lisbonne-Algarve.<br />
              <strong>Version longue (14 jours) :</strong> Ajoutez le parc Peneda-Gerês et plus de temps en Algarve.
            </p>
          </div>
          <div className="bg-sand-50 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Budget estimatif (2 pers.)</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span>Location van (10 jours)</span><span className="font-medium">900-1200€</span></div>
              <div className="flex justify-between"><span>Carburant (~1400 km)</span><span className="font-medium">150-200€</span></div>
              <div className="flex justify-between"><span>Camping/aires</span><span className="font-medium">100-200€</span></div>
              <div className="flex justify-between"><span>Nourriture</span><span className="font-medium">250-400€</span></div>
              <div className="flex justify-between"><span>Activités/visites</span><span className="font-medium">100-200€</span></div>
              <div className="flex justify-between pt-2 border-t font-semibold"><span>Total</span><span className="text-ocean-600">1500-2200€</span></div>
            </div>
            <Link href="/prix-location-van-portugal" className="inline-block mt-4 text-ocean-600 text-sm font-medium">
              Détail complet des prix →
            </Link>
          </div>
        </div>
      </Section>

      {/* Navigation */}
      <Section background="gray">
        <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Préparez votre voyage</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/road-trip-portugal-van" className="group p-5 bg-white rounded-xl hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900 group-hover:text-ocean-600 mb-1">Guide road trip</h3>
            <p className="text-sm text-gray-600">Toutes les régions en détail</p>
          </Link>
          <Link href="/prix-location-van-portugal" className="group p-5 bg-white rounded-xl hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900 group-hover:text-ocean-600 mb-1">Prix et budget</h3>
            <p className="text-sm text-gray-600">Tarifs par saison et type de van</p>
          </Link>
          <Link href="/camping-sauvage-portugal-van" className="group p-5 bg-white rounded-xl hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900 group-hover:text-ocean-600 mb-1">Réglementation</h3>
            <p className="text-sm text-gray-600">Camping et stationnement</p>
          </Link>
        </div>
      </Section>
    </>
  );
}
