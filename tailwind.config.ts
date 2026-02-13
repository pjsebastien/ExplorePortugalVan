import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bleu océan
        ocean: {
          50: '#e6f3f7',
          100: '#b3dce6',
          200: '#80c5d5',
          300: '#4daec4',
          400: '#2699b3',
          500: '#0077a2',
          600: '#006691',
          700: '#005580',
          800: '#00446f',
          900: '#00334d',
        },
        // Sable doré
        sand: {
          50: '#fefbf3',
          100: '#fdf3d7',
          200: '#fce8b2',
          300: '#f9d77e',
          400: '#f5c34a',
          500: '#e6a817',
          600: '#c98f0a',
          700: '#a67608',
          800: '#845d06',
          900: '#624504',
        },
        // Vert naturel
        nature: {
          50: '#f0f7f0',
          100: '#d3e8d3',
          200: '#a7d1a7',
          300: '#7aba7a',
          400: '#4da34d',
          500: '#2d8c2d',
          600: '#257525',
          700: '#1d5e1d',
          800: '#154715',
          900: '#0d300d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
