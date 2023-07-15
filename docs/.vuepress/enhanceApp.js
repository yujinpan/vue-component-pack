import '../../lib/element-ui';
import { Button } from 'element-ui';

import Component from '../../lib/index';
import 'element-ui/lib/theme-chalk/index.css';

export default (ctx) => {
  const { Vue } = ctx;

  Vue.use(Button);
  Vue.use(Component);
};
