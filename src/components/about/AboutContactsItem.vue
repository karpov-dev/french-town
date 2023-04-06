<template>
  <div class="about-us__contacts-card">
    <div class="about-us__contacts-card__title">{{title}}</div>
    <slot/>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    title: string
  }>();
</script>

<style scoped lang="scss">
  .about-us__contacts-card {
    @include flex-colum;
    gap: 10px
  }

  .about-us__contacts-card__title {
    font-weight: 400;
    color: #666666;
  }
</style>