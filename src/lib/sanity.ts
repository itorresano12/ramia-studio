import { createClient } from '@sanity/client';
import { MOCK_PRODUCTS } from './mock-products';

// ──────────────────────────────────────────────────────────────────────────────
// Sanity client — headless, for storefront queries only.
// Sanity Studio runs independently at https://rami-studio.sanity.studio
// ──────────────────────────────────────────────────────────────────────────────

const PROJECT_ID  = import.meta.env.PUBLIC_SANITY_PROJECT_ID  || 'xfzft9lx';
const DATASET     = import.meta.env.PUBLIC_SANITY_DATASET     || 'production';
const API_VERSION = import.meta.env.PUBLIC_SANITY_API_VERSION || '2024-01-01';

const isRealProject = PROJECT_ID && PROJECT_ID !== 'placeholder-id';

export const sanityClient = createClient({
  projectId:  PROJECT_ID,
  dataset:    DATASET,
  apiVersion: API_VERSION,
  useCdn:     true, // fast reads for public storefront data
});

// ──────────────────────────────────────────────────────────────────────────────
// Storefront query — maps Sanity documents → app Product shape
// Falls back to mock catalogue when dataset is empty or unreachable.
// ──────────────────────────────────────────────────────────────────────────────

const PRODUCT_QUERY = `
  *[_type == "product"] | order(_createdAt asc) {
    _id,
    title,
    "slug": slug.current,
    "imageStatic": images[0].asset->url,
    price,
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
        en: p.title, // Default to single title for both langs
      },
      price:        p.price,
      weightGrams:  p.weightGrams ?? 2.6,
      weightComparison: {
        es: 'Súper ligero',
        en: 'Super light'
      },
      closureType: {
        es: p.claspOptions?.[0] ?? 'Acero hipoalergénico',
        en: p.claspOptions?.[0] ?? 'Hypoallergenic steel'
      },
      closureOptions: p.claspOptions?.some((c: string) => c.toLowerCase().includes('clip')) 
        ? ['titanio', 'clip'] 
        : ['titanio'],
      description: {
        es: p.description ?? '',
        en: p.description ?? '', // Adapt single description
      },
      story: {
        es: p.finish ? `Acabado: ${p.finish}` : 'Diseño contemporáneo en metacrilato',
        en: p.finish ? `Finish: ${p.finish}` : 'Contemporary acrylic design',
      },
      category: 'earrings',
      colorPalette: [],
      imageStatic:  p.imageStatic ?? 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=900&auto=format&fit=crop',
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
