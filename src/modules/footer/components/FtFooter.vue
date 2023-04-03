<template>
  <div class="footer">
    <ui-menu class="full-header__menu" :menu-items="Object.values(CONFIG.HEADER.MENU.MENU_ITEMS)"/>
  </div>
</template>

<script setup lang="ts">

import UiMenu from "../../base-ui/components/UiMenu.vue";
import {CONFIG} from "../../../config/config";
</script>

<style scoped>
  .footer {
    color: #fff;
    background-color: #333;
  }

  .full-header__menu {
    padding: 20px 30px;
    font-size: 12px;
  }
</style>