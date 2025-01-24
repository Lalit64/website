import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        accent: "#3d8ff5",
        "accent-offset": "#2D70C2",
        body: "#10254E",
      },
    },
  },

  plugins: [typography, forms],
} satisfies Config;
