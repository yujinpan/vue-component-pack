const path = require('path');

const nav = [
  { text: 'Guide', link: '/guide/' },
  { text: 'API', link: '/api/' },
  { text: 'Components', link: '/components/' }
];

const sidebar = {
  '/guide/': [
    {
      title: 'Guide',
      path: '/guide/',
      children: ['/guide/getting-started', '/guide/feature-1']
    }
  ],
  '/api/': ['/api/'],
  '/components/': [
    {
      title: 'Components',
      path: '/components/',
      children: ['/components/component-1']
    }
  ]
};

module.exports = {
  base: '/your-component/dist/',
  title: 'your-component',
  description: 'your-component description',
  dest: path.resolve(__dirname, '../../dist'),

  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  themeConfig: {
    repo: 'your-component',
    lastUpdated: 'Last Updated',

    sidebar,
    nav
  },

  configureWebpack: {
    resolve: {
      alias: {
        'your-component': path.resolve(__dirname, '../../lib')
      }
    }
  },

  plugins: [require('./plugins/components-codes')]
};