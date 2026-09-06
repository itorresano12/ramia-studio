export interface Product {
  id: string;
  title: {
    es: string;
    en: string;
  };
  slug: string;
  price: number;
  weightGrams: number;
  weightComparison: {
    es: string;
    en: string;
  };
  closureType: {
    es: string;
    en: string;
  };
  closureOptions: ('titanio' | 'clip')[];
  description: {
    es: string;
    en: string;
  };
  story: {
    es: string;
    en: string;
  };
  category: 'maxi' | 'aros' | 'esenciales' | 'invitada';
  colorPalette: string[];
  imageStatic: string;
  videoHover: string;
  earScaleImage: string;
  dimensions: string;
  inStock: boolean;
}
