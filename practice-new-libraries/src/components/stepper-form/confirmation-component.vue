<template>
  <div
    class="confirmation rounded shadow p-4 bg-white position-fixed top-50 start-50 translate-middle"
  >
    <div class="text-center">
      <span class="">{{ props.title }}</span>
    </div>
    <div class="text-center">
      <button
        class="btn btn-danger mx-2 mt-3"
        @click="$emit('onConfirm', true)"
      >
        Yes
      </button>
      <button
        class="btn btn-secondary mx-2 mt-3"
        @click="$emit('onCancel', true)"
      >
        No
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  title: {
    required: true,
    default: "hello world",
  },
});
</script>
<style>
.confirmation {
  z-index: 500;
}
</style>
