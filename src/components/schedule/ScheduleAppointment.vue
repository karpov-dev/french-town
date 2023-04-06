<template>
  <div class="buttons">
    <button class="button button__more">Подробнее</button>
    <button class="button button__schedule">Записаться</button>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: left;
    gap: 10px;
  }

  .button {
    max-width: 250px;
    padding: 12px;
    border: 2px solid;
    border-radius: 6px;
    font-weight: 800;
    color: white;
    font-size: 17px;
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