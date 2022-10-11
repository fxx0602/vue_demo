<template>
  <header>
    <div class="l-content">
      <el-button
        plain
        icon="el-icon-menu"
        size="mini"
        @click="hideMenus()"
      ></el-button>
      <el-breadcrumb>
        <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <span class="el-dropdown-link">
          <img :src="userImg" alt="" class="user" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data () {
    return {
      userImg: require("../assets/images/user.png")
    };
  },
  methods: {
    hideMenus () {
      this.$store.commit("collapseMenu");
    }
  },
  computed: {
    ...mapState({
      tags: state => state.tab.tagsList,
      current: (state) => state.tab.currentMenu
    })
  }
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  color: #fff;
}
.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}
.r-content {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>

<style lang="scss">
  .el-breadcrumb__item {
    .el-breadcrumb__inner {
      color: #666;
      font-weight: normal;
    }
    &:last-child {
      .el-breadcrumb__inner {
        color: white;
      }
    }
  }
</style>
