<template>
  <div class="mobile-header" :class="{'mobile-header__active-scroll': isActiveHeader || isOpenMenu}" @blur="onBlur" tabindex="0">
    <img :src="menuSvg"
         alt="Menu"
         class="svg-icon menu__button"
         @click="onOpen"
    >

    <icon-text v-if="isActiveHeader || isOpenMenu"
                  path="images"
                  file="logo"
                  extension="png"
                  text="French Town"
    ></icon-text>


    <about-follow-us :medias="socialMedias"/>
  </div>

  <transition>
    <div v-if="isOpenMenu" class="menu__expanded">
      <ui-menu :menu-items="menuItems"/>
    </div>
  </transition>
</template>

<script setup lang="ts">
  import {computed, onMounted, ref} from "vue";
  import AboutFollowUs from "../../../about/AboutFollowUs.vue";
  import IconText from "../../../icon/IconText.vue";
  import UiMenu from "../../../menu/UiMenu.vue";
  import {IHeaderMenu, ISocialMedia} from "../../../../db/types";
  import {DataManager} from "../../../../db/DataManager";

  const isActiveHeader = ref<Boolean>(false);

  const isOpenMenu = ref<Boolean>(false);

  const menuItems = ref<Array<IHeaderMenu>>([]);

  const socialMedias = ref<Array<ISocialMedia>>([]);

  const menuSvg = computed(() => {
    return new URL(`/src/assets/icons/menu.svg`, import.meta.url).href;
  });

  onMounted(async () => {
    menuItems.value = (await DataManager.getCollection(DataManager.COLLECTIONS.HEADER_MENU));

    socialMedias.value = (await DataManager.getCollection(DataManager.COLLECTIONS.SOCIAL_MEDIA))?.filter(
        (media: ISocialMedia) => media.isPhoneAvailable
    ) as Array<ISocialMedia>;

    addEventListener('scroll', onScroll);
  });

  function onScroll() {
    isActiveHeader.value = window.scrollY > 200;
  }

  function onOpen() {
    isOpenMenu.value = !isOpenMenu.value;
  }

  function onBlur() {
    isOpenMenu.value = false;
  }
</script>

<style scoped lang="scss">
  .mobile-header {
    display: flex;
    top: 0;
    @include height-inherit;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 15px 20px;
    height: 26px;
    transition: 0.5s background-color;
  }

  .menu__expanded {
    height: 100%;
    width: 100%;
  }

  .menu__button {
    width: 30px;
    height: 30px;
    border-radius: 8px;
  }

  .mobile-header__active-scroll {
    background-color: white;
    --svg-icon__filter: 0;
    height: 20px;
    padding: 10px 10px;
    color: black;

  }
</style>