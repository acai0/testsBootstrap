<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="/">Accueil</b-nav-item>

        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Page" right>
          <b-dropdown-item href="/">Bulma</b-dropdown-item>
          <b-dropdown-item href="bootstrap">Bootstrap</b-dropdown-item>
          <b-dropdown-item href="test">Test</b-dropdown-item>
          <b-dropdown-item href="tag">Tag</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
export default{}
</script>
<style scoped>
 .navbar.navbar-dark.bg-dark{
    background-color: #2c3e50!important;
 }
</style>