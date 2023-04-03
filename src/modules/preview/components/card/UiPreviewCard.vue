<template>
  <div class="preview-card">
    <div class="page">{{page}}</div>
    <div class="title">{{title}}</div>

    <div class="content">
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

  .page, .title {
    font-weight: 800;
  }

  .page {
    font-size: 13px;
    text-transform: uppercase;
    color: #AAAAAA;
  }

  .title {
    margin-bottom: 40px;
    font-size: 26px;
    border-bottom: 2px solid dodgerblue;
  }

  .content {
    font-size: 15px;
    color: #666666;
    font-weight: 600;
  }
</style>