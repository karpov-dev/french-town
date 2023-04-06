<template>
  <div class="full-header__menu">
    <full-header-menu-short-info :text="service.description"/>
    <ui-menu :menu-items="menuItems"/>
  </div>
</template>

<script setup lang="ts">
  import UiMenu from "../../../menu/UiMenu.vue";
  import FullHeaderMenuShortInfo from "./FullHeaderMenuShortInfo.vue";
  import {onMounted, ref} from "vue";
  import {IHeaderMenu, IService} from "../../../../db/types";
  import {DataManager} from "../../../../db/DataManager";

  const service = ref<IService>({} as IService);
  const menuItems = ref<Array<IHeaderMenu>>([]);

  onMounted(async () => {
    service.value = (await DataManager.getCollection(DataManager.COLLECTIONS.SERVICE))[0];
    menuItems.value = (await DataManager.getCollection(DataManager.COLLECTIONS.HEADER_MENU))
  });
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