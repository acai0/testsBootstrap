<template>
  <div class="about">
    <div class="container">
      <!-- Filtrer pour la recherche par nom -->
      <input
        class="form-control"
        id="myInput"
        type="text"
        placeholder="Recherche"
      />
      <br />
      <!-- LISTE DEROULANTE -->
      <select class="select" data-mdb-filter="true">
        <option value="1">Windows</option>
        <option value="2">Linux</option>
        <option value="3">MAC</option>
      </select>
      <!-- TABLEAU -->
      <table class="table">
        <!-- Noms titres des colonnes -->
        <thead>
          <tr>
            <th>Packages</th>
            <th>Version Windows</th>
            <th>Version Ubuntu</th>
            <th>Version MacOS</th>
          </tr>
        </thead>
        <!-- Contenu du tableau -->
        <tbody id="myTable">
          <tr>
            <td>Firefox</td>
            <td>
              <select class="select" data-mdb-filter="true">
                <option>35</option>
                <option>21.04</option>
                <option>21</option>
              </select>
            </td>
            <td>10.0</td>
            <td>35</td>
          </tr>
          <tr>
            <td>Adobe Reader</td>
            <td>2002.001.208</td>
            <td>32</td>
            <td></td>
          </tr>
          <tr>
            <td>VLC</td>
            <td>15</td>
            <td></td>
            <td>14.8</td>
          </tr>
          <tr>
            <td>Ubuntu</td>
            <td>20.04</td>
            <td>18.04</td>
            <td>
              <select class="select" data-mdb-filter="true">
                <option value="1">20.04</option>
                <option value="2">18.04</option>
                <option value="3">16.04</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template> 

<script>
// Fonction pour filtrer des noms
$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
</script>
