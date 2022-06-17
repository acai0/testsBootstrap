<template>
  <div class="container">
    <br />
    <h3>Catalogue d'applications</h3>

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
              @click="test"
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
              <grpackTable v-if="ok">
                <input ref="test" />
              </grpackTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import grpackTable from "../components/grpackTable.vue";
import axios from "axios";
import ref from "vue";
console.log(grpackTable);
export default {
  components: {
    grpackTable,
  },
  data() {
    return {
      grpacks: null,
      tab: "",
      aclick: false,
      ok: false,
    };
  },
  mounted() {
    //console.log(this.$refs.test.webkitEntries)
    axios
      .get("http://localhost:8080/grpacks")
      .then((response) => {
        //console.log(response)
        this.grpacks = response.data;
      })
      .catch((error) => {
        this.errored = true;
      });
  },
  methods: {
    test() {
      this.ok = !this.ok;
    },
  },
};
</script>
<style scoped>
code {
  color: grey;
}
th {
  width: 25em;
}
</style>
<!-- Prendre tableau et mettre dans un composant, tester raffraichissement au scrolling, recherche, staloverflow, medium, dev.to: les bonnes pratiques (liste, stockage de données) -->
