<template>
  <card-post-block page="О нас" title="Сервис Renault, Peugeot и Citroen в Москве “French Town”">

    <div style="max-width: 1200px">
      <div v-html="service.aboutShort"></div>

      <about-follow-us style="height: 35px; padding-bottom: 20px" :medias="socialMedias"/>
      <router-link :to="routes.about.path">Подробнее...</router-link>
    </div>
  </card-post-block>
</template>

<script setup lang="ts">
  import CardPostBlock from "../card/CardPostBlock.vue";
  import AboutFollowUs from "./AboutFollowUs.vue";
  import {onMounted, ref} from "vue";
  import {IService, ISocialMedia} from "../../db/types";
  import {DataManager} from "../../db/DataManager";
  import {routes} from "../../router/routes";

  const socialMedias = ref<Array<ISocialMedia>>([]);
  const service = ref<IService>({} as IService)

  onMounted(async () => {
    socialMedias.value = await DataManager.getSocialMedias();
    service.value = await DataManager.getService();
  })
</script>

<style scoped lang="scss"></style>