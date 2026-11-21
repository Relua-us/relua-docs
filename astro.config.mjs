// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.relua.us',
  integrations: [
    starlight({
      title: 'Relua Docs',
      description: 'How to install and use Relua, the free video review app for Mac and Windows.',
      logo: { src: './src/assets/relua-mark.svg', alt: '' },
      favicon: '/favicon.svg',
      customCss: ['./src/styles/relua.css'],
      lastUpdated: true,
      credits: false,
      editLink: { baseUrl: 'https://github.com/Relua-us/relua-docs/edit/main/' },
      social: [
        { icon: 'download', label: 'Download Relua', href: 'https://relua.us/download.html' },
        { icon: 'github', label: 'Docs on GitHub', href: 'https://github.com/Relua-us/relua-docs' },
      ],
      head: [
        { tag: 'meta', attrs: { name: 'referrer', content: 'no-referrer' } },
        { tag: 'meta', attrs: { property: 'og:image', content: 'https://docs.relua.us/relua-share.png' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/relua-icon.png' } },
      ],
      sidebar: [
        { label: 'Start here', items: [{ autogenerate: { directory: 'start' } }] },
        { label: 'Using Relua', items: [{ autogenerate: { directory: 'guides' } }] },
        { label: 'Sharing and syncing', items: [{ autogenerate: { directory: 'share' } }] },
        { label: 'Reference', items: [{ autogenerate: { directory: 'reference' } }] },
        { label: 'Help', items: [{ autogenerate: { directory: 'help' } }] },
        { label: 'Relua website', link: 'https://relua.us/' },
      ],
    }),
  ],
});
