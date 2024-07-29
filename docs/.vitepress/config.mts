import vue2Jsx from "@vitejs/plugin-vue2-jsx";
import { defineConfig } from "vitepress";
import viteDemoPlugin from "vitepress-plugin-component-demo/vite-plugin";
import viteConfig from "../../vite.config";

export default defineConfig({
  base: '/your-component/',
  title: 'your-component',
  description: 'your-component description',
  appearance: true,
  lastUpdated: true,
  themeConfig: {
    logo: "/logo.svg",
    search: { provider: "local" },
    socialLinks: [
      { icon: "github", link: "https://github.com/your-name/your-component/" },
    ],
    nav: [{ text: "Guide", link: "/" }],
    outline: 'deep',
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024 xxx",
    },
  },
  vite: {
    plugins: [
      vue2Jsx({
        // fork from @vue/babel-preset-app
        babelPlugins: [
          ["@babel/plugin-proposal-decorators", { legacy: true }],
          "@babel/plugin-proposal-class-properties",
        ],
      }),
      viteDemoPlugin(),
    ],
    resolve: viteConfig.resolve,
    css: viteConfig.css,
    ssr: {
      noExternal: ["element-ui"],
    },
  },
  async transformHtml(code) {
    return code.replace(
      "</body>",
      `
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-S66MPLRFJZ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-S66MPLRFJZ');
</script>
</body>`,
    );
  },
});
