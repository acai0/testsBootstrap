<template>
  <div class="container">
    <br />
    <h3>Catalogue d'applications</h3>

    <div v-for="grpack in grpacks" :key="grpack.id">
      <div class="accordion" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="myTable">
            <button
              :id="'b' + grpack.id"
              :ref="'b' + grpack.id"
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
              <Table v-for="(grpack, i) in grpacks" :key="i" :grpack="grpack" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Table from "../components/grpackTable.vue";
import axios from "axios";
import ref from "vue";
console.log(Table);
export default {
  components: {
    Table,
  },
  data() {
    return {
      grpacks: null,
      tab: "",
      aclick: false,
      ok: false,
      grpack_list: [],
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

    this.grpack_list = this.getGrpack();
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    test() {
      this.ok = !this.ok;
    },
    getGrpack() {
      axios.get("http://localhost:8080/grpacks").then((response) => {
        //console.log(response)
        this.grpacks = response.data;
        const grpack_titles = this.grpacks;
        const grpack = [];
        for (let i = 0; i < 21; i++) {
          grpacks.push({
            title:
              grpack_titles[Math.floor(Math.random() * grpack_titles.length)],
          });
        }
        return grpacks;
      });
    },
    handleScroll() {
      if (
        window.scrollY + window.innerHeight >=
        document.body.scrollHeight - 21
      ) {
        const new_grpack = this.getGrpack();
        this.grpack_list = [...this.grpack_list, ...new_grpack];
      }
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
body {
  min-height: 100vh;
}
</style>
<!-- Prendre tableau et mettre dans un composant, tester raffraichissement au scrolling, recherche, staloverflow, medium, dev.to: les bonnes pratiques (liste, stockage de données) -->
