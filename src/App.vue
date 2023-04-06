<template>
  <div class="content">
    <site-header class="content__item header" :class="{'header__white': isScrolledDown}"/>

    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view>
  </div>

  <ft-footer/>
</template>

<script setup lang="ts">
  import FtFooter from "./components/footer/SiteFooter.vue";
  import SiteHeader from "./components/header/components/SiteHeader.vue";
  import {onMounted, ref} from "vue";

  const isScrolledDown = ref<Boolean>(false);

  onMounted(() => addEventListener('scroll', onScroll));

  function onScroll() {
    isScrolledDown.value = window.scrollY > 200;
  }
</script>

<style scoped>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content__item {
    width: 75%;
    transition: 0.5s all ease-in-out;
  }

  .header__white {
    color: black;
    background-color: white;
    width: 100%;
  }

  @media only screen and (max-width: 1420px) {
    .content__item {
      width: 85%;
    }

    .header__white {
      width: 100%;
    }
  }

  @media only screen and (max-width: 1250px) {
    .content__item {
      width: 82%;
    }

    .header__white, .header {
      width: 100%;
    }
  }
</style>