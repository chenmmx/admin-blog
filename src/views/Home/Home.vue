<template>
    <div id="home">
        <div class="container">
          <div class="Chart__list">
            <div class="Chart">
              <h2 style="text-align: center;">数量统计</h2>
              <line-example></line-example>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import LineExample from '@/components/LineChart.js'

export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components: {
    LineExample
  }
}
</script>

<style lang="less">
#home {
  .container {
    margin: 100px auto 0;
    width: 96%;
    height: 600px;
  }
    .Chart {
      background: #f0f0f0;
      border-radius: 15px;
      height: 600px;
      box-shadow: 0px 2px 15px rgba(25, 25, 25, 0.27);
      margin:  25px 0;
    }
    .Chart h2 {
      margin-top: 0;
      padding: 15px 0;
      color:  #0e0e0e;
    }
}
</style>
