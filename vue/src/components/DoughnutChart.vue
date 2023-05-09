<template>
  <div class="container">
    <!-- <Bar v-if="loaded" :data="chartData" /> -->
    <Doughnut class="doughnutchart" id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'DoughnutChart',
  components: { Doughnut },
  data: () => ({
    chartOptions: {
      responsive: true,
     
    },
    loaded: false,
    chartData: {
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      datasets: [
        {
          label: 'Number of People',
          backgroundColor: [
            '#b6feff',
            '#92feff',
            '#80feff',
            '#6dfdff',
            '#5bfdff',
            '#28fdff',
            '#07fcff',
            '#00e3e6',
            '#00c3c5',
            '#00a2a4',
            '#008283',
            '#006162'
          ],
          data: [120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10]
        }
      ]
    }
  }),
  async mounted() {
    this.loaded = false

    try {
      const { data } = await fetch('https://data.cityofnewyork.us/resource/sj3k-gzyx.json')
      console.log(data)
      this.chartdata = data

      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  },
  mounted: function () {}
}
</script>

<style scoped>
.container {
  width: 35vw;
  margin: 0rem auto;
}
</style>
