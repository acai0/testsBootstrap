<template>
  <div class="container">
      <b-form-tags id="tags-with-dropdown" v-model="value" no-outer-focus class="mb-2">
        <template v-slot="{ tags, disabled, addTag, removeTag }">
          <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
            <li v-for="tag in tags" :key="tag" class="list-inline-item">
              <b-form-tag
                @remove="removeTag(tag)"
                :title="tag"
                :disabled="disabled"
                variant="info"
              >{{ tag }}</b-form-tag>
            </li>
          </ul>

          <b-dropdown size="sm" variant="outline-secondary" block menu-class="w-100">
            <template #button-content>
              <b-icon icon="tag-fill"></b-icon> Choisir un tag
            </template>
            <b-dropdown-form @submit.stop.prevent="() => {}">
              <b-form-group
                label="Rechercher par tag"
                label-for="tag-search-input"
                label-cols-md="auto"
                class="mb-0"
                label-size="sm"
                :description="searchDesc"
                :disabled="disabled"
              >
                <b-form-input
                  v-model="search"
                  id="tag-search-input"
                  type="search"
                  size="sm"
                  autocomplete="off"
                 ></b-form-input>
              </b-form-group>
            </b-dropdown-form>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item-button
              v-for="option in availableOptions"
              :key="option"
              @click="onOptionClick({ option, addTag })"
            >
              {{ option }}
            </b-dropdown-item-button>
            <b-dropdown-text v-if="availableOptions.length === 0">
              There are no tags available to select
            </b-dropdown-text>
          </b-dropdown>
        </template>
      </b-form-tags>
    </b-form-group>

<!-- icone -->
        <b-col md="3" class="mb-3">
      <p>Mise à jour</p>
      <b-icon icon="arrow-repeat" font-scale="4" v-b-popover.hover.top="'Mise à jour automatique'"></b-icon>
    </b-col>

        <b-col md="3" class="mb-4">
      <p>Cadenas ouvert</p>
      <b-icon icon="unlock-fill" font-scale="4" v-b-popover.hover.top="'Version maintenue'"></b-icon>
    </b-col>

            <b-col md="3" class="mb-3">
      <p>Cadenas fermé</p>
      <b-icon icon="lock-fill" font-scale="4" v-b-popover.hover.top="'Version non maintenue'"></b-icon>
    </b-col>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: ['vlc', 'win', 'adobe', 'firefox', 'chrome', 'spyder', 'flash'],
        search: '',
        value: []
      }
    },
    computed: {
      criteria() {
        // Compute the search criteria
        return this.search.trim().toLowerCase()
      },
      availableOptions() {
        const criteria = this.criteria
        // Filter out already selected options
        const options = this.options.filter(opt => this.value.indexOf(opt) === -1)
        if (criteria) {
          // Show only options that match criteria
          return options.filter(opt => opt.toLowerCase().indexOf(criteria) > -1);
        }
        // Show all options available
        return options
      },
      searchDesc() {
        if (this.criteria && this.availableOptions.length === 0) {
          return 'There are no tags matching your search criteria'
        }
        return ''
      }
    },
    methods: {
      onOptionClick({ option, addTag }) {
        addTag(option)
        this.search = ''
      }
    }
  }
</script>