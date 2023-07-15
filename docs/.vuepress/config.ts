import { defineConfig } from 'vuepress/config';

export default defineConfig({
  base: '/your-component/',
  title: 'your-component',
  description: 'your-component description',
  head: [...getGAHead()],
  themeConfig: {
    repo: 'your-component',
    lastUpdated: 'Last Updated',
    logo: '/logo.svg',
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: 'Components', link: '/components/' },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          path: '/guide/',
          children: ['/guide/getting-started', '/guide/feature-1'],
        },
      ],
      '/api/': ['/api/'],
      '/components/': [
        {
          title: 'Components',
          path: '/components/',
          children: ['/components/component-1'],
        },
      ],
    },
  },
  plugins: ['vuepress-plugin-component-demo' as any],
});

function getGAHead(): HeadTags {
  return process.env.NODE_ENV === 'production'
    ? [
        [
          'script',
          {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=G-S66MPLRFJZ',
          },
          '',
        ],
        [
          'script',
          {},
          `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-S66MPLRFJZ');
`,
        ],
      ]
    : [];
}
