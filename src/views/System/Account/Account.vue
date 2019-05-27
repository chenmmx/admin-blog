<template>
  <div id="account">
    <!-- Title -->
    <ch-title :title="title"></ch-title>
    <!-- Container -->
    <ch-container>
      <!-- Header -->
      <template slot="header-left">
        <el-button-group>
          <el-button @click="onAdd">新增</el-button>
        </el-button-group>
      </template>
      <!-- Body -->
      <template slot="body">
        <el-table
          ref="multipleTable"
          :data="accountList"
          tooltip-effect="dark"
          style="width: 100%"
        >
          <el-table-column label="账号" align="center">
            <template slot-scope="scope">{{ scope.row.username }}</template>
          </el-table-column>
          <el-table-column prop="password" label="密码" align="center"></el-table-column>
          <el-table-column prop="action" label="操作" width="100px">
            <template slot-scope="scope">
              <ch-operate>
                <div slot="option">
                  <div @click="onUpdate(scope.row.accountId)">修改</div>
                  <div @click="onDelete(scope.row.accountId)">删除</div>
                </div>
              </ch-operate>
            </template>
          </el-table-column>
        </el-table>
        <!-- Pagination -->
        <!-- <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageIndex"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="100"
          layout="prev, pager, next, jumper"
          :total="400"
          background
        ></el-pagination> -->
      </template>
    </ch-container>
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      @close="handleClose"
      width="30%">
      <el-form :model="formData" :rules="rules" label-width="80px" ref="form" v-if="dialogType === 'edit'">
        <el-form-item label="账号名" prop="username">
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
        <div style="text-align:center;padding:40px;">确认删除所选账号?</div>
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
  name: 'Account',
  async created () {
    await this.getAccountList()
  },
  data () {
    return {
      title: '账号管理',
      dialogVisible: false,
      dialogType: '',
      dialogTitle: '',
      formData: {
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
      pageIndex: 1,
      accountList: [],
      accountId: '',
      multipleSelection: []
    }
  },
  methods: {
    handleClose () {
      this.resetForm('form')
      this.formData = {
        username: '',
        password: ''
      }
    },

    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    handleSizeChange (val) {},
    handleCurrentChange (val) {},
    // 新增账号
    async onUpdate (id) {
      this.dialogVisible = true
      this.dialogTitle = '修改'
      this.dialogType = 'edit'
      let result = await this.$http.account.getInfo({
        accountId: id
      })
      if (result.data.status === 0) {
        this.formData = result.data.result[0]
        // console.log(result.data.result)
      }
    },
    // 删除
    onDelete (id) {
      this.dialogVisible = true
      this.dialogTitle = '修改'
      this.dialogType = 'delete'
      this.accountId = id
    },
    // 确认删除
    async confirmDelete () {
      let result = await this.$http.account.delete({
        accountId: this.accountId
      })
      if (result.data.status === 0) {
        this.$notify.success({
          title: '成功',
          message: '删除成功'
        })
        this.dialogVisible = false
        await this.getAccountList()
      }
    },
    // 获取账号列表
    async getAccountList () {
      let result = await this.$http.account.getAccountList()
      if (result.data.status === 0) {
        this.accountList = result.data.result
      }
    },
    // 新增账号
    async onAdd () {
      this.dialogVisible = true
      this.dialogTitle = '新增'
      this.dialogType = 'edit'
    },
    // 表单确认
    onSubmit () {
      this.$refs['form'].validate(async (valid) => {
        if (valid) {
          if (this.dialogTitle === '新增') {
            let result = await this.$http.account.add(this.formData)
            if (result.data.status === 0) {
              this.$notify.success({
                title: '成功',
                message: '新增账号成功'
              })
              this.dialogVisible = false
              await this.getAccountList()
              this.resetForm('form')
            }
          } else if (this.dialogType === '修改') {
            let result = await this.$http.account.edit(this.formData)
            if (result.data.status === 0) {
              this.$notify.success({
                title: '成功',
                message: '修改账号成功'
              })
              this.dialogVisible = false
              await this.getAccountList()
              this.resetForm('form')
            }
          }
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less">
#account {
  width: 100%;
}
</style>
