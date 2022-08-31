<template>
  <div>
    <div class="bar" id="bar" ref="bar"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts';
console.log(echarts)
export default {
  data() {
    return {
      barChart: null,
    }
  },
  methods: {
    initBar() {
      this.barChart = echarts.init(this.$refs.bar);
      let option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };
      this.barChart.setOption(option);
    }
  },
  mounted() {
    this.initBar();
    // 此种写法目前不生效
    //   window.onresize = () => {
    //     this.barChart.resize();
    // }
    window.addEventListener('resize', () => {
      // this.barChart.resize();
    })
  }
}
</script>
<style lang="scss" scoped>
.bar {
  width: 50%;
  height: 500px;
}
</style>