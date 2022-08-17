import { defineConfig } from 'vuepress/config';
import path from 'path';

const nav = [
  { text: 'Guide', link: '/guide/' },
  { text: 'API', link: '/api/' },
  { text: 'Components', link: '/components/' },
];

const sidebar = {
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
};

// fork from @vuepress/core/lib/node/webpack/createServerConfig.js
const babelLoader = {
  loader: 'babel-loader',
  options: {
    // do not pick local project babel config (.babelrc)
    babelrc: false,
    // do not pick local project babel config (babel.config.js)
    // ref: http://babeljs.io/docs/en/config-files
    configFile: false,
    presets: [
      [
        '@vue/app',
        {
          entryFiles: [path.resolve(__dirname, 'serverEntry.js')],
        },
      ],
    ],
  },
};

export default defineConfig({
  base: '/your-component/',
  title: 'your-component',
  description: 'your-component description',

  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  themeConfig: {
    repo: 'your-component',
    lastUpdated: 'Last Updated',

    sidebar,
    nav,
  },

  configureWebpack: {
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.vue'],
      alias: {
        '@': path.resolve(__dirname, '../../src'),
        'your-component': path.resolve(__dirname, '../../src'),
      },
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [
            babelLoader,
            {
              loader: 'ts-loader',
              options: { transpileOnly: true, appendTsSuffixTo: [/\.vue$/] },
            },
          ],
        },
        {
          test: /\.tsx$/,
          use: [
            babelLoader,
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
                appendTsxSuffixTo: [/\.vue$/],
              },
            },
          ],
        },
      ],
    },
  },

  plugins: [require('./plugins/components-codes')],
});
