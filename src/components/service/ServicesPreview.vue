<template>
  <card-post-block title="Основные направления" page="Наши услуги">
    <div class="wrap-content__container services-preview__items">
      <card v-for="serviceType of workAreas" class="wrap-content__item" :title="serviceType.name" @click="onOpen(serviceType.id)">
        <service-preview-card :work-area-items="serviceType.types"/>
      </card>
    </div>
  </card-post-block>
</template>

<script setup lang="ts">
  import CardPostBlock from "../card/CardPostBlock.vue";
  import Card from "../card/Card.vue";
  import {onMounted, ref} from "vue";
  import {DataManager} from "../../db/DataManager";
  import {IWorkArea} from "../../db/types";
  import ServicePreviewCard from "./ServicePreviewCard.vue";

  const workAreas = ref<Array<IWorkArea>>([]);

  onMounted(async () => {
    workAreas.value = await DataManager.getWorkAreas();
  });

  function onOpen(id: string) {
    window.location.href = `/service#${id}`;
  }
</script>

<style scoped lang="scss">
  .services-preview__items {
    gap: 30px
  }

  .ui-card:hover {
    box-shadow: 4px 4px 15px rgb(187, 185, 185);
  }
</style>