<template>
  <div>这是Mall组件
    <main-child :title="title"></main-child>
    <el-button @click="clickBTN()">改变title</el-button>
  </div>
</template>

<script>
import MainChild from './MainChild.vue';
export default {
  components: { MainChild },
  data () {
    return {
      title: '我是一个子组件'
    };
  },
  methods: {
    clickBTN () {
      this.title = '改变title';
    }
  }
};

</script>

<style>

</style>
