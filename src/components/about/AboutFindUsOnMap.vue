<template>
  <card-post-block title="Как нас найти?" page="местоположение">
    <about-yandex-map v-if="service.geoPoint" :geo-point="service.geoPoint" :points="points" class="about-us-find-on-map"/>
  </card-post-block>
</template>

<script setup lang="ts">
  import AboutYandexMap from "../ui/map/YandexMap.vue";
  import {computed, onMounted, ref} from "vue";
  import {IService} from "../../db/types";
  import {DataManager} from "../../db/DataManager";
  import CardPostBlock from "../card/CardPostBlock.vue";

  const service = ref<IService>({} as IService);
  const points = computed(initPoints);
  let yMapInited = ref<boolean>(false);

  if (typeof window !== "undefined") {
    //@ts-ignore
    ymaps.ready(() => yMapInited.value = true);
  }
  function initPoints() {
    if (!yMapInited.value || !service.value.geoPoint) return [];

    //@ts-ignore
    const placePoint = new ymaps.Placemark([service.value.geoPoint.latitude, service.value.geoPoint.longitude], {
      iconContent: `${service.value.address}`
    }, {
      preset: "islands#blueStretchyIcon"
    });

    return [placePoint];
  }

  onMounted(async () => {
    service.value = await DataManager.getService();
  });
</script>

<style scoped lang="scss">
  .about-us-find-on-map {
    height: 500px;
    width: 100%;
  }
</style>