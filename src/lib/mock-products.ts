import type { Product } from '../types/product';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod-001',
    title: {
      es: 'Pendientes Ámbar Translúcido',
      en: 'Translucent Amber Earrings'
    },
    slug: 'pendientes-ambar-translucido',
    price: 32.00,
    weightGrams: 2.6,
    weightComparison: {
      es: 'Pesa menos que una moneda de 10 céntimos',
      en: 'Weighs less than a dime'
    },
    closureType: {
      es: 'Acero inoxidable quirúrgico hipoalergénico',
      en: 'Hypoallergenic surgical stainless steel'
    },
    closureOptions: ['titanio', 'clip'],
    description: {
      es: 'Aros contemporáneos de metacrilato grueso con acabado ámbar cálido. Juegan con la luz del atardecer gracias a su material semi-translúcido.',
      en: 'Contemporary thick acrylic hoops with a warm amber finish. They play with the evening light thanks to their semi-translucent material.'
    },
    story: {
      es: 'Inspirados en la arquitectura cálida del Mediterráneo. Una pieza rotunda, de líneas orgánicas, que te puedes poner a las 8 de la mañana y quitar a las 10 de la noche sin darte cuenta.',
      en: 'Inspired by warm Mediterranean architecture. A bold piece with organic lines that you can put on at 8 am and take off at 10 pm without even noticing.'
    },
    category: 'earrings',
    colorPalette: ['#b45f06', '#e69138'],
    imageStatic: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=900&auto=format&fit=crop',
    videoHover: '',
    earScaleImage: '',
    dimensions: '4.5 cm × 3.0 cm',
    inStock: true,
  },
  {
    id: 'prod-002',
    title: {
      es: 'Geometría Efecto Espejo',
      en: 'Mirror Effect Geometry'
    },
    slug: 'geometria-efecto-espejo',
    price: 28.00,
    weightGrams: 3.2,
    weightComparison: {
      es: 'Pesa menos que una llave estándar',
      en: 'Weighs less than a standard key'
    },
    closureType: {
      es: 'Acero inoxidable quirúrgico antialérgico',
      en: 'Anti-allergic surgical stainless steel'
    },
    closureOptions: ['titanio'],
    description: {
      es: 'Líneas puras y arquitectónicas grabadas en metacrilato efecto espejo plata. Reflejan la luz en cada movimiento, aportando un brillo futurista y minimalista.',
      en: 'Pure architectural lines engraved in silver mirror effect acrylic. They reflect light with every movement, bringing a futuristic and minimalist glow.'
    },
    story: {
      es: 'Para amantes de la estética Bauhaus y el diseño estructural. Cero excesos, máximo impacto. La ligereza estructural los convierte en los favoritos del estudio.',
      en: 'For lovers of Bauhaus aesthetics and structural design. Zero excess, maximum impact. The structural lightness makes them studio favorites.'
    },
    category: 'earrings',
    colorPalette: ['#C0C0C0', '#FFFFFF'],
    imageStatic: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=900&auto=format&fit=crop',
    videoHover: '',
    earScaleImage: '',
    dimensions: '5.0 cm longitud',
    inStock: true,
  },
  {
    id: 'prod-003',
    title: {
      es: 'Collar Óvalo Pop',
      en: 'Pop Oval Necklace'
    },
    slug: 'collar-ovalo-pop',
    price: 35.00,
    weightGrams: 4.1,
    weightComparison: {
      es: 'Pesa menos que un sobre de azúcar',
      en: 'Weighs less than a sugar packet'
    },
    closureType: {
      es: 'Cadena de acero inoxidable quirúrgico regulable',
      en: 'Adjustable surgical stainless steel chain'
    },
    closureOptions: ['titanio'],
    description: {
      es: 'Maxi colgante ovalado en metacrilato opaco color mostaza de estética retro 70s. Tacto ultra suave y acabado mate aterciopelado.',
      en: 'Maxi oval pendant in opaque mustard acrylic with a 70s retro aesthetic. Ultra soft touch and velvety matte finish.'
    },
    story: {
      es: 'Un homenaje a la época más pop. Queríamos diseñar un amuleto alegre que aportara un toque audaz y colorido a tus looks básicos monocromáticos.',
      en: 'A tribute to the most pop era. We wanted to design a cheerful amulet that would add a bold and colorful touch to your basic monochromatic looks.'
    },
    category: 'necklaces',
    colorPalette: ['#e6b800', '#000000'],
    imageStatic: 'https://images.unsplash.com/photo-1515562141207-7a8f7bfc77ba?q=80&w=900&auto=format&fit=crop',
    videoHover: '',
    earScaleImage: '',
    dimensions: 'Colgante: 4.5 cm / Cadena: 40-45 cm',
    inStock: true,
  },
  {
    id: 'prod-004',
    title: {
      es: 'Aros Carei Minimal',
      en: 'Minimal Tortoiseshell Hoops'
    },
    slug: 'aros-carei-minimal',
    price: 24.00,
    weightGrams: 2.8,
    weightComparison: {
      es: 'Súper ligeros y cómodos',
      en: 'Super light and comfortable'
    },
    closureType: {
      es: 'Acero inoxidable quirúrgico hipoalergénico',
      en: 'Hypoallergenic surgical stainless steel'
    },
    closureOptions: ['titanio', 'clip'],
    description: {
      es: 'Aros clásicos reinterpretados en metacrilato con patrón de concha de carey ámbar y negro brillante. Una pieza versátil y atemporal.',
      en: 'Classic hoops reinterpreted in acrylic with an amber and gloss black tortoiseshell pattern. A versatile and timeless piece.'
    },
    story: {
      es: 'Nos encanta coger un estampado clásico y llevarlo al formato del metacrilato extraligero. Es el pendiente salvavidas que nunca falla.',
      en: 'We love taking a classic print and bringing it to the extra-light acrylic format. It is the lifesaver earring that never fails.'
    },
    category: 'earrings',
    colorPalette: ['#4b2e11', '#000000'],
    imageStatic: 'https://images.unsplash.com/photo-1589697554907-f1e18d098592?q=80&w=900&auto=format&fit=crop',
    videoHover: '',
    earScaleImage: '',
    dimensions: '3.5 cm diámetro',
    inStock: true,
  },
  {
    id: 'prod-005',
    title: {
      es: 'Colgante Hielo Iridiscente',
      en: 'Iridescent Ice Pendant'
    },
    slug: 'colgante-hielo-iridiscente',
    price: 15.00,
    weightGrams: 1.2,
    weightComparison: {
      es: 'Imperceptible al llevarlo',
      en: 'Imperceptible when worn'
    },
    closureType: {
      es: 'Cadena fina de acero quirúrgico',
      en: 'Surgical steel fine chain'
    },
    closureOptions: ['titanio'],
    description: {
      es: 'Pieza de metacrilato dicroico que cambia de color del azul hielo al rosa magenta según le dé la luz. Pura magia óptica y ligereza extrema.',
      en: 'Dichroic acrylic piece that changes color from ice blue to magenta pink depending on the light. Pure optical magic and extreme lightness.'
    },
    story: {
      es: 'Diseñados para reflejar la luz como un prisma. La magia del metacrilato dicroico no se puede explicar, hay que vivirla bajo los rayos del sol.',
      en: 'Designed to reflect light like a prism. The magic of dichroic acrylic cannot be explained, it must be experienced under the sun\'s rays.'
    },
    category: 'necklaces',
    colorPalette: ['#transparent', '#ff00ff'],
    imageStatic: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=900&auto=format&fit=crop',
    videoHover: '',
    earScaleImage: '',
    dimensions: '2.5 cm × 1.0 cm',
    inStock: true,
  },
  {
    id: 'prod-006',
    title: {
      es: 'Abstract Block Color',
      en: 'Abstract Color Block'
    },
    slug: 'abstract-block-color',
    price: 30.00,
    weightGrams: 3.5,
    weightComparison: {
      es: 'Sorprendentemente ligero para su volumen',
      en: 'Surprisingly light for its volume'
    },
    closureType: {
      es: 'Acero inoxidable quirúrgico con tope ancho',
      en: 'Surgical stainless steel with wide stopper'
    },
    closureOptions: ['titanio', 'clip'],
    description: {
      es: 'Bloques geométricos bicolores en metacrilato opaco azul klein y blanco. Dos piezas articuladas que oscilan a tu ritmo.',
      en: 'Two-tone geometric blocks in opaque klein blue and white acrylic. Two articulated pieces that swing to your rhythm.'
    },
    story: {
      es: 'Diseño asimétrico y rotundo. Un homenaje a las galerías de arte contemporáneo y a las paletas de color más saturadas y audaces.',
      en: 'Asymmetric and bold design. A tribute to contemporary art galleries and the most saturated and bold color palettes.'
    },
    category: 'earrings',
    colorPalette: ['#0000ff', '#ffffff'],
    imageStatic: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=900&auto=format&fit=crop',
    videoHover: '',
    earScaleImage: '',
    dimensions: '7.0 cm × 3.0 cm',
    inStock: false,
  }
];
