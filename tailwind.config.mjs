/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        neutral: {
          50:  '#FAF9F6',
          100: '#F5F4F1',
          200: '#E8E6E1',
          300: '#D1CEC8',
          400: '#9A9590',
          500: '#6E6A64',
          600: '#504D48',
          700: '#3A3834',
          800: '#28261F',
          900: '#1A1A18',
        },
      },
      backdropBlur: {
        xs:  '2px',
        sm:  '4px',
        md:  '12px',
        lg:  '16px',
        xl:  '24px',
        '2xl': '40px',
      },
    },
  },
  plugins: [],
};
