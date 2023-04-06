<template>
  <slider class="slider__page">
    <div class="content__items">
      <slider-changer-card :title="title" :description="description"/>
    </div>
  </slider>
</template>

<script setup lang="ts">
  import Slider from "./Slider.vue";
  import SliderChangerCard from "./SliderChangerCard.vue";

  const props = defineProps<{
    title: string,
    description: string
  }>();
</script>

<style scoped lang="scss">
  .slider__page {
    height: 15vh;
    padding-top: 150px;
  }

  @media only screen and (max-width: 850px) {
    .slider__page {
      height: 15vh;
      padding-top: 70px;
    }
  }
</style>