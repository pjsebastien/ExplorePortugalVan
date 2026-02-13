import type { Metadata } from "next";
import { Header, Footer, CookieBanner, FloatingCTA } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://exploreportugalvan.com'),
  title: {
    default: "Location van Portugal | Guide complet & meilleurs prix 2025",
    template: "%s | ExplorePortugalVan",
  },
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
  description: "Louez un van aménagé au Portugal. Guide complet : itinéraires, prix, conseils pratiques et meilleures offres de location de van pour votre road trip.",
  keywords: ["location van Portugal", "van aménagé Portugal", "road trip Portugal", "louer van Portugal", "vanlife Portugal"],
  authors: [{ name: "ExplorePortugalVan" }],
  creator: "ExplorePortugalVan",
  publisher: "ExplorePortugalVan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://exploreportugalvan.com",
    siteName: "ExplorePortugalVan",
    title: "Location Van Portugal | Guide Complet & Meilleurs Prix 2025",
    description: "Louez un van aménagé au Portugal. Guide complet : itinéraires, prix, conseils pratiques et meilleures offres de location de van pour votre road trip.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Location van Portugal - Road trip sur la côte atlantique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Location Van Portugal | Guide Complet & Meilleurs Prix 2025",
    description: "Louez un van aménagé au Portugal. Guide complet : itinéraires, prix, conseils pratiques et meilleures offres de location.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://exploreportugalvan.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Header />
        <main className="pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
        <CookieBanner />
        <FloatingCTA />
      </body>
    </html>
  );
}
