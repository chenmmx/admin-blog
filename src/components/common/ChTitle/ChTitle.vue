<template >
  <div class="ch-title">
    {{title}}
  </div>
</template>

<script>
export default {
  name: 'ChTitle',
  props: {
    title: String
  }
}
</script>
<style lang="less">
.ch-title {
    width: 96%;
    margin: 46px auto 0;
    font-size:20px;
    font-weight:600;
    color:rgba(64,77,85,1);
    line-height:28px;
}
</style>
