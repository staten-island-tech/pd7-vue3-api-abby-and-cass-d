<template>
</template>

<script>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
  name: 'BarChart',
  components: { Bar },
  data: () => ({
    chartOptions: {},
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
          backgroundColor: [
            '#b6feff',
            '#92feff',
            '#80feff',
            '#6dfdff',
            '#5bfdff',
            '#07fcff',
            '#00c3c5',
            '#008283',
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
  width: 70vw;
  margin: 0rem auto;
}
/*   you did not
  ....bruh stop hater */
</style>
