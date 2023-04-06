<template>
  <div class="slider">
    <slot/>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.slider {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: white;
  background-image: url("/src/assets/images/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>