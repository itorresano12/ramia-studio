import type { Product } from '../types/product';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod-001',
    title: {
      es: 'Tucán Tropical Glitter',
      en: 'Tropical Glitter Toucan'
    },
    slug: 'tucan-tropical-glitter',
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
      es: 'Un tucán de tres capas ensamblado a mano: pico en metacrilato espejo naranja, cuerpo en negro sólido y detalles en glitter incrustado. Tan vibrante que no necesita filtros.',
      en: 'A three-layer hand-assembled toucan: orange mirror acrylic beak, solid black body, and embedded glitter details. So vibrant it needs no filters.'
    },
    story: {
      es: 'Llevar a nuestro Tucán Tropical es una declaración de intenciones. Nació una tarde de verano jugando con recortes de purpurina y rápidamente se convirtió en un icono del estudio.',
      en: 'Wearing our Tropical Toucan is a statement of intent. It was born one summer afternoon playing with glitter offcuts and quickly became a studio icon.'
    },
    category: 'earrings',
    colorPalette: ['#FFA500', '#000000', '#FFD700'],
    imageStatic: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=900&auto=format&fit=crop',
    videoHover: '',
    earScaleImage: '',
    dimensions: '6.0 cm × 2.5 cm',
    inStock: true,
  },
  {
    id: 'prod-002',
    title: {
      es: 'Monstera Efecto Espejo',
      en: 'Mirror Effect Monstera'
    },
    slug: 'monstera-efecto-espejo',
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
      es: 'Hojas de Monstera Deliciosa grabadas en láser sobre metacrilato efecto espejo verde esmeralda. Reflejan la luz en cada movimiento.',
      en: 'Monstera Deliciosa leaves laser-engraved on emerald green mirror effect acrylic. They reflect light with every movement.'
    },
    story: {
      es: 'Para las plant lovers que quieren llevar su jungla a todas partes. La ligereza de esta pieza te permite usarla desde el café de la mañana hasta el concierto de la noche.',
      en: 'For plant lovers who want to take their jungle everywhere. The lightness of this piece lets you wear it from morning coffee to the evening concert.'
    },
    category: 'earrings',
    colorPalette: ['#50C878', '#FFFFFF'],
    imageStatic: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=900&auto=format&fit=crop',
    videoHover: '',
    earScaleImage: '',
    dimensions: '5.0 cm diámetro',
    inStock: true,
  },
  {
    id: 'prod-003',
    title: {
      es: 'Collar Margarita Pop',
      en: 'Pop Daisy Necklace'
    },
    slug: 'collar-margarita-pop',
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
      es: 'Maxi colgante con una margarita de estética 60s. Pétalos de metacrilato blanco opalescente y centro en amarillo neón UV que brilla bajo luz negra.',
      en: 'Maxi pendant with a 60s aesthetic daisy. Opalescent white acrylic petals and a UV neon yellow center that glows under black light.'
    },
    story: {
      es: 'Un homenaje a la época más pop. Queríamos diseñar un amuleto alegre que aportara un extra de vitamina C a tus looks básicos.',
      en: 'A tribute to the most pop era. We wanted to design a cheerful amulet that would add extra vitamin C to your basic looks.'
    },
    category: 'necklaces',
    colorPalette: ['#FFFFFF', '#FFFF00'],
    imageStatic: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=900&auto=format&fit=crop',
    videoHover: '',
    earScaleImage: '',
    dimensions: 'Margarita: 4.5 cm / Cadena: 40-45 cm',
    inStock: true,
  },
  {
    id: 'prod-004',
    title: {
      es: 'Calavera Confeti',
      en: 'Confetti Skull'
    },
    slug: 'calavera-confeti',
    price: 24.00,
    weightGrams: 2.8,
    weightComparison: {
      es: 'Súper ligera y divertida',
      en: 'Super light and fun'
    },
    closureType: {
      es: 'Acero inoxidable quirúrgico hipoalergénico',
      en: 'Hypoallergenic surgical stainless steel'
    },
    closureOptions: ['titanio', 'clip'],
    description: {
      es: 'Pendiente asimétrico con base de resina transparente incrustada de confeti de colores flúor y grabado frontal con forma de calavera sonriente.',
      en: 'Asymmetric earring with a transparent resin base embedded with neon confetti and a smiling skull front engraving.'
    },
    story: {
      es: 'Un guiño a celebrar la vida todos los días. Porque hasta las calaveras pueden ser el alma de la fiesta si están hechas de confeti.',
      en: 'A nod to celebrating life every day. Because even skulls can be the life of the party if they are made of confetti.'
    },
    category: 'earrings',
    colorPalette: ['#FF1493', '#00FFFF', '#FFFF00'],
    imageStatic: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=900&auto=format&fit=crop',
    videoHover: '',
    earScaleImage: '',
    dimensions: '3.5 cm × 2.0 cm',
    inStock: true,
  },
  {
    id: 'prod-005',
    title: {
      es: 'Charm Rayo Iridiscente',
      en: 'Iridescent Lightning Charm'
    },
    slug: 'charm-rayo-iridiscente',
    price: 15.00,
    weightGrams: 1.2,
    weightComparison: {
      es: 'Imperceptible al llevarlo',
      en: 'Imperceptible when worn'
    },
    closureType: {
      es: 'Mosquetón mini de acero quirúrgico',
      en: 'Surgical steel mini clasp'
    },
    closureOptions: ['titanio'],
    description: {
      es: 'Añade un toque de energía a tus aros básicos. Charm de metacrilato dicroico que cambia de color del azul hielo al rosa magenta según le dé la luz.',
      en: 'Add a touch of energy to your basic hoops. Dichroic acrylic charm that changes color from ice blue to magenta pink depending on the light.'
    },
    story: {
      es: 'Diseñados como complemento mix & match para que construyas tu propia joya. La magia del metacrilato dicroico no se puede explicar, hay que vivirla.',
      en: 'Designed as a mix & match accessory for you to build your own jewel. The magic of dichroic acrylic cannot be explained, it must be experienced.'
    },
    category: 'charms',
    colorPalette: ['#transparent', '#ff00ff'],
    imageStatic: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=900&auto=format&fit=crop',
    videoHover: '',
    earScaleImage: '',
    dimensions: '2.5 cm × 1.0 cm',
    inStock: true,
  },
  {
    id: 'prod-006',
    title: {
      es: 'Pendientes Abstract Carei',
      en: 'Abstract Tortoiseshell Earrings'
    },
    slug: 'abstract-carei',
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
      es: 'Bloques geométricos en metacrilato con patrón de concha de carey ámbar y negro brillante. Dos piezas articuladas que oscilan a tu ritmo.',
      en: 'Geometric blocks in acrylic with an amber and gloss black tortoiseshell pattern. Two articulated pieces that swing to your rhythm.'
    },
    story: {
      es: 'Nos encanta coger un estampado clásico y darle un giro de tuerca con formas abstractas y rotundas. Pura arquitectura retro.',
      en: 'We love taking a classic print and giving it a twist with abstract and bold shapes. Pure retro architecture.'
    },
    category: 'earrings',
    colorPalette: ['#A52A2A', '#000000'],
    imageStatic: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=900&auto=format&fit=crop',
    videoHover: '',
    earScaleImage: '',
    dimensions: '7.0 cm × 3.0 cm',
    inStock: false,
  }
];
