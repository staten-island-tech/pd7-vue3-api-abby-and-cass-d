<template>
    <div>
<h1>{{ monster.name }}</h1>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                monster:{}
            }
        },
        mounted: async function(){
            await this.getPokemon()
        },
        methods: { 
            getPokemon: 
            async function(){
                let res = await fetch (`https://pokeapi.co/api/v2/pokemon/${this. $route.params.id}`)
                //get the route u r on get the params passed in (id because the id is the pokemon passed in)
                let data = await res.json()
                this.monster = data
            }
        }
    } 
</script>

<style scoped>

</style>