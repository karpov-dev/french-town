<template>
  <a :href="`mailto:${email}`">{{email}}</a>
</template>

<script setup lang="ts">
  const props = defineProps<{
    email: any
  }>();
</script>