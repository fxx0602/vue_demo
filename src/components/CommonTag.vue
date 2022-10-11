<template>
  <div class="tabs">
      <el-tag v-for="(tag, index) in tags"
      :key="index" size="small"
      :closable="tag.name !== 'home'" :effect="$route.name === tag.name ? 'dark' : 'plain'"
      @click="changeMenu(tag)"
      @close="handleClose(tag,index)">
        {{tag.label}}
      </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  methods: {
    ...mapMutations({
      close: 'closeTag'
    }),
    changeMenu (item) {
      this.$router.push({ name: item.name });
      this.$store.commit('selectMenu', item);
    },
    handleClose (tag, index) {
      const length = this.tags.length - 1;
      this.close(tag);
      // 判断是否是最后一个
      // 如果
      if (tag.name !== this.$route.name) {
        return;
      }
      if (index === length) {
        // 关闭的是最后一个
        this.$router.push({
          name: this.tags[index - 1].name
        });
      } else {
        this.$router.push({
          name: this.tags[index].name
        });
      }
    }
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tagsList
    })
  }
};
</script>

<style lang="scss" scoped>
  .tabs {
      padding: 20px;
      .el-tag {
          margin-right: 15px;
          cursor: pointer;
          float: left;
      }
  }
</style>
