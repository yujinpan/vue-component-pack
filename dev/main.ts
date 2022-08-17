import Vue from 'vue';
// @ts-ignore
import App from './src/App.vue';

import './plugins/element';
import './styles/index.scss';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: (h) => h(App),
});
