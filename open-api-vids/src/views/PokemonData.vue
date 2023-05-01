<template>
  <div>
    <h1>{{ monster.name }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      monster: {}
    }
  },
  mounted: async function () {
    await this.getPokemon()
  },
  methods: {
    getPokemon: async function () {
      let result = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.id}`)
      let data = await result.json()
      this.monster = data
    }
  }
}
</script>

<style scoped></style>
