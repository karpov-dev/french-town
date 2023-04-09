<template>
  <transition>
    <div v-if="isOpen" class="modal">
      <div class="modal__content">
        <div class="close-button_container" @click="onClose">
          <img class="close-button svg-icon" :src="iconUrl">
        </div>

        <slot/>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
  import {computed} from "vue";

  const props = defineProps<{
    isOpen: boolean
  }>();

  const iconUrl = computed(() => {
    return new URL(`/src/assets/icons/close.svg`, import.meta.url).href;
  });

  function onClose() {
    emit('on:close', props.isOpen)
  }

  const emit = defineEmits<{
    (event: 'on:close', isOpened: boolean): void
  }>();
</script>

<style scoped lang="scss">
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  backdrop-filter: blur(0.3rem);
}

.modal__content {
  margin: auto;
  padding: 30px;
  max-width: 900px;
  max-height: 600px;
}

.modal__content::-webkit-scrollbar {
  display: none;
}

.close-button_container {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  padding: 5px;
  cursor: pointer;
  --svg-icon__filter: 1;
}

.close-button {
  text-align: center;
  position: relative;
  background: none;
  width: 30px;
  right: 0;
  transition: 0.5s all;
}
.close-button:hover {
  color: black;
  transform: scale(1.2);
}
</style>