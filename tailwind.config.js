import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './formkit.theme.ts',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      sans: ['CircularStd', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['Georgia', 'serif'],
      mono: ['SFMono-Regular'],
    },
    container: {
      center: true,
      padding: 0,
    },
  },
  plugins: [typography, forms, daisyui],
  daisyui: { themes: ['night', 'halloween', 'dracula', 'cupcake'] },
};
