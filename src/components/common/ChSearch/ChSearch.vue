<template>
  <div class="ch-search">
    <el-autocomplete
      class="ch-search-input"
      v-model="val"
      :fetch-suggestions="querySearchAsync"
      @select="handleSelect"
      :placeholder="placeholder"
    ></el-autocomplete>
    <el-button class="ch-search-button" type="primary" icon="el-icon-search" circle @click="onClick"></el-button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ChSearch',
  props: {
    value: String,
    placeholder: String,
    params: {
      type: Object,
      required: true
    },
    searchKey: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      val: '',
      restaurants: []
    }
  },
  watch: {
    value (newval) {
      this.val = newval
    },
    val (val) {
      this.$emit('input', this.val)
    }
  },
  methods: {
    // 远程搜索
    async querySearchAsync (queryString, cb) {
      if (queryString !== '') {
        this.params[this.searchKey] = queryString
        var restaurants = this.restaurants
        let result = await axios({
          url: this.url,
          method: 'GET',
          params: this.params
        })
        if (result.data.status === 0) {
          restaurants = this.loadAll(result.data.result.list)
          this.restaurants = restaurants
          let results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants
          cb(results)
        }
      } else {
        restaurants = this.loadAll()
        this.restaurants = restaurants
        let results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants
        cb(results)
      }
    },
    // 筛选
    createStateFilter (queryString) {
      return (restaurant) => {
        if (restaurant.str) return false
        return (restaurant.value.indexOf(queryString) >= 0)
      }
    },
    handleSelect (item) {
      // console.log(item)
    },
    // 数据加载
    loadAll (data = []) {
      let dataList = []
      if (data.length > 0) {
        for (let item of data) {
          dataList.push({
            value: item[this.searchKey]
          })
        }
      }
      return dataList
    },
    // 点击按钮
    onClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="less">
.ch-search {
  display: inline-block;
  margin-left: 20px;
  .ch-search-input {
    input {
      background:rgba(247,249,251,1);
      border-radius:10px;
      outline: none;
      border: none;
    }
  }
  .ch-search-button {
    margin-left: 10px;
    width: 40px;
    height: 40px;
    // background: rgba(0, 122, 254, 1);
    border-radius: 10px;
    outline: none;
  }
}
</style>
