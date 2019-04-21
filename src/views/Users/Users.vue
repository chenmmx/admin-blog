<template>
  <div id="users">
    <!-- Title -->
    <ch-title :title="title"></ch-title>
    <!-- Container -->
    <ch-container>
      <!-- Header -->
      <template slot="header-left">
        <el-button-group>
          <!-- <el-button>删除</el-button> -->
        </el-button-group>
      </template>
      <!-- Body -->
      <template slot="body">
        <el-table
          ref="multipleTable"
          :data="userList"
          tooltip-effect="dark"
          style="width: 100%"
        >
          <el-table-column label="用户名" align="center">
            <template slot-scope="scope">{{ scope.row.username }}</template>
          </el-table-column>
          <el-table-column prop="password" label="密码" align="center"></el-table-column>
          <el-table-column prop="regTime" label="注册时间" align="center"></el-table-column>
          <el-table-column prop="action" label="操作" width="100px">
            <template slot-scope="scope">
              <ch-operate>
                <div slot="option">
                  <div @click="onUpdate(scope.row.userID)">修改</div>
                  <div @click="onDelete(scope.row.userID)">删除</div>
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
      <el-form :model="formData" :rules="rules" label-width="80px" ref="form" v-if="dialogType === 'edit'">
        <el-form-item label="用户名" prop="username">
          <el-col :span="20">
            <el-input v-model="formData.username"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-col :span="20">
            <el-input v-model="formData.password"></el-input>
          </el-col>
        </el-form-item>
        <el-row type="flex" justify="center">
          <el-col :span="10">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="onSubmit">确 定</el-button>
          </el-col>
        </el-row>
      </el-form>
      <el-form label-width="80px" ref="deleteForm" v-if="dialogType === 'delete'">
        <div style="text-align:center;padding:40px;">确认删除所选用户?</div>
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
  name: 'Users',
  async created () {
    await this.getUserList()
  },
  data () {
    return {
      title: '用户管理',
      pageIndex: parseInt(this.$route.query.pageIndex) || 1,
      pageSize: parseInt(this.$route.query.pageSize) || 5,
      condition: '',
      dialogVisible: false,
      dialogType: '',
      dialogTitle: '',
      userId: '',
      formData: {
        userId: '',
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请请输入账号名', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请请输入密码', trigger: 'blur' }
        ]
      },
      total: 0,
      userList: [],
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
      this.$router.push(`${this.$route.path}?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}&condition=${this.condition}`)
      await this.getUserList()
    },
    handleClose () {
      this.formData = {
        userId: '',
        username: '',
        password: ''
      }
    },
    async onUpdate (id) {
      this.dialogVisible = true
      this.dialogType = 'edit'
      this.dialogTitle = '修改'
      let result = await this.$http.user.getInfo({
        userId: id
      })
      if (result.data.status === 0) {
        this.formData.userId = result.data.result[0].userID
        this.formData.username = result.data.result[0].username
        this.formData.password = result.data.result[0].password
      }
    },
    onDelete (id) {
      this.userId = id
      this.dialogVisible = true
      this.dialogType = 'delete'
      this.dialogTitle = '删除'
    },
    // 确认删除
    async confirmDelete () {
      let result = await this.$http.user.delete({
        userId: this.userId
      })
      if (result.data.status === 0) {
        this.$notify.success({
          title: '成功',
          message: '删除成功'
        })
        this.dialogVisible = false
        await this.getUserList()
      }
    },
    // 表单确认
    onSubmit () {
      this.$refs['form'].validate(async (valid) => {
        if (valid) {
          let result = await this.$http.user.edit(this.formData)
          if (result.data.status === 0) {
            this.$notify.success({
              title: '成功',
              message: '修改成功'
            })
            this.dialogVisible = false
            await this.getUserList()
          }
        }
      })
    },
    // 获取用户列表
    async getUserList () {
      let result = await this.$http.user.getList({
        pageIndex: this.$route.query.pageIndex || this.pageIndex,
        pageSize: this.$route.query.pageSize || this.pageSize,
        condition: this.$route.query.condition || this.condition
      })
      if (result.data.status === 0) {
        this.userList = result.data.result
        this.total = result.data.total
      }
    }
  }
}
</script>

<style lang="less">
#users {
  width: 100%;
}
</style>
