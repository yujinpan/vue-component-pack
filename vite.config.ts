/// <reference types="vitest" />
import vue2 from '@vitejs/plugin-vue2';
import vue2Jsx from '@vitejs/plugin-vue2-jsx';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  root: 'dev',
  plugins: [
    vue2(),
    vue2Jsx({
      // fork from @vue/babel-preset-app
      babelPlugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        '@babel/plugin-proposal-class-properties',
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // ignore sass warnings for "10px / 2px"
        quietDeps: true,
        // resolve start path for "~", like: "~external/style/var.scss"
        importer: (url: string) => {
          return {
            file: url.startsWith('~') ? url.slice(1) : url,
          };
        },
      },
    },
  },
  // https://vitest.dev/config/
  test: {
    dir: 'src',
  },
});
