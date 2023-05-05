<template>
  <div>
    <h1>Number of People Admitted to Hospitals Due to Covid</h1>
<<<<<<< HEAD

=======
    <BarChart></BarChart>
>>>>>>> 62a53e6a97262031c7c039f8014f6af4ac614173
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BarChart from '../components/BarChart.vue'
const stuff = ref('') //with ref, if we need some data to update regularly like with an async function, ref lets you
async function getStuff() {
  let result = await fetch('https://data.cityofnewyork.us/resource/sj3k-gzyx.json')
  let data = await result.json()
/*   console.log(data) */
}
onMounted(() => {
  //onMounted lets you run the async function once the componenet is mounted
  getStuff()
})
</script>

<style scoped></style>
