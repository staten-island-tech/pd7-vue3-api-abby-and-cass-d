<template>
  <router-link :to="dataPath" class="card"></router-link>
  <h2>{{ data.complaint_type }}</h2>
  <h3>{{ id }}</h3>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  data: Object,
  id: Number
})
const dataPath = computed(() => {
  return `/PokemonData/${props.pokemon.name}` //turns the data into a url
})
</script>

<style scoped></style>
