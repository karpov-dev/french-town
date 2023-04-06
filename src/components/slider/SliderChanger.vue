<template>
  <slider-changer-card :title="slide.title" :description="slide.description">
    <slot/>
  </slider-changer-card>
</template>

<script setup lang="ts">
  import SliderChangerCard from "./SliderChangerCard.vue";
  import {CONFIG} from "../../config/config";
  import {onMounted, ref} from "vue";

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