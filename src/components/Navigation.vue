<template>

  <div>
    <b-navbar>  
    <b-container>
    <b-row align-v="stretch">
    <b-col md="3" class="mb-3">
      <a class="navbar-brand mr-0 mr-md-2" href="/">
      <b-img :src="require('../assets/logo.png')" fluid></b-img>
      </a>
      </b-col>
      <b-col md="2" class="mb-2">
        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Page">
          <b-dropdown-item href="/">Bulma</b-dropdown-item>
          <b-dropdown-item href="bootstrap">Bootstrap</b-dropdown-item>
          <b-dropdown-item href="test">Test</b-dropdown-item>
          <b-dropdown-item href="tag">Tag</b-dropdown-item>
          <b-dropdown-item href="cell">Cell</b-dropdown-item>
           <b-dropdown-item href="Table">Table</b-dropdown-item>
        </b-nav-item-dropdown>
        </b-col>
      </b-navbar-nav> 
      </b-row> 
      </b-container>
    </b-navbar>
  </div>
  <!-- 
  <b-list-group horizontal="md">
    <b-list-group-item>Cras justo odio</b-list-group-item>
    <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
    <b-list-group-item>Morbi leo risus</b-list-group-item>
  </b-list-group>
  -->
 
</template>
<script>
export default{}
</script>
<style scoped>
 .navbar{
    background-color: #2c3e50!important;
 }
 img{
   width:auto;
   height:auto;
 }
 .nav-item-dropdown{
   color: #eef2f7!important;
   text-decoration:none;
 }
</style>