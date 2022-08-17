<template>
  <div class="div">
    <component :is="component" />
    <details class="custom-block details">
      <summary>Click me to view the code</summary>
      <span v-html="code"></span>
    </details>
  </div>
</template>

<script>
import COMPONENTS_CODES from '@dynamic/components-codes';

export default {
  props: {
    component: String,
  },
  data() {
    return {
      code: COMPONENTS_CODES[this.component],
    };
  },
};
</script>
