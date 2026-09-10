import { createClient } from '@sanity/client';
import { MOCK_PRODUCTS } from './mock-products';

import { autoTranslateTitle, autoTranslateFinish, autoTranslateDescription, autoTranslateClosure } from './i18nAuto';

// ──────────────────────────────────────────────────────────────────────────────
// Sanity client — headless, for storefront queries only.
// Sanity Studio runs independently at https://ramia-studio.sanity.studio
// ──────────────────────────────────────────────────────────────────────────────

const PROJECT_ID  = import.meta.env.PUBLIC_SANITY_PROJECT_ID  || 'xfzft9lx';
const DATASET     = import.meta.env.PUBLIC_SANITY_DATASET     || 'production';
const API_VERSION = import.meta.env.PUBLIC_SANITY_API_VERSION || '2024-01-01';

const isRealProject = PROJECT_ID && PROJECT_ID !== 'placeholder-id';

export const sanityClient = createClient({
  projectId:  PROJECT_ID,
  dataset:    DATASET,
  apiVersion: API_VERSION,
  useCdn:     false,
});

const PRODUCT_QUERY = `
  *[_type == "product" && defined(slug.current)] {
    _id,
    title,
    "slug": slug.current,
    "imageStatic": images[0].asset->url,
    "imageAlt": images[0].altText,
    price,
    category,
    weightGrams,
    inStock,
    finish,
    claspOptions,
    description,
    dimensions
  }
`;

export async function getProducts() {
  if (!isRealProject) {
    console.info('[Sanity] projectId not configured — using mock catalogue.');
    return MOCK_PRODUCTS;
  }

  try {
    const results = await sanityClient.fetch(PRODUCT_QUERY);

    if (!results || results.length === 0) {
      console.info('[Sanity] Dataset empty — using mock catalogue.');
      return MOCK_PRODUCTS;
    }

    return results.map((p: any) => ({
      id:    p._id,
      slug:  p.slug,
      title: {
        es: p.title,
        en: autoTranslateTitle(p.title),
      },
      price:        p.price,
      weightGrams:  p.weightGrams ?? 2.6,
      weightComparison: {
        es: 'Súper ligero',
        en: 'Super light'
      },
      closureType: {
        es: p.claspOptions?.[0] ?? 'Acero hipoalergénico',
        en: autoTranslateClosure(p.claspOptions?.[0] ?? 'Acero hipoalergénico')
      },
      closureOptions: p.claspOptions?.some((c: string) => c.toLowerCase().includes('clip')) 
        ? ['titanio', 'clip'] 
        : ['titanio'],
      description: {
        es: p.description ?? '',
        en: autoTranslateDescription(p.description ?? '', p.title),
      },
      story: {
        es: p.finish ? `Acabado: ${p.finish}` : 'Diseño contemporáneo en metacrilato',
        en: p.finish ? `Finish: ${autoTranslateFinish(p.finish)}` : 'Contemporary acrylic design',
      },
      category: p.category ?? 'pendientes',
      colorPalette: [],
      imageStatic: p.imageStatic 
        ? `${p.imageStatic}?auto=format&w=1000&q=75` 
        : 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=900&auto=format&fit=crop',
      imageAlt: p.imageAlt ?? '',
      videoHover: '',
      earScaleImage: '',
      dimensions: p.dimensions ?? '',
      inStock:      p.inStock !== false,
    }));
  } catch (err) {
    console.error('[Sanity] Fetch error, falling back to mock catalogue:', err);
    return MOCK_PRODUCTS;
  }
}