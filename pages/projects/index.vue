<template>
  <v-container class="mt-4">
    <div class="d-flex justify-start">
      <v-btn color="primary" class="mb-2" to="/"> Back Home </v-btn>
    </div>
    <div class="d-flex justify-center">
      <p class="text-h4">Project list</p>
    </div>

    <v-data-table
      :headers="headers"
      :items="projects"
      class="elevation-2 mb-10"
      hide-default-footer
    >
      <template v-slot:item.tech="{ item }">
        <v-chip
          v-for="tech in item.tech"
          :key="tech"
          small
          color="secondary"
          class="ml-2 my-1"
        >
          {{ tech }}
        </v-chip>
      </template>
      <template v-slot:item.actions="{ item }">
        <!-- <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon> -->

        <v-icon medium> mdi-information </v-icon>
        <a style="text-decoration: none" :href="item.url" target="_blank">
          <v-icon medium> mdi-web </v-icon>
        </a>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
// TODO: REMOVE WITH API
const PROJECTS = [
  {
    name: "Robin's Homepage",
    description: "The Robin's Blog",
    tech: ['Vue.js', 'Express.js', 'Vuetify'],
    url: 'https://google.com/',
  },
  {
    name: "Robin's Homepage mobile",
    description: "The Robin's Blog in mobile",
    tech: ['NativeScript-Vue', 'Express.js'],
    url: 'https://google.com/',
  },
]
const HEADERS = [
  {
    text: 'Project',
    align: 'start',
    sortable: false,
    value: 'name',
  },
  { text: 'Description', value: 'description' },
  { text: 'Technologies', value: 'tech' },
  { text: 'Actions', value: 'actions', sortable: false },
]

export default {
  data() {
    return {
      headers: HEADERS,
      projects: PROJECTS,
    }
  },
  methods: {},
}
</script>

<style scoped></style>
