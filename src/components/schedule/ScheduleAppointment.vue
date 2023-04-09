<template>
  <modal-window :is-open="isShowModal" @on:close="onCloseSchedule">
    <schedule-appointment-card/>
  </modal-window>

  <div class="buttons">
    <button class="button button__more" @click="onAbout">Подробнее</button>

    <button class="button button__schedule" @click="onSchedule">Записаться</button>
  </div>
</template>

<script setup lang="ts">
  import {router} from "../../router/router";
  import {routes} from "../../router/routes";
  import ModalWindow from "../modal/ModalWindow.vue";
  import ScheduleAppointmentCard from "./ScheduleAppointmentCard.vue";
  import {ref} from "vue";

  const isShowModal = ref<boolean>(false);

  function onSchedule() {
    isShowModal.value = true;
  }

  function onCloseSchedule() {
    isShowModal.value = false;
  }

  function onAbout() {
    router.push(routes.about.name)
  }
</script>

<style scoped lang="scss">
  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: left;
    gap: 10px;
  }

  .button__more {
    background-color: transparent;
    border-color: white;
  }

  .button__schedule {
    background-color: dodgerblue;
    border-color: dodgerblue;
  }

  @media only screen and (max-width: 600px) {
    .button {
      font-size: 15px;
    }
  }
</style>