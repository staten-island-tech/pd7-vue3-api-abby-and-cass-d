<template>
  <div>

  </div>
</template>

<script setup>
import {
  ref, onMounted} from 'vue'
  const pokemon = ref('')
  async function getPokemon(){
    let res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    let data = await res.json()
    pokemon.value = data.results
    //if we want the value of something u need to use.value
  }
  onMounted(()=>{
    getPokemon
    //u can run it only once it is mounted
    //mounted is kinda like loaded
  } )
  //can reactively change data
  //ref needs data that updates in order for the values to update with the api
</script>

<style scoped>

</style>