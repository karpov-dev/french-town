<template>
  <div class="services wrap-content__container">
    <service-item class="wrap-content__item" v-for="workArea of workAreas" :work-area="workArea" :key="workArea.id"/>
  </div>
</template>

<script setup lang="ts">
  import {onMounted, ref} from "vue";
  import {IWorkArea} from "../../db/types";
  import {DataManager} from "../../db/DataManager";
  import ServiceItem from "./ServiceItem.vue";

  const workAreas = ref<Array<IWorkArea>>([]);

  onMounted(async () => {
    workAreas.value = await DataManager.getWorkAreas();
  });
</script>

<style scoped lang="scss">
  .services {
    gap: 15px;
  }
</style>