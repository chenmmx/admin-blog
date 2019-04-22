<template>
  <div id="login">
    <div class="login-main">
      <div class="login-main-title">管理员登陆</div>
      <el-form
        :model="formData"
        :rules="rules"
        label-width="80px"
        ref="form"
      >
        <el-form-item
          label="用户名"
          prop="username"
        >
          <el-col :span="20">
            <el-input v-model="formData.username"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
        >
          <el-col :span="20">
            <el-input v-model="formData.password"></el-input>
          </el-col>
        </el-form-item>
        <el-row
          type="flex"
          justify="center"
        >
          <el-col :span="11">
            <el-button @click="onReset">重置</el-button>
            <el-button
              type="primary"
              @click="onSubmit"
            >登陆</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
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
      }
    }
  },
  methods: {
    onReset () {
      this.formData = {
        username: '',
        password: ''
      }
    },
    onSubmit () {
      this.$refs['form'].validate(async (valid) => {
        if (valid) {
          let result = await this.$http.user.login(this.formData)
          if (result.data.status === 0) {
            this.$notify.success({
              title: '成功',
              message: '登陆成功'
            })
            window.sessionStorage.setItem('token', result.data.token)
            this.$router.push('/')
          } else {
            this.$notify.error({
              title: '失败',
              message: result.data.msg
            })
          }
        }
      })
    }
  }
}
</script>

<style lang="less">
#login {
  width: 100%;
  height: 100%;
  background: url("../../assets/login.jpg");
  background-size: 100%;
  .login-main {
    position: absolute;
    box-sizing: border-box;
    padding: 20px 15px;
    top: 220px;
    right: 50px;
    width: 400px;
    height: 320px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 16px 5px rgba(0, 0, 0, 0.06);
    border-radius: 10px;
    .login-main-title {
      text-align: center;
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 50px;
    }
  }
}
</style>
