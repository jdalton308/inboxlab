<template>

<div id="app" class="app">

  <sidebar />

  <main class="view-search">
    <search-bar
      :fetchSearch="fetchSearch"
    />
    <results
      :results="searchResults"
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
    searchVal: '',
    searchResults: null,
  }),

//----

  methods: {
    fetchSearch(e) {
      console.log('searching: ', this.searchVal);
      fetchSearch(this.searchVal)
        .then(resp => {
          console.log('response recieved:\n', resp);
          this.searchResults = resp;
        })
    },
  },
}

</script>



<style lang="scss">

@import "./scss/app";


main {
  background-color: blue;
}


</style>
