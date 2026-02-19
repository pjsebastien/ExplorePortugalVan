import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Header, Footer, CookieBanner, FloatingCTA } from "@/components";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.exploreportugalvan.com'),
  title: {
    default: "Location van Portugal | Comparez et réservez votre van aménagé",
    template: "%s | ExplorePortugalVan",
  },
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
  description: "Louez un van aménagé au Portugal et partez à l'aventure. Comparatif des loueurs, tarifs, itinéraires et astuces pour votre road trip sur la côte atlantique.",
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
    url: "https://www.exploreportugalvan.com/",
    siteName: "ExplorePortugalVan",
    title: "Location van Portugal | Comparez et réservez votre van aménagé",
    description: "Louez un van aménagé au Portugal et partez à l'aventure. Comparatif des loueurs, tarifs et astuces pour votre road trip.",
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
    title: "Location van Portugal | Comparez et réservez votre van aménagé",
    description: "Louez un van aménagé au Portugal et partez à l'aventure. Comparatif des loueurs, tarifs et astuces pour votre road trip.",
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
    canonical: "https://www.exploreportugalvan.com/",
    languages: {
      "fr": "https://www.exploreportugalvan.com/",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased`}>
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
