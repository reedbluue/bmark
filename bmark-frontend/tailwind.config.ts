import type {Config} from "tailwindcss";
import typography from '@tailwindcss/typography';
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [typography, daisyui],
};
export default config;
