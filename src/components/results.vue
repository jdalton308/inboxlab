<template>

<div class="results">
  <div
    v-if="!searchResults"
    class="no-results"
  >
    <h2>Search Spotify</h2>
    <p>Find your favorite songs, artists, albums, podcasts, and playlists.</p>
  </div>
</div>

</template>



<script>

export default {
  name: 'results',

//----

  props: [
    'searchResults'
  ],
}

</script>



<style lang="scss">

.results {
  width: 100%;
  padding: 34px 32px;
  text-align: center;
  background-image: linear-gradient(to top, $gradient-grey, $gradient-blue);

  .no-results {
    h2 {
      color: $white;
    }
  }
}

</style>
