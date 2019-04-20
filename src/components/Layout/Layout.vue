<template>
  <div id="layout">
    <div class="layout-left">
      <el-menu
        background-color="#f1f5f8"
        text-color="#404D55"
        unique-opened
        @open="handleOpen"
        :default-active="$route.path"
      >
        <div class="layout-left-header">
          <h1>sunbeam</h1>
          <img
            src="../../assets/logo.png"
            alt=""
          >
          <!-- <el-button type="primary">切换小区</el-button> -->
        </div>
        <el-submenu
          :index="item.name"
          v-for="(item,index) in menuData"
          :key="index"
        >
          <template slot="title">
            <span>{{item.name}}</span>
          </template>
          <el-menu-item
            v-for="(item2,index) in item.children"
            :key="index"
            :index="item2.path"
            @click="$router.push(item2.path)"
          >{{item2.name}}</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <router-view style="width:100%;overflow-y:auto"></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      menuData: [
        { name: '首页', path: '/home' },
        { name: '用户管理',
          children: [
            { name: '账号管理', path: '/users' }
          ] },
        { name: '评论管理', path: '/comment' },
        { name: '文章管理',
          children: [
            { name: '文章管理', path: '/article/management' },
            { name: '文章发表', path: '/article/publish' }
          ] },
        { name: '系统管理',
          children: [
            { name: '账号管理', path: '/system/account' },
            { name: '角色管理' }
          ]
        }
      ]
    }
  },
  methods: {
    handleOpen (index) {
      console.log('index', index)
      if (index === '首页') {
        this.$router.push('/')
      } else if (index === '评论管理') {
        this.$router.push('/comment')
      }
    }
  }
}
</script>

<style lang="less" scoped>
#layout {
  // width: 258px;
  height: 100%;
  display: flex;
  .layout-left {
    min-width: 258px;
    overflow-y: auto;
    .layout-left-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 200px;
      justify-content: center;
      &>h1 {
        color: #404d55;
      }
      & > img {
        margin-bottom: 20px;
        width: 100px;
      }
    }
  }
}
</style>
<style lang="less">
#layout {
  .el-menu {
    height: 100%;
  }
  .el-icon-arrow-down:before {
    content: "";
  }
  .el-menu-item {
    color: #9ba5ac !important;
    text-align: center;
  }
  .el-menu-item.is-active {
    color: #404d55 !important;
  }
  .el-submenu__title {
    text-align: center;
  }
  .el-submenu.is-opened .el-submenu__title {
    color: #007afe !important;
  }
}
</style>
