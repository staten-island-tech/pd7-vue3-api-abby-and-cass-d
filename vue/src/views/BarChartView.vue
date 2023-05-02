<template>
  <div>
    <h1>Number of People Admitted to Hospitals Due to Covid</h1>
    <Bar id="my-chart-id" :options="year" :data="chartData" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const stuff = ref('') //with ref, if we need some data to update regularly like with an async function, ref lets you
async function getStuff() {
  let result = await fetch('https://data.cityofnewyork.us/resource/sj3k-gzyx.json')
  let data = await result.json()
  console.log(data)
}
onMounted(() => {
  //onMounted lets you run the async function once the componenet is mounted
  getStuff()
})
</script>
