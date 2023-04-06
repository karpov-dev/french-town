<template>
  <div class="slider-card">
    <transition>
      <div :key="props.title">
        <div class="preview-card__title">{{props.title}}</div>
        <div class="description">{{props.description}}</div>
      </div>
    </transition>

    <slot/>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    title: string,
    description: string,
  }>();
</script>

<style scoped>
  .slider-card {
    padding: 20px;
  }

  .preview-card__title,
  .description {
    max-width: 800px;
    text-align: left;
  }

  .preview-card__title {
    font-size: 44px;
    font-weight: 800;
    padding-bottom: 20px;
  }

  .description {
    font-size: 18px;
    text-wrap: avoid;
    padding-bottom: 50px;
  }

  @media only screen and (max-width: 600px) {
    .preview-card__title {
      font-size: 30px;
    }

    .description {
      font-size: 15px;
    }
  }
</style>