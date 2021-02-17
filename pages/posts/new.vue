<template>
  <div class="mt-4 mx-2">
    <div class="d-flex justify-space-between mx-4">
      <v-btn color="primary" class="mb-2" to="/"> Back Home </v-btn>

      <v-menu bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="info" dark v-bind="attrs" v-on="on"> Save </v-btn>
        </template>

        <v-list>
          <v-list-item link @click="validate">
            <v-list-item-title>Definitive</v-list-item-title>
          </v-list-item>
          <v-list-item link @click="validate">
            <v-list-item-title>Draft</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <div class="d-flex justify-center">
      <p class="text-h4 mb-0">New Post</p>
    </div>

    <v-row no-gutters class="mb-10 mx-4">
      <v-col cols="12">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-file-input
            show-size
            label="Picture"
            prepend-icon="mdi-camera"
            :rules="rules"
            required
          ></v-file-input>

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

          <v-text-field label="Repo URL" clearable></v-text-field>

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

          <v-card v-for="item in sections" :key="item.id" class="mb-8">
            <v-card-title>
              <span class="headline">Section #{{ item.id }}</span>

              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>

            <v-card-text>
              <v-text-field
                v-model="item.title"
                label="Section title"
                :rules="rules"
                required
                clearable
              ></v-text-field>

              <tiptap-vuetify
                v-model="item.content"
                placeholder="Add section content…"
                :extensions="extensions"
                class="mb-4"
              />

              <v-card
                v-for="sitem in item.subsections"
                :key="sitem.title"
                class="ml-8 mb-8"
              >
                <v-card-title>
                  <span class="headline"
                    >Sub-section #{{ item.id }}.{{ sitem.id }}</span
                  >

                  <v-spacer></v-spacer>

                  <v-btn icon>
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-card-title>

                <v-card-text>
                  <v-text-field
                    v-model="sitem.title"
                    label="Sub-section title"
                    :rules="rules"
                    required
                    clearable
                  ></v-text-field>

                  <tiptap-vuetify
                    v-model="sitem.content"
                    placeholder="Add sub-section content…"
                    :extensions="extensions"
                    class="mb-4"
                  />
                </v-card-text>
              </v-card>

              <div class="d-flex justify-center">
                <v-btn color="secondary" @click="createNewSubSection(item.id)">
                  New sub-section
                </v-btn>
              </div>
            </v-card-text>
          </v-card>

          <v-btn color="secondary" @click="createNewSection">
            New section
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
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
        History,
        [
          Heading,
          {
            options: {
              levels: [2, 3],
            },
          },
        ],
        Bold,
        Italic,
        Underline,
        Strike,
        ListItem,
        BulletList,
        OrderedList,
        Blockquote,
        Code,
        Link,
        Image,
        HorizontalRule,
        Paragraph,
        HardBreak,
      ],
      sections: [
        {
          id: 1,
          title: 'Introduction',
          content: 'This is my first instroduction...',
          subsections: [{ id: 1, title: 'Test', content: 'Test content...' }],
        },
      ],
    }
  },
  methods: {
    validate() {
      this.$refs.form.validate()
    },
    createNewSection() {
      this.sections.push({
        id: this.sections.length + 1,
        title: 'Conclusion test',
        content: 'This is my first conclusion test content...',
        subsections: [],
      })
    },
    createNewSubSection(sectId) {
      this.sections[sectId - 1].subsections.push({
        id: this.sections[sectId - 1].subsections.length + 1,
        title: 'Conclusion SUBSECTION test',
        content: 'This is my first conclusion SUBSECTION test content...',
      })
    },
    // TODO: Create delete section/subsection feature
    deleteSection() {},
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
