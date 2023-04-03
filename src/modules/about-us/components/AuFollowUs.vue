<template>
  <div class="social-medias">
    <ui-follow-us-item v-for="socialMedia of medias"
                    :key="socialMedia.name"
                    :name="socialMedia.name"
                    :link="socialMedia.link"
    ></ui-follow-us-item>
  </div>
</template>

<script setup lang="ts">
  import UiFollowUsItem from "./AuFollowUsItem.vue";

  const props = defineProps<{
    medias: any,
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