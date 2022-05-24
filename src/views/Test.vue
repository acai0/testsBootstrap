<template>
  <div id="app">
  
  <!-- Nom et barre de recherche -->
        <label>Filtrer par nom:</label>
      <input class="form-control" v-model="keyword" placeholder="Recherche"/>
    

    <!-- Checkbox -->
    <b-checkbox
      :disabled="visibleFields.length == 1 && field.visible"
      v-for="field in showFields"
      :key="field.key"
      v-model="field.visible"
      inline
    >

    <!-- Affichage du nom des checkbox -->
      {{ field.label }}
    </b-checkbox>
    </b-form>
    
    <!-- Tableau -->
    <b-table :items="items" :fields="visibleFields" hover :filter="keyword"> </b-table>
    </v-table>
  </div>
</template>

<script>

/* Utilisé pour créer un enregistrement local pour le composant Vue. */
export default {

  data() {
    return {

      /* Mettre la barre de recherche vide  */
      keyword:'',

      /* Contenu tableau*/
      items: [
        { package: "vlc", windows: 35, linux: 21, macos: 16 },
        { package: "firefox", windows: 18, linux: 20, macos: 20 },
        { package: "chrome", windows: 12, linux: 13, macos: 18 },
        { package: "adobe", windows: 2, linux: 2, macos: 2 },
      ],

      /* Champs tableau*/
      fields: [
        { key: "package", label: "Packages", visible: true, sortable: true },
        { key: "windows", label: "Windows", visible: true, sortable: true },
        { key: "linux", label: "Linux", visible: true, sortable: true },
        { key: "macos", label: "Mac OS", visible: true, sortable: true },
      ],
    };
  },

  /* Propriété calculé permet de créer une propriété qui peut être utilisé pour modifier, manipuler et afficher des données*/
  computed: {
    
    /* Afficher les champs */
    visibleFields() {
      return this.fields.filter((field) => field.visible);
    },

    /* Afficher les checkbox */
    showFields() {
      return this.fields.filter(
        (field) =>
          field.key.includes("windows") ||
          field.key.includes("linux") ||
          field.key.includes("macos")
      );
    },
  },
};
</script>
<style></style>
