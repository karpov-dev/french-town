<template>
  <div class="ui-menu">
    <hd-header-menu-item v-for="menuItem of props.menuItems"
                         :name="menuItem.name"
                         :link="menuItem.link"/>
  </div>
</template>

<script setup lang="ts">
  import HdHeaderMenuItem from "./UiMenuItem .vue";

  const props = defineProps<{
    menuItems: Array<
      {name: string, link: string}
    >
  }>();
</script>

<style scoped>
  .ui-menu {
    display: flex;
    flex-direction: row;
    gap: 25px;
    align-items: center;
  }

  @media only screen and (max-width: 850px) {
    .ui-menu {
      flex-direction: column;
      gap: 40px;
      background-color: white;
      color: black;
      padding: 20px;
    }
  }
</style>