<template>
  <v-container class="mt-4">
    <v-row>
      <!-- Visible only for desktop -->
      <v-col cols="12" md="3" class="d-none d-md-block">
        <div class="sticky-panel">
          <v-btn color="primary" to="/" class="mb-6"> Back Home </v-btn>

          <nav class="section-nav text-subtitle-1">
            <ol>
              <li><NuxtLink to="#description">Description</NuxtLink></li>
              <li><NuxtLink to="#technologies">Technologies</NuxtLink></li>

              <li>
                <NuxtLink to="#development">Development</NuxtLink>
                <ul>
                  <li v-for="topic in dev_topics" :key="topic.id">
                    <NuxtLink :to="'#' + topic.id">{{ topic.title }}</NuxtLink>
                  </li>
                </ul>
              </li>
              <li><NuxtLink to="#improvements">Improvements</NuxtLink></li>
              <li><NuxtLink to="#conclusion">Conclusion</NuxtLink></li>
            </ol>
          </nav>
        </div>

        <!-- <v-navigation-drawer>
          <div>
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="title"> CONTENT </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <v-list flat>
              <v-list-item-group color="primary">
                <v-list-item link to="#description">
                  <v-list-item-title>Description</v-list-item-title>
                </v-list-item>
                <v-list-item link to="#technologies">
                  <v-list-item-title>Technologies</v-list-item-title>
                </v-list-item>
                <v-list-item link to="#development">
                  <v-list-item-title>Development</v-list-item-title>
                </v-list-item>

                <v-list-item
                  v-for="topic in dev_topics"
                  :key="topic.id"
                  link
                  :to="'#' + topic.id"
                >
                  <v-list-item-title class="ml-4">{{
                    topic.title
                  }}</v-list-item-title>
                </v-list-item>

                <v-list-item link to="#improvements">
                  <v-list-item-title>Improvements</v-list-item-title>
                </v-list-item>
                <v-list-item link to="#conclusion">
                  <v-list-item-title>Conclusion</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </div>
        </v-navigation-drawer> -->
      </v-col>
      <!-- Visible only for desktop -->
      <v-col cols="12" md="9" class="d-none d-md-block">
        <v-row>
          <v-col cols="12">
            <p class="text-h4 mb-10">
              {{ slug }}
            </p>
            <v-row align="center" class="mx-0 mb-10 text-h5">
              <v-chip dark color="deep-purple darken-1" class="mr-4">
                <v-icon left> mdi-label </v-icon>
                PoC
              </v-chip>
              <div class="subtitle mr-4">David Díaz</div>
              <div class="grey--text">Dec 29, 2020</div>
            </v-row>
            <v-img
              max-height="400"
              contain
              src="/PoC-1_Robins10_homepage.svg"
            ></v-img>
          </v-col>
        </v-row>

        <v-row class="mt-10">
          <v-col cols="12">
            <a id="description" class="anchor"></a>
            <p class="text-h4 primary--text">Description</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </v-col>
        </v-row>

        <v-row class="mt-10">
          <v-col cols="12">
            <a id="technologies" class="anchor"></a>
            <p class="text-h4 primary--text">Technologies</p>

            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th
                      v-for="header in header_list"
                      :key="header"
                      class="text-left"
                    >
                      {{ header }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="tech in tech_list" :key="tech.name">
                    <td>{{ tech.name }}</td>
                    <td>{{ tech.version }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-row>

        <v-row class="mt-10">
          <v-col cols="12">
            <a id="development" class="anchor"></a>
            <p class="text-h4 primary--text">Development</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <v-row v-for="topic in dev_topics" :key="topic.id" class="mt-10">
              <v-col cols="12">
                <a :id="topic.id" class="anchor"></a>
                <p class="text-h4 primary--text">
                  <v-icon large color="secondary"> mdi-map-marker-star </v-icon>
                  {{ topic.title }}
                </p>
                <p class="pl-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row class="mt-10">
          <v-col cols="12">
            <a id="improvements" class="anchor"></a>
            <p class="text-h4 primary--text">Improvements</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </v-col>
        </v-row>

        <v-row class="mt-10">
          <v-col cols="12">
            <a id="conclusion" class="anchor"></a>
            <p class="text-h4 primary--text">Conclusion</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </v-col>
        </v-row>
      </v-col>

      <!-- Visible only for mobile/tablet -->
      <v-col cols="12" class="d-md-none">
        <v-btn color="primary" to="/" class="mb-6"> Back Home </v-btn>
        <v-row>
          <v-col cols="12">
            <p class="text-h4 text-center mb-5">
              Creating this Robin's 10 homepage UI like a Blog, using Nuxt.js
              with Vuetify
            </p>
            <v-img
              max-height="400"
              contain
              src="/PoC-1_Robins10_homepage.svg"
            ></v-img>
          </v-col>
        </v-row>

        <v-row class="mt-10">
          <v-col cols="12">
            <a class="anchor"></a>
            <p class="text-h4 primary--text">Description</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </v-col>
        </v-row>

        <v-row class="mt-10">
          <v-col cols="12">
            <a class="anchor"></a>
            <p class="text-h4 primary--text">Technologies</p>

            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th
                      v-for="header in header_list"
                      :key="header"
                      class="text-left"
                    >
                      {{ header }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="tech in tech_list" :key="tech.name">
                    <td>{{ tech.name }}</td>
                    <td>{{ tech.version }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-row>

        <v-row class="mt-10">
          <v-col cols="12">
            <a class="anchor"></a>
            <p class="text-h4 primary--text">Development</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <v-row v-for="topic in dev_topics" :key="topic.id" class="mt-10">
              <v-col cols="12">
                <a class="anchor"></a>
                <p class="text-h4 primary--text">
                  <v-icon large color="secondary"> mdi-map-marker-star </v-icon>
                  {{ topic.title }}
                </p>
                <p class="pl-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row class="mt-10">
          <v-col cols="12">
            <a class="anchor"></a>
            <p class="text-h4 primary--text">Improvements</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </v-col>
        </v-row>

        <v-row class="mt-10">
          <v-col cols="12">
            <a class="anchor"></a>
            <p class="text-h4 primary--text">Conclusion</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-img contain max-height="250" src="/robin.svg" class="my-12"></v-img>
  </v-container>
</template>

<script>
const HEADERS = ['Name', 'Version']

export default {
  data() {
    return {
      slug: this.$route.params.slug,
      dev_topics: [
        { id: 'homepage', title: "Robin's 10 homepage" },
        { id: 'search', title: 'Searching feature' },
      ],
      tech_list: [
        { name: 'Nuxt.js', version: '2.14.12' },
        { name: 'Vuetify', version: '1.11.2' },
      ],
      header_list: HEADERS,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.contentNav, false)

    // const observer = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     const element = entry.target.getBoundingClientRect()
    //     const id = entry.target.getAttribute('id')
    //     console.log(element.bottom)
    //     console.log(element.top)
    //     console.log(id)
    //     if (element.bottom > 0) {
    //       document
    //         .querySelectorAll('.section-nav li.active')
    //         .forEach((active) => {
    //           active.classList.remove('active')
    //         })
    //       document
    //         .querySelector(`nav li a[href="${this.$route.path}#${id}"]`)
    //         .parentElement.classList.add('active')
    //     }

    //     // if (entry.intersectionRatio > 0) {
    //     //   document
    //     //     .querySelectorAll('.section-nav li.active')
    //     //     .forEach((active) => {
    //     //       active.classList.remove('active')
    //     //     })
    //     //   document
    //     //     .querySelector(`nav li a[href="${this.$route.path}#${id}"]`)
    //     //     .parentElement.classList.add('active')
    //     // }
    //   })
    // })

    // document.querySelectorAll('a[id]').forEach((anchor) => {
    //   observer.observe(anchor)
    // })
  },
  methods: {
    contentNav() {
      document.querySelectorAll('a[id]').forEach((anchor) => {
        const windowHeight = window.innerHeight
        const target = anchor.getBoundingClientRect()
        const id = anchor.getAttribute('id')
        // console.log(
        //   id +
        //     ' -- ' +
        //     target.top +
        //     ',' +
        //     target.bottom +
        //     '[' +
        //     windowHeight +
        //     ']'
        // )

        if (target.top <= windowHeight / 2) {
          document
            .querySelectorAll('.section-nav li.active')
            .forEach((active) => {
              active.classList.remove('active')
            })
          document
            .querySelector(`nav li a[href="${this.$route.path}#${id}"]`)
            .parentElement.classList.add('active')
        }
      })
    },
  },
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

.sticky-panel {
  position: sticky;
  top: 90px;
  border-right: 1px solid #efefef;
}

.section-nav ol {
  list-style: none;
  padding: 0;
}

.section-nav ul {
  list-style: none;
}

.section-nav a {
  text-decoration: none;
  display: block;
  padding: 7px 0;
  color: #37483e;
}

.section-nav li.active > a {
  color: #44aa00;
}

.section-nav a:hover,
.section-nav a:focus {
  color: #44aa00;
  font-weight: bold;
}

a.anchor {
  display: block;
  position: relative;
  top: -70px;
  visibility: hidden;
}
</style>
