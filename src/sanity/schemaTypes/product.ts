import { defineField, defineType } from 'sanity';

export const product = defineType({
  name: 'product',
  title: 'Producto (Ramia)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nombre de la pieza',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'Ej: Calavera Confeti, Tucán Pop',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Imágenes',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Foto principal, detalle de fornitura/trasera, foto en escala/oreja.',
      validation: (Rule: any) => Rule.min(1),
    }),
    defineField({
      name: 'price',
      title: 'Precio (EUR)',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(0),
    }),
    defineField({
      name: 'inStock',
      title: 'En Stock',
      type: 'boolean',
      initialValue: true,
    }),
    // ESPECIFICACIONES EXACTAS
    defineField({
      name: 'weightGrams',
      title: 'Peso (Gramos)',
      type: 'number',
      description: 'Peso real del prototipo con 1 decimal (ej: 2.8)',
      validation: (Rule: any) => Rule.required().precision(1).positive(),
    }),
    defineField({
      name: 'dimensions',
      title: 'Dimensiones (cm)',
      type: 'object',
      fields: [
        { name: 'heightCm', type: 'number', title: 'Alto (cm)' },
        { name: 'widthCm', type: 'number', title: 'Ancho (cm)' },
      ],
    }),
    // SELECTORES DE TALLER
    defineField({
      name: 'material',
      title: 'Material Principal',
      type: 'string',
      options: {
        list: [
          'Acero Quirúrgico 316L (Plateado)',
          'Acero Quirúrgico 316L (Baño Dorado)',
        ],
      },
    }),
    defineField({
      name: 'closureTypes',
      title: 'Tipos de Cierre',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          'Aro Estándar 316L',
          'Clip Antialérgico (Sin agujero)',
          'Perno / Tuerca',
        ],
      },
    }),
    defineField({
      name: 'acrylicFinish',
      title: 'Acabados del Metacrilato',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          'Brillo',
          'Glitter / Purpurina',
          'Espejo',
          'Translúcido / Flúor',
          'Grabado Láser',
        ],
      },
    }),
    // TEXTOS CREATIVOS E I18N
    defineField({
      name: 'description_es',
      title: 'Historia Creativa (ES)',
      type: 'text',
      description: 'Generado con Sanity AI Assist basándose en especificaciones y ligereza.',
      options: {
        aiAssist: {
          // @ts-ignore`n          instruction: 'Tono: Boutique de autor, diseño pop contemporáneo, fresco, sin tecnicismos aburridos. Redactar descripciones enfatizando la ausencia de peso y la comodidad en la oreja a partir del peso exacto y los acabados elegidos.'
        }
      }
    }),
    defineField({
      name: 'description_en',
      title: 'Creative Story (EN)',
      type: 'text',
      description: 'Auto-translated and adapted by AI.',
      options: {
        aiAssist: {
          // @ts-ignore`n          instruction: 'Generar traducción limpia al inglés de la Historia Creativa (ES). Maintain the brand tone: contemporary pop design boutique, fresh, emphasizing the lightweight comfort based on the exact grams.'
        }
      }
    }),
    defineField({
      name: 'care_instructions',
      title: 'Instrucciones de Cuidado',
      type: 'text',
      initialValue: 'Limpiar con gamuza de microfibra. Evitar contacto directo con perfumes y alcohol para no opacar el metacrilato.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0',
      price: 'price',
    },
    prepare(selection: any) {
      const { title, media, price } = selection;
      return {
        title,
        subtitle: price ? `${price} €` : 'Sin precio',
        media,
      };
    },
  },
});
