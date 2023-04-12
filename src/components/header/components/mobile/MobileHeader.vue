<template>
  <div class="mobile-header" :class="{'mobile-header__active-scroll': isActiveHeader || isMenuOpened}" tabindex="0">
    <img :src="menuSvg"
         alt="Menu"
         class="svg-icon mobile-header__menu-button"
         @click="onOpen"
    >

    <icon-text v-if="isActiveHeader || isMenuOpened"
                  path="images"
                  file="logo"
                  extension="png"
                  text="French Town"
    ></icon-text>


    <about-follow-us :medias="socialMedias"/>
  </div>

  <transition name="fade">
    <div v-if="isMenuOpened">
      <div class="mobile-header__opened-menu-layout" @click="onBlur"/>

      <div class="mobile-header__opened-menu">
        <ui-menu :menu-items="menuItems" @click="onBlur"/>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
  import {computed, onMounted, ref} from "vue";
  import AboutFollowUs from "../../../about/AboutFollowUs.vue";
  import IconText from "../../../ui/icon/IconText.vue";
  import UiMenu from "../../../menu/UiMenu.vue";
  import {IHeaderMenu, ISocialMedia} from "../../../../db/types";
  import {DataManager} from "../../../../db/DataManager";

  const isActiveHeader = ref<Boolean>(false);

  const isMenuOpened = ref<Boolean>(false);

  const menuItems = ref<Array<IHeaderMenu>>([]);

  const socialMedias = ref<Array<ISocialMedia>>([]);

  const menuSvg = computed(() => {
    return new URL(`/src/assets/icons/menu.svg`, import.meta.url).href;
  });

  onMounted(async () => {
    menuItems.value = await DataManager.getMenuItems();
    socialMedias.value = (await DataManager.getSocialMedias())?.filter((media: ISocialMedia) => media.isPhoneAvailable) as Array<ISocialMedia>;

    addEventListener('scroll', onScroll);

  });

  function onScroll() {
    isActiveHeader.value = window.scrollY > 100;
  }

  function onOpen() {
    isMenuOpened.value = !isMenuOpened.value;
  }

  function onBlur() {
    isMenuOpened.value = false;
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

  .mobile-header__opened-menu-layout {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: -1;
  }

  .mobile-header__opened-menu {
    height: 100%;
    width: 100%;
  }

  .mobile-header__menu-button {
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