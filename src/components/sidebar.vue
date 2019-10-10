<template>

<nav class="sidebar">
  <div class="nav-items">
    <div class="nav-item logo-container">
      Spotify
    </div>
    <div class="nav-item active">Search</div>
    <div class="nav-item">Home</div>
    <div class="nav-item">Your Library</div>
  </div>

  <div class="util-links">
    <div class="nav-item">Install App</div>
    <div class="profile-link">mfratz</div>
  </div>
</nav>

</template>



<script>

export default {
  name: 'sidebar',
}

</script>



<style lang="scss">

.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 34px 32px 22px;
  font-weight: 700;
  color: $grey-light;
  background-color: $grey-dark;

  .nav-items {
    flex: 1 0 0;

    .nav-item {
      margin-bottom: 22px;
      font-size: 1.25rem;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover,
      &.active {
        color: $green;
      }

      &.logo-container {
        color: $white;
        font-size: 1.75rem;
      }
    }
  }
  .util-links {
    flex: 0 0 auto;
    font-size: 1rem;

    .nav-item {
      margin-bottom: 8px;
    }
    .profile-link {
      padding-top: 12px;
      color: $white;
      border-top: 1px solid $grey-light;
    }
  }
}

</style>
