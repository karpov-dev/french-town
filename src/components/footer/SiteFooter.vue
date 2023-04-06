<template>
  <div class="footer">
    <ui-menu class="full-header__menu"
          :menu-items="menuItems"
    ></ui-menu>
  </div>
</template>

<script setup lang="ts">
  import UiMenu from "../menu/UiMenu.vue";
  import {onMounted, ref} from "vue";
  import {IHeaderMenu} from "../../db/types";
  import {DataManager} from "../../db/DataManager";

  const menuItems = ref<Array<IHeaderMenu>>([]);

  onMounted(async () => {
    menuItems.value = (await DataManager.getCollection(DataManager.COLLECTIONS.HEADER_MENU))
  });
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