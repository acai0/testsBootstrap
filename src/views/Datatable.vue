<template>
  <div class="container mt-4">
    <JqueryTable />
  </div>
</template>
<script>
import JqueryTable from "../components/Table.vue";
export default {
  name: "App",
  components: {
    JqueryTable,
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
<style>
.container {
  max-width: 1000px;
}
</style>
