<template>
  <router-link :to="pokemonPath" class="card"></router-link>
  <h2>{{ pokemon.name }}</h2>
  <h3>{{ id }}</h3>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  pokemon: Object,
  id: Number
})
const pokemonPath = computed(()=>{
  return `/PokemonData/${props.pokemon.name}` //turns the data into a url
})
</script>

<style scoped>
.card {
  width: 28%;
  height: 50rem;
  background-color: aliceblue;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  text-transform: uppercase;
}
img {
  width: 100%;
  height: 80%;
  object-fit: cover;
}
</style>
