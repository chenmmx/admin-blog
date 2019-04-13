<template>
  <div class="ch-form">
    <div class="ch-form-title">{{title}}</div>
    <div
      class="ch-form-body"
      :style="{width: width + 'px'}"
    >
      <slot name="form-body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChForm',
  props: {
    title: {
      type: String
    },
    width: {
      type: Number
    }
  }
}
</script>

<style lang="less">
.ch-form {
  width: 96%;
  padding: 35px 0 35px 0;
  margin: 46px auto;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 16px 5px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  .ch-form-title {
    font-weight: normal;
    color: rgba(64, 77, 85, 1);
    padding: 0 30px 28px 30px;
    border-bottom: 2px solid #eaeaea;
  }
  .ch-form-body {
    margin: 59px auto;
  }
  .upload-style {
    height: 120px;
    width: 120px;
    background: #f7f9fb;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  // 所在地区下拉框（4级下拉）
  .select-group-style {
    width: 24%;
    // margin-right: 1%;
  }

  //  3级下拉
  .select-group-style2 {
    width: 32%;
    // margin-right: 1.3%;
  }

  .el-input-group__append {
    background: none;
    color: #404d55;
  }
  .el-input-group--append .el-input__inner,
  .el-input-group__prepend {
    border-right: none;
  }
  .col-style {
    display: flex;
    justify-content: space-between;
  }
}
</style>
