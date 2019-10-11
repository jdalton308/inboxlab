<template>

<div class="results">

  <div
    v-if="!searchResults.length"
    class="no-results"
  >
    <h2>Search Spotify</h2>
    <p>Find your favorite songs, artists, albums, podcasts, and playlists.</p>
  </div>

  <div
    v-else
    class="result-sections"
  >
    <results-section
      v-for="(results, name) in sortedResults"
      :key="name"
      :name="name"
      :results="results"
    />
  </div>

</div>

</template>



<script>

import ResultsSection from './results-section.vue';


export default {
  name: 'results',
  components: {
    ResultsSection,
  },

//----

  props: [
    'searchResults'
  ],

//----

  computed: {
    sortedResults() {
      const albums = [];
      const songs = [];
      const other = [];

      if (this.searchResults.length) {
        this.searchResults.forEach((result) => {
          switch (result.kind) {
            case 'album':
              albums.push(result);
              break;
            case 'song':
              songs.push(result);
              break;
            default:
              other.push(result)
          }
        });
      }

      return {
        ...(albums.length && {albums}),
        ...(songs.length && {songs}),
        ...(other.length && {other}),
      };
    }
  },
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
