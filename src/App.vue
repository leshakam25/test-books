<template>
  <div id="app">
    <nav>
      <v-btn outlined large tile>
        <router-link to="/">Список книг</router-link>
      </v-btn>
      <v-btn outlined large tile>
        <router-link to="/add">Добавить книгу</router-link>
      </v-btn>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-size: 16px;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
  }
}
button {
  margin: 4px;
  width: 200px;
}
</style>
