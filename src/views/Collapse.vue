<template>
  <div class="container">
    <br />
    <h3>Catalogue d'applications</h3>

    <table class="table">
      <thead>
        <tr>
          <th>Intitulé</th>
          <th>Windows</th>
          <th>Ubuntu</th>
          <th>Macos</th>
        </tr>
      </thead>
    </table>
    <div v-for="index in 800">
      <div class="accordion" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="myTable">
            <button
              :id="'b' + index + 'b'"
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              v-bind:data-bs-target="'#a' + index"
              v-bind:aria-controls="index"
              aria-expanded="false"
              v-on:click="afficheTab()"
            >
              <!-- <strong>{{ index }} </strong> VLC -->
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <td>VLC</td>
                    <td>VLC</td>
                    <td>VLC</td>
                    <td>VLC</td>
                  </tr>
                </tbody>
              </table>
            </button>
          </h2>
          <div
            v-bind:id="'a' + index"
            class="accordion-collapse collapse"
            :aria-labelledby="'a' + index"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <div v-html="tab"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
export default {
  data: function () {
    return {
      tab: ` <h2>
      Alice
      </h2>`,
    };
  },
  mounted() {
    // console.log(this.$ref.b1b);
    // this.$ref.b1b.id
  },
  methods: {
    afficheTab() {
      var tableau = `  <table class="table table-condensed">
              <tr>
                <th>OS</th>
                <th>Paquet</th>
                <th>Version</th>
                <th>Option</th>
                <th>Ensure</th>
              </tr>
              <tr>
                <td>
                  <i
                    class="bi bi-windows"
                    v-b-popover.hover.top="'Windows'"
                  ></i>
                </td>
                <td>chrome</td>
                <td><i class="bi bi-unlock-fill" v-b-popover.hover.top="'Version maintenue'"/>102.0.5005.63</td>
                <td><code>[--param --verbs]</code></td>
                <td><code>present</code></td>
              </tr>

              <tr>
                <td>
                  <i
                    class="bi bi-box2-fill"
                    v-b-popover.hover.top="'Ubuntu'"
                  ></i>
                </td>
                <td>chrome</td>
                <td> <i class="bi bi-arrow-repeat" v-b-popover.hover.top="'Mise à jour automatique'"/>102.0.5005.63</td>
                <td></td>
                <td><code>latest</code></td>
              </tr>

              <tr>
                <td>
                  <i class="bi bi-apple" v-b-popover.hover.top="'MacOS'"></i>
                </td>
                <td>chrome</td>
                <td> <i class="bi bi-lock-fill" v-b-popover.hover.top="'Version non maintenue'"/>102.0.5005.61</td>
                <td></td>
                <td></td>
              </tr>
              </table>`;
      this.tab = tableau;
      //console.log(event);
    },
  },
};
// Pouvoir afficher un tableau seulement quand on clique, le + @click.
// Avec this.$ref, modifier chaque bouton,  méthode qui va dessiner le tableau
// CHERCHER valeur dans le dom pour modifier
</script>
<style scoped>
table,
thead,
tbody {
  text-align: center;
  overflow-y: auto;
  position: relative;
}
</style>
