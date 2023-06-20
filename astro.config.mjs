import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import compressor from "astro-compressor";
import svelte from "@astrojs/svelte";

import partytown from "@astrojs/partytown";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({

  site: 'https://dhruv.tech',

  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), compressor(), svelte(), partytown({debug: true}), robotsTxt()]

});