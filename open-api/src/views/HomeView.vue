<template>
  <div>
    <DataCards
      v-for="(dat, index) in data"
      :key="dat.complaint_type"
      :id="index + 1"
      :pokemon="dat"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DataCards from '../components/DataCards.vue'
const stuff = ref('') //with ref, if we need some data to update regularly like with an async function, ref lets you
async function getStuff() {
  let result = await fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json')
  let data = await result.json()
  console.log(data)
}
onMounted(() => {
  //onMounted lets you run the async function once the componenet is mounted
  getStuff()
})
</script>

<style scoped></style>
