<template>
  <div class="full-header__menu">
    <fh-menu-short-info :text="shortInfo"/>
    <ui-menu :menu-items="Object.values(CONFIG.HEADER.MENU.MENU_ITEMS)"/>
  </div>
</template>

<script setup lang="ts">
  import UiMenu from "../../../base-ui/components/UiMenu.vue";
  import FhMenuShortInfo from "./FhMenuShortInfo.vue";
  import {CONFIG} from "../../../../config/config";

  const shortInfo = 'Сервис, ремонт и техобслуживание, французских автомобилей';
</script>

<style scoped lang="scss">
  .full-header__menu {
    @include height-inherit;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 10px;
  }
</style>