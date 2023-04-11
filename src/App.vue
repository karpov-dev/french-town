<template>
  <div class="t content__container">
    <site-header class="header content__items" :class="{'header__white': isScrolledDown}"/>
  </div>

  <div style="min-height: 15vh">
    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view>
  </div>

  <div class="content__container">
    <div class="content__items">
      <about-contacts/>
      <about-find-us-on-map/>
    </div>
  </div>
  <ft-footer/>
</template>

<script setup lang="ts">
  import FtFooter from "./components/footer/SiteFooter.vue";
  import SiteHeader from "./components/header/components/SiteHeader.vue";
  import {onMounted, ref} from "vue";
  import AboutContacts from "./components/about/AboutContacts.vue";
  import AboutFindUsOnMap from "./components/about/AboutFindUsOnMap.vue";
  import AboutFeedback from "./components/about/AboutFeedback.vue";

  const isScrolledDown = ref<Boolean>(false);

  //TODO: Highlight selected service card
  //TODO: Image changer
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