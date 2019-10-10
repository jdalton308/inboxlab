<template>

<div id="app">
  <input
    type="text"
    name="search"
    v-model="searchVal"
  >
</div>

</template>



<script>

import { fetchSearch } from './utils/requests';


export default {
  name: 'app',
  components: {
  },

//----

  data: () => ({
    searchVal: '',
  }),

//----

  watch: {
    searchVal() {
      this.fetchSearch();
    },
  },

//----

  methods: {
    fetchSearch(e) {
      console.log('searching: ', this.searchVal);
      fetchSearch(this.searchVal)
        .then(rawResp => rawResp.json())
        .then(resp => {
          console.log('response recieved: ', resp);
        })
    },
  },
}

</script>



<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
