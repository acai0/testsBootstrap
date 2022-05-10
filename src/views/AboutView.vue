<template>
  <div class="about">
    <div class="container">
      <h2>Test Bootstrap</h2>
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
      <!-- possible d'enlever table-bordered pour enlever le contour du tableau -->
      <!-- table-striped correspond aux lignes grisées 1 fois sur 2 du tableau, possible de l'enlever-->
      <table class="table table-bordered table-striped">
        <!-- Noms titres des colonnes -->
        <thead>
          <tr>
            <th>Logiciels</th>
            <th>Version Windows</th>
            <th>Version Linux</th>
            <th>Version MAC</th>
          </tr>
        </thead>
        <!-- Contenu du tableau -->
        <tbody id="myTable">
          <tr>
            <td>Firefox</td>
            <td>21</td>
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
            <td>20.04</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
</script>
