<template>
  <a :href="link" class="size-inherit">
    <img :src="iconUrl" :alt="link" class="svg-icon">
  </a>
</template>

<script setup lang="ts">
  import {computed} from "vue";

  const props = defineProps<{
    name: string,
    link: string
  }>();

  const iconUrl = computed(() => {
    return new URL(`/src/assets/icons/${props.name}.svg`, import.meta.url).href;
  });
</script>