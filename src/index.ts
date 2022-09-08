import type { VueConstructor } from 'vue';

import HelloWorld from '@/components/HelloWorld.vue';
import './styles/index.scss';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
HelloWorld.install = (vue: VueConstructor) => {
  vue.component('HelloWorld', HelloWorld);
};

// Vue.component()
export default HelloWorld;
