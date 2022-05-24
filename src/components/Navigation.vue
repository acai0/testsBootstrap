<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
      <b-nav-item href="/">
      <img src="../assets/logo.png">
      </b-nav-item>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Page" block>
          <b-dropdown-item href="/">Bulma</b-dropdown-item>
          <b-dropdown-item href="bootstrap">Bootstrap</b-dropdown-item>
          <b-dropdown-item href="test">Test</b-dropdown-item>
          <b-dropdown-item href="tag">Tag</b-dropdown-item>
          <b-dropdown-item href="cell">Cell</b-dropdown-item>
        </b-nav-item-dropdown>
        </b-collapse>
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
 img{
   width:15%;
 }
</style>