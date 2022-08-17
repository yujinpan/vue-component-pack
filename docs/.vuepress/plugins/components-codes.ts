import createMarkdown from '@vuepress/markdown';
import fs from 'fs';
import globby from 'globby';
import path from 'path';

const md = createMarkdown();

/**
 * 生成全局组件的源码模版，用于展示文档的实例代码
 */
module.exports = () => ({
  clientDynamicModules() {
    const components = getRawModules(
      path.resolve(__dirname, '../components'),
      '**/*.vue'
    );
    for (const key in components) {
      components[key] = md.render('```vue\n' + components[key] + '```').html;
    }
    return {
      name: 'components-codes.js',
      content: `export default ${JSON.stringify(components)}`,
    };
  },
});

function getRawModules(dir, pattern) {
  return globby
    .sync([pattern], {
      cwd: dir,
    })
    .map((item) => {
      const content = fs.readFileSync(path.resolve(dir, item)).toString();
      return {
        name: item.replace(/\.[^.]+$/, ''),
        content,
      };
    })
    .reduce((prev, next) => ({ ...prev, [next.name]: next.content }), {});
}
