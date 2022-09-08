<!--<template>-->
<!--  <div class="hello">-->
<!--    <h1>{{ msg }}</h1>-->
<!--  </div>-->
<!--</template>-->

<script lang="tsx">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  // 利于 IDE 自动提示
  name: 'HelloWorld',
})
export default class HelloWorld extends Vue {
  @Prop({ type: String, default: 'Hello World!' }) readonly msg!: string;

  render() {
    return (
      <div class="hello">
        <h1>{this.msg}</h1>
      </div>
    );
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
