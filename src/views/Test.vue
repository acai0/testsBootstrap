<template>
  <div id="example-1">
    <button v-on:click="counter += 1">Add 1</button>
    <p>Le bouton ci-dessus a été cliqué {{ counter }} fois.</p>
  </div>
</template>
            <!-- A TESTER {{ logiciels }}-->   
<!--
    Si Windows est selectionné, afficher les logiciels et la colonne avec Windows
    If(Windows==selected){
        afficher les logiciels, les versions de windows
    }
    Liens utiles https://fr.vuejs.org/v2/guide/forms.html
-->

<script>
/*
theButton.onclick = function() {
  middleRow.style.visibility = 'collapse';
};

uncollapse.onclick = function() {
  middleRow.style.visibility = 'visible';
}
*/
var example1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0
  }
});

export default {
  //TEST DATA
  data() {
    return {
      logiciels: ["FIrefox", "Adobe Reader", "VLC", "Ubuntu"],
      windows,
    };
  },
};
</script>
<style scoped>
table {
  border: 3px solid black;
}

td {
  border: 1px solid red;
}
</style>
