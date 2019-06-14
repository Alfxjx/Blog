<template>
  <div id="admin-edit">
    <h1 class="admin-placeholder">1</h1>
    <div class="admin-main">
      <div ref="charts" :style="{width: '300px', height: '300px'}"></div>
    </div>
    <the-footer></the-footer>
  </div>
</template>
<script>
  import TheFooter from '../components/TheFooter'

  export default {
    name: 'adminEdit',
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
      TheFooter
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
