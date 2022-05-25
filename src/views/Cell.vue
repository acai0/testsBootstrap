<template>
  <b-container class="bv-example-row bv-example-row-flex-cols">
    <b-row align-v="start">
      <b-col><h1>Catalogue logiciels</h1></b-col>
    </b-row>

    <b-row align-v="center">
      <b-col
        ><input
          class="form-control"
          v-model="keyword"
          placeholder="Filtrer par nom, version, tag"
      /></b-col>
    </b-row>

    <b-row align-v="end">
      <b-col></b-col>
      <b-col></b-col>
      <b-col>
        <b-dropdown text="Système d'exploitation">
          <b-checkbox
            :disabled="visibleFields.length == 1 && field.visible"
            v-for="field in showFields"
            :key="field.key"
            v-model="field.visible"
            block
          >
            <!-- Affichage du nom des checkbox -->
            {{ field.label }}
          </b-checkbox>
        </b-dropdown>
      </b-col>
    </b-row>
    <b-col>
      <b-table :items="items" :fields="visibleFields" hover :filter="keyword">
      </b-table>
    </b-col>
    <b-row align-v="stretch">
      <b-col md="3" class="mb-3">
        <p>Mise à jour</p>
        <b-icon
          icon="arrow-repeat"
          font-scale="4"
          v-b-popover.hover.top="'Mise à jour automatique'"
        ></b-icon>
      </b-col>

      <b-col md="3" class="mb-3">
        <p>Cadenas ouvert</p>
        <b-icon
          icon="unlock-fill"
          font-scale="4"
          v-b-popover.hover.top="'Version maintenue'"
        ></b-icon>
      </b-col>

      <b-col md="3" class="mb-3">
        <p>Cadenas fermé</p>
        <b-icon
          icon="lock-fill"
          font-scale="4"
          v-b-popover.hover.top="'Version non maintenue'"
        ></b-icon>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      /* Mettre la barre de recherche vide  */
      keyword: "",

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
