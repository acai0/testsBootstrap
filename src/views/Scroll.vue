<template>
  <div>
    <header></header>
    <main>
      <Post v-for="(grpack, i) in grpack_list" :key="i" :grpack="grpack" />
      <div v-html="grpack_list.description" />
    </main>
  </div>
</template>

<script>
import Post from "../components/Post.vue";
export default {
  name: "App",
  data() {
    return {
      grpack_list: [],
    };
  },
  components: {
    Post,
  },
  methods: {
    getGrpack() {
      const grpack_titles = [
        "VLC",
        "Chrome",
        "Adobe",
        "Firefox",
        "Paint",
        "Spyder",
        "Atom",
        "Ccleaner",
        "Powershell",
        "WinSCP",
        "FileZilla",
      ];
      const grpack = [];
      for (let i = 0; i < 10; i++) {
        grpack.push({
          title:
            grpack_titles[Math.floor(Math.random() * grpack_titles.length)],
          description: `<table class="table table-condensed">
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
                    data-bs-toggle="tooltip" data-bs-placement="top" title="Windows"
                  ></i>
                </td>
                <td>vlc</td>
                <td><i class="bi bi-unlock-fill"  data-bs-toggle="tooltip" data-bs-placement="top" title="Version maintenue"/>102.0.5005.63</td>
                <td><code>[--param --verbs]</code></td>
                <td><code>present</code></td>
              </tr>

              <tr>
                <td>
                  <i
                    class="bi bi-box2-fill"
                     data-bs-toggle="tooltip" data-bs-placement="top" title="Ubuntu/Debian"
                  ></i>
                </td>
                <td>vlc</td>
                <td> <i class="bi bi-arrow-repeat"  data-bs-toggle="tooltip" data-bs-placement="top" title="Mise à jour automatique"/>102.0.5005.63</td>
                <td></td>
                <td><code>latest</code></td>
              </tr>

              <tr>
                <td>
                  <i class="bi bi-apple"  data-bs-toggle="tooltip" data-bs-placement="top" title="MacOS"></i>
                </td>
                <td>vlc</td>
                <td> <i class="bi bi-lock-fill"  data-bs-toggle="tooltip" data-bs-placement="top" title="Version non maintenue"/>102.0.5005.61</td>
                <td></td>
                <td><code>102.0.5005.61</code></td>
              </tr>
              </table>`,
        });
      }
      return grpack;
    },
    handleScroll() {
      if (
        window.scrollY + window.innerHeight >=
        document.body.scrollHeight - 50
      ) {
        const new_grpack = this.getGrpack();
        this.grpack_list = [...this.grpack_list, ...new_grpack];
      }
    },
  },
  mounted() {
    this.grpack_list = this.getGrpack();
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
* {
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  min-height: 100vh;
}
header h1 {
  text-align: center;
}
header {
  margin-bottom: 2rem;
}
main {
  padding: 0 2rem;
  max-width: 640px;
  margin: 0 auto;
}
code {
  color: grey;
}
</style>
