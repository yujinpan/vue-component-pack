const prism = require('prismjs');
const loadLanguages = require('prismjs/components/index');

// 注册使用的语言
loadLanguages(['markup', 'css', 'javascript']);

/**
 * fork from @vuepress/markdown/lib/highlight.js
 */
function wrap(code, lang) {
  return `<div class="language-${lang}"><pre v-pre class="language-${lang}"><code>${code}</code></pre></div>`;
}

module.exports = {
  /**
   * 生成高亮模版
   */
  codeToHighlight(str, lang) {
    const rawLang = lang;

    lang = {
      vue: 'markup',
      html: 'markup',
      md: 'markdown',
      ts: 'typescript',
      sh: 'bash'
    }[lang.toLowerCase()];

    if (!prism.languages[lang]) {
      throw new Error(`"${lang}" is not load.`);
    }

    return wrap(prism.highlight(str, prism.languages[lang]), rawLang);
  }
};
