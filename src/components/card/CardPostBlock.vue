<template>
  <div class="preview-card">
    <div class="preview-card__page">{{page}}</div>
    <div class="preview-card__title">{{title}}</div>

    <div class="preview-card__content">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    page: string,
    title: string
  }>();
</script>

<style scoped>
  .preview-card {
    display: flex;
    flex-direction: column;
    padding: 30px;
    text-align: left;
  }

  .preview-card__page, .preview-card__title {
    font-weight: 800;
  }

  .preview-card__page {
    font-size: 13px;
    text-transform: uppercase;
    color: #AAAAAA;
  }

  .preview-card__title {
    margin-bottom: 15px;
    font-size: 26px;
    border-bottom: 2px solid dodgerblue;
    color: black;
  }

  .preview-card__content {
    font-size: 15px;
    color: #666666;
    font-weight: 600;
  }
</style>