<template>
  <div class="mobile-header" :class="{'mobile-header__active-scroll': isActiveHeader || isOpenMenu}" @blur="onBlur" tabindex="0">
    <img :src="menuSvg"
         alt="Menu"
         class="svg-icon menu__button"
         @click="onOpen"
    >

    <ui-icon-text v-if="isActiveHeader || isOpenMenu"
                  path="images"
                  file="logo"
                  extension="png"
                  text="French Town"
    ></ui-icon-text>

    <ui-follow-us :medias="[CONFIG.FOLLOW_US.WHATSAPP, CONFIG.FOLLOW_US.TELEGRAM]"/>
  </div>

  <transition>
    <div v-if="isOpenMenu" style="height: 100%; width: 100%">
      <ui-menu :menu-items="Object.values(CONFIG.HEADER.MENU.MENU_ITEMS)"/>
    </div>
  </transition>
</template>

<script setup lang="ts">
  import {computed, onMounted, ref} from "vue";
  import UiFollowUs from "../../../about-us/components/AuFollowUs.vue";
  import {CONFIG} from "../../../../config/config";
  import UiIconText from "../../../base-ui/components/UiIconText.vue";
  import UiMenu from "../../../base-ui/components/UiMenu.vue";

  const isActiveHeader = ref<Boolean>(false);

  const isOpenMenu = ref<Boolean>(false);

  const menuSvg = computed(() => {
    return new URL(`/src/assets/icons/menu.svg`, import.meta.url).href;
  });

  onMounted(() => {
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
    @include flex-row;
    @include height-inherit;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 15px 20px;
    height: 26px;
    transition: 0.5s background-color;
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