<template>
  <div class="container">
    <!-- <Bar v-if="loaded" :data="chartData" /> -->
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
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

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data: () => ({
    chartOptions: {
      responsive: true
    },
    loaded: false,
    chartData: null // fix here!!!!
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
  }
}

/* export default {
      name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March'],
        datasets: [{ data: [40, 20, 12] }]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
  } */
</script>
