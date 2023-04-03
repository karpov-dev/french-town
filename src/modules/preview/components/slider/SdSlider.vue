<template>
  <div class="slider">
    <sd-slider-card :title="slide.title" :description="slide.description"/>
  </div>
</template>

<script setup lang="ts">
  import SdSliderCard from "./SdSliderCard.vue";
  import {computed, onMounted, ref} from "vue";
  import {CONFIG} from "../../../../config/config";

  const slides = Object.values(CONFIG.SLIDER.SLIDES);
  const slide = ref(slides?.[0]);

  let slideIndex = 1;

  onMounted(() => {
    setInterval(changeSlide, CONFIG.SLIDER.TIME_TO_CHANGE_MS)
  });

  function changeSlide() {
    slideIndex = (slideIndex < slides.length - 1)
        ? slideIndex + 1
        : 0;

    slide.value = slides[slideIndex];
  }
</script>

<style scoped>
  .slider {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: white;
    background-image: url("/src/assets/images/background.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>