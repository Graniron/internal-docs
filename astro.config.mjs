import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Didomi',
      logo: {
        src: '/src/assets/logo.svg',
        replacesTitle: true,
      },
      customCss: [
        // Path to your custom CSS file, starting with /
        '/src/styles/custom.css',
      ],
      head: [
        {
          tag: 'link',
          attrs: {
            href: '/src/assets/favicon.svg',
            rel: 'icon',
          },
        },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', link: '/getting-started' },
          ]
        },
        {
          label: 'SPA',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'History Logs', link: '/spa/history-logs' },
            { label: 'SSO', link: '/spa/sso' },
          ],
        },
        {
          label: 'Utilities',
          // Instead of manually listing each item, we can use the `autogenerate` option to automatically generate a list of pages.
          autogenerate: { directory: 'utilities' },
        },
        {
          label: 'Resources',
          items: [
            { label: 'Links', link: '/resources' },
          ],
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
