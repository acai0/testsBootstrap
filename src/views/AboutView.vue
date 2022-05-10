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
        <thead>
          <tr>
            <th id="logiciel">Logiciel</th>
            <th id="windows">Version Windows</th>
            <th id="linux">Version Linux</th>
            <th id="mac">Version MAC</th>
          </tr>
        </thead>
        <tbody id="myTable">
          <tr>
            <td id="logiciel">Firefox</td>
            <td id="windows">21</td>
            <td id="linux">10.0</td>
            <td id="mac">35</td>
          </tr>
          <tr>
            <td id="logiciel">Adobe Reader</td>
            <td id="windows">2002.001.208</td>
            <td id="linux">32</td>
            <td id="mac"></td>
          </tr>
          <tr>
            <td id="logiciel">VLC</td>
            <td id="windows">15</td>
            <td id="linux"></td>
            <td id="mac">14.8</td>
          </tr>
          <tr>
            <td id="logiciel">Ubuntu</td>
            <td id="windows">20.04</td>
            <td id="linux">18.04</td>
            <td id="mac">20.04</td>
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
