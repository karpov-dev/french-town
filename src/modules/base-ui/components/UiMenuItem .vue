<template>
  <a class="ui-menu__item" :href="props.link">
    {{name}}
  </a>
</template>

<script setup lang="ts">
  const props = defineProps<{
    name: string,
    link: string
  }>();
</script>

<style scoped>
  .ui-menu__item {
    text-transform: uppercase;
    font-weight: 800;
    cursor: pointer;
    color: inherit;
  }
</style>