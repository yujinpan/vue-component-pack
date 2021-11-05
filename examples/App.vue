<script lang="tsx">
import HelloWorld from '../src';
import '@/element-ui.ts';
import { CMDoc, CMTable } from '@yujinpan/common-modules';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

const version = require('../package').version;

@Component
export default class Example extends Vue {
  renderFunction1() {
    return [
      <h4>Function 1</h4>,
      <p>Function 1 description...</p>,
      <section>
        <HelloWorld msg="HelloWorld"></HelloWorld>
        <hr />
        <Highlight
          code={`
<template>
  <HelloWorld msg="HelloWorld" />
</template>

<script>
import HelloWorld from 'your-component';

export default {
  components: {
    HelloWorld
  }
};
<\\/script>
`}
        ></Highlight>
      </section>
    ];
  }

  renderProps() {
    return [
      <h4>Props</h4>,
      <p>Props description...</p>,
      <CMTable
        size="mini"
        order={false}
        show-overflow-tooltip={false}
        columns={[
          { label: '属性名', prop: 'prop' },
          { label: '类型', prop: 'type', type: 'tag' },
          { label: '描述', prop: 'desc' }
        ]}
        data={[
          { prop: 'prop1', type: 'String', desc: 'prop1 desc...' },
          { prop: 'prop1', type: 'String', desc: 'prop1 desc...' },
          { prop: 'prop1', type: 'String', desc: 'prop1 desc...' }
        ]}
      ></CMTable>
    ];
  }

  render() {
    return (
      <CMDoc class="cm-padding-medium">
        <h3>your-component</h3>
        <p>
          author:&nbsp;&nbsp;<code>your-name</code>
          &nbsp;&nbsp;version:&nbsp;&nbsp;
          <code>v{require('../package').version}</code>&nbsp;&nbsp;source
          code:&nbsp;&nbsp;
          <code>
            <a href="https://github.com/your-name/your-component#attributes">
              github
            </a>
          </code>
        </p>
        {[this.renderFunction1(), this.renderProps()]}
      </CMDoc>
    );
  }
}
</script>
