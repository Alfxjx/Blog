<template>
  <div id="admin-edit">
    <h1 class="admin-placeholder">1</h1>
    <div class="admin-main">
      <div class="chart-admin">
        <div ref="view" :style="{width: '300px', height: '300px'}"></div>
        <div ref="like" :style="{width: '300px', height: '300px'}"></div>
      </div>
      <div class="crud-wrapper">
        <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="title"
            label="题目"
            width="180">
          </el-table-column>
          <el-table-column
            prop="viewCount"
            label="阅读数"
            width="180">
          </el-table-column>
          <el-table-column
            prop="likes"
            label="喜欢数">
          </el-table-column>
        </el-table>
      </div>
    </div>
    <the-footer></the-footer>
  </div>
</template>
<script>
  import TheFooter from '../components/TheFooter'
  import { Table, TableColumn } from 'element-ui'

  export default {
    name: 'adminEdit',
    data() {
      return {}
    },
    created() {
      if (!this.$store.state.getBlogList) {
        this.$store.dispatch('getBlogList')
      }
    },
    mounted() {
      this._drawView()
      this._drawLike()
    },
    computed: {
      viewCountData() {
        let res = []
        let data = this.$store.state.blogList
        data.forEach(item => {
          res.push(item.blogInfo.viewCount)
        })
        return res
      },
      countTitle() {
        let res = []
        let data = this.$store.state.blogList
        data.forEach(item => {
          res.push(item.title)
        })
        return res
      },
      likeCountData() {
        let res = []
        let data = this.$store.state.blogList
        data.forEach(item => {
          res.push(item.blogInfo.likes)
        })
        return res
      },
      tableData() {
        let res = []
        let data = this.$store.state.blogList
        data.forEach(item => {
          let obj = {}
          obj['title'] = item.title
          obj['viewCount'] = item.blogInfo.viewCount
          obj['likes'] = item.blogInfo.likes
          res.push(obj)
        })
        return res
      }
    },
    methods: {
      _drawView() {
        // 基于准备好的dom，初始化echarts实例
        let _dom = this.$refs.view
        if (_dom) {
          let myChart = this.$echarts.init(_dom)
          // 绘制图表
          myChart.setOption({
            title: { text: '阅读数分布' },
            tooltip: {},
            xAxis: {
              data: this.countTitle
            },
            yAxis: {},
            series: [{
              name: '阅读量',
              type: 'bar',
              data: this.viewCountData
            }]
          })
        } else {
          console.log('error not ref.chart')
        }
      },
      _drawLike() {
        let _dom = this.$refs.like
        if (_dom) {
          let myChart = this.$echarts.init(_dom)
          // 绘制图表
          myChart.setOption({
            title: { text: '喜欢数分布' },
            tooltip: {},
            xAxis: {
              data: this.countTitle
            },
            yAxis: {},
            series: [{
              name: '喜欢数',
              type: 'bar',
              data: this.likeCountData
            }]
          })
        } else {
          console.log('error not ref.chart')
        }
      }
    },
    components: {
      TheFooter,
      elTable: Table,
      elTableColumn: TableColumn
    }
  }
</script>

<style scoped>
  #admin-edit {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .admin-placeholder {
    color: transparent;
  }

  .admin-main {
    flex: 1;
  }

  .chart-admin {
    display: flex;
    flex-direction: row;
  }

  @media screen and (max-width: 600px) {
    .chart-admin {
      display: flex;
      flex-direction: column;
    }
  }
</style>
