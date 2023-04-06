<template>
  <card-post-block page="О нас" title="Сервис Renault, Peugeot и Citroen в Москве “French Town”">

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

      <about-follow-us style="height: 35px; padding-bottom: 20px" :medias="socialMedias"/>
      <a >Подробнее...</a>
    </div>
  </card-post-block>
</template>

<script setup lang="ts">
  import CardPostBlock from "../card/CardPostBlock.vue";
  import AboutFollowUs from "./AboutFollowUs.vue";
  import {onMounted, ref} from "vue";
  import {ISocialMedia} from "../../db/types";
  import {DataManager} from "../../db/DataManager";

  const socialMedias = ref<Array<ISocialMedia>>([]);

  onMounted(async () => {
    socialMedias.value = await DataManager.getSocialMedias();
  })
</script>

<style scoped lang="scss"></style>