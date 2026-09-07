import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import sanity from '@sanity/astro';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  integrations: [
    tailwind(),
    sanity({
      projectId: env.PUBLIC_SANITY_PROJECT_ID || 'placeholder_id',
      dataset: env.PUBLIC_SANITY_DATASET || 'production',
      useCdn: false,
      studioBasePath: '/studio',
    }),
  ],
  image: {
    domains: ['cdn.sanity.io'],
  },
  prefetch: {
    defaultStrategy: 'hover'
  },
  vite: {
    build: {
      rollupOptions: {
        external: ['styled-components']
      }
    }
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
