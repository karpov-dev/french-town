<template>
  <div class="services">
    <spinner v-if="isLoading"/>

    <div class="services__content wrap-content__container">
      <service-item class="wrap-content__item"
                    v-for="workArea of workAreas"
                    :work-area="workArea"
                    :key="workArea.id"
      ></service-item>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {onMounted, ref} from "vue";
  import {IWorkArea} from "../../db/types";
  import {DataManager} from "../../db/DataManager";
  import ServiceItem from "./ServiceItem.vue";
  import Spinner from "../spinners/Spinner.vue";

  const workAreas = ref<Array<IWorkArea>>([]);
  const isLoading = ref<boolean>(false);

  onMounted(async () => {
    isLoading.value = true;
    workAreas.value = await DataManager.getWorkAreas();
    isLoading.value = false;
  });
</script>

<style scoped lang="scss">
  .services {
    position: relative;
    min-height: 200px;
  }

  .services__content {
    gap: 15px;
  }
</style>