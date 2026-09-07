export const prerender = false;

import type { APIRoute } from 'astro';
import Stripe from 'stripe';

const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY || 'sk_test_mock');

export const POST: APIRoute = async ({ request, url }) => {
  try {
    const { items, lang = 'es' } = await request.json();

    if (!items || items.length === 0) {
      return new Response(JSON.stringify({ error: 'Cart is empty' }), { status: 400 });
    }

    // Calculate subtotal
    const subtotal = items.reduce((acc: number, item: any) => acc + (item.price * item.quantity), 0);

    const baseUrl = import.meta.env.PUBLIC_URL || url.origin;
    const successUrl = `${baseUrl}${lang === 'es' ? '/pedido-completado' : '/en/order-success'}`;
    const cancelUrl = `${baseUrl}${lang === 'es' ? '/' : '/en'}`;

    // Map items to Stripe format
    const line_items = items.map((item: any) => {
      const title = lang === 'es' ? item.titleEs : item.titleEn;
      const closureLabel = item.closureSelected === 'clip' 
        ? (lang === 'es' ? 'Clip' : 'Clip Option')
        : (lang === 'es' ? 'Acero Inoxidable' : 'Stainless Steel');

      return {
        price_data: {
          currency: 'eur',
          product_data: {
            name: title,
            description: `Cierre: ${closureLabel}`,
            images: [item.image],
          },
          unit_amount: Math.round(item.price * 100), // Stripe expects cents
        },
        quantity: item.quantity,
      };
    });

    // Determine shipping options
    const shipping_options = [];
    if (subtotal >= 40) {
      // Free Shipping
      shipping_options.push({
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: { amount: 0, currency: 'eur' },
          display_name: lang === 'es' ? 'Envío Estándar Peninsular (Gratis)' : 'Standard Peninsular Shipping (Free)',
          delivery_estimate: {
            minimum: { unit: 'business_day', value: 2 },
            maximum: { unit: 'business_day', value: 4 },
          },
        },
      });
    } else {
      // Paid Shipping
      shipping_options.push({
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: { amount: 395, currency: 'eur' },
          display_name: lang === 'es' ? 'Envío Estándar Peninsular' : 'Standard Peninsular Shipping',
          delivery_estimate: {
            minimum: { unit: 'business_day', value: 2 },
            maximum: { unit: 'business_day', value: 4 },
          },
        },
      });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
      shipping_address_collection: {
        allowed_countries: ['ES', 'FR', 'DE', 'IT', 'PT'], // Spain and nearby Europe
      },
      shipping_options,
    });

    return new Response(JSON.stringify({ url: session.url }), { status: 200 });
  } catch (error: any) {
    console.error('Error creating Stripe session:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};
