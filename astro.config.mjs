import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://syedbokhari.com.au",
  integrations: [sitemap()],
});
