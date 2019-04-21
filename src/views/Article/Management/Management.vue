<template>
  <div id="management">
    <!-- Title -->
    <ch-title :title="title"></ch-title>
    <!-- Container -->
    <ch-container>
      <!-- Header -->
      <template slot="header-left">
        <el-button-group>
          <el-button @click="$router.push('/article/publish')">新增</el-button>
        </el-button-group>
      </template>
      <!-- Body -->
      <template slot="body">
        <el-table
          ref="multipleTable"
          :data="articleList"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="文章标题">
            <template slot-scope="scope">{{ scope.row.essayname }}</template>
          </el-table-column>
          <el-table-column prop="essayheat" label="点击量"></el-table-column>
          <el-table-column prop="essaydate" label="发表时间"></el-table-column>
          <el-table-column prop="action" label="操作" width="100px">
            <template slot-scope="scope">
              <ch-operate>
                <div slot="option">
                  <div @click="$router.push({path:'/article/publish',query:{essayId:scope.row.essayID}})">修改</div>
                  <div @click="onDelete(scope.row.essayID)">删除</div>
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
        <div style="text-align:center;padding:40px;">确认删除该文章?</div>
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
  name: 'Management',
  async created () {
    await this.getArticleList()
  },
  data () {
    return {
      title: '文章管理',
      pageIndex: parseInt(this.$route.query.pageIndex) || 1,
      pageSize: parseInt(this.$route.query.pageSize) || 5,
      condition: '',
      dialogTitle: '',
      essayId: '',
      dialogVisible: false,
      total: 0,
      articleList: [],
      multipleSelection: []
    }
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    handleClose () {
      this.essayId = ''
    },
    handleSizeChange (pageSize) {
      this.pageSize = pageSize
    },
    async handleCurrentChange (pageIndex) {
      this.pageIndex = pageIndex
      this.$router.push(`${this.$route.path}?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}&condition=${this.condition}`)
      await this.getArticleList()
    },
    onUpdate (id) {
    },
    onDelete (id) {
      this.essayId = id
      this.dialogTitle = '删除'
      this.dialogVisible = true
    },
    // 确认删除
    async confirmDelete () {
      let result = await this.$http.article.delete({
        essayId: this.essayId
      })
      if (result.data.status === 0) {
        this.$notify.success({
          title: '成功',
          message: '删除成功'
        })
        this.dialogVisible = false
        await this.getArticleList()
      }
    },
    // 获取文章列表
    async getArticleList () {
      let result = await this.$http.article.getList({
        pageIndex: this.$route.query.pageIndex || this.pageIndex,
        pageSize: this.$route.query.pageSize || this.pageSize,
        condition: this.$route.query.condition || this.condition
      })
      if (result.data.status === 0) {
        this.articleList = result.data.result
        this.total = result.data.total
      }
    }
  }
}
</script>

<style lang="less">
#management {
  width: 100%;
}
</style>
