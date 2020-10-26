// 主组件
import HelloWorld from './src/index.vue';
import '@/styles/index.scss';
import { VueConstructor } from 'vue';

// @ts-ignore
HelloWorld.install = (vue: VueConstructor) => {
  vue.component('HelloWorld', HelloWorld);
};

// Vue.component()
export default HelloWorld;
