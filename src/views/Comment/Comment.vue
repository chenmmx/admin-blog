<template>
  <div id="article">
    <!-- Title -->
    <ch-title :title="title"></ch-title>
    <!-- Container -->
    <ch-container>
      <!-- Header -->
      <template slot="header-left">
        <el-button-group>
          <el-button>删除</el-button>
        </el-button-group>
      </template>
      <!-- Body -->
      <template slot="body">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="公告标题">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="name" label="状态"></el-table-column>
          <el-table-column prop="address" label="发起人"></el-table-column>
          <el-table-column prop="name" label="时间"></el-table-column>
          <el-table-column prop="action" label="操作" width="100px">
            <template slot-scope="scope">
              <ch-operate>
                <div slot="option">
                  <div @click="onUpdate(scope.row.id)">修改</div>
                  <div @click="onDelete(scope.row.id)">删除</div>
                </div>
              </ch-operate>
            </template>
          </el-table-column>
        </el-table>
        <!-- Pagination -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageIndex"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="100"
          layout="prev, pager, next, jumper"
          :total="400"
          background
        ></el-pagination>
      </template>
    </ch-container>
  </div>
</template>

<script>
export default {
  name: 'Article',
  data () {
    return {
      title: '评论管理',
      pageIndex: 1,
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: '',
      multipleSelection: []
    }
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    handleSizeChange (val) {},
    handleCurrentChange (val) {},
    onUpdate (id) {
    },
    onDelete (id) {
    }
  }
}
</script>

<style lang="less">
#article {
  width: 100%;
}
</style>
