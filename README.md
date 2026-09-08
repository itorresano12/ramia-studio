# Ramia Studio

**High-End Contemporary Acrylic Jewelry E-Commerce**

Ramia Studio is a modern, ultra-lightweight static storefront designed for contemporary acrylic jewelry. Engineered for absolute minimal client-side bloat, instant page transitions, and effortless editorial rendering.

## Architecture & Tech Stack

- **Astro**: Static Site Generation (SSG) with Island Architecture and View Transitions for a SPA-like navigation experience.
- **Tailwind CSS**: Custom editorial design system with minimalist utilities.
- **Sanity**: Mono-locale Headless CMS acting as the single source of truth for the product catalog.
- **Custom Build-Time i18n Engine**: Zero-Touch static heuristic translation (ES -> EN) operating seamlessly without schema duplication in the CMS.
- **Vercel Edge**: High-performance CDN deployment.

## Key Engineering Highlights

- **Zero-Bloat Client Runtime**: Native dialog drawer management with dynamic \dvh\ viewport calculations and safe-area adaptation for flawless mobile ergonomics.
- **Universal Mailto Interceptor**: An async robust clipboard interception strategy with \document.execCommand\ fallback and localized, floating animated toasts.
- **Core Web Vitals Optimization**: A strict focus on pre-rendered static assets, highly-optimized responsive imagery, sub-3s LCP, and zero cumulative layout shifts.

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Local Development

1. **Clone the repository:**
   \\\ash
   git clone https://github.com/itorresano12/ramia-studio.git
   cd ramia-studio
   \\\

2. **Install dependencies:**
   \\\ash
   npm install
   \\\

3. **Environment Variables:**
   Copy the example environment file and fill in the necessary keys.
   \\\ash
   cp .env.example .env
   \\\

4. **Start the local development server:**
   \\\ash
   npm run dev
   \\\

### Building for Production

To run the full static generation and build the production assets:
\\\ash
npm run build
\\\

## Credits

**Design & Engineering:** Iván Torresano
