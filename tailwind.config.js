/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'tech-blue': '#2768A8',
        'energy-yellow': '#F3B237',
        'deep-navy': '#0F172A',
        'deep-navy-light': '#1E293B',
        'light-gray': '#E2E8F0',
        'muted-gray': '#94A3B8',
      },
      fontFamily: {
        sans: ['Noto Sans TC', 'system-ui', 'sans-serif'],
        serif: ['Noto Serif TC', 'serif'],
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}

