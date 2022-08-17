<template>
  <div class="container">
    <Loader :loading="showLoader" />
    <br />
    <h1>Catalogue d'applications</h1>
    <div v-for="grpack in listItems" :key="grpack.id">
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
                    <tr v-for="(grpack, index) in grpack.packages" :key="index">
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
    <li v-if="listItems.length === 0" class="flex-item center">
      No Record Found
    </li>
    <div class="showItems">
      <li>
        Show Items:
        <select @change="onChangeRecordsPerPage" v-model="recordsPerPage">
          <option :value="10">10</option>
          <option :value="20">20</option>
          <option :value="30">30</option>
          <option :value="40">40</option>
          <option :value="50">50</option>
        </select>
      </li>
    </div>
    <Pagination
      v-if="listItems"
      :total-pages="totalPages"
      :per-page="recordsPerPage"
      :current-page="page"
      @pagechanged="onPageChange"
    />
  </div>
</template>

<script>
import axios from "axios";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import { baseApiURL } from "@/config/env";

export default {
  components: {
    Pagination,
    Loader,
  },
  data() {
    return {
      aclick: false,
      showLoader: false,
      listItems: [],
      page: 1,
      totalPages: 0,
      totalRecords: 0,
      recordsPerPage: 10,
    };
  },
  created() {
    this.loadListItem();
  },
  methods: {
    loadListItem() {
      this.showLoader = true;
      axios
        .get(
          `${baseApiURL}grpacks?_page=${this.page}&_size=${this.recordsPerPage}`
        )
        .then((response) => {
          console.log("response", response);
          this.showLoader = false;
          this.listItems = response.data;
          this.totalPages = Math.floor(
            response.data.totalPassengers / this.recordsPerPage
          ); // Calculate total records
          this.totalRecords = response.data.totalPassengers;
        });
    },
    onPageChange(page) {
      this.page = page;
      this.loadListItem();
    },
    onChangeRecordsPerPage() {
      this.loadListItem();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h2 {
  text-align: center;
}
div li {
  list-style-type: none;
}

.showItems {
  display: inline-block;
  margin-left: -35px;
  li {
    list-style-type: none;
    display: inline-block;
    margin-left: 10px;
  }
}
code {
  color: grey;
}
</style>
