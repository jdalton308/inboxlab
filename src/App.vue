<template>

<div id="app" class="app">

  <sidebar />

  <main class="view-search">
    <search-bar
      :fetchSearch="fetchSearch"
      :resetResults="resetResults"
    />
    <results
      :searchResults="searchResults"
      :isLoading="isLoading"
    />
  </main>

</div>

</template>



<script>

import { fetchSearch } from './utils/requests';

import Sidebar from './components/sidebar.vue';
import SearchBar from './components/search-bar.vue';
import Results from './components/results.vue';


export default {
  name: 'app',
  components: {
    Sidebar,
    SearchBar,
    Results,
  },

//----

  data: () => ({
    searchResults: [],
    isLoading: false,
  }),

//----

  methods: {
    fetchSearch(val) {
      this.isLoading = true;

      fetchSearch(val)
        .then(resp => {
          this.searchResults = resp.results;
          this.isLoading = false;
        })
        .catch(err => {
          console.log('Error fetching results: ', err);
          this.isLoading = false;
        })
    },
    resetResults() {
      this.searchResults = [];
    }
  },
}

</script>



<style lang="scss">

@import "./scss/transitions";
@import "./scss/app";


main {
  background-color: blue;
}


</style>
