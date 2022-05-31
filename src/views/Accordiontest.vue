<template>
  <div class="container">
   <div class="col-md-12">
    <div class="panel panel-default">
      <div class="panel-heading">
        Catalogue des logiciels
                <input
        class="form-control"
        id="myInput"
        type="text"
        placeholder="Recherche"
      />
      </div>

<div class="container">
      <div class="accordion" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              VLC
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
                <table class="table table-condensed table-striped">
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
                <td>vlc</td>
                <td><i class="bi bi-unlock-fill" v-b-popover.hover.top="'Version maintenue'"/>7.12.3</td>
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
                <td>vlc</td>
                <td><i class="bi bi-arrow-repeat" v-b-popover.hover.top="'Mise à jour automatique'"/>7.12.3</td>
                <td></td>
                <td><code>latest</code></td>
              </tr>

              <tr>
                <td>
                  <i class="bi bi-apple" v-b-popover.hover.top="'MacOS'"></i>
                </td>
                <td>vlc</td>
                <td><i class="bi bi-lock-fill" v-b-popover.hover.top="'Version non maintenue'"/>7.12.3</td>
                <td></td>
                <td></td>
              </tr>
                  </table>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Firefox
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <table class="table table-condensed table-striped">
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
                <td>Firefox</td>
                <td><i class="bi bi-unlock-fill" v-b-popover.hover.top="'Version maintenue'"/>100.0.2</td>
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
                <td>Firefox</td>
                <td>  <i class="bi bi-arrow-repeat" v-b-popover.hover.top="'Mise à jour automatique'"/>100.0.2</td>
                <td></td>
                <td><code>latest</code></td>
              </tr>
              <tr>
                <td>
                  <i class="bi bi-apple" v-b-popover.hover.top="'MacOS'"></i>
                </td>
                <td>Firefox</td>
                <td><i class="bi bi-lock-fill" v-b-popover.hover.top="'Version non maintenue'"/>100.0.2</td>
                <td></td>
                <td></td>
              </tr>
                </table>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Chrome
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
            <table class="table table-condensed table-striped">
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
              </table>
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

// Fonction pour filtrer des noms
$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
</script>
<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css");
</style>
