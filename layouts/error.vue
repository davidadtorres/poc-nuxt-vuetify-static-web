<template>
  <!-- <v-app> -->
  <v-container v-if="error.statusCode === 404">
    <div class="d-flex justify-start">
      <v-btn color="primary" class="mb-2" to="/"> Back Home </v-btn>
    </div>
    <div class="d-flex justify-center">
      <p class="text-h4">{{ pageNotFound }}</p>
    </div>
    <div class="d-flex flex-column justify-space-between align-center">
      <v-img
        aspect-ratio="16 / 9"
        width="800"
        alt="Not Found"
        src="/NotFound.svg"
      />
    </div>
  </v-container>
  <v-container v-else>
    <div class="d-flex justify-start">
      <v-btn color="primary" class="mb-2" to="/"> Back Home </v-btn>
    </div>
    <div class="d-flex justify-center">
      <p class="text-h4">{{ otherError }}</p>
    </div>
    <div class="d-flex flex-column justify-space-between align-center">
      <v-img
        aspect-ratio="16 / 9"
        width="800"
        alt="Not Found"
        src="/OtherError.svg"
      />
    </div>
  </v-container>

  <!-- <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/"> Home page </NuxtLink> -->
  <!-- </v-app> -->
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  beforeCreate() {
    this.$store.commit('setError', true)
  },
  beforeDestroy() {
    this.$store.commit('setError', false)
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
