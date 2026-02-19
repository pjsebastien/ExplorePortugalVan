import { Metadata } from 'next';
import Link from 'next/link';
import { Section, Breadcrumbs } from '@/components';

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site ExplorePortugalVan.com - Informations sur l'éditeur, l'hébergeur et les conditions d'utilisation.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://www.exploreportugalvan.com/mentions-legales/",
  },
  openGraph: {
    title: "Mentions légales",
    description: "Mentions légales du site ExplorePortugalVan.com.",
    url: "https://www.exploreportugalvan.com/mentions-legales/",
    type: "website",
    locale: "fr_FR",
    siteName: "ExplorePortugalVan",
  },
  twitter: {
    card: "summary",
    title: "Mentions légales",
    description: "Mentions légales du site ExplorePortugalVan.com.",
  },
};

const breadcrumbs = [
  { name: "Accueil", href: "/" },
  { name: "Mentions légales", href: "/mentions-legales" },
];

export default function MentionsLegalesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-gray-700 to-gray-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-4">
          <h1 className="text-4xl font-display font-bold">Mentions légales</h1>
        </div>
      </section>

      <Section>
        <div className="max-w-4xl mx-auto prose prose-gray">
          <p className="text-sm text-gray-500 mb-8">Dernière mise à jour : Février 2025</p>

          <h2>1. Éditeur du site</h2>
          <p>
            Le site <strong>ExplorePortugalVan.com</strong> est édité par :
          </p>
          <ul>
            <li><strong>Nom :</strong> Esteban Laudry</li>
            <li><strong>Statut :</strong> Entrepreneur individuel</li>
            <li><strong>Email :</strong> contact@exploreportugalvan.com</li>
          </ul>

          <h2>2. Hébergement</h2>
          <p>
            Le site est hébergé par :
          </p>
          <ul>
            <li><strong>Hébergeur :</strong> Vercel Inc.</li>
            <li><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</li>
            <li><strong>Site web :</strong> vercel.com</li>
          </ul>

          <h2>3. Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu présent sur le site ExplorePortugalVan.com (textes, images, graphismes,
            logo, icônes, etc.) est protégé par les lois françaises et internationales relatives à la
            propriété intellectuelle.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie
            des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans
            autorisation écrite préalable de l&apos;éditeur.
          </p>

          <h2>4. Liens d&apos;affiliation</h2>
          <p>
            Ce site participe à des programmes d&apos;affiliation. Cela signifie que nous pouvons percevoir
            une commission lorsque vous effectuez un achat via certains liens présents sur notre site,
            sans coût supplémentaire pour vous.
          </p>
          <p>
            Ces liens sont clairement identifiés et s&apos;ouvrent dans un nouvel onglet avec l&apos;attribut
            rel=&quot;nofollow&quot;. Notre objectif reste de vous fournir des informations utiles et objectives
            pour préparer votre voyage.
          </p>

          <h2>5. Responsabilité</h2>
          <p>
            L&apos;éditeur s&apos;efforce de fournir des informations aussi précises que possible. Toutefois,
            il ne peut être tenu responsable des omissions, inexactitudes ou carences dans la mise à jour
            des informations, qu&apos;elles soient de son fait ou du fait de tiers.
          </p>
          <p>
            Les informations présentées sur ce site sont données à titre indicatif et sont susceptibles
            d&apos;évoluer. Nous vous conseillons de vérifier les informations (tarifs, réglementations, etc.)
            auprès des sources officielles avant tout voyage.
          </p>

          <h2>6. Cookies et données personnelles</h2>
          <p>
            Pour en savoir plus sur notre utilisation des cookies et le traitement de vos données
            personnelles, veuillez consulter notre{' '}
            <Link href="/politique-confidentialite" className="text-ocean-600 hover:underline">
              politique de confidentialité
            </Link>.
          </p>

          <h2>7. Contact</h2>
          <p>
            Pour toute question concernant ces mentions légales ou le site en général, vous pouvez
            nous contacter à l&apos;adresse : contact@exploreportugalvan.com
          </p>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-4">
            <Link href="/" className="text-ocean-600 hover:underline">← Retour à l&apos;accueil</Link>
            <Link href="/politique-confidentialite" className="text-ocean-600 hover:underline">Politique de confidentialité →</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
