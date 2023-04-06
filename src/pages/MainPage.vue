<template>
  <div class="content__container">
    <schedule-appointment-slider/>

    <div class="content__items">
      <about-us-preview/>
      <services-preview/>
      <about-contacts/>
      <about-find-us-on-map/>
    </div>
  </div>

</template>

<script setup lang="ts">
  import {onMounted, ref} from "vue";
  import AboutUsPreview from "../components/about/AboutUsPreview.vue";
  import AboutContacts from "../components/about/AboutContacts.vue";
  import ServicesPreview from "../components/service/ServicesPreview.vue";
  import AboutFindUsOnMap from "../components/about/AboutFindUsOnMap.vue";
  import ScheduleAppointmentSlider from "../components/schedule/ScheduleAppointmentSlider.vue";

  const isScrolledDown = ref<Boolean>(false);

  onMounted(() => addEventListener('scroll', onScroll));

  function onScroll() {
    isScrolledDown.value = window.scrollY > 200;
  }
</script>

<style scoped>
  .slider {
    z-index: 1;
    width: 100vw;
    height: 100vh;
  }
</style>