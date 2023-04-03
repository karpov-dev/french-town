<template>
  <div class="header__contacts">
    <ui-icon-text v-for="config of CONFIG.HEADER.CONTACTS" :file="config.icon" :text="config.text"/>
    <ui-follow-us :medias="CONFIG.FOLLOW_US"/>
  </div>
</template>

<script setup lang="ts">
  import UiIconText from "../../../base-ui/components/UiIconText.vue";
  import UiFollowUs from "../../../about-us/components/AuFollowUs.vue";
  import {CONFIG} from "../../../../config/config";
</script>

<style scoped lang="scss">
  .header__contacts {
    @include flex-row;
    @include space-between-center;
    @include height-inherit;
    font-weight: 500;
    border-bottom: 1px solid rgba(126, 126, 126, 0.76);
    padding: 10px;
    gap: 5px;
  }
</style>