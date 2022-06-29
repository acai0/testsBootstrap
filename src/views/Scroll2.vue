<template>
  <div class="container">
    <div class="loading" v-show="loading">
      <span class="fa fa-spinner fa-spin"></span> Loading
    </div>
    <b-list-group id="infinite-list">
      <b-list-group-item
        v-for="item in items"
        v-text="item"
      ></b-list-group-item>
    </b-list-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      nextItem: 1,
      items: [],
    };
  },
  mounted() {
    // Detect when scrolled to bottom.
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
    loadMore() {
      /** This is only for this demo, you could
       * replace the following with code to hit
       * an endpoint to pull in more data. **/
      this.loading = true;
      setTimeout((e) => {
        for (var i = 0; i < 20; i++) {
          this.items.push("VLC");
        }
        this.loading = false;
      }, 200);
    },
  },
};
</script>
<style>
.container {
  padding: 50px 0px 0px 0px;
}

h1 {
  background: -webkit-linear-gradient(#fff, #999);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  font-size: 4rem;
  color: #fff;
}

.list-group-wrapper {
  position: relative;
}
.list-group {
  overflow: auto;
  height: 83vh;
  border: 2px solid #dce4ec;
  border-radius: 5px;
}
.list-group-item {
  margin-top: 1px;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 2px solid #dce4ec;
}
.loading {
  text-align: center;
  position: absolute;
  color: #fff;
  z-index: 9;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
