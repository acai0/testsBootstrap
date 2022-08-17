<template>
  <div class="container">
    <br />
    <h3>Catalogue des logiciels</h3>
    <div v-for="grpack in grpacks" :key="grpack.id">
      <div class="accordion" id="accordionExample">
        <div class="card-header" id="headingOne">
          <h5 class="mb-0">
            <button
              :id="'b' + grpack.id + 'b'"
              :ref="'b' + grpack.id + 'b'"
              class="btn"
              type="button"
              data-toggle="collapse"
              v-bind:data-bs-target="'#a' + grpack.id"
              v-bind:aria-controls="grpack.id"
              aria-expanded="true"
              v-on:click="aclick = true"
            >
              {{ grpack.id }}
            </button>
          </h5>
        </div>

        <div
          v-bind:id="'a' + grpack.id"
          class="collapse"
          :aria-labelledby="'a' + grpack.id"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <div v-if="aclick === true">
              <table
                id="example"
                class="table display nowrap"
                style="width: 100%"
              >
                <thead>
                  <tr>
                    <th>OS</th>
                    <th>Paquet</th>
                    <th>Version</th>
                    <th>Option</th>
                    <th>Ensure</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                    <td>5421</td>
                    <td>t.nixon@datatables.net</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Winters</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>63</td>
                    <td>2011/07/25</td>
                    <td>$170,750</td>
                    <td>8422</td>
                    <td>g.winters@datatables.net</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Cox</td>
                    <td>Junior Technical Author</td>
                    <td>San Francisco</td>
                    <td>66</td>
                    <td>2009/01/12</td>
                    <td>$86,000</td>
                    <td>1562</td>
                    <td>a.cox@datatables.net</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import axios from "axios";
/*
$(document).ready(function () {
  $("#accordionExample").on("shown.bs.collapse", function () {
    $.each($.fn.dataTable.tables(true), function () {
      $(this).DataTable().columns.adjust().draw();
    });
  });
  $("#example").DataTable({
    scrollX: true,
    bInfo: false,  import { ref, onMounted } from "vue";  ii  import { ref, onMounted } from "vue";mport { ref, onMounted } from "vue";
    lengthChange: false,
    searching: true,
    paging: true,
    fixedColumns: {
      leftColumns: 1,
      rightColumns: 1,
    },
    columnDefs: [
      {
        orderable: false,
        className: "select-checkbox",
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
*/
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
