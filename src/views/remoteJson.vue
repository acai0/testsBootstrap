<template>
  <div class="container">
    <br />
    <h3>Catalogue d'applications</h3>
    <div
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="limit"
    >
      <div v-for="grpack in grpacks" :key="grpack.id">
        <div class="accordion" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="myTable">
              <button
                :id="'b' + grpack.id + 'b'"
                :ref="'b' + grpack.id + 'b'"
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                v-bind:data-bs-target="'#a' + grpack.id"
                v-bind:aria-controls="grpack.id"
                aria-expanded="false"
                v-on:click="aclick = true"
              >
                <strong>{{ grpack.id }} </strong>
              </button>
            </h2>

            <div
              v-bind:id="'a' + grpack.id"
              class="accordion-collapse collapse"
              :aria-labelledby="'a' + grpack.id"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <div v-if="aclick === true">
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
                      <tr
                        v-for="(grpack, index) in grpack.packages"
                        :key="index"
                      >
                        <td v-if="grpack.os == 'windows'">
                          <i
                            class="bi bi-windows"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Windows"
                          />
                        </td>
                        <td v-else-if="grpack.os == 'ubuntu'">
                          <i
                            class="bi bi-box2-fill"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Ubuntu/Debian"
                          />
                        </td>

                        <td v-else-if="grpack.os == 'macos'">
                          <i
                            class="bi bi-apple"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="MacOS"
                          />
                        </td>
                        <td>{{ grpack.package_name }}</td>
                        <td>
                          <div
                            v-if="grpack.ensure === 'latest'"
                            class="bi bi-arrow-repeat"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Mise à jour automatique"
                          />
                          <div
                            v-else-if="grpack.ensure === 'present'"
                            class="bi bi-unlock-fill"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Version maintenue"
                          >
                            {{ grpack.upstream_latest_version }}
                          </div>

                          <div
                            v-else
                            class="bi bi-lock-fill"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Version non maintenue"
                          >
                            {{ grpack.ensure }}
                          </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
    <!--
    <button @click="test">test grpack</button>
    <grpackArray v-if="ok" /> 
    <input ref="test">Test</input>
  --></div>
</template>
<script>
$(document).ready(function () {
  //$("td#os").hide();

  $(".dropdown")
    .find(".checkbox")
    .click(function () {
      $("td#os").hide();
      $(".dropdown")
        .find(".checkbox:checked")
        .each(function () {
          $("td#os" + $(this).attr("rel")).hide();
        });
    });
});
var x = "3.8";
console.log(typeof x);

import grpackArray from "../components/grpackArray.vue";
import axios from "axios";
import ref from "vue";

export default {
  components: {
    grpackArray,
  },
  data() {
    return {
      grpacks: null,
      tab: "",
      aclick: false,
      ok: false,
      limit: 10,
      busy: false,
    };
  },
  mounted() {
    //console.log(this.$refs.test.webkitEntries)
    /*
        axios
      .get("http://localhost:8080/grpacks")
      .then((response) => {
        //console.log(response)
        this.grpacks = response.data;
*/
    /*
        var result = this.grpacks.filter((x) => x == "ubuntu");
        console.log(result);
        */
    /*
      })
      .catch((error) => {
        //console.log(error);
        this.errored = true;
      }); */
    console.log(this.$refs);
    console.log(this.$refs.button);
  },
  methods: {
    loadMore() {
      //console.log("Adding 10 more data results");
      this.busy = true;
      axios.get("http://localhost:8080/grpacks").then((response) => {
        this.grpacks = response.data;
        console.log(this.grpacks);
        const append = response.data.slice(
          this.grpacks.length,
          this.grpacks.length + this.limit
        );
        this.grpacks = this.grpacks.concat(append);
        this.busy = false;
      });
    },

    test() {
      this.ok = !this.ok;
    },
  },

  created() {
    this.loadMore();
  },
};
</script>
<style scoped>
code {
  color: grey;
  background-color: white;
}
th {
  width: 25em;
}
</style>
<!-- Prendre tableau et mettre dans un composant, tester raffraichissement au scrolling, recherche, staloverflow, medium, dev.to: les bonnes pratiques (liste, stockage de données) -->
