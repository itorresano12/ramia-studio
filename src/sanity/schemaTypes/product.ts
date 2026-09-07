import { defineField, defineType } from 'sanity';

export const product = defineType({
  name: 'product',
  title: 'Producto (Ramia)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nombre de la joya',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'Ej: Pendientes Monstera',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Precio (EUR)',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(0),
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Pendientes', value: 'pendientes' },
          { title: 'Colgantes', value: 'colgantes' },
          { title: 'Charms', value: 'charms' },
          { title: 'Packs', value: 'packs' }
        ],
      },
      validation: (Rule: any) => Rule.required(),
      initialValue: 'pendientes',
    }),
    defineField({
      name: 'images',
      title: 'Imágenes',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Galería de fotos (principal y detalles).',
      validation: (Rule: any) => Rule.min(1),
    }),
    defineField({
      name: 'weightGrams',
      title: 'Peso unitario (Gramos)',
      type: 'number',
      description: 'Peso para el comparador de ligereza (ej: 2.6)',
      initialValue: 2.6,
      validation: (Rule: any) => Rule.required().positive(),
    }),
    defineField({
      name: 'finish',
      title: 'Acabado del metacrilato',
      type: 'string',
      description: 'Ej: Espejo plata, Ámbar translúcido, Glitter',
    }),
    defineField({
      name: 'claspOptions',
      title: 'Opciones de cierre',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          'Aro de acero quirúrgico',
          'Plata de ley 925',
          'Clip sin perforación'
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      description: 'Descripción poética y de diseño de la pieza.',
      options: {
        // @ts-expect-error - Sanity Assist options
        assist: {
          instruction: "Analiza la imagen de la joya adjunta en el campo 'images'. Redacta una descripción poética, sofisticada y concisa (3 a 4 líneas) resaltando los acabados de metacrilato, el juego de luz y la ligereza extrema para una marca de joyería de autor europea."
        }
      }
    }),
    defineField({
      name: 'dimensions',
      title: 'Dimensiones',
      type: 'string',
      description: 'Ej: 5.0 cm x 3.0 cm',
    }),
    defineField({
      name: 'inStock',
      title: 'Disponibilidad',
      type: 'boolean',
      description: 'Control de disponibilidad (En stock / Agotado)',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0',
      subtitle: 'price',
    },
    prepare(selection: any) {
      const { title, media, subtitle } = selection;
      return {
        title,
        media,
        subtitle: `${subtitle} €`,
      };
    },
  },
});
