export const prerender = false;

import type { APIRoute } from 'astro';

// ─────────────────────────────────────────────────────────────────────────────
// Stripe Checkout endpoint — /api/checkout
// Accepts a single product purchase or a full cart.
//
// POST body:
//   { title, price, quantity, closure, image, lang? }
//   — OR —
//   { items: [{ title, price, quantity, closure, image }], lang? }
//
// DEMO MODE: activated automatically when STRIPE_SECRET_KEY is absent or
// still set to the placeholder value. Returns a success redirect to
// /pedido-completado?demo=true after a simulated 1-second delay.
// ─────────────────────────────────────────────────────────────────────────────

const STRIPE_KEY = import.meta.env.STRIPE_SECRET_KEY ?? '';
const IS_DEMO    = !STRIPE_KEY || STRIPE_KEY === 'sk_test_placeholder' || STRIPE_KEY.trim() === '';

export const POST: APIRoute = async ({ request, url }) => {
  try {
    const body = await request.json();
    const lang: 'es' | 'en' = body.lang ?? 'es';

    const baseUrl = import.meta.env.SITE_URL
      ?? import.meta.env.PUBLIC_URL
      ?? url.origin;

    // ── DEMO MODE ──────────────────────────────────────────────────────────
    if (IS_DEMO) {
      // Simulate network delay so the loading state is visible
      await new Promise(resolve => setTimeout(resolve, 1000));

      const demoUrl = `${baseUrl}${lang === 'es' ? '/pedido-completado' : '/en/order-success'}?demo=true`;

      return new Response(
        JSON.stringify({ url: demoUrl, demo: true }),
        { status: 200, headers: { 'Content-Type': 'application/json' } },
      );
    }

    // ── STRIPE MODE ────────────────────────────────────────────────────────
    const { default: Stripe } = await import('stripe');
    const stripe = new Stripe(STRIPE_KEY, { apiVersion: '2024-06-20' });

    // Normalise: single product OR items array
    const rawItems: Array<{
      title: string;
      price: number;
      quantity: number;
      closure?: string;
      image?: string;
    }> = body.items ?? [
      {
        title:    body.title,
        price:    body.price,
        quantity: body.quantity ?? 1,
        closure:  body.closure,
        image:    body.image,
      },
    ];

    if (!rawItems.length || rawItems.some(i => !i.title || !i.price)) {
      return new Response(
        JSON.stringify({ error: 'Invalid payload: title and price are required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
      );
    }

    const subtotal = rawItems.reduce((acc, i) => acc + i.price * (i.quantity ?? 1), 0);

    const successUrl = `${baseUrl}${lang === 'es' ? '/pedido-completado' : '/en/order-success'}?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl  = `${baseUrl}${lang === 'es' ? '/' : '/en/'}`;

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = rawItems.map(item => {
      const closureLabel = item.closure
        ? (lang === 'es' ? `Cierre: ${item.closure}` : `Closure: ${item.closure}`)
        : undefined;

      const productData: Stripe.Checkout.SessionCreateParams.LineItem.PriceData.ProductData = {
        name: item.title,
        ...(closureLabel && { description: closureLabel }),
        ...(item.image && { images: [item.image] }),
      };

      return {
        price_data: {
          currency:     'eur',
          product_data: productData,
          unit_amount:  Math.round(item.price * 100),
        },
        quantity: item.quantity ?? 1,
      };
    });

    const shipping_options: Stripe.Checkout.SessionCreateParams.ShippingOption[] = [
      subtotal >= 40
        ? {
            shipping_rate_data: {
              type: 'fixed_amount',
              fixed_amount:   { amount: 0, currency: 'eur' },
              display_name:   lang === 'es' ? 'Envío Estándar Gratuito' : 'Free Standard Shipping',
              delivery_estimate: {
                minimum: { unit: 'business_day', value: 2 },
                maximum: { unit: 'business_day', value: 4 },
              },
            },
          }
        : {
            shipping_rate_data: {
              type: 'fixed_amount',
              fixed_amount:   { amount: 395, currency: 'eur' },
              display_name:   lang === 'es' ? 'Envío Estándar Peninsular' : 'Standard Peninsular Shipping',
              delivery_estimate: {
                minimum: { unit: 'business_day', value: 2 },
                maximum: { unit: 'business_day', value: 4 },
              },
            },
          },
    ];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode:         'payment',
      line_items,
      success_url:  successUrl,
      cancel_url:   cancelUrl,
      shipping_address_collection: {
        allowed_countries: ['ES', 'PT', 'FR', 'DE', 'IT', 'BE', 'NL', 'AT', 'PL'],
      },
      shipping_options,
      locale: lang === 'es' ? 'es' : 'en',
      phone_number_collection: { enabled: true },
    });

    return new Response(
      JSON.stringify({ url: session.url }),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  } catch (err: any) {
    console.error('[checkout] error:', err);
    return new Response(
      JSON.stringify({ error: err.message ?? 'Internal error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }
};
