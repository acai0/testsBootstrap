<template>

  <div>
    <b-navbar>  
    <b-container>
       <b-navbar-brand><b-img
          :src="require('../assets/logoUL.png')"
          style="max-width: 120px"
        /></b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/"><b-img
          :src="require('../assets/logo.png')"
          style="max-width: 120px"
        /></b-nav-item>
      </b-navbar-nav>
      </b-collapse>
      <!--
      <b-col md="1">
      <a class="navbar-brand" href="/">
        <b-img
          :src="require('../assets/logo.png')"
          style="max-width: 120px"
        />
      </a>
      </b-col>
-->
        <!-- Navbar dropdowns -->
        <b-navbar>
        <b-nav-item-dropdown text="Page" center>
          <b-dropdown-item href="/">Bulma</b-dropdown-item>
          <b-dropdown-item href="bootstrap">Bootstrap</b-dropdown-item>
          <b-dropdown-item href="test">Test</b-dropdown-item>
          <b-dropdown-item href="tag">Tag</b-dropdown-item>
          <b-dropdown-item href="cell">Cell</b-dropdown-item>
          <b-dropdown-item href="Table">Table</b-dropdown-item>
          <b-dropdown-item href="Accordeon">Accordeon</b-dropdown-item>
          <b-dropdown-item href="Accordiontest">AccordeonTest</b-dropdown-item>
          <b-dropdown-item href="Collapse">Collapse</b-dropdown-item>
        </b-nav-item-dropdown>
        </b-navbar>

              <b-col md="4" class="position-absolute bottom end-0">
        <div class="input-group mb-1">
          <input
            id="myInput"
            type="text"
            class="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Filtrer par tag, nom de paquet, OS, ..."
          />
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">
              <i class="bi bi-search"></i>
            </span>
          </div>
        </div>
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
// Fonction pour filtrer des noms
$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable button").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
export default{}
</script>
<style scoped>
.container {
  display: flex;
  align-items: center;
  color: #ffff;
}
.navbar {
  background-color: #2c3e50 !important;
  color: #fff;
  text-decoration: none;
  justify-content: center;
  line-height: 15px;
  padding-bottom: 0px;
}

.link {
  color: #fff;
}
.nav-item-dropdown {
  color: #ffff;
}

</style>