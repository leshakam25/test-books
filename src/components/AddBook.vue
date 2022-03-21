<template>
  <v-container>
    <v-form ref="form" v-model="valid">
      <v-text-field
        v-model="name"
        label="Название книги"
        required
        autofocus
        :rules="nameRules"
      ></v-text-field>
      <v-text-field
        v-model="author"
        :rules="nameRules"
        label="Автор"
        required
      ></v-text-field>
      <v-text-field
        v-model="year"
        label="Год написания книги"
        required
        :rules="yearRules"
      ></v-text-field>
      <v-text-field
        v-model="imag"
        label="Введите ссылку на изображение"
        required
        :rules="imagRules"
      ></v-text-field>
      <v-btn :disabled="!valid" outlined x-large tile @click="submit">
        Сохранить
      </v-btn>
      <v-btn outlined x-large tile @click="reset"> Сбросить </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { uuid } from "vue-uuid";

export default {
  data: () => ({
    valid: false,
    name: "",
    author: "",
    year: "",
    imag: "",
    uuid: uuid.v1(),
    nameRules: [
      (v) => !!v || "Необходимо ввести название",
      (v) => v.length >= 4 || "Минимум 4 символа",
    ],
    yearRules: [
      (v) => !!v || "Необходимо ввести год",
      (v) => /[0-9]/.test(v) || "Допустимы только цифры",
      (v) => v.length === 4 || "Введите 4 символа",
    ],
    imagRules: [
      (v) => !!v || "Необходимо ввести ссылку",
      (v) => v.length > 10 || "Минимум 10 символов",
    ],
  }),

  methods: {
    reset() {
      this.$refs.form.reset();
    },
    submit() {
      const newBook = {
        name: this.name,
        author: this.author,
        year: this.year,
        imag: this.imag,
        id: uuid.v1(),
      };
      const currentBooks = JSON.parse(localStorage.getItem("books")) || [];
      const updatedBooks = [...currentBooks, newBook];
      localStorage.setItem("books", JSON.stringify(updatedBooks));
      this.valid = false;
      this.reset();
      this.$router.push("/");
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