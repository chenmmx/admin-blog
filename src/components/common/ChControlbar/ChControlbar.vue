<template>
  <div class="ch-controlbar">
    <div class="ch-controlbar-left">
      <slot name="left"></slot>
    </div>
    <div class="ch-controlbar-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChControlbar'
}
</script>

<style lang="less">
.ch-controlbar {
  display: flex;
  justify-content: space-between;
  margin: 35px 0 0 0;
  .ch-controlbar-right {
    display: flex;
    margin-right: 50px;
  }
}
</style>
