<template>
  <div class="short-info">
    <img src="/src/assets/images/logo-2.png" class="size-inherit">
    <div class="short-info__text">{{text}}</div>
  </div>
</template>

<script setup lang="ts">
  import {router} from "../../../../router/router";

  const props = defineProps<{
    text: any
  }>();
</script>

<style scoped lang="scss">
  .short-info {
    @include size-inherit;
    display: flex;
    align-items: center;
    gap: 20px;
    text-align: start;
  }

  .short-info__text {
    max-width: 60%;
  }
</style>