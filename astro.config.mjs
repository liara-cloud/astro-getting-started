import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "http://your-website-url",
  integrations: [tailwind(), icon()],
});
