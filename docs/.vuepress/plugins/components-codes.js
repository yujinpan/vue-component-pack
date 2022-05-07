const { codeToHighlight } = require('../utils/prism');
const { getRawModules } = require('../utils/module');
const path = require('path');

/**
 * 生成全局组件的源码模版，用于展示文档的实例代码
 */
module.exports = (options, context) => ({
  clientDynamicModules() {
    const components = getRawModules(
      path.resolve(__dirname, '../components'),
      '**/*.vue'
    );
    for (let key in components) {
      components[key] = codeToHighlight(components[key], 'vue');
    }
    return {
      name: 'components-codes.js',
      content: `export default ${JSON.stringify(components)}`
    };
  }
});
