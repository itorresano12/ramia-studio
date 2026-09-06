import { atom, computed } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent';
import type { Product } from '../types/product';

export interface CartItem {
  id: string; // product.id + closureSelected
  productId: string;
  slug: string;
  titleEs: string;
  titleEn: string;
  price: number;
  weightGrams: number;
  image: string;
  closureSelected: 'acero' | 'clip';
  quantity: number;
}

// ── State ──
// isCartOpen is ephemeral
export const isCartOpen = atom(false);

// cartItems is persistent in localStorage
export const cartItems = persistentAtom<CartItem[]>('ramia_cart', [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});

// ── Derived State ──
export const cartTotal = computed(cartItems, (items) => 
  items.reduce((total, item) => total + item.price * item.quantity, 0)
);

export const cartCount = computed(cartItems, (items) => 
  items.reduce((count, item) => count + item.quantity, 0)
);

export const freeShippingThreshold = 40;
export const freeShippingProgress = computed(cartTotal, (total) => 
  Math.min((total / freeShippingThreshold) * 100, 100)
);

// ── Actions ──
export function openCart() {
  isCartOpen.set(true);
}

export function closeCart() {
  isCartOpen.set(false);
}

export function toggleCart() {
  isCartOpen.set(!isCartOpen.get());
}

export function addItem(product: Product, closureSelected: 'acero' | 'clip' = 'acero') {
  const currentItems = cartItems.get();
  const itemId = `${product.id}-${closureSelected}`;
  
  const existingItem = currentItems.find(item => item.id === itemId);
  
  if (existingItem) {
    updateQuantity(itemId, existingItem.quantity + 1);
  } else {
    cartItems.set([
      ...currentItems,
      {
        id: itemId,
        productId: product.id,
        slug: product.slug,
        titleEs: product.title.es,
        titleEn: product.title.en,
        price: product.price,
        weightGrams: product.weightGrams,
        image: product.imageStatic,
        closureSelected,
        quantity: 1
      }
    ]);
  }
  openCart();
}

export function removeItem(id: string) {
  cartItems.set(cartItems.get().filter(item => item.id !== id));
}

export function updateQuantity(id: string, quantity: number) {
  if (quantity < 1) {
    removeItem(id);
    return;
  }
  
  const currentItems = cartItems.get();
  cartItems.set(
    currentItems.map(item => 
      item.id === id ? { ...item, quantity } : item
    )
  );
}
