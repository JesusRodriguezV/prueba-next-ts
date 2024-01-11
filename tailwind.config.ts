import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ["macro-blue"]: {
          DEFAULT: "#0047BA",
        },
        ["macro-yellow"]: {
          DEFAULT: "#FFDD00",
          hover: "#ffea29",
          active: "#d9b500",
        },
        secondary: "#A1ADC0",
      },
    },
  },
  plugins: [],
}
export default config
