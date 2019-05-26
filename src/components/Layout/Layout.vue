<template>
  <div id="layout">
    <div class="layout-message">
      <el-badge
        :value="badgeNum"
        class="item"
      >
        <i class="el-icon-chat-line-square" @click="showMessage"></i>
      </el-badge>
    </div>
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
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      @close="handleClose"
      width="500px">
        <el-table
          :data="messageList"
          style="width: 100%">
          <el-table-column
            prop="username"
            label="评论人"
            width="180">
          </el-table-column>
          <el-table-column
            prop="essayname"
            label="评论文章"
            width="180">
          </el-table-column>
          <el-table-column
            label="详情">
            <template slot-scope="scope">
              <a href="javascript:0;" @click="onDetail(scope.row.messageId)">查看详情</a>
            </template>
          </el-table-column>
        </el-table>
        <el-row type="flex" justify="center" style="margin-top: 10px;">
          <el-col :span="6">
            <el-button @click="clearAll">清除所有消息</el-button>
          </el-col>
        </el-row>
    </el-dialog>
  </div>
</template>
<script>
export default {
  mounted () {
    this.init()
    this.getMessageList()
  },
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
      ],
      badgeNum: 0,
      dialogTitle: '未读消息',
      dialogVisible: false,
      messageList: []
    }
  },
  methods: {
    handleClose () {},
    handleOpen (index) {
      console.log('index', index)
      if (index === '首页') {
        this.$router.push('/')
      } else if (index === '评论管理') {
        this.$router.push('/comment')
      }
    },
    init () {
      const that = this
      const ws = new WebSocket('ws://47.112.201.254:8888')

      ws.onopen = function (e) {
        console.log('Connection to server opened')
      }
      ws.onmessage = function (event) {
        console.log('Client received a message', event)
        that.getMessageList()
        that.$notify({
          type: 'success',
          title: '新的消息',
          message: event.data
        })
      }
      ws.onclose = function (e) {
        console.log('connection closed.')
      }
    },
    // 获取消息列表
    async getMessageList () {
      let result = await this.$http.comment.getMessage()
      this.messageList = result.data.result.data
      console.log(this.messageList)
      let badgeNum = 0
      for (let item of this.messageList) {
        if (item.isRead === 'false') {
          badgeNum++
        }
      }
      this.badgeNum = badgeNum
    },
    // 清除所有消息
    async clearAll () {
      let result = await this.$http.comment.clearAll()
      if (result.data.status === 0) {
        this.$notify({
          type: 'success',
          title: '成功',
          message: '清空消息成功'
        })
        this.getMessageList()
        this.dialogVisible = false
      }
    },
    // 显示未读消息
    showMessage () {
      this.dialogVisible = true
    },
    // 查看详情
    async onDetail (messageId) {
      let result = await this.$http.comment.readMessage({
        messageId: messageId
      })
      if (result.data.status === 0) {
        this.$router.push('/comment')
        this.getMessageList()
        this.dialogVisible = false
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
      & > h1 {
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
  .layout-message {
    position: absolute;
    right: 30px;
    top: 20px;
    .el-icon-chat-line-square {
      font-size: 25px;
      cursor: pointer;
      &:hover {
        color: #007afe;
      }
    }
  }
}
</style>
