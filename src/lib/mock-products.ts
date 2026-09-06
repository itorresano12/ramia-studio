import type { Product } from '../types/product';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod-001',
    title: {
      es: 'Geometría del Alma',
      en: 'Geometry of the Soul'
    },
    slug: 'geometria-del-alma',
    price: 65.00,
    weightGrams: 2.8,
    weightComparison: {
      es: 'Pesa menos que una moneda de 10 céntimos',
      en: 'Weighs less than a dime'
    },
    closureType: {
      es: 'Titanio hipoalergénico de grado médico',
      en: 'Medical grade hypoallergenic titanium'
    },
    closureOptions: ['titanio', 'clip'],
    description: {
      es: 'Pendientes asimétricos de metacrilato en tonos translúcidos que juegan con la luz para crear reflejos únicos. Su diseño ultraligero permite lucir volumen sin comprometer la comodidad.',
      en: 'Asymmetric acrylic earrings in translucent tones that play with light to create unique reflections. Their ultralight design allows you to wear volume without compromising comfort.'
    },
    story: {
      es: 'Inspirados en la arquitectura brutalista y suavizados por la fluidez de la luz natural. Geometría del Alma nace para demostrar que la presencia y la ligereza pueden coexistir en una misma pieza.',
      en: 'Inspired by brutalist architecture and softened by the fluidity of natural light. Geometry of the Soul was born to prove that presence and lightness can coexist in the same piece.'
    },
    category: 'maxi',
    colorPalette: ['#e8e0f0', '#f0e8e0'],
    imageStatic: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=900&auto=format&fit=crop',
    videoHover: 'https://cdn.sanity.io/files/placeholder/production/geometria-alma-hover.webm',
    earScaleImage: '/images/products/geometria-del-alma-scale.webp',
    dimensions: '6.0 cm × 2.5 cm',
    inStock: true,
  },
  {
    id: 'prod-002',
    title: {
      es: 'Ecos de Obsidiana',
      en: 'Echoes of Obsidian'
    },
    slug: 'ecos-de-obsidiana',
    price: 85.00,
    weightGrams: 3.5,
    weightComparison: {
      es: 'Pesa menos que una llave estándar',
      en: 'Weighs less than a standard key'
    },
    closureType: {
      es: 'Acero quirúrgico antialérgico 316L',
      en: 'Anti-allergic 316L surgical steel'
    },
    closureOptions: ['titanio'],
    description: {
      es: 'Aros escultóricos en metacrilato negro absoluto con acabado pulido a mano. Un clásico reinventado mediante la manipulación térmica del material.',
      en: 'Sculptural hoops in absolute black acrylic with a hand-polished finish. A classic reinvented through thermal manipulation of the material.'
    },
    story: {
      es: 'La colección Ecos surge del silencio y la oscuridad elegante. Cada curva es doblada artesanalmente a 160°, haciendo que ninguna pieza sea exactamente igual a la anterior.',
      en: 'The Echoes collection arises from silence and elegant darkness. Each curve is hand-bent at 160°, making no piece exactly like the previous one.'
    },
    category: 'aros',
    colorPalette: ['#1a1a2e', '#16213e'],
    imageStatic: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?q=80&w=900&auto=format&fit=crop',
    videoHover: 'https://cdn.sanity.io/files/placeholder/production/ecos-obsidiana-hover.webm',
    earScaleImage: '/images/products/ecos-de-obsidiana-scale.webp',
    dimensions: '5.0 cm diámetro',
    inStock: true,
  },
  {
    id: 'prod-003',
    title: {
      es: 'Alba en Tensión',
      en: 'Dawn in Tension'
    },
    slug: 'alba-en-tension',
    price: 70.00,
    weightGrams: 2.4,
    weightComparison: {
      es: 'Pesa menos que una hoja de papel',
      en: 'Weighs less than a sheet of paper'
    },
    closureType: {
      es: 'Plata de ley 925 bañada en rodio',
      en: 'Rhodium-plated 925 sterling silver'
    },
    closureOptions: ['titanio', 'clip'],
    description: {
      es: 'Estructura minimalista de metacrilato iridiscente sostenida por finos hilos de metal. Cambia de color sutilmente según el ángulo de visión.',
      en: 'Minimalist structure of iridescent acrylic supported by fine metal threads. It subtly changes color depending on the viewing angle.'
    },
    story: {
      es: 'Diseñados para capturar la esencia del primer rayo de sol. Alba en Tensión es un ejercicio de minimalismo estructural donde lo invisible es tan importante como lo visible.',
      en: 'Designed to capture the essence of the first ray of sun. Dawn in Tension is an exercise in structural minimalism where the invisible is as important as the visible.'
    },
    category: 'esenciales',
    colorPalette: ['#fff1eb', '#f9f0ff'],
    imageStatic: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=900&auto=format&fit=crop',
    videoHover: 'https://cdn.sanity.io/files/placeholder/production/alba-tension-hover.webm',
    earScaleImage: '/images/products/alba-en-tension-scale.webp',
    dimensions: '4.5 cm × 1.8 cm',
    inStock: true,
  },
  {
    id: 'prod-004',
    title: {
      es: 'Caudal de Luz',
      en: 'Flow of Light'
    },
    slug: 'caudal-de-luz',
    price: 95.00,
    weightGrams: 3.9,
    weightComparison: {
      es: 'Pesa la mitad que un pendiente tradicional de su tamaño',
      en: 'Weighs half as much as a traditional earring of its size'
    },
    closureType: {
      es: 'Titanio hipoalergénico de grado médico',
      en: 'Medical grade hypoallergenic titanium'
    },
    closureOptions: ['titanio', 'clip'],
    description: {
      es: 'Pieza statement de gran formato con formas orgánicas fluidas. Sus ondas capturan la luz y crean destellos deslumbrantes perfectos para eventos de noche.',
      en: 'Large format statement piece with fluid organic shapes. Its waves capture light and create dazzling sparkles perfect for evening events.'
    },
    story: {
      es: 'Inspirado en el movimiento del agua al reflejar la luna. Una pieza concebida para ser la protagonista absoluta de cualquier estilismo de invitada.',
      en: 'Inspired by the movement of water reflecting the moon. A piece conceived to be the absolute protagonist of any guest styling.'
    },
    category: 'invitada',
    colorPalette: ['#f0e8e0', '#d8c8b8'],
    imageStatic: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=900&auto=format&fit=crop',
    videoHover: 'https://cdn.sanity.io/files/placeholder/production/caudal-luz-hover.webm',
    earScaleImage: '/images/products/caudal-de-luz-scale.webp',
    dimensions: '8.0 cm × 4.0 cm',
    inStock: true,
  },
  {
    id: 'prod-005',
    title: {
      es: 'Esencia Fragmentada',
      en: 'Fragmented Essence'
    },
    slug: 'esencia-fragmentada',
    price: 55.00,
    weightGrams: 2.2,
    weightComparison: {
      es: 'Imperceptible al llevarlo',
      en: 'Imperceptible when worn'
    },
    closureType: {
      es: 'Titanio hipoalergénico',
      en: 'Hypoallergenic titanium'
    },
    closureOptions: ['titanio'],
    description: {
      es: 'Pequeñas piezas geométricas facetadas a mano que actúan como prismas. El fondo perfecto para el día a día sin renunciar al diseño.',
      en: 'Small hand-faceted geometric pieces that act as prisms. The perfect background for day-to-day without sacrificing design.'
    },
    story: {
      es: 'La belleza de lo pequeño. Hemos tomado los recortes de nuestras piezas maxi y los hemos pulido hasta convertirlos en joyas esenciales, minimizando el residuo a cero.',
      en: 'The beauty of the small. We have taken the offcuts of our maxi pieces and polished them into essential jewels, minimizing waste to zero.'
    },
    category: 'esenciales',
    colorPalette: ['#transparent', '#ffffff'],
    imageStatic: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=900&auto=format&fit=crop',
    videoHover: 'https://cdn.sanity.io/files/placeholder/production/esencia-fragmentada-hover.webm',
    earScaleImage: '/images/products/esencia-fragmentada-scale.webp',
    dimensions: '1.5 cm × 1.5 cm',
    inStock: true,
  },
  {
    id: 'prod-006',
    title: {
      es: 'Eclipse Escultural',
      en: 'Sculptural Eclipse'
    },
    slug: 'eclipse-escultural',
    price: 110.00,
    weightGrams: 3.8,
    weightComparison: {
      es: 'Sorprendentemente ligero para su volumen',
      en: 'Surprisingly light for its volume'
    },
    closureType: {
      es: 'Titanio hipoalergénico con tope ancho de seguridad',
      en: 'Hypoallergenic titanium with wide safety stopper'
    },
    closureOptions: ['titanio', 'clip'],
    description: {
      es: 'Doble círculo superpuesto en metacrilato mate y brillo. Una estructura tridimensional que desafía la gravedad y aporta un dramatismo sofisticado.',
      en: 'Double overlapping circle in matte and gloss acrylic. A three-dimensional structure that defies gravity and provides sophisticated drama.'
    },
    story: {
      es: 'El contraste entre el misterio de la sombra y la claridad del brillo. Una joya pensada para las personalidades más audaces que buscan arte portable.',
      en: 'The contrast between the mystery of the shadow and the clarity of the shine. A jewel designed for the boldest personalities looking for wearable art.'
    },
    category: 'maxi',
    colorPalette: ['#000000', '#f5f5f5'],
    imageStatic: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=900&auto=format&fit=crop',
    videoHover: 'https://cdn.sanity.io/files/placeholder/production/eclipse-escultural-hover.webm',
    earScaleImage: '/images/products/eclipse-escultural-scale.webp',
    dimensions: '7.0 cm × 5.0 cm',
    inStock: false,
  }
];
