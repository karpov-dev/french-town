<template>
  <div class="service-preview__card">
    <ul class="service-preview__list">
      <li v-if="workAreaItems" v-for="item of workAreaItems">{{item.name}}</li>
    </ul>

    <a>Подробнее...</a>
  </div>

</template>

<script setup lang="ts">
  import {IWorkAreaItem} from "../../db/types";

  const props = defineProps<{
    workAreaItems: Array<IWorkAreaItem>
  }>();
</script>

<style scoped lang="scss">
  .service-preview__list {
    font-size: 15px;
    font-weight: 500;
    user-select: none;
  }

  .service-preview__card {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    cursor: pointer;
  }
</style>