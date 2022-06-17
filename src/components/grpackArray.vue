<template>
  <div>
    <div v-for="grpack in grpacks" :key="grpack.id">
      <!--{{ message }} -->
      <table class="table table-condensed" id="myTable">
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
          <tr v-for="(grpack, index) in grpack.packages" :key="index">
            <td>
              {{ grpack.os }}
            </td>
            <td>{{ grpack.package_name }}</td>
            <td>
              <i
                class="bi bi-unlock-fill"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Version maintenue"
              />{{ grpack.upstream_latest_version }}
            </td>
            <td>
              <code>{{ grpack.requested_modules }}</code>
            </td>
            <td>
              <code>{{ grpack.ensure }}</code>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "grpackArray",
  data() {
    return {
      message: "Array for grpacks",
      grpacks: null,
    };
  },
  mounted() {
    //console.log(this.$refs.test.webkitEntries)
    axios
      .get("http://localhost:8080/grpacks")
      .then((response) => {
        //console.log(response)
        this.grpacks = response.data;

        /*
        var result = this.grpacks.filter((x) => x == "ubuntu");
        console.log(result);
        */
      })
      .catch((error) => {
        //console.log(error);
        this.errored = true;
      });
    console.log(this.$refs);
    console.log(this.$refs.button);
  },
};
</script>
