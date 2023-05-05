<template>
  <div>
    <h1>Number of People Admitted to Hospitals Due to Covid</h1>
    
  </div>
  <div class="container">
    <Bar class="barchart" id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { bar} from 'vue-chartjs'
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

export default (await import('vue'))
</script>

<style scoped></style>
