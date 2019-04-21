<template>
  <div id="article">
    <!-- Title -->
    <ch-title :title="title"></ch-title>
    <!-- Container -->
    <ch-container>
      <!-- Header -->
      <template slot="header-left">
        <el-button-group>
        </el-button-group>
      </template>
      <!-- Body -->
      <template slot="body">
        <el-table
          ref="multipleTable"
          :data="commentList"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="评论用户">
            <template slot-scope="scope">{{ scope.row.username }}</template>
          </el-table-column>
          <el-table-column prop="content" label="评论内容"></el-table-column>
          <el-table-column prop="create_time" label="创建时间"></el-table-column>
          <el-table-column prop="action" label="操作" width="100px">
            <template slot-scope="scope">
              <ch-operate>
                <div slot="option">
                  <div @click="onDelete(scope.row.id)">删除</div>
                </div>
              </ch-operate>
            </template>
          </el-table-column>
        </el-table>
        <!-- Pagination -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageIndex"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="pageSize"
          layout="prev, pager, next, jumper"
          :total="total"
          background
        ></el-pagination>
      </template>
    </ch-container>
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      @close="handleClose"
      width="30%">
      <el-form label-width="80px" ref="deleteForm">
        <div style="text-align:center;padding:40px;">确认删除该条评论?</div>
        <el-row type="flex" justify="center">
          <el-col :span="10">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="confirmDelete">确 定</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Article',
  async created () {
    await this.getCommentList()
  },
  data () {
    return {
      title: '评论管理',
      pageIndex: parseInt(this.$route.query.pageIndex) || 1,
      pageSize: parseInt(this.$route.query.pageSize) || 5,
      total: 0,
      dialogTitle: '',
      dialogVisible: false,
      commentId: '',
      commentList: [],
      multipleSelection: []
    }
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    handleSizeChange (pageSize) {
      this.pageSize = pageSize
    },
    async handleCurrentChange (pageIndex) {
      this.pageIndex = pageIndex
      this.$router.push(`${this.$route.path}?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`)
      await this.getCommentList()
    },
    handleClose () {
      this.commentId = ''
    },
    onDelete (commentId) {
      this.dialogTitle = '删除'
      this.dialogVisible = true
      this.commentId = commentId
    },
    // 确认删除
    async confirmDelete () {
      let result = await this.$http.comment.delete({
        commentId: this.commentId
      })
      if (result.data.status === 0) {
        this.$notify.success({
          title: '成功',
          message: '删除成功'
        })
        this.dialogVisible = false
        await this.getCommentList()
      }
    },
    // 获取评论列表
    async getCommentList () {
      let result = await this.$http.comment.getList({
        pageIndex: this.$route.query.pageIndex || this.pageIndex,
        pageSize: this.$route.query.pageSize || this.pageSize
      })
      if (result.data.status === 0) {
        this.commentList = result.data.result
        this.total = result.data.total
      }
    }
  }
}
</script>

<style lang="less">
#article {
  width: 100%;
}
</style>
