/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary-dark': {
        DEFAULT: '#3BBEF8', // background
        'content': '#FFFFFF', // foreground
      },
      'secondary-dark': {
        DEFAULT: '#EA580C', // background
        'content': '#FFFFFF', // foreground
      },
      'base-dark': {
        '100': '#1D232A', // background
        '200': '#191E24',
        '300': '#15191F',
        'content': '#D9D9D9', // foreground
      },
      'primary-light': {
        DEFAULT: '#3BBEF8', // background
        'content': '#FFFFFF', // foreground
      },
      'secondary-light': {
        DEFAULT: '#EA580C', // background
        'content': '#FFFFFF', // foreground
      },
      'base-light': {
        '100': '#F2F2F2', // background
        '200': '#E5E6E6',
        '300': '#D9D9D9',
        'content': '#1F2A37', // foreground
      }
    }
  },
  plugins: [],
}