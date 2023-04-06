<template>
  <div class="content__container">
    <site-header class="header content__items" :class="{'header__white': isScrolledDown}"/>
  </div>

  <router-view/>

  <ft-footer/>
</template>

<script setup lang="ts">
  import FtFooter from "./components/footer/SiteFooter.vue";
  import SiteHeader from "./components/header/components/SiteHeader.vue";
  import {onMounted, ref} from "vue";

  const isScrolledDown = ref<Boolean>(false);

  onMounted(() => addEventListener('scroll', onScroll));

  function onScroll() {
    isScrolledDown.value = window.scrollY > 100;
  }
</script>

<style scoped>
  .header {
    transition: 0.5s all;
  }

  .header__white {
    color: black;
    background-color: white;
    width: 100%;
  }
</style>