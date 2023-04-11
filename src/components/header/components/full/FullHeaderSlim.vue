<template>
  <div class="header__slim">
    <icon-text file="address" :text="service.address">
      <formatted-address :address="service.address" :organization-id="service.yandexOrganizationId"/>
    </icon-text>

    <icon-text file="clock" :text="service.workTime"/>

    <icon-text file="contact">
      <formatted-phone :phone="service.phone"/>
    </icon-text>

    <ui-menu :menu-items="menuItems"/>
  </div>
</template>

<script setup lang="ts">
  import IconText from "../../../ui/icon/IconText.vue";
  import UiMenu from "../../../menu/UiMenu.vue";
  import {onMounted, ref} from "vue";
  import {IHeaderMenu, IService} from "../../../../db/types";
  import {DataManager} from "../../../../db/DataManager";
  import FormattedAddress from "../../../ui/output/formattedAddress.vue";
  import FormattedPhone from "../../../ui/output/formattedPhone.vue";

  const service = ref<IService>({} as IService);
  const menuItems = ref<Array<IHeaderMenu>>([]);

  onMounted(async () => {
    service.value = await DataManager.getService();
    menuItems.value = await DataManager.getMenuItems();
  })
</script>

<style scoped lang="scss">
  .header__slim {
    --svg-icon__filter: 0;
    @include flex-row;
    @include space-between-center;
    gap: 10px;
    padding: 10px 40px;
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

  a {
    color: inherit;
    font-weight: 400;
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