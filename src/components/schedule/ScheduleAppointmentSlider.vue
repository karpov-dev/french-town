<template>
  <slider>
    <div class="content__items">
      <slider-changer>
        <schedule-appointment/>
      </slider-changer>
    </div>
  </slider>
</template>

<script setup lang="ts">
  import Slider from "../slider/Slider.vue";
  import SliderChanger from "../slider/SliderChanger.vue";
  import ScheduleAppointment from "./ScheduleAppointment.vue";
</script>

<style scoped lang="scss"></style>