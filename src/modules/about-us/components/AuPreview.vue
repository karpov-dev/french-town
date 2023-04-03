<template>
  <ui-preview-card page="О нас" title="Сервис Renault, Peugeot и Citroen в Москве “French Town”" style="background-color: #f5f5f5">
    <div style="max-width: 1200px">
      Мы с 2016 года занимаемся автомобилями французских марок и работаем с этими машинами каждый день.
      <p>Оказываем следующие услуги:</p>

      <ul>
        <li>регламентное техническое обслуживание (ТО)</li>
        <li>ремонт автомобиля любой сложности</li>
        <li>компьютерная диагностика</li>
        <li>кодирование, обновление ПО и карт навигации;</li>
        <li>ремонт автомобиля, от двигателя до кузовного ремонта.</li>
      </ul>

      <p>Также мы ведем блог в нашей группе “ВКонтакте” и публикуем видео с интересными проектами на нашей странице в “Instagram”. Вы можете подписаться и наблюдать за работами нашего автосервиса.</p>

      <au-follow-us style="height: 35px" :medias="CONFIG.FOLLOW_US"/>
    </div>
  </ui-preview-card>
</template>

<script setup lang="ts">
  import UiPreviewCard from "../../preview/components/card/UiPreviewCard.vue";
  import AuFollowUs from "./AuFollowUs.vue";
  import {CONFIG} from "../../../config/config";
</script>

<style scoped lang="scss"></style>