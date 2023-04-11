<template>
  <slider-changer-card v-if="slide" :title="slide.title" :description="slide.description">
    <slot/>
  </slider-changer-card>
</template>

<script setup lang="ts">
  import SliderChangerCard from "./SliderChangerCard.vue";
  import {onMounted, ref} from "vue";
  import {ISlide} from "../../db/types";
  import {DataManager} from "../../db/DataManager";
  import {ISetting} from "../../db/types/ISetting";

  const slides = ref<Array<ISlide>>([]);
  const settings = ref<ISetting>({} as ISetting);

  const slide = ref();

  let slideIndex = 1;

  onMounted(async () => {
    slides.value = await DataManager.getSlides();
    settings.value = await DataManager.getSettings();

    slide.value = slides.value[0];

    setInterval(changeSlide, settings.value.sliderTimeout);
  });

  function changeSlide() {
    slideIndex = (slideIndex < slides.value.length - 1)
        ? slideIndex + 1
        : 0;

    slide.value = slides.value[slideIndex];
  }
</script>