import { createClient } from '@sanity/client';
import { MOCK_PRODUCTS } from './mock-products';

// Check if variables are properly configured
const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET;
const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION || '2024-01-01';

const isConfigured = projectId && projectId !== 'placeholder-id';

export const sanityClient = isConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false, // true in production if data is public and mostly static
    })
  : null;

/**
 * Fallback inteligente: si Sanity no está configurado, usamos los mock data.
 * Si está configurado, obtenemos los datos reales.
 */
export async function getProducts() {
  if (!isConfigured || !sanityClient) {
    console.log('Sanity no configurado, usando datos simulados.');
    return MOCK_PRODUCTS;
  }

  try {
    const query = `*[_type == "product"] {
      _id,
      title,
      "slug": slug.current,
      "image": images[0].asset->url,
      price,
      weightGrams,
      material,
      closureTypes,
      acrylicFinish,
      description_es,
      description_en,
      care_instructions,
      dimensions
    }`;
    const sanityProducts = await sanityClient.fetch(query);
    
    if (!sanityProducts || sanityProducts.length === 0) {
      console.log('Sanity configurado pero sin productos. Usando datos simulados.');
      return MOCK_PRODUCTS;
    }

    // Map to match the app's Product interface structure for compatibility
    return sanityProducts.map((p: any) => ({
      id: p._id,
      slug: p.slug,
      titleEs: p.title, // In a full multilingual setup, we'd have localized fields or document translations
      titleEn: p.title,
      price: p.price,
      weightGrams: p.weightGrams,
      category: 'all',
      image: p.image,
      highlight: false,
      material: p.material || 'Acero Inoxidable',
      closureTypes: p.closureTypes || ['Aro Estándar 316L', 'Clip Antialérgico'],
      acrylicFinish: p.acrylicFinish || ['Brillo'],
      descriptionEs: p.description_es || 'Pieza artesanal de metacrilato.',
      descriptionEn: p.description_en || 'Handcrafted acrylic piece.',
      dimensions: p.dimensions ? `${p.dimensions.heightCm}x${p.dimensions.widthCm}cm` : undefined,
      care_instructions: p.care_instructions,
    }));
  } catch (error) {
    console.error('Error fetching Sanity products:', error);
    return MOCK_PRODUCTS; // fallback on error
  }
}
