<template>
  <div class="container">
    <!-- <Bar v-if="loaded" :data="chartData" /> -->
    <Bar
      v-if="isLoaded"
      class="barchart"
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return { isLoaded: false, chartData: null, chartOptions: null }
  },
  async mounted() {
    async function getData() {
      try {
        const { data } = await fetch('https://data.cityofnewyork.us/resource/sj3k-gzyx.json')

        // this.chartdata = data
        return data

        //now take the API data and save into a variable
        //let x = data blah blah
        /*       let January = this.chartdata.filter((element) => element.date.includes(01)) */
      } catch (e) {
        console.error(e)
      }
    }
    //async functions need await when using fetch
    let x = await getData()

    /*     january: this.chartdata.filter((element) => element.date.includes(01)), */
    console.log(x)

    this.chartData = {
      labels: [
        `January`,
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
          //then data: x
          data: x
          /* data: [120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10] */
        }
      ]
    }
    this.isLoaded = true
  }
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
