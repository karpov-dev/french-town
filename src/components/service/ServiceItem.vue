<template>
  <card :id="workArea.id" :title="workArea.name" :class="{'service-item__anchor-link' : anchor === workArea.id}">
    <modal-window :is-open="isShowModal" @on:close="onCloseSchedule">
      <schedule-appointment-card @on:sent="onSent"/>
    </modal-window>

    <div class="service-item">

      <div class="service-item__items-grid">
        <template v-for="workAreaTypeItem of workArea.types" :key="workAreaTypeItem.id">
          <div>{{workAreaTypeItem.name}}</div>

          <div style="font-weight: 500">от {{workAreaTypeItem.costFrom}} рублей</div>
        </template>
      </div>

      <a @click="onSchedule">Оставить заявку</a>
    </div>
  </card>
</template>

<script setup lang="ts">
  import {IWorkArea} from "../../db/types";
  import Card from "../card/Card.vue";
  import ModalWindow from "../ui/modal/ModalWindow.vue";
  import ScheduleAppointmentCard from "../schedule/ScheduleAppointmentCard.vue";
  import {computed, ref} from "vue";
  import {toast} from "vue3-toastify";

  const props = defineProps<{
    workArea: IWorkArea
  }>();

  const anchor = computed(() => {
    return (document.URL.split('#').length > 1)
        ? document.URL.split('#')[1]
        : null;
  })

  const isShowModal = ref<boolean>(false);

  function onSchedule() {
    isShowModal.value = true;
  }

  function onCloseSchedule() {
    isShowModal.value = false;
  }

  function onSent() {
    isShowModal.value = false;
    toast.success('Запрос на звонок успешно отправлен', {autoClose: 3000});
  }
</script>

<style scoped lang="scss">
   .ui-card:hover,
   .service-item__anchor-link .ui-card {
    border-color: dodgerblue;
  }

  .service-item {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    cursor: pointer;
  }

  .service-item__items-grid {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 10px;
    padding-bottom: 20px;
  }
</style>