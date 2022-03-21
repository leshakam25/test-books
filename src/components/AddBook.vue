<template>
  <v-container fluid>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        label="Название книги"
        required
      ></v-text-field>
      <v-text-field v-model="author" label="Автор" required></v-text-field>
      <v-text-field
        v-model="year"
        label="Год написания книги"
        required
      ></v-text-field>

      <v-btn outlined x-large tile @click="submit"> Сохранить </v-btn>
      <v-btn outlined x-large tile @click="reset"> Сбросить </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { uuid } from "vue-uuid";

export default {
  data: () => ({
    valid: true,
    name: "",
    author: "",
    year: "",
    uuid: uuid.v1(),
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    submit() {
      const newBook = {
        name: this.name,
        author: this.author,
        year: this.year,
        id: uuid.v1(),
      };
      const currentBooks = JSON.parse(localStorage.getItem("books")) || [];
      const updatedBooks = [...currentBooks, newBook];
      localStorage.setItem("books", JSON.stringify(updatedBooks));
      console.log("updatedBooks", updatedBooks);
    },
  },
};
</script>

<style scoped>
</style>
