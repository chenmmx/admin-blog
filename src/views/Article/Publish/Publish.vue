<template>
  <div id="publish">
    <ch-title title="文章发布"></ch-title>
    <ch-form :title="title" :width="1000">
      <template slot="form-body">
        <el-form label-width="80px" :model="formData" :rules="rules" ref="form">
          <el-form-item label="文章标题" prop="essayname">
            <el-col :span="12">
              <el-input v-model="formData.essayname"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="文章内容" prop="essaycontent">
            <el-col :span="formCol">
              <el-input type="textarea" :rows="18" v-model="formData.essaycontent"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-col :span="formCol" style="text-align:center">
              <el-button type="primary" @click="onSubmit">发表</el-button>
            </el-col>
          </el-form-item>
        </el-form>
      </template>
    </ch-form>
  </div>
</template>

<script>
export default {
  name: 'Publish',
  async created () {
    if (this.$route.query.essayId) {
      await this.getArticleInfo(this.$route.query.essayId)
      this.title = '文章编辑'
    }
  },
  data () {
    return {
      title: '文章发表',
      formData: {
        essayname: '',
        essaycontent: ''
      },
      rules: {
        essayname: [
          { required: true, message: '请输入文章标题', trigger: 'blur' }
        ],
        essaycontent: [
          { required: true, message: '请输入文章内容', trigger: 'blur' }
        ]
      },
      formCol: 24
    }
  },
  methods: {
    onSubmit () {
      this.$refs['form'].validate(async (valid) => {
        if (valid) {
          if (this.$route.query.essayId) {
            let result = await this.$http.article.edit(this.formData)
            if (result.data.status === 0) {
              this.$notify.success({
                title: '成功',
                message: '修改成功'
              })
              this.$router.push('/article/management')
            }
          } else {
            let result = await this.$http.article.add(this.formData)
            if (result.data.status === 0) {
              this.$notify.success({
                title: '成功',
                message: '发表成功'
              })
              this.$router.push('/article/management')
            }
          }
        }
      })
    },
    async getArticleInfo (essayId) {
      let result = await this.$http.article.getInfo({
        essayId: essayId
      })
      if (result.data.status === 0) {
        this.formData.essayname = result.data.result[0].essayname
        this.formData.essaycontent = result.data.result[0].essaycontent
        this.formData.essayId = result.data.result[0].essayID
        console.log(this.formData)
      }
    }
  }
}
</script>

<style lang="less">

</style>
