const globby = require('globby');
const path = require('path');
const fs = require('fs');

module.exports = {
  /**
   * 获取文件夹下的所有源码
   */
  getRawModules(dir, pattern) {
    return globby
      .sync([pattern], {
        cwd: dir
      })
      .map((item) => {
        const content = fs.readFileSync(path.resolve(dir, item)).toString();
        return {
          name: item.replace(/\.[^.]+$/, ''),
          content
        };
      })
      .reduce((prev, next) => ({ ...prev, [next.name]: next.content }), {});
  }
};
