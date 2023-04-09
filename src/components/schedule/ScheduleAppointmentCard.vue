<template>
  <div class="schedule-app-card">
    <div class="schedule-app-card__title">Записаться</div>
    <div class="schedule-app-card__description">
      Наш менеджер перезвонит вам в ближайшее время и ...
    </div>

    <div class="schedule-app-card__inputs-block">
      <input class="schedule-app-card__input" placeholder="Фамилия, Имя и Отчество">
      <input class="schedule-app-card__input" placeholder="Номер телефона">
    </div>

    <div>
      <button class="button schedule-app-card__button-send">Отправить</button>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
  .schedule-app-card {
    background-color: white;
    padding: 20px;
    border-radius: 6px;
    color: black;
    max-width: 500px;
    text-align: center;
  }

  .schedule-app-card__title {
    font-size: 18px;
    font-weight: 600;
    padding-bottom: 15px;
  }

  .schedule-app-card__description {
    font-size: 15px;
    font-weight: 500;
    color: #666666;
    padding-bottom: 10px;
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