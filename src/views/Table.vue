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
      <b-col>
        <b-dropdown text="Système d'exploitation">
          <b-checkbox
            :disabled="visibleFields.length == 1 && champ.visible"
            v-for="champ in showFields"
            :key="champ.key"
            v-model="champ.visible"
          >
            <!-- Affichage du nom des checkbox -->
            {{ champ.label }}
          </b-checkbox>
        </b-dropdown>
      </b-col>
    </b-row>

    <div>
      <b-table :items="items" :fields="fields" hover :filter="keyword">
        <template #thead-top="data">
          <b-tr>
            <b-th colspan="1">INTITULÉ </b-th>
            <b-th colspan="2">WINDOWS</b-th>
            <b-th colspan="2">UBUNTU DEBIAN</b-th>
            <b-th colspan="2">MACOS</b-th>
          </b-tr>
        </template>
        <!--
      <template #thead-top="data" :champs="champs">
      <b-tr>
     <b-th colspan="1">{{data.value}} </b-th>
          <b-th colspan="2"></b-th>
          <b-th colspan="2"></b-th>
          <b-th colspan="2"></b-th>
      </b-tr>
      </template>
      -->
      </b-table>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
      items: [
        {
          intitule: "VLC",
          windows: { packageWin: "vlc", versionWin: "3.0.17.4" },
          ubuntu: { packageU: "vlc", versionU: "3.0.9.2" },
          macos: { packageMac: "vlc", versionMac: "3.0.17.3" },
        },
        {
          intitule: "Firefox",
          windows: { packageWin: "firefox", versionWin: "100.0.2" },
          ubuntu: { packageU: "firefox", versionU: "100.0.2" },
          macos: { packageMac: "firefox", versionMac: "100.0.2" },
        },
        {
          intitule: "Chrome",
          windows: { packageWin: "googlechrome", versionWin: "102.0.5005.63" },
          ubuntu: {
            packageU: "google-chrome-stable",
            versionU: "102.0.5005.63",
          },
          macos: { packageMac: "google-chrome", versionMac: "102.0.5005.61" },
        },
        {
          intitule: "Adobe Reader",
          windows: {
            packageWin: "simnetsa-adobereader-fr",
            versionWin: "11.0.7",
          },
          ubuntu: {
            packageU: "acroread-bin acroread-common",
            versionU: "9.5.5",
          },
          macos: {
            packageMac: "adobe-acrobat-reader",
            versionMac: "22.001.20112",
          },
        },
        {
          intitule: "Julia",
          windows: { packageWin: "julia", versionWin: "1.7.2" },
          ubuntu: { packageU: "", versionU: "" },
          macos: { packageMac: "", versionMac: "" },
        },
      ],
      fields: [
        //'name',
        { key: "intitule", label: " ", sortable: true, visible: true },
        {
          key: "windows.packageWin",
          label: "Paquet",
          sortable: true,
          visible: true,
        },
        {
          key: "windows.versionWin",
          label: "Version",
          sortable: true,
          visible: true,
        },
        {
          key: "ubuntu.packageU",
          label: "Paquet",
          sortable: true,
          visible: true,
        },
        {
          key: "ubuntu.versionU",
          label: "Version",
          sortable: true,
          visible: true,
        },
        {
          key: "macos.packageMac",
          label: "Paquet",
          sortable: true,
          visible: true,
        },
        {
          key: "macos.versionMac",
          label: "Version",
          sortable: true,
          visible: true,
        },
      ],
      /* Champs tableau, visible= checked*/
      champs: [
        { key: "windows", label: "Windows", visible: true },
        { key: "ubuntu", label: "Ubuntu", visible: true },
        { key: "macos", label: "MacOS", visible: true },
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
      return this.champs.filter(
        (champ) =>
          champ.key.includes("windows") ||
          champ.key.includes("ubuntu") ||
          champ.key.includes("macos")
      );
    },
  },
};
</script>
