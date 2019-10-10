<template>

<div class="search-bar">
  <input
    type="text"
    name="search"
    v-model="searchVal"
  >
</div>

</template>



<script>

export default {
  name: 'search-bar',

//----

  props: [
    'fetchSearch',
  ],

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

}

</script>



<style lang="scss">

.search-bar {
}

</style>
