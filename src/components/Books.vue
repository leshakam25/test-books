<template>
  <v-container fluid>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Логотип</th>
            <th class="text-left">Название</th>
            <th class="text-left">Автор</th>
            <th class="text-left">Дата создания</th>
            <th class="text-left">Редактировать/<br />удалить</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in books" :key="book.id">
            <td>
              <v-layout>
                <v-img
                  max-height="120px"
                  max-width="80px"
                  :src="book.imag"
                  alt="no logo"
                  contain
                ></v-img
              ></v-layout>
            </td>
            <td>{{ book.name }}</td>
            <td>{{ book.author }}</td>
            <td>{{ book.year }}</td>
            <td>
              <router-link :to="{ name: 'EditBook', params: { id: book.id } }">
                <v-btn icon outlined large tile>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
                    />
                  </svg>
                </v-btn>
              </router-link>
              <!-- <router-link
                :to="{ name: 'DeleteBook', params: { id: book.id } }"
              > -->
              <v-btn icon outlined large tile @click="del(book.id)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
                  /></svg
              ></v-btn>
              <!-- </router-link> -->
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  name: "BooksList",

  data() {
    const books = JSON.parse(localStorage.getItem("books")) || [];
    return {
      books,
    };
  },
  methods: {
    del(id) {
      const filterById = (book) => {
        return book.id !== id;
      };
      const newBooks = this.books.filter(filterById);
      this.books = newBooks;
      localStorage.setItem("books", JSON.stringify(newBooks));
    },
  },
};
</script>

<style scoped>
</style>