import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/server';

export default defineConfig({
  output: 'server', // Enable SSR
  adapter: vercel(),
  site: 'https://dev-fit-quest-challenge.pantheonsite.io/'
});
