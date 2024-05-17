import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/preline/preline.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("preline/plugin")]
};
export default config;
