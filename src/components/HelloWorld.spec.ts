import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld', () => {
  it('mounted success', () => {
    const wrapper = mount(HelloWorld);
    expect(wrapper.exists()).toBe(true);
  });

  it('props [msg] right', async () => {
    const wrapper = mount(HelloWorld);
    await wrapper.setProps({ msg: '123' });
    expect(wrapper.text()).toBe('123');
  });
});
