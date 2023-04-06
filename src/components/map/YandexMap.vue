<template>
  <div class="yandex-map">
    <div id="map"/>
  </div>
</template>

<script setup lang="ts">
  import {IGeopoint} from "../../db/types/IGeopoint";

  const props = defineProps<{
    geoPoint: IGeopoint,
    points?: [];
  }>();

  //@ts-ignore
  ymaps.ready(init);

  function init(){
    //@ts-ignore
    const myMap = new ymaps.Map("map", {
      center: [props.geoPoint._lat, props.geoPoint._long],
      zoom: 14
    });

    props.points?.forEach(point => {
      myMap.geoObjects.add(point);
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