<template>
  <div>
    <b-navbar class="nav">
      <b-container>
        <b-img
          :src="require('../assets/logoUL.png')"
          style="max-width: 120px"
        />

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <b-navbar-nav>
                <b-nav-item href="/">
                  <b-img
                    :src="require('../assets/logo.png')"
                    style="max-width: 120px"
                /></b-nav-item>
              </b-navbar-nav>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <b-dropdown variant="light" text="Système d'exploitation">
                <b-checkbox
                  :disabled="visibleFields.length == 1 && champ.visible"
                  v-for="champ in showFields"
                  :key="champ.key"
                  v-model="champ.visible"
                >
                  <!-- Affichage du nom des checkbox -->
                  {{ champ.label }}
                </b-checkbox>
              </b-dropdown>
            </li>
            <li class="nav-item">
              <input
                id="myInput"
                type="text"
                class="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Filtrer par tag, nom de paquet, OS, ..."
              />
            </li>
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">
                <i class="bi bi-search"></i>
              </span>
            </div>
            <li class="nav-item">
              <b-nav-item-dropdown text="Page" center>
                <b-dropdown-item href="/">Bulma</b-dropdown-item>
                <b-dropdown-item href="bootstrap">Bootstrap</b-dropdown-item>
                <b-dropdown-item href="test">Test</b-dropdown-item>
                <b-dropdown-item href="tag">Tag</b-dropdown-item>
                <b-dropdown-item href="cell">Cell</b-dropdown-item>
                <b-dropdown-item href="Table">Table</b-dropdown-item>
                <b-dropdown-item href="Accordeon">Accordeon</b-dropdown-item>
                <b-dropdown-item href="Accordiontest"
                  >AccordeonTest</b-dropdown-item
                >
                <b-dropdown-item href="Collapse">Collapse</b-dropdown-item>
              </b-nav-item-dropdown>
            </li>
          </ul>
        </div>
      </b-container>
    </b-navbar>
  </div>
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
export default {
  data() {
    return {
      /* Contenu tableau*/
      items: [
        { package: "vlc", windows: 35, linux: 21, macos: 16 },
        { package: "firefox", windows: 18, linux: 20, macos: 20 },
        { package: "chrome", windows: 12, linux: 13, macos: 18 },
        { package: "adobe", windows: 2, linux: 2, macos: 2 },
      ],

      /* Champs tableau*/
      fields: [
        { key: "package", label: "Packages", visible: true, sortable: true },
        { key: "windows", label: "Windows", visible: true, sortable: true },
        { key: "linux", label: "Linux", visible: true, sortable: true },
        { key: "macos", label: "Mac OS", visible: true, sortable: true },
      ],
      computed: {
        /* Afficher les champs */
        visibleFields() {
          return this.fields.filter((field) => field.visible);
        },

        /* Afficher les checkbox */
        showFields() {
          return this.fields.filter(
            (field) =>
              field.key.includes("windows") ||
              field.key.includes("linux") ||
              field.key.includes("macos")
          );
        },
      },
    };
  },
};
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
