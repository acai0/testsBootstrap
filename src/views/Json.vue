<template>
  <div class="container">
    <br />
    <h3>Catalogue d'applications</h3>

    <div v-for="grpack in grpacks" :key="grpack.id">
      <div class="accordion" id="accordionFlushExample">
        <div class="accordion-item">
                <ul class="list-group" id="infinite-list">
          <h2 class="accordion-header" id="myTable">
            <button
              :id="'b' + +'b'"
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              v-bind:data-bs-target="'#a' + grpack.id"
              v-bind:aria-controls="grpack.id"
              aria-expanded="false"
              v-on:click="afficheTab()"
            >
              <strong>{{ grpack.id }}</strong>
            </button>
          </h2> 

</ul>
       
          <div
            v-bind:id="'a' + grpack.id"
            class="accordion-collapse collapse"
            :aria-labelledby="'a' + grpack.id"
            data-bs-parent="#accordionFlushExample"
           
          >    <div class="accordion-body"> 
         <!--<div v-html="tab"> -->
          
      <table class="table table-condensed" > 

              <tr>
                <th>OS</th>
                <th>Paquet</th>
                <th>Version</th>
                <th>Option</th>
                <th>Ensure</th>
              </tr>  
              <tr v-for="(grpack, index) in grpack.packages" :key="index">
                <td>
                 {{grpack.os}}
                </td>
                <td>{{grpack.package_name}}</td>
                <td><i class="bi bi-unlock-fill"  data-bs-toggle="tooltip" data-bs-placement="top" title="Version maintenue"/>{{grpack.upstream_latest_version}}</td>
                <td><code>{{grpack.requested_modules}}</code></td>
                <td><code>{{grpack.ensure}}</code></td>
            </tr>  
              </table>
            
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import grpacksData from "../data/grpacks.json";
//console.log(JSON.stringify(grpacksData));
export default {
  data: function () {
    return {
      grpacks: grpacksData,
      tab: "",
    };
  },
  mounted() {
    // console.log(this.$ref.b1b);
    // this.$ref.b1b.id
        const listElm = document.querySelector("#infinite-list");
    listElm.addEventListener("scroll", (e) => {
      if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
        this.loadMore();
      }
    });

    // Initially load some items.
    this.loadMore();

  },
  methods: {
    afficheTab() {
      var tableau = ` <div v-for="(grpack, index) in grpack.packages" :key="index">
      <table class="table table-condensed">
              <tr>
                <th>OS</th>
                <th>Paquet</th>
                <th>Version</th>
                <th>Option</th>
                <th>Ensure</th>
              </tr>
              <tr>
                <td>
                 {{grpack.os}}
                </td>
                <td>{{grpack.package_name}}</td>
                <td><i class="bi bi-unlock-fill"  data-bs-toggle="tooltip" data-bs-placement="top" title="Version maintenue"/>{{grpack.upstream_latest_version}}</td>
                <td><code>{{grpack.requested_modules}}</code></td>
                <td><code>{{grpack.ensure}}</code></td>
              </tr>
              </table>
              </div>`;
              console.log (tableau)
      this.tab = tableau;
      //console.log(event);
    },
  },
};
</script>
<style scoped>
code{
  color:grey;  
}
</style>
