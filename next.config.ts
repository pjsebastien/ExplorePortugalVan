import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Génération statique (SSG) uniquement
  output: 'export',

  // Optimisation des images pour l'export statique
  images: {
    unoptimized: true,
  },

  // Trailing slashes pour une meilleure compatibilité SEO
  trailingSlash: true,

  // Compression des pages
  compress: true,
};

export default nextConfig;
