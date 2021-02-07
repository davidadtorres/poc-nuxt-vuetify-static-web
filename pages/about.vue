<template>
  <v-container>
    <v-btn color="primary" to="/" class="mb-8"> Back Home </v-btn>

    <v-row>
      <v-card class="mx-3 mb-10">
        <v-img height="200px" src="/robins10_header.svg">
          <v-card-title class="secondary--text mt-8">
            <v-avatar size="120">
              <img alt="David" src="/robin.svg" />
            </v-avatar>
          </v-card-title>
        </v-img>

        <v-card-text>
          <div class="text-h5 font-weight-bold my-2">
            About Robin's 10 and me...
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped></style>
