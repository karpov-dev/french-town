<template>
  <div class="schedule-app-card">
    <div class="schedule-app-card__title">Записаться</div>
    <div class="schedule-app-card__description">
      Наш менеджер перезвонит вам в ближайшее время.
    </div>

    <div class="schedule-app-card__inputs-block">
      <input class="schedule-app-card__input"
             placeholder="Имя"
             ref="nameHTML"
             required>

      <input class="schedule-app-card__input"
             placeholder="Номер телефона"
             ref="phoneHTML"
             pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
             required>

      <input class="schedule-app-card__input"
             placeholder="Укажите причину (необязательно)"
             ref="reasonHTML">
    </div>

    <div>
      <button class="button schedule-app-card__button-send" @click="onSchedule">Отправить</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {ref} from "vue";
  import {ValidateService} from "../../services/ValidateService";
  import {ScheduleService} from "../../services/ScheduleService";

  const emits = defineEmits<{
    (event: 'on:sent'): void
  }>();

  const nameHTML = ref();
  const phoneHTML = ref();
  const reasonHTML = ref();

  async function onSchedule() {
    if (!ValidateService.reportValidity(nameHTML, phoneHTML)) return;

    //:D
    await ScheduleService.sendTelegramScheduleMessage({
      name: nameHTML.value.value,
      phone: phoneHTML.value.value,
      reason: reasonHTML.value.value
    });

    emits('on:sent');
  }

</script>

<style scoped lang="scss">
  .schedule-app-card {
    background-color: white;
    padding: 25px;
    border-radius: 6px;
    color: black;
    max-width: 500px;
    text-align: center;
  }

  .schedule-app-card__title {
    font-size: 20px;
    font-weight: 600;
    padding-bottom: 15px;
  }

  .schedule-app-card__description {
    font-size: 15px;
    font-weight: 500;
    color: #666666;
    padding-bottom: 20px;
  }

  .schedule-app-card__inputs-block {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-bottom: 20px;
  }

  .schedule-app-card__input {
    padding: 15px 20px;
    border: 0;
    border-radius: 6px;
    background-color: #f5f5f5;
    transition: 0.5s all;
    font-family: 'Montserrat', sans-serif;
  }

  .schedule-app-card__input::placeholder {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    color: #bbb9b9;
  }

  .schedule-app-card__button-send {
    background-color: dodgerblue;
    border-color: dodgerblue;
  }
</style>