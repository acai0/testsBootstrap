<template>
  <div>
    <header>
      <h1>My grpacks</h1>
    </header>
    <main>
      <Post v-for="(grpack, i) in grpack_list" :key="i" :grpack="grpack" />
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
        "Naruto",
        "Demon Slayer",
        "Dragon Ball",
        "My Hero Academia",
        "Sword Art Online",
        "Tokyo Ghoul",
        "Darling in the Franxx",
        "Code Geass",
        "One Piece",
        "Fairy Tail",
        "Bleach",
        "Attack on Titan",
        "Hunter x Hunter",
      ];
      const grpack = [];
      for (let i = 0; i < 10; i++) {
        grpack.push({
          title:
            grpack_titles[Math.floor(Math.random() * grpack_titles.length)],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
  /* background-color: #2c3e50; */
  min-height: 100vh;
  padding-top: 3rem;
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
</style>
