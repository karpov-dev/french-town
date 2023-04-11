<template>
  <a :href="yMapLink">{{address}}</a>
</template>

<script setup lang="ts">
  import {IGeopoint} from "../../../db/types/IGeopoint";
  import {computed} from "vue";

  const props = defineProps<{
    address: string
    geoPoint?: IGeopoint
    organizationId?: string
  }>();

  const yMapLink = computed(() => {
    return props.organizationId
        ? getLinkByOrganizationId()
        : getLinkByGeoPoint();
  });

  function getLinkByOrganizationId() {
    return `https://yandex.ru/maps/org/${props.organizationId}`
  }

  function getLinkByGeoPoint() {
    return props.geoPoint
        ? `https://yandex.ru/maps/?pt=${props.geoPoint.longitude},${props.geoPoint.latitude}&z=16$l=map`
        : null;
  }
</script>

<style scoped lang="scss"></style>