<template>
  <div id="admin-edit">
    <h1 class="admin-placeholder">1</h1>
    <div class="admin-main">
      <div class="chart-admin">
        <div ref="charts" :style="{width: '300px', height: '300px'}"></div>
      </div>
      <div class="crud-wrapper">
        <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
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
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    mounted() {
      this._drawLine()
    },
    methods: {
      _drawLine() {
        // TODO 应用真实数据
        // 基于准备好的dom，初始化echarts实例
        let _dom = this.$refs.charts
        if (_dom) {
          let myChart = this.$echarts.init(_dom)
          // 绘制图表
          myChart.setOption({
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: {
              data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
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
</style>
