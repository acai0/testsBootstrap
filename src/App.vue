<template>
  <div id="app">
  
  <!--
    <nav>
    -->
      <!-- Navigation "menu" qui va être utilisée sur toute les pages views-->
      <!--
      <router-link to="/">Bulma</router-link> |
      <router-link to="/bootstrap">Bootstrap</router-link> |
      <router-link to="/test">Test</router-link> |
      <router-link to="/nav">Navbar</router-link>
    </nav>
    -->
       <Navigation />
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
