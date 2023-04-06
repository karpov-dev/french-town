<template>
  <card :id="workArea.id" :title="workArea.name">
    <div class="service-card">

      <div class="work-area__items-grid">
        <template v-for="workAreaTypeItem of workArea.types" :key="workAreaTypeItem.id">
          <div>{{workAreaTypeItem.name}}</div>
          <div style="font-weight: 500">от {{workAreaTypeItem.costFrom}} рублей</div>
        </template>
      </div>

      <a>Оставить заявку</a>
    </div>
  </card>
</template>

<script setup lang="ts">
  import {IWorkArea} from "../../db/types";
  import Card from "../card/Card.vue";

  const props = defineProps<{
    workArea: IWorkArea
  }>();
</script>

<style scoped lang="scss">
  .work-area__items-grid {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 10px;
    padding-bottom: 20px;
  }

  .ui-card:hover {
    border-color: dodgerblue;
  }

  .service-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    cursor: pointer;
  }
</style>