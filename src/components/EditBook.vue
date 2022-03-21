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
      <v-text-field
        v-model="imag"
        label="Введите ссылку на изображение"
        required
      ></v-text-field>

      <v-btn outlined x-large tile @click="submit"> Сохранить </v-btn>
      <v-btn outlined x-large tile>
        <router-link to="/">Отменить</router-link>
      </v-btn>
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
    imag: currentBook().imag || "",
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
      let currentBooks = JSON.parse(localStorage.getItem("books"));
      let bookId = currentBook().id;
      currentBooks.forEach(function (el, i) {
        if (el.id == bookId) currentBooks.splice(i, 1);
      });
      const newBook = {
        name: this.name,
        author: this.author,
        year: this.year,
        imag: this.imag,
        id: currentBook().id,
      };
      const updatedBooks = [...currentBooks, newBook];
      localStorage.setItem("books", JSON.stringify(updatedBooks));
      console.log(currentBooks);
    },
  },
};
</script>

<style scoped>
a {
  font-size: 16px;
  color: #2c3e50;
  text-decoration: none;
}
</style>
