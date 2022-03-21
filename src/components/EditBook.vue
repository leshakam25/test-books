<template>
  <v-container>
    <v-form ref="form" v-model="valid">
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
      <v-btn outlined x-large tile> Отменить </v-btn>
    </v-form>
  </v-container>
</template>
<script>
export default {
  created() {
    const id = this.$route.params.id;
    const editBooks = JSON.parse(localStorage.getItem("books"));
    const currentBook = editBooks.find((item) => item.id === id);
    const { name, year, author, imag } = currentBook;
    this.uuid = id;
    this.name = name;
    this.year = year;
    this.imag = imag;
    this.author = author;
  },
  data: () => ({
    valid: true,
    name: "",
    author: "",
    year: "",
    imag: "",
    uuid: "",
  }),

  methods: {
    reset() {
      this.$refs.form.reset();
    },
    submit() {
      let currentBooks = JSON.parse(localStorage.getItem("books"));
      console.log("currentBooks", currentBooks);
      const newBook = {
        name: this.name,
        author: this.author,
        year: this.year,
        imag: this.imag,
        id: this.uuid,
      };
      const elementIndex = currentBooks.findIndex((x) => x.id === this.uuid);
      currentBooks[elementIndex] = newBook;
      localStorage.setItem("books", JSON.stringify(currentBooks));
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