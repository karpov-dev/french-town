<template>
  <div class="yandex-map">
    <div id="map"/>
  </div>
</template>

<script setup lang="ts">
  import {IGeopoint} from "../../db/types/IGeopoint";

  const props = defineProps<{
    geoPoint: IGeopoint,
    points?: any;
  }>();

  //@ts-ignore
  ymaps.ready(init);

  function init(){
    //@ts-ignore
    const yandexMap = new ymaps.Map("map", {
      center: [props.geoPoint._lat, props.geoPoint._long],
      zoom: 14
    });

    const points = props.points as Array<IGeopoint>;

    points?.forEach(point => {
      yandexMap.geoObjects.add(point);
    })
  }
</script>

<style scoped lang="scss">
  #map {
    @include size-inherit;
    border-radius: 10px;
  }

  .yandex-map {
    border-radius: 10px;
    overflow: hidden;
  }
</style>