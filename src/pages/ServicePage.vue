<template>
  <slider-page title="Услуги" description="Прайс на основные услуги, предоставляемые автосервисом"/>

  <div class="content__container">
    <div class="content__items">
      <card-post-block page="Услуги" title="Перечень цен на основные услуги">
        <services/>
      </card-post-block>
    </div>
  </div>
</template>

<script setup lang="ts">
  import SliderPage from "../components/slider/SliderPage.vue";
  import Services from "../components/service/Services.vue";
  import CardPostBlock from "../components/card/CardPostBlock.vue";
</script>

<style scoped lang="scss"></style>