<template>
  <div id="app">
    <nav>
      <router-link to="/">
        <v-btn outlined large tile> Список книг </v-btn></router-link
      >
      <router-link to="/add"
        ><v-btn outlined large tile> Добавить книгу </v-btn></router-link
      >
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