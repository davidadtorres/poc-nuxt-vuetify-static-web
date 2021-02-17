<template>
  <v-container class="mt-4">
    <div class="d-flex justify-space-between">
      <v-btn color="primary" class="mb-2" to="/"> Back Home </v-btn>
      <v-btn color="info" class="mb-2" @click="validate"> Save </v-btn>
    </div>
    <div class="d-flex justify-center">
      <p class="text-h4 mb-0">New Project</p>
    </div>

    <v-row no-gutters class="mb-10">
      <v-col>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            label="Name"
            :rules="rules"
            required
            clearable
          ></v-text-field>

          <v-text-field
            label="Description"
            :rules="rules"
            required
            clearable
          ></v-text-field>

          <v-text-field label="URL" clearable></v-text-field>

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
            :items="technologies"
            label="Select a technology"
            chips
            clearable
            :rules="rules"
            required
          ></v-select>

          <v-textarea
            clearable
            label="Notes"
            :rules="rules"
            required
          ></v-textarea>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      rules: [(v) => !!v || 'Field is required'],
      date_menu: false,
      date: new Date().toISOString().substr(0, 10),
      technologies: ['Vue.js', 'Express.js', 'Vuetify'],
    }
  },
  methods: {
    validate() {
      this.$refs.form.validate()
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
