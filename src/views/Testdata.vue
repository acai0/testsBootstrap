<template>
  <div class="container">
    <br />
    <h3>Catalogue des logiciels</h3>
    <table id="example" class="display" style="width: 100%">
      <thead>
        <tr>
          <th></th>
          <th>Grpack</th>

          <th>Modified</th>
          <th>OS</th>
        </tr>
      </thead>
      <tbody>
        <!--
        <tr v-for="grpack in grpacks" :key="grpack.id">
          <td><i class="bi bi-plus-circle-fill" style="color: green"></i></td>
          <td>{{ grpack.id }}</td>
          <td>
            <div
              id="os"
              v-for="(grpack, index) in grpack.packages"
              :key="index"
            >
              <i
                v-if="grpack.os == 'windows'"
                class="bi bi-windows"
                title="Windows"
                style="color: #05bdda"
              >
                &nbsp;
              </i>
              <i
                v-else-if="grpack.os == 'ubuntu'"
                class="bi bi-box2-fill"
                title="Ubuntu/Debian"
                style="color: #d66c02"
              >
                &nbsp;
              </i>
              <i
                v-else-if="grpack.os == 'macos'"
                class="bi bi-apple"
                title="MacOS"
              >
                &nbsp;
              </i>
            </div>
          </td>

          <td>{{ grpack.modified }}</td>
        </tr>
        -->
      </tbody>
    </table>
  </div>
</template>
<script>
//import axios from "axios";
/*
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
};*/

function format(d) {
  // `d` is the original data object for the row
  return (
    '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
    "<tr>" +
    "<td>OS</td>" +
    "<td>" +
    d.os +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Paquet</td>" +
    "<td>" +
    d.package_name +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Version</td>" +
    "<td>" +
    d.version +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Option</td>" +
    "<td>" +
    d.requested_modules +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Ensure</td>" +
    "<td>" +
    d.ensure +
    "</td>" +
    "</tr>" +
    "</table>"
  );
}
$(document).ready(function () {
  var table = $("#example").DataTable({
    ajax: {
      url: "http://localhost:8080/grpacks",
      dataSrc: "",
    },

    columns: [
      {
        className: "details-control",
        orderable: false,
        data: null,
        defaultContent: "",
      },
      { data: "id" },
      { data: "modified" },
      {
        data: "packages",
        render: function (data, type, row) {
          var arr = [];
          data.forEach(function (item) {
            if (row == "os") {
              if (data === "ubuntu") {
                return `<i
                 class="bi bi-box2-fill"
                style="color: #d66c02"
              />`;
              } else if (data === "windows") {
                return `<i
                class="bi bi-windows"
                style="color: #05bdda"
              />`;
              } else if (data === "macos") {
                return `<i
                class="bi bi-apple"
                title="MacOS"/>`;
              }
            }
            arr.push(item.os);
          });
          return arr.join("</br>");
        },
      },
    ],
    dom: "Plfrtip",
    select: false,
    /*
    columnDefs: [
      {
        searchPanes: {
          show: true,
        },
        targets: [3, 4],
      },
    ],*/

    language: {
      url: "//cdn.datatables.net/plug-ins/1.12.1/i18n/fr-FR.json",
    },
    /*
    scrollX: true,
    bInfo: true,
    lengthChange: true,
    searching: true,
    paging: true,
    fixedColumns: {
      leftColumns: 1,
      rightColumns: 1,
    },
    */
    columnDefs: [
      {
        orderable: true,
        targets: 0,
        className: "dt-control",
      },
    ],
    select: {
      //style: "multi+shift",
      // selector: "td:first-child",
    },
    order: [[1, "asc"]],
  });

  // Add event listener for opening and closing details
  $("#example tbody").on("click", "td.dt-control", function () {
    var tr = $(this).closest("tr");
    var row = table.row(tr);

    if (row.child.isShown()) {
      // This row is already open - close it
      row.child.hide();
      tr.removeClass("shown");
    } else {
      // Open this row
      row.child(format(row.data())).show();
      tr.addClass("shown");
    }
  });
});
</script>
<style>
#os {
  display: inline-block;
}
</style>
