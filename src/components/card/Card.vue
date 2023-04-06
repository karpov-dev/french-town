<template>
  <div class="ui-card">
    <div class="ui-card__title">{{title}}</div>
    <div class="ui-card__description">{{description}}</div>
    <div class="ui-card__content"><slot/></div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    title?: string,
    description?: string
  }>();
</script>

<style scoped lang="scss">
  .ui-card {
    display: flex;
    flex-direction: column;
    padding: 15px;
    border-radius: 10px;
    border: 3px solid #f5f5f5;
    transition: 0.5s all;
  }

  .ui-card__title {
    font-size: 17px;
    padding-bottom: 15px;
    color: #333;
  }

  .ui-card__description {
    overflow-wrap: anywhere;
  }

  .ui-card__content {
    height: 100%;
    font-weight: 400;
  }
</style>