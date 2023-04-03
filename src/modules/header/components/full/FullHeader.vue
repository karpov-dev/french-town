<template>
  <div class="full-header" :class="{'full-header__active-scroll': isActiveHeader}">
    <div v-if="!isActiveHeader" class="size-inherit">
      <header-contacts class="full-header__contacts"/>
      <header-menu class="full-header__menu"/>
    </div>

    <div v-else>
      <header-slim class="full-header__slim"/>
    </div>
  </div>
</template>

<script setup lang="ts">
  import HeaderMenu from "./FhMenu.vue";
  import HeaderContacts from "./FhContacts.vue";
  import {onMounted, ref} from "vue";
  import HeaderSlim from "./FhSlim.vue";

  const isActiveHeader = ref<Boolean>(false);

  onMounted(() => {
    addEventListener('scroll', onScroll);
  });

  function onScroll() {
    isActiveHeader.value = window.scrollY > 200;
  }
</script>

<style scoped lang="scss">
  .full-header {
    background-color: transparent;
    padding: 0 100px;
  }

  .full-header__contacts {
    height: 25px;
  }

  .full-header__menu {
    height: 55px;
  }

  .full-header__slim {
    height: 30px;
  }

  .full-header__active-scroll {
    color: black;
    background-color: white;
    transition: 1s background-color;
  }

  @media only screen and (max-width: 1100px) {
    .full-header {
      padding: 0 20px;
    }
  }
</style>