<template>
  <a :href="`tel:${phone}`">{{phone}}</a>
</template>

<script setup lang="ts">
  const props = defineProps<{
    phone: any
  }>();
</script>