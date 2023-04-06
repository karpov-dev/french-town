<template>
  <a v-if="geoPoint" :href="`https://yandex.ru/maps/?pt=${props.geoPoint._long},${props.geoPoint._lat}&z=16$l=map`">{{address}}</a>
</template>

<script setup lang="ts">
  import {IGeopoint} from "../../db/types/IGeopoint";

  const props = defineProps<{
    address: string
    geoPoint: IGeopoint
  }>();
</script>

<style scoped lang="scss"></style>