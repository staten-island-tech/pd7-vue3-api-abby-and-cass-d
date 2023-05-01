<template>
  <div class="container">
    <PokemonCard
      v-for="(monster, index) in pokemon"
      :key="monster.name"
      :id="index + 1"
      :pokemon="monster"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import PokemonCard from '../components/PokemonCard.vue'
const pokemon = ref('') //with ref, if we need some data to update regularly like with an async function, ref lets you
async function getPokemon() {
  let result = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
  let data = await result.json()
  pokemon.value = data.results
}
onMounted(() => {
  //onMounted lets you run the async function once the componenet is mounted
  getPokemon()
})
</script>

<style scoped>
.container {
  width: 30vw;
  margin: 3rem auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>

<!-- "setup" lets vue know that you want to use the composition api, which is better than the options api since everything can be written in a way that makes sense for those that have been writing in vanilla js -> basically everything makes more sense logically -->
<!-- every vue component hs a life cycle and we have the ability to run componenets at certain time through it-->
<!--we'll be usig=ng the lifecycle in this project but really on mounted and created will be actually needed-->
