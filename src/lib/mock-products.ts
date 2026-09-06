import type { Product } from '../types/product';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod-001',
    title: 'Geometría del Alma',
    slug: 'geometria-del-alma',
    price: 65.00,
    weightGrams: 2.8,
    weightComparison: 'Pesa menos que una moneda de 10 céntimos',
    closureType: 'Titanio hipoalergénico de grado médico',
    description: 'Pendientes asimétricos de metacrilato en tonos translúcidos que juegan con la luz para crear reflejos únicos. Su diseño ultraligero permite lucir volumen sin comprometer la comodidad.',
    story: 'Inspirados en la arquitectura brutalista y suavizados por la fluidez de la luz natural. Geometría del Alma nace para demostrar que la presencia y la ligereza pueden coexistir en una misma pieza.',
    imageStatic: 'https://cdn.sanity.io/images/placeholder/production/geometria-alma-static.jpg',
    videoHover: 'https://cdn.sanity.io/files/placeholder/production/geometria-alma-hover.webm',
    dimensions: '6.0 cm x 2.5 cm',
    inStock: true
  },
  {
    id: 'prod-002',
    title: 'Ecos de Obsidiana',
    slug: 'ecos-de-obsidiana',
    price: 85.00,
    weightGrams: 3.5,
    weightComparison: 'Pesa menos que una llave estándar',
    closureType: 'Acero quirúrgico antialérgico 316L',
    description: 'Aros escultóricos en metacrilato negro absoluto con acabado pulido a mano. Un clásico reinventado mediante la manipulación térmica del material.',
    story: 'La colección Ecos surge del silencio y la oscuridad elegante. Cada curva es doblada artesanalmente a 160 grados, haciendo que ninguna pieza sea exactamente igual a la anterior.',
    imageStatic: 'https://cdn.sanity.io/images/placeholder/production/ecos-obsidiana-static.jpg',
    videoHover: 'https://cdn.sanity.io/files/placeholder/production/ecos-obsidiana-hover.webm',
    dimensions: '5.0 cm diámetro',
    inStock: true
  },
  {
    id: 'prod-003',
    title: 'Alba en Tensión',
    slug: 'alba-en-tension',
    price: 70.00,
    weightGrams: 2.4,
    weightComparison: 'Pesa menos que una hoja de papel',
    closureType: 'Plata de ley 925 bañada en rodio',
    description: 'Estructura minimalista de metacrilato iridiscente sostenida por finos hilos de metal. Cambia de color sutilmente según el ángulo de visión.',
    story: 'Diseñados para capturar la esencia del primer rayo de sol. Alba en Tensión es un ejercicio de minimalismo estructural donde lo invisible es tan importante como lo visible.',
    imageStatic: 'https://cdn.sanity.io/images/placeholder/production/alba-tension-static.jpg',
    videoHover: 'https://cdn.sanity.io/files/placeholder/production/alba-tension-hover.webm',
    dimensions: '4.5 cm x 1.8 cm',
    inStock: true
  }
];
