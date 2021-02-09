<template>
  <div>
    <v-parallax height="220" src="/robins10_parallax.svg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 id="parallax-tittle" class="display-1 font-weight-bold">
            Robin's 10
          </h1>
          <h4 id="parallax-subtittle" class="subheading">
            Fair and accuracy software development!
          </h4>

          <v-btn class="mt-2" color="primary" to="/projects">
            Go to Projects
          </v-btn>
        </v-col>
      </v-row>
    </v-parallax>
    <v-container>
      <v-card
        v-for="post in posts"
        :key="post.id"
        class="mx-sm-10 my-10"
        elevation="2"
        outlined
      >
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          max-height="400"
          contain
          src="/PoC-1_Robins10_homepage.svg"
        ></v-img>

        <v-card-title> {{ post.title }}</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0 mb-10">
            <v-chip dark small :color="post.category.color" class="mr-4">
              <v-icon left> mdi-label </v-icon>
              {{ post.category.name }}
            </v-chip>
            <div class="subtitle-1 mr-4">{{ post.author }}</div>
            <div class="grey--text">{{ post.date }}</div>
          </v-row>

          <div>{{ post.description }}</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-actions class="d-flex justify-space-between">
          <v-btn color="primary" text @click="loadPostDetail(post.title)">
            Read more
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-row align="center" justify="center" class="ma-5">
        <v-btn :loading="more_btn_loading" color="primary" @click="loadMore">
          Load More
        </v-btn>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// TODO: REMOVE WITH API
const POSTS = [
  {
    id: 1,
    author: 'David Díaz',
    date: 'Dec 22, 2020',
    title: "Create Robin's 10 homepage with Nuxt.js",
    description:
      "Creating this Robin's 10 homepage UI like a Blog, using Nuxt.js with Vuetify",
    category: { name: 'PoC', color: 'deep-purple darken-1' },
  },
  {
    id: 2,
    author: 'David Díaz',
    date: 'Dec 29, 2020',
    title: "Create Robin's 10 Homepage as NativeScript-Vue app",
    description:
      "Creating a Robin's 10 mobile app like a Blog, using NativeScript-Vue",
    category: { name: 'PoC', color: 'deep-purple darken-1' },
  },
]

export default {
  data() {
    return {
      posts: POSTS,
      more_btn_loading: false,
    }
  },
  methods: {
    loadMore() {
      this.more_btn_loading = true

      setTimeout(() => {
        this.more_btn_loading = false
      }, 2000)
    },
    loadPostDetail(title) {
      this.$router.push({
        name: 'posts-slug',
        params: { slug: title.split(/[ .]/).join('-') },
      })
    },
  },
}
</script>

<style scoped>
#parallax-tittle,
#parallax-subtittle {
  font-family: 'Comfortaa', cursive !important;
  font-weight: bold;
}
</style>
