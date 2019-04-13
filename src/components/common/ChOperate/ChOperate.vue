<template>
  <div class="ch-operate">
    <img src="../../../assets/operate.png" alt="" class="ch-operate-more">
    <div class="ch-operate-option">
      <slot name="option">
        <!-- slot内添加div按钮 -->
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ch-operate'
}
</script>

<style lang="less">
.ch-operate {
  position: relative;
  width: 38px;
  height: 38px;
  .ch-operate-option {
    display: none;
    text-align: center;
    position: absolute;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    width: 64px;
    top: 35px;
    left: 50%;
    margin-left: -32px;
    z-index: 10001;
    padding: 15px;
    color: #333333;
    div {
      display: flex;
      flex-flow: row wrap;
    }
    div>div {
      cursor: pointer;
      &:hover {
        color: #007AFE;
      }
    }
  }
  &:hover {
    .ch-operate-option {
      display: flex;
      flex-flow: row wrap;
    }
  }
}
</style>
