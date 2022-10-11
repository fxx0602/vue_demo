<template>
  <div>{{title}}</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  updated () {
    console.log(this.title);
    console.log("触发update");
  }
};

</script>

<style>

</style>
