<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon to="/">
        <img
          aspect-ratio="16/9"
          width="40"
          alt="Robin's 10 Logo"
          src="/robins10_smalllogo.svg"
        />
      </v-app-bar-nav-icon>

      <v-toolbar-title id="header-title">Robin's 10</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <v-chip
        v-if="poc_chip"
        class="mr-2"
        small
        color="deep-purple darken-1"
        dark
        @click="right_drawer = !right_drawer"
      >
        PoC
      </v-chip>
      <v-chip
        v-if="prj_chip"
        class="mr-2"
        small
        color="teal darken-1"
        dark
        @click="right_drawer = !right_drawer"
      >
        Project
      </v-chip>
      <v-chip
        v-if="mgm_chip"
        class="mr-2"
        small
        color="blue darken-1"
        dark
        @click="right_drawer = !right_drawer"
      >
        Management
      </v-chip> -->

      <v-badge
        color="error"
        dot
        :value="menu_badge"
        left
        offset-y="11"
        offset-x="10"
      >
        <v-badge
          :value="$store.state.logged"
          overlap
          color="primary secondary--text"
          icon="mdi-shield-check"
          offset-y="21"
          offset-x="15"
          bottom
        >
          <v-btn icon @click="right_drawer = !right_drawer">
            <v-icon large>mdi-menu</v-icon>
          </v-btn>
        </v-badge>
      </v-badge>
    </v-app-bar>
    <div v-if="$store.state.logged || $store.state.error" class="mt-6"></div>
    <div v-else class="mt-2 mb-n10">
      <v-parallax dark height="220" src="/robins10_parallax.svg">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 id="parallax-tittle" class="display-1 font-weight-bold mt-14">
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
    </div>
    <v-main>
      <v-snackbar
        v-model="snackbar"
        timeout="-1"
        color="secondary"
        style="top: 80px"
        elevation="24"
      >
        Filters activated
        <template v-slot:action="{ attrs }">
          <v-btn
            color="primary"
            text
            v-bind="attrs"
            @click="right_drawer = !right_drawer"
          >
            Go Filters
          </v-btn>
        </template>
      </v-snackbar>
      <nuxt />
    </v-main>

    <v-navigation-drawer
      v-model="right_drawer"
      :right="right"
      temporary
      fixed
      style="z-index: 1000"
    >
      <v-list subheader shaped>
        <v-text-field
          v-model="search"
          label="Search"
          clearable
          class="mx-4 mt-5"
        ></v-text-field>

        <v-subheader>Filters</v-subheader>
        <v-list-item-group color="primary" multiple>
          <v-list-item @click.stop="filterCategory(poc_chip_indx)">
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox
                  ref="poc_chip"
                  :input-value="active"
                  color="deep-purple darken-1"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title class="deep-purple--text text--darken-1"
                  >PoC</v-list-item-title
                >
              </v-list-item-content>
            </template>

            <!-- <v-list-item-action>
              <v-checkbox
                v-model="poc_chip"
                color="deep-purple darken-1"
              ></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="deep-purple--text text--darken-1"
                >PoC</v-list-item-title
              >
            </v-list-item-content> -->
          </v-list-item>
          <v-list-item @click="filterCategory(prj_chip_indx)">
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox
                  ref="prj_chip"
                  :input-value="active"
                  color="teal darken-1"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title class="teal--text text--darken-1"
                  >Project</v-list-item-title
                >
              </v-list-item-content>
            </template>
            <!-- <v-list-item-action>
              <v-checkbox v-model="prj_chip" color="teal darken-1"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="teal--text text--darken-1"
                >Project</v-list-item-title
              >
            </v-list-item-content> -->
          </v-list-item>
          <v-list-item @click.stop="filterCategory(mgm_chip_indx)">
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox
                  ref="mgm_chip"
                  :input-value="active"
                  color="blue darken-1"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title class="blue--text text--darken-1"
                  >Management</v-list-item-title
                >
              </v-list-item-content>
            </template>
            <!-- <v-list-item-action>
              <v-checkbox v-model="mgm_chip" color="blue darken-1"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="blue--text text--darken-1"
                >Management</v-list-item-title
              >
            </v-list-item-content> -->
          </v-list-item>
        </v-list-item-group>
        <v-list-item>
          <v-list-item-content>
            <v-row no-gutters class="d-flex justify-center">
              <v-btn
                class="mr-2"
                small
                color="secondary"
                outlined
                @click="clearFilters"
              >
                Clear
              </v-btn>
              <v-btn small color="secondary" @click="performSearch">
                Search
              </v-btn>
            </v-row>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-subheader v-show="$store.state.logged">Settings</v-subheader>
      <v-list v-show="$store.state.logged" dense nav>
        <v-list-item
          v-for="item in settings"
          :key="item.title"
          link
          to="/posts/mgm"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-subheader>Access</v-subheader>

      <div v-if="$store.state.logged" class="mx-4">
        <v-card>
          <v-card-text class="text-h6 secondary--text text-center">
            {{ email }}
          </v-card-text>
        </v-card>
        <v-btn block color="primary" class="my-2" @click="logoutUser">
          Logout
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </div>

      <v-form
        v-else
        ref="login_form"
        v-model="valid_login_form"
        class="mx-4 mb-2"
        lazy-validation
      >
        <v-alert
          :value="login_alert"
          type="error"
          border="top"
          transition="scale-transition"
          dismissible
        >
          Login failed!
        </v-alert>

        <v-text-field
          v-model="email"
          :rules="[rules.required, rules.email]"
          label="E-mail"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          :append-icon="show_pass ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.password]"
          :type="show_pass ? 'text' : 'password'"
          label="Password"
          required
          @click:append="show_pass = !show_pass"
          @keyup.enter="loginUser"
        ></v-text-field>
        <v-btn block color="primary" class="mt-2" @click="loginUser">
          Login
          <v-icon>mdi-login</v-icon>
        </v-btn>
      </v-form>
    </v-navigation-drawer>

    <v-footer :absolute="fixed" padless app>
      <v-card flat tile width="100%" class="secondary">
        <v-card-text class="d-flex justify-center align-center py-4">
          <v-btn
            v-for="link in footer_links"
            :key="link.name"
            color="primary"
            text
            rounded
            class="mr-8"
            :to="link.path"
          >
            {{ link.name }}
          </v-btn>

          <v-btn
            href="mailto:robins10@mail.com?subject=Robin'10 Homepage"
            color="primary"
            icon
          >
            <v-icon>mdi-email</v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="d-flex justify-center">
          <span id="footer-title" class="primary--text"
            >&copy; 2020 Robin's 10 v{{ version }}</span
          >
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import pkg from '../package.json'

const POC_CHIP = 0
const PRJ_CHIP = 1
const MGM_CHIP = 2
export default {
  data() {
    return {
      version: pkg.version,
      right: true,
      fixed: true,
      right_drawer: false,
      poc_chip: false,
      prj_chip: false,
      mgm_chip: false,
      poc_chip_bkp: false,
      prj_chip_bkp: false,
      mgm_chip_bkp: false,
      poc_chip_indx: POC_CHIP,
      prj_chip_indx: PRJ_CHIP,
      mgm_chip_indx: MGM_CHIP,
      search: null,
      search_bkp: null,
      snackbar: false,
      footer_links: [{ name: 'About', path: '/about' }],
      menu_badge: false,
      valid_login_form: true,
      email: '',
      rules: {
        required: (value) => !!value || 'Required.',
        email: (value) => /.+@.+\..+/.test(value) || 'E-mail must be valid',
        password: (value) => value.length >= 8 || 'Min 8 characters',
      },
      password: '',
      show_pass: false,
      settings: [
        {
          title: 'Manage Posts',
          icon: 'mdi-file-document-edit',
          to: 'posts-mgm',
        },
        {
          title: 'Manage Projects',
          icon: 'mdi-application',
          to: 'posts-mgm',
        },
      ],
      login_alert: false,
    }
  },
  watch: {
    right_drawer: 'restoreFilter',
  },
  methods: {
    filterCategory(indx) {
      switch (indx) {
        case POC_CHIP:
          this.poc_chip = !this.poc_chip
          break
        case PRJ_CHIP:
          this.prj_chip = !this.prj_chip
          break
        default:
          // MGM_CHIP:
          this.mgm_chip = !this.mgm_chip
          break
      }
    },
    clearFilters() {
      // this.right_drawer = !this.right_drawer
      this.snackbar = false
      this.menu_badge = this.snackbar
      this.search = null
      this.search_bkp = null
      if (this.poc_chip) this.$refs.poc_chip.$refs.input.click()
      if (this.prj_chip) this.$refs.prj_chip.$refs.input.click()
      if (this.mgm_chip) this.$refs.mgm_chip.$refs.input.click()
      this.poc_chip = this.prj_chip = this.mgm_chip = false
      this.poc_chip_bkp = this.prj_chip_bkp = this.mgm_chip_bkp = false
    },
    performSearch() {
      this.right_drawer = !this.right_drawer
      this.search_bkp = this.search
      this.poc_chip_bkp = this.poc_chip
      this.prj_chip_bkp = this.prj_chip
      this.mgm_chip_bkp = this.mgm_chip
      this.snackbar =
        this.search === '' ||
        this.search ||
        this.poc_chip ||
        this.prj_chip ||
        this.mgm_chip
      this.menu_badge = this.snackbar
    },
    restoreFilter(val) {
      if (val) {
        if (this.poc_chip !== this.poc_chip_bkp)
          this.$refs.poc_chip.$refs.input.click()
        if (this.prj_chip !== this.prj_chip_bkp)
          this.$refs.prj_chip.$refs.input.click()
        if (this.mgm_chip !== this.mgm_chip_bkp)
          this.$refs.mgm_chip.$refs.input.click()
        this.search = this.search_bkp
        this.poc_chip = this.poc_chip_bkp
        this.prj_chip = this.prj_chip_bkp
        this.mgm_chip = this.mgm_chip_bkp
      }
    },
    loginUser() {
      if (this.$refs.login_form.validate()) {
        if (this.email === 'test@mail.com' && this.password === '12345678') {
          this.$store.commit('login')
          this.login_alert = false
        } else {
          this.login_alert = true
        }
      }
    },
    logoutUser() {
      this.$store.commit('logout')
      this.email = ''
      this.password = ''
    },
  },
}
</script>

<style scoped>
#parallax-tittle,
#parallax-subtittle,
#header-title,
#footer-title {
  font-family: 'Comfortaa', cursive !important;
  font-weight: bold;
}
</style>
