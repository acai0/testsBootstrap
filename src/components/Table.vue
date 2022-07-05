<template>
  <div>
    <h2>Datatable</h2>
    <table class="condense table" id="datatable">
      <thead>
        <tr>
          <th>OS</th>
          <th>Paquet</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in grpacks" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.modified }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import axios from "axios";
import $ from "jquery";
export default {
  mounted() {
    axios.get("http://localhost:8080/grpacks").then((response) => {
      this.grpacks = response.data;
      $("#datatable").DataTable();
    });
  },
  data: function () {
    return {
      grpacks: null,
    };
  },
};
</script>
<style>
code {
  color: grey;
}
</style>
<!-- 
  mounted() {
   
  },
  data: function () {
    return {
      grpacks: [],
    };
  }, -->
