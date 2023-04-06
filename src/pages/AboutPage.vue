<template>
  <ui-slider>

  </ui-slider>

  <ui-info-block title="О нас" page="Сервис Renault, Peugeot и Citroen в Москве “French Town”">
    Мы с 2016 года занимаемся автомобилями французских марок. Благодаря тому, что через наши стены каждый день проходит множество автомобилей, наши специалисты обладают большим опытом работы с ними и являются одними из лучших в своей области.

    Перед работами мы стараемся проконсультировать и ответить на все вопросы, возникающие у наших клиентов. Поэтому не стесняйтесь – пишите или звоните.

    Записаться на обслуживание в наш автосервис мы можете следующими способами: обратиться к нам по телефону, написать в WhatsApp, Telegram, Viber или же записаться через сайт.
  </ui-info-block>
</template>

<script setup lang="ts">
import UiSlider from "../components/slider/Slider.vue";
import UiInfoBlock from "../components/card/CardPostBlock.vue";
</script>

<style scoped lang="scss">
  .slider {
    z-index: 1;
    width: 100vw;
    height: 50vh;
  }
</style>