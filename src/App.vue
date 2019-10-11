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
  }),

//----

  methods: {
    fetchSearch(val) {
      console.log('searching: ', val);
      fetchSearch(val)
        .then(resp => {
          console.log('results: ', resp);
          this.searchResults = resp.results;
        })
        .catch(err => {
          console.log('Error fetching results: ', err);
        })
    },
    resetResults() {
      this.searchResults = [];
    }
  },
}

</script>



<style lang="scss">

@import "./scss/app";


main {
  background-color: blue;
}


</style>
