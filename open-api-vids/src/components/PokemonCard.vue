<template>
  <div class="card"></div>
  <h2>{{ pokemon.name }}</h2>
  <h3>{{ id }}</h3>
</template>

<script setup>
const props = defineProps({
  pokemon: Object,
  id: Number
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
