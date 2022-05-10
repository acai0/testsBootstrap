<template>
  <div class="hello">
    <article class="panel is-info">
      <p class="panel-heading">Test Bulma</p>
      <div class="panel-block">
        <p class="control has-icons-left">
          <input class="input is-info" type="text" placeholder="Logicel" />
          <span class="icon is-left">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      <!-- Liste déroulante -->
      <div class="dropdown is-active">
        <div class="dropdown-trigger">
          <button
            class="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
          >
            <span>OS</span>
            <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <a href="#" class="dropdown-item"> Windows </a>
            <a class="dropdown-item"> Linux </a>
            <a href="#" class="dropdown-item is-active"> MAC </a>
          </div>
        </div>
      </div>
      <!-- TABLEAU -->
      <table class="table">
        <thead>
          <tr>
            <th>Logiciel</th>
            <th>Windows</th>
            <th>Linux</th>
            <th>MAC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Firefox</th>
            <td>21</td>
            <td>10.0</td>
            <td>35</td>
          </tr>
          <tr>
            <th>Adobe Reader</th>
            <td>2002.001.208</td>
            <td>32</td>
            <td></td>
          </tr>
          <tr>
            <th>VLC</th>
            <td>15</td>
            <td></td>
            <td>14.8</td>
          </tr>
          <tr>
            <th>Ubuntu</th>
            <td>20.04</td>
            <td>18.04</td>
            <td>20.04</td>
          </tr>
        </tbody>
      </table>
    </article>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
$(".dropdown .button").click((e) => {
  const dropdown = $(e.target).parents(".dropdown");
  dropdown.toggleClass("is-active");
  dropdown.focusout((e) => {
    $(e.target).removeClass("is-active");
  });
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
