import { Metadata } from 'next';
import Link from 'next/link';
import { AffiliateCTA, Section, Breadcrumbs, InternalLink } from '@/components';

export const metadata: Metadata = {
  title: "FAQ location van Portugal | Vos questions, nos réponses",
  description: "Permis, assurance, budget, camping, meilleure période... Toutes les réponses à vos questions sur la location de van au Portugal.",
  alternates: {
    canonical: "https://www.exploreportugalvan.com/faq-location-van-portugal/",
  },
  openGraph: {
    title: "FAQ location van Portugal | Vos questions, nos réponses",
    description: "Toutes les réponses à vos questions sur la location de van au Portugal : permis, budget, camping.",
    url: "https://www.exploreportugalvan.com/faq-location-van-portugal/",
  },
  twitter: {
    title: "FAQ location van Portugal | Vos questions, nos réponses",
    description: "Toutes les réponses à vos questions sur la location de van au Portugal : permis, budget, camping.",
  },
};

const breadcrumbs = [
  { name: "Accueil", href: "/" },
  { name: "FAQ", href: "/faq-location-van-portugal" },
];

const faqs = [
  {
    question: "Quel permis de conduire faut-il pour louer un van au Portugal ?",
    answer: "Le permis B standard français ou européen suffit pour louer la plupart des vans aménagés au Portugal. Les véhicules de moins de 3,5 tonnes (la grande majorité des vans de location) sont accessibles avec ce permis. Seuls les camping-cars dépassant 3,5 tonnes nécessitent un permis C. Vérifiez le poids total autorisé en charge (PTAC) du véhicule lors de la réservation."
  },
  {
    question: "Le camping sauvage est-il autorisé au Portugal ?",
    answer: "Non, le camping sauvage est officiellement interdit au Portugal depuis 2021. Des amendes de 60 à 600 euros peuvent être appliquées, particulièrement dans les parcs naturels et zones côtières. Cependant, de nombreuses alternatives légales existent : aires de camping-car officielles, campings traditionnels et spots référencés sur Park4Night. Le simple stationnement nocturne (sans installation extérieure) reste toléré dans certaines zones."
  },
  {
    question: "Quel budget prévoir pour un road trip en van au Portugal ?",
    answer: "Pour un séjour de 10 jours en couple, prévoyez environ 1600 à 2200 euros tout compris. Cela inclut la location du van (800-1200€), le carburant (150-200€), le camping/aires (100-200€), la nourriture (250-400€) et les activités (100-200€). Les prix varient selon la saison : comptez 20-40% de moins hors saison (novembre-mars)."
  },
  {
    question: "Quelle est la meilleure période pour louer un van au Portugal ?",
    answer: "Le printemps (avril-juin) et l'automne (septembre-octobre) offrent le meilleur compromis entre météo agréable, tarifs raisonnables et fréquentation modérée. L'été (juillet-août) est très touristique avec des prix élevés. L'hiver reste doux en Algarve (15-18°C) et propose les tarifs les plus bas, idéal pour les digital nomads."
  },
  {
    question: "Faut-il réserver son van à l'avance ?",
    answer: "Oui, fortement recommandé. En haute saison (juin-septembre), réservez 2 à 3 mois à l'avance pour avoir du choix. Même en basse saison, une réservation quelques semaines avant permet d'obtenir de meilleurs tarifs. Les loueurs proposent généralement des conditions d'annulation flexibles."
  },
  {
    question: "Où récupérer mon van au Portugal ?",
    answer: "Les trois principaux points de départ sont Lisbonne (plus grand choix, position centrale), Porto (idéal pour le nord et le Douro, tarifs souvent moins chers) et Faro/Algarve (accès direct aux plages du sud). La plupart des loueurs proposent des options de restitution dans une ville différente, pratique pour les circuits nord-sud."
  },
  {
    question: "Quelle assurance choisir pour la location de van ?",
    answer: "L'assurance de base (responsabilité civile) est toujours incluse mais avec une franchise élevée (1000-2000€). Nous recommandons l'assurance tous risques (+15-25€/jour) qui réduit ou élimine la franchise et couvre vol, bris de glace et dommages. Vérifiez si votre carte bancaire premium offre une couverture complémentaire pour économiser ce supplément."
  },
  {
    question: "Peut-on utiliser les autoroutes avec un van au Portugal ?",
    answer: "Oui, les vans peuvent emprunter toutes les autoroutes portugaises. Attention : certaines autoroutes (notamment l'A22 en Algarve) utilisent un système de péage électronique sans barrière. Les loueurs proposent généralement un boîtier de télépéage ou des solutions temporaires. Sinon, les nationales sont gratuites et souvent plus pittoresques."
  },
  {
    question: "Où trouver des aires pour dormir en van au Portugal ?",
    answer: "Le Portugal dispose de plus de 200 aires de camping-car officielles. L'application Park4Night recense des milliers de spots vérifiés par la communauté vanlife. Campercontact liste les aires officielles avec leurs services. Alternez entre aires payantes (5-25€) et spots gratuits pour optimiser votre budget tout en respectant la réglementation."
  },
  {
    question: "Le Portugal est-il adapté aux débutants en van ?",
    answer: "Oui, le Portugal est une destination idéale pour débuter. Le réseau routier est de bonne qualité, les distances sont raisonnables, le climat est clément et les infrastructures pour camping-cars sont nombreuses. La population est accueillante et beaucoup parlent français ou anglais. C'est l'une des destinations vanlife les plus accessibles d'Europe."
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero pro */}
      <section className="bg-gradient-to-r from-ocean-600 to-ocean-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Questions fréquentes sur la location de van au Portugal
            </h1>
            <p className="text-lg text-ocean-100 mb-6">
              Toutes les réponses à vos questions pour préparer votre
              <InternalLink href="/road-trip-portugal-van"> road trip en van</InternalLink> au Portugal.
              Permis, assurance, budget, réglementation et conseils pratiques.
            </p>
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">10</div>
                <div className="text-sm text-ocean-200">questions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">✓</div>
                <div className="text-sm text-ocean-200">à jour</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm text-ocean-200">guides liés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-ocean-200">pratique</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h2 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h2>
                    <span className="flex-shrink-0 ml-4">
                      <svg
                        className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <AffiliateCTA
        variant="hero"
        title="Prêt à réserver votre van ?"
        description="Comparez les meilleures offres de location au Portugal."
        buttonText="Voir les offres"
              />

      {/* Liens vers guides */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-6 text-center">
            Besoin de plus d&apos;informations ?
          </h2>
          <p className="text-gray-700 text-center mb-8">
            Consultez nos guides détaillés pour préparer au mieux votre voyage :
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/prix-location-van-portugal" className="group p-5 bg-white rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900 group-hover:text-ocean-600 mb-1">Prix et budget</h3>
              <p className="text-sm text-gray-600">Tarifs détaillés par saison</p>
            </Link>
            <Link href="/camping-sauvage-portugal-van" className="group p-5 bg-white rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900 group-hover:text-ocean-600 mb-1">Camping sauvage</h3>
              <p className="text-sm text-gray-600">Réglementation complète</p>
            </Link>
            <Link href="/itineraire-portugal-10-jours-van" className="group p-5 bg-white rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900 group-hover:text-ocean-600 mb-1">Itinéraire 10 jours</h3>
              <p className="text-sm text-gray-600">Programme jour par jour</p>
            </Link>
            <Link href="/dormir-en-van-portugal" className="group p-5 bg-white rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900 group-hover:text-ocean-600 mb-1">Où dormir</h3>
              <p className="text-sm text-gray-600">Aires et spots recommandés</p>
            </Link>
            <Link href="/location-van-lisbonne" className="group p-5 bg-white rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900 group-hover:text-ocean-600 mb-1">Louer à Lisbonne</h3>
              <p className="text-sm text-gray-600">Guide depuis la capitale</p>
            </Link>
            <Link href="/road-trip-portugal-van" className="group p-5 bg-white rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900 group-hover:text-ocean-600 mb-1">Guide road trip</h3>
              <p className="text-sm text-gray-600">Tout ce qu&apos;il faut savoir</p>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
