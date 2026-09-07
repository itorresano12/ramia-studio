import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  integrations: [
    tailwind(),
    react(),
  ],
  image: {
    domains: ['cdn.sanity.io', 'images.unsplash.com'],
  },
  prefetch: {
    defaultStrategy: 'hover',
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});