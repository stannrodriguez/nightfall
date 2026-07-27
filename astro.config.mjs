// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages project site: https://stannrodriguez.github.io/nightfall
export default defineConfig({
  site: 'https://stannrodriguez.github.io',
  base: '/nightfall',
  output: 'static',
  trailingSlash: 'ignore',
});
