<template>
  <div class="social-medias">
    <about-follow-us-item v-for="socialMedia of medias"
                          :key="socialMedia.id"
                          :icon="socialMedia.id"
                          :link="socialMedia.link"
    ></about-follow-us-item>
  </div>
</template>

<script setup lang="ts">
  import AboutFollowUsItem from "./AboutFollowUsItem.vue";
  import {ISocialMedia} from "../../db/types";

  //TODO: id to icon name
  const props = defineProps<{
    medias: Array<ISocialMedia>,
  }>();
</script>

<style scoped lang="scss">
  $gap: 15px;

  .social-medias {
    @include flex-row;
    @include height-inherit;
    align-items: center;
    gap: $gap;
  }
</style>