<template>
  <slider class="pc-slider"/>

  <about-us-preview class="content__item zebra"/>
  <services-preview class="content__item"/>
  <about-contacts class="content__item zebra"/>
  <about-find-us-on-map class="content__item"/>

</template>

<script setup lang="ts">
  import {onMounted, ref} from "vue";
  import Slider from "../components/slider/Slider.vue";
  import AboutUsPreview from "../components/about/AboutUsPreview.vue";
  import AboutContacts from "../components/about/AboutContacts.vue";
  import ServicesPreview from "../components/service/ServicesPreview.vue";
  import AboutFindUsOnMap from "../components/about/AboutFindUsOnMap.vue";


  const isScrolledDown = ref<Boolean>(false);

  onMounted(() => addEventListener('scroll', onScroll));

  function onScroll() {
    isScrolledDown.value = window.scrollY > 200;
  }
</script>

<style scoped>
  .pc-slider {
    z-index: 1;
    width: 100vw;
    height: 100vh;
  }

  .zebra {
    background-color: #f5f5f5;
    border-radius: 10px;
  }

  .content__item {
    width: 75%;
    transition: 0.5s all ease-in-out;
  }
</style>