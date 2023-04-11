<template>
  <div class="spinner">
    <spinner-panel/>
  </div>
</template>

<script setup lang="ts">
  import SpinnerPanel from "./SpinnerPanel.vue";
</script>

<style scoped lang="scss">
  .spinner {
    position: absolute;
    width: 100%;
    height: 100%;
    min-height: 200px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .spinner::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #bbc4cc;
    opacity: 0.3;
    filter: blur(7px);
  }
</style>