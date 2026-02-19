import { Metadata } from 'next';
import Link from 'next/link';
import { Section, Breadcrumbs } from '@/components';

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité du site ExplorePortugalVan.com - Informations sur la collecte et le traitement des données personnelles.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://www.exploreportugalvan.com/politique-confidentialite/",
  },
  openGraph: {
    title: "Politique de confidentialité",
    description: "Politique de confidentialité du site ExplorePortugalVan.com.",
    url: "https://www.exploreportugalvan.com/politique-confidentialite/",
    type: "website",
    locale: "fr_FR",
    siteName: "ExplorePortugalVan",
  },
  twitter: {
    card: "summary",
    title: "Politique de confidentialité",
    description: "Politique de confidentialité du site ExplorePortugalVan.com.",
  },
};

const breadcrumbs = [
  { name: "Accueil", href: "/" },
  { name: "Politique de confidentialité", href: "/politique-confidentialite" },
];

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-gray-700 to-gray-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-4">
          <h1 className="text-4xl font-display font-bold">Politique de confidentialité</h1>
        </div>
      </section>

      <Section>
        <div className="max-w-4xl mx-auto prose prose-gray">
          <p className="text-sm text-gray-500 mb-8">Dernière mise à jour : Février 2025</p>

          <h2>1. Introduction</h2>
          <p>
            Chez ExplorePortugalVan, nous accordons une grande importance à la protection de vos données
            personnelles. Cette politique de confidentialité vous informe sur la façon dont nous collectons,
            utilisons et protégeons vos informations lorsque vous visitez notre site.
          </p>

          <h2>2. Responsable du traitement</h2>
          <p>
            Le responsable du traitement des données collectées sur ce site est :
          </p>
          <ul>
            <li><strong>Nom :</strong> Esteban Laudry</li>
            <li><strong>Email :</strong> contact@exploreportugalvan.com</li>
          </ul>

          <h2>3. Données collectées</h2>
          <h3>3.1 Données de navigation</h3>
          <p>
            Lors de votre visite sur notre site, nous pouvons collecter automatiquement certaines
            informations techniques :
          </p>
          <ul>
            <li>Adresse IP (anonymisée)</li>
            <li>Type de navigateur et système d&apos;exploitation</li>
            <li>Pages visitées et temps passé sur le site</li>
            <li>Source de trafic (moteur de recherche, lien direct, etc.)</li>
          </ul>

          <h3>3.2 Cookies</h3>
          <p>
            Notre site utilise des cookies pour améliorer votre expérience de navigation et analyser
            le trafic. Vous pouvez gérer vos préférences de cookies via la bannière affichée lors de
            votre première visite.
          </p>
          <p>Types de cookies utilisés :</p>
          <ul>
            <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
            <li><strong>Cookies analytiques :</strong> pour comprendre comment les visiteurs utilisent le site (Google Analytics)</li>
            <li><strong>Cookies de préférences :</strong> pour mémoriser vos choix (consentement cookies)</li>
          </ul>

          <h2>4. Utilisation des données</h2>
          <p>
            Nous utilisons les données collectées pour :
          </p>
          <ul>
            <li>Améliorer le contenu et l&apos;ergonomie de notre site</li>
            <li>Analyser le trafic et comprendre les besoins de nos visiteurs</li>
            <li>Assurer la sécurité et le bon fonctionnement du site</li>
            <li>Mesurer l&apos;efficacité de nos contenus</li>
          </ul>

          <h2>5. Partage des données</h2>
          <p>
            Nous ne vendons ni ne louons vos données personnelles à des tiers. Les données peuvent
            être partagées uniquement avec :
          </p>
          <ul>
            <li><strong>Notre hébergeur (Vercel)</strong> pour le fonctionnement technique du site</li>
            <li><strong>Google Analytics</strong> pour l&apos;analyse du trafic (si vous acceptez les cookies analytiques)</li>
          </ul>

          <h2>6. Liens d&apos;affiliation</h2>
          <p>
            Notre site contient des liens vers des sites partenaires (programmes d&apos;affiliation).
            Lorsque vous cliquez sur ces liens, vous êtes redirigé vers des sites tiers qui ont
            leurs propres politiques de confidentialité. Nous vous encourageons à les consulter.
          </p>

          <h2>7. Conservation des données</h2>
          <p>
            Les données de navigation sont conservées pendant une durée maximale de 26 mois
            (conformément aux recommandations de la CNIL pour Google Analytics).
          </p>

          <h2>8. Vos droits</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez
            des droits suivants :
          </p>
          <ul>
            <li><strong>Droit d&apos;accès :</strong> obtenir une copie de vos données</li>
            <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
            <li><strong>Droit à l&apos;effacement :</strong> demander la suppression de vos données</li>
            <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos données</li>
            <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous à : contact@exploreportugalvan.com
          </p>

          <h2>9. Sécurité</h2>
          <p>
            Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données
            contre tout accès, modification, divulgation ou destruction non autorisés. Le site
            utilise le protocole HTTPS pour sécuriser les échanges de données.
          </p>

          <h2>10. Modifications</h2>
          <p>
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
            Les modifications entreront en vigueur dès leur publication sur cette page. Nous vous
            encourageons à consulter régulièrement cette page.
          </p>

          <h2>11. Contact</h2>
          <p>
            Pour toute question concernant cette politique de confidentialité ou vos données
            personnelles, vous pouvez nous contacter à : contact@exploreportugalvan.com
          </p>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-4">
            <Link href="/" className="text-ocean-600 hover:underline">← Retour à l&apos;accueil</Link>
            <Link href="/mentions-legales" className="text-ocean-600 hover:underline">Mentions légales →</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
