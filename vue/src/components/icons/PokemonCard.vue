<template>
    <router-link :to="pkmnPath" class="card">
        link to pokemon data/name
<h2>{{ pokemon.name }}</h2>
<h3>{{ id }}</h3>
    </router-link>
</template>

<script setup>
import {computed} from `vue`
const props = defineProps({
    pokemon: Object,
    id: Number
})
const PkmnPath= computed(()=>{
    return `/PokemonData/${pokemon.name}`
})
//function returns string that is A PATH TO THE PAGE
</script>

<style scoped>
.card{
    width:28%;
    height:500px;
    background-color: aliceblue;
    margin:30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    text-transform: uppercase;  
}
img{
    width: 100%;
    height: 80%;
    object-fit: cover;
}
</style>