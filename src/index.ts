import HelloWorld from '@/components/HelloWorld.vue';
import './styles/index.scss';
import type { VueConstructor } from 'vue';

// @ts-ignore
HelloWorld.install = (vue: VueConstructor) => {
  vue.component('HelloWorld', HelloWorld);
};

// Vue.component()
export default HelloWorld;
