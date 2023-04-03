<template>
  <div class="header__slim">
    <ui-icon-text v-for="config of CONFIG.HEADER.CONTACTS"
                  :file="config.icon"
                  :text="config.text"/>

    <ui-menu :menu-items="Object.values(CONFIG.HEADER.MENU.MENU_ITEMS)"/>
  </div>
</template>

<script setup lang="ts">
  import UiIconText from "../../../base-ui/components/UiIconText.vue";
  import {CONFIG} from "../../../../config/config";
  import UiMenu from "../../../base-ui/components/UiMenu.vue";
  import FhMenuShortInfo from "./FhMenuShortInfo.vue";
</script>

<style scoped lang="scss">
  .header__slim {
    --svg-icon__filter: 0;
    @include flex-row;
    @include space-between-center;
    gap: 10px;
    padding: 10px;
  }

  .image {
    width: 50px;
    height: 50px;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-transform: uppercase
  }

  @media only screen and (max-width: 1500px) {
    .header__slim {
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 1300px) {
    .header__slim {
      font-size: 10px;
    }

    .logo {
      display: none;
    }
  }
</style>