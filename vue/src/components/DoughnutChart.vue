<template>
  <div class="container">
    <Doughnut
      v-if="isLoaded"
      class="barchart"
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'DoughnutChart',
  components: { Doughnut },
  data() {
    return { isLoaded: false, chartData: null, chartOptions: null }
  },
  async mounted() {
    async function getData() {
      let result = await fetch('https://data.cityofnewyork.us/resource/sj3k-gzyx.json')
      let data = await result.json()
      return data
    }
    //async functions need await when using fetch
    let x = await getData()

    var monthSums = {
      '01': 0,
      '02': 0,
      '03': 0,
      '04': 0,
      '05': 0,
      '06': 0,
      '07': 0,
      '08': 0,
      '09': 0,
      10: 0,
      11: 0,
      12: 0
    }

    for (var i = 0; i < x.length; i++) {
      //loops over every entry in x
      var entry = x[i]
      var date = entry.date.split('-')[1]
      console.log(date)
      var ppl = Number(entry.ili_pne_admit)
      monthSums[date] += ppl
    }

    //var monthSumsArr = []
    //for ()
    console.log(monthSums)

    /*     january: this.chartdata.filter((element) => element.date.includes(01)), */

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
          //data: x
          data: [
            monthSums['01'],
            monthSums['02'],
            monthSums['03'],
            monthSums['04'],
            monthSums['05'],
            monthSums['06'],
            monthSums['07'],
            monthSums['08'],
            monthSums['09'],
            monthSums['10'],
            monthSums['11'],
            monthSums['12']
          ]
        }
      ]
    }
    this.isLoaded = true
  }
}
</script>

<style scoped>
.container {
  width: 35vw;
  margin: 0rem auto;
}
</style>
