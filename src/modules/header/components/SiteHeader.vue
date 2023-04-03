<template>
  <div class="site-header">
    <div class="site-header__full">
      <full-header/>
    </div>

    <div class="site-header__mobile">
      <mobile-header/>
    </div>
  </div>
</template>

<script setup lang="ts">
  import FullHeader from "./full/FullHeader.vue";
  import MobileHeader from "./mobile/MobileHeader.vue";
</script>

<style scoped lang="scss">
  .site-header {
    @include fixed-zero;
    --svg-icon__filter: 1;
    z-index: 2;
    width: 100%;
    color: white;
    font-size: 13px;
  }

  .site-header__mobile {
    display: none;
  }

  @media only screen and (max-width: 1100px) {
    .site-header__full,
    .site-header__mobile {
      font-size: 11px;
    }
  }

  @media only screen and (max-width: 850px) {
    .site-header__full {
      display: none;
    }

    .site-header__mobile {
      display: initial;
      padding: 0;
    }
  }
</style>