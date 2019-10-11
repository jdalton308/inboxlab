<template>

<div class="search-bar">
  <input
    type="text"
    name="search"
    v-model="searchVal"
    placeholder="Start typing..."
  >
</div>

</template>



<script>

export default {
  name: 'search-bar',

//----

  props: [
    'fetchSearch',
    'resetResults',
  ],

//----

  data: () => ({
    searchVal: '',
  }),

//----

  watch: {
    searchVal() {
      if (this.searchVal) {
        this.fetchSearch(this.searchVal);
      } else {
        this.resetResults();
      }
    },
  },

}

</script>



<style lang="scss">

.search-bar {
  input {
    border: 0;
    border-radius: 0;

    display: block;
    width: 100%;
    padding: 30px 70px;
    font-size: 3rem;
    color: $white;
    font-weight: 700;
    background-color: $grey;
  }
}

</style>
