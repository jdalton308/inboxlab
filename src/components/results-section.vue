<template>

<section class="result-section">
  <h1 class="rs-title">{{ name }}</h1>
  <div class="result-items">

    <div
      v-for="result in results"
      :key="result.trackId"
      class="result-item"
    >
      <div
        class="img-block"
        :style="{'background-image': `url(${result.artworkUrl100})`}"
      ></div>
      <div class="result-title">{{ result.trackName }}</div>
      <div class="result-subtitle">{{ result.artistName }}</div>
    </div>

  </div>
</section>

</template>



<script>

export default {
  name: 'results-section',

//----
  
  props: [
    'name',
    'results',
  ],
}

</script>



<style lang="scss">

.result-section {
  margin-bottom: 80px;

  .rs-title {
    color: $white;
    text-transform: capitalize;
  }

  .result-item {
    display: inline-block;
    vertical-align: top;
    margin: 0 12px 60px;
    width: 324px;
    font-size: 1.25rem;

    .img-block {
      height: 324px;
      width: 100%;
      margin-bottom: 20px;
      background-size: cover;
      background-position: center center;
    }
    .result-title {
      color: $white;
      font-weight: 500;
      margin-bottom: 12px;
    }
  }
}

</style>
