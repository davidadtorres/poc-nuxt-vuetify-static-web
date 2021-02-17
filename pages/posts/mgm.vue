<template>
  <v-container class="mt-4">
    <div class="d-flex justify-space-between">
      <v-btn color="primary" class="mb-2" to="/"> Back Home </v-btn>
      <v-btn color="info" class="mb-2" to="/posts/new"> Add </v-btn>
    </div>
    <div class="d-flex justify-center">
      <p class="text-h4 mb-0">Post list</p>
    </div>

    <v-text-field
      label="Search"
      prepend-inner-icon="mdi-magnify"
      clearable
    ></v-text-field>

    <v-data-table
      :headers="headers"
      :items="posts"
      class="elevation-2 mb-10"
      hide-default-footer
    >
      <template v-slot:item.category="{ item }">
        <v-chip dark small :color="item.category.color" class="ml-2 my-1">
          {{ item.category.name }}
        </v-chip>
      </template>
      <template v-slot:item.actions="{ item }">
        <!-- <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon> -->

        <v-icon medium> mdi-pencil</v-icon>
        <v-icon medium @click="delete_alert = true">
          mdi-trash-can-outline
        </v-icon>
        <nuxt-link
          style="text-decoration: none"
          :to="item.path"
          target="_blank"
        >
          <v-icon medium> mdi-web </v-icon>
        </nuxt-link>
      </template>
    </v-data-table>

    <v-dialog v-model="delete_alert" max-width="400">
      <v-card>
        <v-card-title class="headline"> Remove definitively? </v-card-title>
        <v-card-text>
          Once this action is performed, it would cannot be reversed!
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="delete_alert = false">
            Disagree
          </v-btn>
          <v-btn color="green darken-1" text @click="delete_alert = false">
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
// TODO: REMOVE WITH API
const POSTS = [
  {
    title: "Create Robin's 10 homepage with Nuxt.js",
    created_at: 'Dec 22, 2020',
    category: { name: 'PoC', color: 'deep-purple darken-1' },
    path: '/about',
  },
  {
    title: "Create Robin's 10 Homepage as NativeScript-Vue app",
    created_at: 'Dec 29, 2020',
    category: { name: 'PoC', color: 'deep-purple darken-1' },
    path: '/about',
  },
]
const HEADERS = [
  {
    text: 'Title',
    align: 'start',
    sortable: false,
    value: 'title',
  },
  { text: 'Category', value: 'category' },
  { text: 'Created at', value: 'created_at' },
  { text: 'Actions', value: 'actions', sortable: false },
]

export default {
  data() {
    return {
      headers: HEADERS,
      posts: POSTS,
      delete_alert: false,
    }
  },
  methods: {},
}
</script>

<style scoped></style>
