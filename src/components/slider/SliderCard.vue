<template>
  <div class="slider-card">
    <transition>
      <div :key="props.title">
        <div class="preview-card__title">{{props.title}}</div>
        <div class="description">{{props.description}}</div>
      </div>
    </transition>

    <div v-if="!hideButtons" class="buttons">
      <button class="button button__more">Подробнее</button>
      <button class="button button__schedule" @click="onSchedule">Записаться</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    title: string,
    description: string,
    hideButtons?: boolean
  }>();

  async function onSchedule() {

  }
</script>

<style scoped>
  .slider-card {
    padding: 20px;
  }

  .preview-card__title,
  .description {
    max-width: 800px;
    text-align: left;
  }

  .preview-card__title {
    font-size: 44px;
    font-weight: 800;
    padding-bottom: 20px;
  }

  .description {
    font-size: 18px;
    text-wrap: avoid;
    padding-bottom: 50px;
  }

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
    .preview-card__title {
      font-size: 30px;
    }

    .description {
      font-size: 15px;
    }

    .button {
      font-size: 15px;
    }
  }
</style>