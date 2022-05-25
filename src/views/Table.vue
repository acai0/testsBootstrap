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

   <div>
    <b-table
      :items="items"
      :fields="fields"
      responsive="sm"
      hover
      :filter="keyword"
    >
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
          { intitule: 'VLC', packageWin: 'vlc', versionWin: '3.0.17.4', packageU: 'vlc', versionU: '3.0.9.2', packageMac: 'vlc', versionMac: '3.0.17.3' },
          { intitule: 'Firefox', packageWin: 'firefox', versionWin: '100.0.2', packageU: 'firefox', versionU: '100.0.2', packageMac: 'firefox', versionMac:'100.0.2' },
          { intitule: 'Chrome', packageWin: 'googlechrome', versionWin: '102.0.5005.63', packageU: 'google-chrome-stable', versionU: '102.0.5005.63', packageMac: 'google-chrome', versionMac: '102.0.5005.61' },
          { intitule: 'Adobe Reader', packageWin: 'simnetsa-adobereader-fr', versionWin: '11.0.7', packageU: 'acroread-bin acroread-common', versionU: '9.5.5', packageMac: 'adobe-acrobat-reader', versionMac: '22.001.20112' },
          { intitule: 'Julia', packageWin: 'julia', versionWin: '1.7.2', packageU:'', versionU:'' , packageMac:'', versionMac:''},
        ],
        fields: [
          //'name',
          {key: 'intitule', label: ' ', sortable:true, visible: true},
          { key: 'packageWin', label: 'Paquet', sortable:true, visible: true },
          { key: 'versionWin', label: 'Version', sortable:true, visible: true },
          { key: 'packageU', label: 'Paquet', sortable:true, visible: true },
          { key: 'versionU', label: 'Version', sortable:true, visible: true },
          { key: 'packageMac', label: 'Paquet', sortable:true, visible: true },
          { key: 'versionMac', label: 'Version', sortable:true, visible: true }
        ],
         /* Champs tableau*/
      champs: [
        { key: "intitule", label: "INTITULÉ", visible: true},
        { key: "windows", label: "WINDOWS", visible: true},
        { key: "ubuntu", label: "UBUNTU", visible: true},
        { key: "macos", label: "MACOS", visible: true},
      ],
      }
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
          field.key.includes("intitule") ||
          field.key.includes("packageWin") ||
          field.key.includes("versionWin")
      );
    },
  },
  }
</script>