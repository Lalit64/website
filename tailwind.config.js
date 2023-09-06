/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        accent: '#3d8ff5',
        "accent-offset": '#2D70C2',
        body: "#10254E"
      }
    },
  },
  plugins: [],
}

