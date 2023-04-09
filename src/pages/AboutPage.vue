<template>
  <transition>
    <div>
      <slider-page title="О нас" description="Сервис Renault, Peugeot и Citroen в Москве “French Town”"/>

      <div class="content__container">
        <div class="content__items">

          <card-post-block title="Сервис Renault, Peugeot и Citroen в Москве “French Town”">
            <div v-html="service.about"></div>
          </card-post-block>

          <card-post-block title="Почему стоит выбрать нас?" page="ПРЕИМУЩЕСТВА">
            <div v-html="service.whySelectUs"></div>
          </card-post-block>
        </div>
      </div>
    </div>
  </transition>

</template>

<script setup lang="ts">
  import SliderPage from "../components/slider/SliderPage.vue";
  import CardPostBlock from "../components/card/CardPostBlock.vue";
  import {IService} from "../db/types";
  import {onMounted, ref} from "vue";
  import {DataManager} from "../db/DataManager";

  const service = ref<IService>({} as IService);

  onMounted(async () => {
    service.value = await DataManager.getService();
  })
</script>