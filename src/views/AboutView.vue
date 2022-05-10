<template>
  <div class="about">
    <div class="container">
      <h2>Test Bootstrap</h2>
      <input
        class="form-control"
        id="myInput"
        type="text"
        placeholder="Recherche"
      />
      <br />
      <div class="dropdown show">
        <a
          class="btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          OS
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item" href="#">Windows</a>
          <a class="dropdown-item" href="#">Linux</a>
          <a class="dropdown-item" href="#">MAC</a>
        </div>
      </div>
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Logiciel</th>
            <th>Version Windows</th>
            <th>Version Linux</th>
            <th>Version MAC</th>
          </tr>
        </thead>
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
$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
</script>
