<template>
  <div class="services">
    <div class="services__content wrap-content__container">
      <service-item class="wrap-content__item"
                    v-for="workArea of workAreas"
                    :work-area="workArea"
                    :key="workArea.id"
                    @click="onSchedule"
      ></service-item>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {onMounted, ref} from "vue";
  import {IWorkArea} from "../../db/types";
  import {DataManager} from "../../db/DataManager";
  import ServiceItem from "./ServiceItem.vue";
  import Spinner from "../ui/spinners/Spinner.vue";
  import ModalWindow from "../ui/modal/ModalWindow.vue";
  import ScheduleAppointmentCard from "../schedule/ScheduleAppointmentCard.vue";

  const workAreas = ref<Array<IWorkArea>>([]);

  onMounted(async () => {
    workAreas.value = await DataManager.getWorkAreas();
  });

  const isShowModal = ref<boolean>(false);

  function onSchedule() {
    isShowModal.value = true;
  }

  function onCloseSchedule() {
    isShowModal.value = false;
  }
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