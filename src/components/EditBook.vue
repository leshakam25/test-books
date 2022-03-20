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

const currentBook = () => {
  let urlId = window.location.pathname;
  let editBooks = JSON.parse(localStorage.getItem("books"));
  let currentBook = editBooks.find((item) => item.id == urlId.slice(6));
  return currentBook;
};

export default {
  data: () => ({
    valid: true,
    name: currentBook().name || "",
    author: currentBook().author || "",
    year: currentBook().year || "",
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
        id: currentBook().id,
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
