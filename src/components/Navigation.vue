<template>
  <div>
    <b-navbar class="nav">
      <b-container>
        <b-img
          :src="require('../assets/logoUL.png')"
          style="max-width: 120px"
        />

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <b-navbar-nav>
                <b-nav-item href="/">
                  <b-img
                    :src="require('../assets/logo.png')"
                    style="max-width: 120px"
                /></b-nav-item>
              </b-navbar-nav>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <b-dropdown variant="light" text="Système d'exploitation">
                <!--<div v-for="grpack in grpacks" :key="grpack.id"> -->
                <!-- <div v-for="(grpack, index) in grpack.packages" :key="index"> -->
                <b-checkbox id="windows">
                  <!-- Affichage du nom des checkbox -->
                  <!-- {{ grpack.os }} -->
                  Windows
                </b-checkbox>
                <b-checkbox id="ubuntu"> Ubuntu/ Debian </b-checkbox>
                <b-checkbox id="macos"> MacOs</b-checkbox>
              </b-dropdown>
            </li>
            <li class="nav-item">
              <input
                id="myInput"
                type="text"
                class="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Filtrer par tag, nom de paquet, OS, ..."
              />
            </li>
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">
                <i class="bi bi-search"></i>
              </span>
            </div>
            <li class="nav-item">
              <b-nav-item-dropdown text="Page" center>
                <b-dropdown-item href="/bulma">Bulma</b-dropdown-item>
                <b-dropdown-item href="bootstrap">Bootstrap</b-dropdown-item>
                <b-dropdown-item href="test">Test</b-dropdown-item>
                <b-dropdown-item href="tag">Tag</b-dropdown-item>
                <b-dropdown-item href="cell">Cell</b-dropdown-item>
                <b-dropdown-item href="Table">Table</b-dropdown-item>
                <b-dropdown-item href="Accordeon">Accordeon</b-dropdown-item>
                <b-dropdown-item href="/">Json</b-dropdown-item>
                <b-dropdown-item href="Accordiontest"
                  >AccordeonTest</b-dropdown-item
                >
                <b-dropdown-item href="/remoteJson">RemoteJson</b-dropdown-item>
                <b-dropdown-item href="Collapse">Collapse</b-dropdown-item>
                <b-dropdown-item href="composant"
                  >composantTable</b-dropdown-item
                >
                <b-dropdown-item href="/scroll">Scroll</b-dropdown-item>
                <b-dropdown-item href="/testScroll">testScroll</b-dropdown-item>
                <b-dropdown-item href="/scroll2">Scroll2</b-dropdown-item>
              </b-nav-item-dropdown>
            </li>
          </ul>
        </div>
      </b-container>
    </b-navbar>
  </div>
</template>
<script>
// Fonction pour filtrer des noms
/*
$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable button").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
}); */

// Fonction pour filtrer les tableaux des paquets
/*
$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});*/

// Filtrer button
$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var searchKey = $(this).val().toLowerCase();
    $(".accordion-button").each(function () {
      var cellText = $(this).text().toLowerCase();

      if (cellText.indexOf(searchKey) >= 0) {
        $(this).parent().parent().show();
      } else {
        $(this).parent().parent().hide();
        $(".accordion-body.in").collapse("hide");
      }
    });
  });
});
// Filtrage accordion body
$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var searchKey = $(this).val().toLowerCase();
    $(".accordion-body").each(function () {
      var cellText = $(this).text().toLowerCase();

      if (cellText.indexOf(searchKey) >= 0) {
        $(this).parent().parent().show();
      } else {
        $(this).parent().parent().hide();
        $(".accordion-body.in").collapse("hide");
      }
    });
  });
});
// Filtrage par OS
$(document).ready(function () {
  $(".checkbox").click(function () {
    if ($("#windows").is(":checked")) {
      $("#additional_foreign").show();
    }
    if ($("#ubuntu").is(":checked")) {
      $("#additional_foreign").show();
    }
    if ($("#macos").is(":checked")) {
      $("#additional_foreign").show();
    } else {
      $("#additional_foreign").hide();
    }
  });

  $("#additional_foreign").click(function () {
    alert("This click function works");
  });
});

export default {
  data() {
    return {
      grpacks: null,
    };
  },
  mounted() {
    axios
      .get("http://localhost:8080/grpacks")
      .then((response) => {
        //console.log(response)
        this.grpacks = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      });
  },
  methods: {},
};
</script>
<style scoped>
.container {
  display: flex;
  align-items: center;
  color: #ffff;
}
.navbar {
  background-color: #2c3e50 !important;
  color: #fff;
  text-decoration: none;
  justify-content: center;
  line-height: 15px;
  padding-bottom: 0px;
}

.link {
  color: #fff;
}
.nav-item-dropdown {
  color: #ffff;
}
.dropdown {
  padding: 4px;
  height: 3em;
}
input {
  height: 2.7em;
}
i {
  padding: 4px;
  height: 2em;
}
.checkbox {
  align-items: center;
  display: flex;
}
</style>
