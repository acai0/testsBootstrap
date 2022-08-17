<template>
  <div class="container">
    <br />
    <h3>Catalogue des logiciels</h3>
    <table id="example" class="display" style="width: 100%">
      <thead>
        <tr>
          <th>Grpack</th>
          <th>OS</th>
          <th>Modified</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="grpack in grpacks" :key="grpack.id">
          <td>{{ grpack.id }}</td>
          <td>{{ grpack.modified }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
$(document).ready(function () {
  $("#accordionExample").on("shown.bs.collapse", function () {
    $.each($.fn.dataTable.tables(true), function () {
      $(this).DataTable().columns.adjust().draw();
    });
  });
  $("#example").DataTable({
    dom: "Plfrtip",

    language: {
      url: "//cdn.datatables.net/plug-ins/1.12.1/i18n/fr-FR.json",
    },
    scrollX: true,
    bInfo: true,
    lengthChange: true,
    searching: true,
    paging: true,
    fixedColumns: {
      leftColumns: 1,
      rightColumns: 1,
    },
    columnDefs: [
      {
        orderable: true,
        targets: 0,
      },
    ],
    select: {
      style: "multi+shift",
      selector: "td:first-child",
    },
    order: [[1, "asc"]],
  });
});
export default {
  data() {
    return {
      grpacks: null,
      aclick: false,
    };
  },
  mounted() {
    axios
      .get("http://localhost:8080/grpacks")
      .then((response) => {
        //console.log(response)
        this.grpacks = response.data;
      })
      .catch((error) => {
        //console.log(error);
        this.errored = true;
      });
  },
};
</script>
