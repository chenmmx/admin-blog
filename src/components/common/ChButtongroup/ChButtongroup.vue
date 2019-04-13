<template>
  <div id="ch-button-group">
    <div class="ch-button-group-card">
      <span
        v-for="(item,index) in data"
        :key="index"
        :class="currentName===item.name?'active':''"
        @click="handleClick(item)"
      >{{item.name}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array
    },
    defaultItem: {
      type: String
    }
  },
  data () {
    return {
      currentName: ''
    }
  },
  created () {
    this.currentName = this.defaultItem
  },
  methods: {
    handleClick (item) {
      this.$emit('click', item.name)
      this.currentName = item.name
    }
  }
}
</script>

<style lang="less" scoped>
#ch-button-group {
  width: 96%;
  margin: 46px auto 0;
  display: flex;
  .ch-button-group-card {
    border: 1px solid #007afe;
    border-radius: 10px;
    color: #007afe;
    font-size: 14px;
    display: flex;
    overflow: hidden;
    position: relative;
    // &::after {
    //   position: absolute;
    //   right: 0;
    //   content: "|";
    //   color: #f1f5f8;
    //   background: #f1f5f8;
    //   top: 7px;
    // }
    .active {
      color: #fff;
      background: #007afe;
      &::after {
        content: "";
      }
    }
    & > span {
      height: 40px;
      min-width: 138px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      &::after {
        position: absolute;
        right: 0;
        content: "|";
      }
      &:last-child::after {
        content: "";
      }
      &:hover {
        color: #fff;
        cursor: pointer;
        background: #007afe;
        &::after {
          content: "";
        }
      }
    }
  }
}
</style>
