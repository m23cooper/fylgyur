
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import tailwind from "@vueform/vueform/tailwind";
import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './vueform.config.js', // or where `vueform.config.js` is located. Change `.js` to `.ts` if required.
    './node_modules/@vueform/vueform/themes/tailwind/**/*.vue',
    './node_modules/@vueform/vueform/themes/tailwind/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['CircularStd', 'Avenir', 'Helvetica', 'Arial', 'sans-serif', ],
      'serif': [ 'Georgia', 'serif', ],
      'mono': [ 'SFMono-Regular', ],
    },
    container: {
      center: true,
      padding: 0,
    },
  },
  plugins: [
    typography,
    tailwind,
      daisyui,
  ],
}

