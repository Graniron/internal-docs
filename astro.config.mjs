import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Didomi',
      tableOfContents: false,
      logo: {
        src: '/src/assets/logo.svg',
        replacesTitle: true,
      },
      customCss: ['/src/styles/custom.css'],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', link: '/getting-started' },
            { label: 'Notion Hackathon 2023', link: '/notion' },
            { label: 'Notion JS', link: '/js-notion-page' },
          ]
        },
        {
          label: 'SPA',
          autogenerate: { directory: 'spa' },
        },
        {
          label: 'Utilities',
          autogenerate: { directory: 'utilities' },
        },
        {
          label: 'Resources',
          autogenerate: { directory: 'resources' },
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
