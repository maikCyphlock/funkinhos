/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        melrose: {
          50: '#f3f3ff',
          100: '#e9e8ff',
          200: '#d5d6ff',
          300: '#b9b8ff',
          400: '#8e88fd',
          500: '#6a58fa',
          600: '#5635f2',
          700: '#4823de',
          800: '#3c1dba',
          900: '#331a98'
        }
      }
    }
  },
  plugins: []
}
