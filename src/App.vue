<template>
  <div style="position: relative">
    <site-header/>

    <sd-slider class="pc-slider"/>

    <au-preview/>

    <ui-preview-card page="Контакты" title="Как с нами связаться">
      бла, бла, бла
    </ui-preview-card>

    <ui-preview-card page="Наш Instagram" title="Как мы работаем" >
      бла, бла, бла
    </ui-preview-card>

    <ft-footer/>
  </div>
</template>

<script setup lang="ts">
  import SdSlider from "./modules/preview/components/slider/SdSlider.vue";
  import UiPreviewCard from "./modules/preview/components/card/UiPreviewCard.vue";
  import FtFooter from "./modules/footer/components/FtFooter.vue";
  import SiteHeader from "./modules/header/components/SiteHeader.vue";
  import AuPreview from "./modules/about-us/components/AuPreview.vue";
</script>

<style scoped>
  .pc-header {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2;
    width: 100%;
  }

  .pc-slider {
    z-index: 1;
    width: 100vw;
    height: 100vh;
  }
</style>