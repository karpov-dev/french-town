<template>
  <div class="service-card">
    <slot/>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
  .service-card {
    padding: 15px;
    border: 2px solid rgba(218, 227, 238, 0.55);
    border-radius: 6px;
  }
</style>