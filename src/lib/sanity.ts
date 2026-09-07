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
    material,
    closureTypes,
    acrylicFinish,
    description_es,
    description_en,
    care_instructions,
    dimensions { heightCm, widthCm }
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
      // ── identity ────────────────────────────────────────────────────────────
      id:    p._id,
      slug:  p.slug,
      // ── bilingual titles ────────────────────────────────────────────────────
      title: {
        es: typeof p.title === 'object' ? p.title.es : p.title,
        en: typeof p.title === 'object' ? p.title.en : p.title,
      },
      // ── pricing & weight ────────────────────────────────────────────────────
      price:        p.price,
      weightGrams:  p.weightGrams,
      inStock:      p.inStock ?? true,
      // ── media ───────────────────────────────────────────────────────────────
      imageStatic:  p.imageStatic ?? '',
      // ── materials & closures ────────────────────────────────────────────────
      material:     p.material ?? 'Acero Quirúrgico 316L (Plateado)',
      closureOptions: p.closureTypes ?? ['Aro Estándar 316L', 'Clip Antialérgico (Sin agujero)'],
      acrylicFinish:  p.acrylicFinish ?? ['Brillo'],
      // ── descriptions ────────────────────────────────────────────────────────
      description: {
        es: p.description_es ?? 'Pieza artesanal de metacrilato.',
        en: p.description_en ?? 'Handcrafted acrylic piece.',
      },
      care_instructions: p.care_instructions ?? '',
      // ── dimensions ──────────────────────────────────────────────────────────
      dimensions: p.dimensions
        ? `${p.dimensions.heightCm} × ${p.dimensions.widthCm} cm`
        : undefined,
      // ── catalogue meta ──────────────────────────────────────────────────────
      category: 'earrings',
    }));
  } catch (err) {
    console.error('[Sanity] Fetch error, falling back to mock catalogue:', err);
    return MOCK_PRODUCTS;
  }
}
