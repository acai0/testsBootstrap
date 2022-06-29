<template>
  <article>
    <h2>{{ grpack.title }}</h2>
    <p v-html="grpack.description"></p>
  </article>
</template>

<script>
export default {
  props: ["grpack"],
};
</script>

<style>
article {
  /* background-color: #efefef; */
  background-color: white;
  border-radius: 1rem;
  padding: 1rem 2rem;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  color: #2c3e50;
  width: 105%;
}
article h2 {
  margin-bottom: 1rem;
}
</style>
