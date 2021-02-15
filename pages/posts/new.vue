<template>
  <v-container class="mt-4">
    <div class="d-flex justify-space-between">
      <v-btn color="primary" class="mb-2" to="/"> Back Home </v-btn>
      <v-btn color="info" class="mb-2" @click="validate"> Save </v-btn>
    </div>
    <div class="d-flex justify-center">
      <p class="text-h4 mb-0">New Post</p>
    </div>

    <v-row no-gutters class="mb-10">
      <v-col md="10" offset-md="1">
        <v-form id="static" ref="form" v-model="valid" lazy-validation>
          <v-text-field
            label="Title"
            :rules="rules"
            required
            clearable
          ></v-text-field>

          <v-text-field
            label="Author"
            :rules="rules"
            required
            clearable
          ></v-text-field>

          <v-menu
            v-model="date_menu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Select a date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                clearable
                :rules="rules"
                required
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              @input="date_menu = false"
            ></v-date-picker>
          </v-menu>

          <v-select
            :items="categories"
            label="Select a category"
            chips
            clearable
            :rules="rules"
            required
          ></v-select>

          <v-card class="mb-8">
            <v-card-title>
              <span class="headline">Section 1</span>

              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>

            <v-card-text>
              <v-text-field
                label="Section title"
                :rules="rules"
                required
                clearable
              ></v-text-field>

              <tiptap-vuetify
                placeholder="Add section content…"
                :extensions="extensions"
                class="mb-4"
              />

              <v-card class="ml-8 mb-8">
                <v-card-title>
                  <span class="headline">Sub-section 1.1</span>

                  <v-spacer></v-spacer>

                  <v-btn icon>
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-card-title>

                <v-card-text>
                  <v-text-field
                    label="Sub-section title"
                    :rules="rules"
                    required
                    clearable
                  ></v-text-field>

                  <tiptap-vuetify
                    placeholder="Add sub-section content…"
                    :extensions="extensions"
                    class="mb-4"
                  />
                </v-card-text>
              </v-card>
              <div class="d-flex justify-center">
                <v-btn color="secondary"> New sub-section </v-btn>
              </div>
            </v-card-text>
          </v-card>

          <v-btn id="button" color="secondary" @click="createNewSection">
            New section
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import the component and the necessary extensions
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History,
  Image,
} from 'tiptap-vuetify'

export default {
  components: { TiptapVuetify },
  data() {
    return {
      valid: true,
      rules: [(v) => !!v || 'Field is required'],
      date_menu: false,
      date: new Date().toISOString().substr(0, 10),
      categories: ['PoC', 'Project', 'Management'],
      extensions: [
        Image,
        History,
        Blockquote,
        Link,
        Underline,
        Strike,
        Italic,
        ListItem,
        BulletList,
        OrderedList,
        [
          Heading,
          {
            options: {
              levels: [3],
            },
          },
        ],
        Bold,
        Link,
        Code,
        HorizontalRule,
        Paragraph,
        HardBreak,
      ],
    }
  },
  methods: {
    validate() {
      this.$refs.form.validate()
    },
    createNewSection() {
      const stat = document.getElementById('static')
      const vueContainer = document.createElement('div')
      vueContainer.setAttribute('id', 'div-1')
      vueContainer.innerHTML = `
          <v-card class="mb-8">
            <v-card-title>
              <span class="headline">Section 1</span>

              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>

            <v-card-text>
              <v-text-field
                label="Section title"
                :rules="rules"
                required
                clearable
              ></v-text-field>

              <tiptap-vuetify
                placeholder="Add section content…"
                :extensions="extensions"
                class="mb-4"
              />

              <v-card class="ml-8 mb-8">
                <v-card-title>
                  <span class="headline">Sub-section 1.1</span>

                  <v-spacer></v-spacer>

                  <v-btn icon>
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-card-title>

                <v-card-text>
                  <v-text-field
                    label="Sub-section title"
                    :rules="rules"
                    required
                    clearable
                  ></v-text-field>

                  <tiptap-vuetify
                    placeholder="Add sub-section content…"
                    :extensions="extensions"
                    class="mb-4"
                  />
                </v-card-text>
              </v-card>
              <div class="d-flex justify-center">
                <v-btn color="secondary"> New sub-section </v-btn>
              </div>
            </v-card-text>
          </v-card>`
      // stat.appendChild(vueContainer)

      stat.insertBefore(vueContainer, document.getElementById('button'))
      // TODO: Use same vue components into component inserted using Vue.extend
      //   (https://vuejs.org/v2/api/#Vue-extend)
      this.$mount(vueContainer)
    },
    // reset() {
    //   this.$refs.form.reset()
    // },
    // resetValidation() {
    //   this.$refs.form.resetValidation()
    // },
  },
}
</script>

<style scoped></style>
