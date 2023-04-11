<template>
  <div class="icon-text">
    <img :src="iconUrl"
         :alt="text"
         class="svg-icon">

    <slot>{{text}}</slot>
  </div>
</template>

<script setup lang="ts">
  import {computed} from "vue";

  const props = withDefaults(defineProps<{
    file: string,
    text?: string,
    extension?: 'svg' | 'png'
    path?: 'icons' | 'images'
  }>(), {
    extension: "svg",
    path: 'icons'
  });

  const iconUrl = computed(() => {
    return new URL(`/src/assets/${props.path}/${props.file}.${props.extension}`, import.meta.url).href;
  });
</script>

<style scoped lang="scss">
  $gap: 7px;

  .icon-text {
    @include flex-row;
    @include space-between-center;
    @include height-inherit;
    gap: $gap;
  }

  .svg-icon {
    height: 70%;
  }
</style>