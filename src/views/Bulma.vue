<template>
  <div class="hello">
    <article class="panel is-info">
      <p class="panel-heading">Test Bulma</p>
      <div class="panel-block">
        <p class="control has-icons-left">
          <input
            class="input is-info"
            id="myInput"
            type="text"
            placeholder="Recherche"
          />
          <span class="icon is-left">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      <!-- Liste déroulante -->
      <div class="select is-link">
        <select>
          <option>Windows</option>
          <option>Linux</option>
          <option>MAC</option>
        </select>
      </div>
      <!-- TABLEAU -->
      <table class="table">
        <!-- Noms titres des colonnes -->
        <thead>
          <tr>
            <th>Logiciels</th>
            <th>Windows</th>
            <th>Linux</th>
            <th>MAC</th>
          </tr>
        </thead>
        <!-- Contenu du tableau -->
        <tbody id="myTable">
          <tr>
            <th>Firefox</th>
            <td>21</td>
            <td>10.0</td>
            <td>35</td>
          </tr>
          <tr>
            <th>Adobe Reader</th>
            <td>2002.001.208</td>
            <td>32</td>
            <td></td>
          </tr>
          <tr>
            <th>VLC</th>
            <td>15</td>
            <td></td>
            <td>14.8</td>
          </tr>
          <tr>
            <th>Ubuntu</th>
            <td>20.04</td>
            <td>18.04</td>
            <td>20.04</td>
          </tr>
        </tbody>
      </table>
    </article>
  </div>
</template>

<script>
export default {
  /*
  name: "HelloWorld",
  props: {
    msg: String,
  },
  */
};

// Fonction pour filtrer les noms
$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
