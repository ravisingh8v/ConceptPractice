<template>
  <section class="h-100 d-flex justify-content-center align-items-center">
    <button class="btn btn-success" @click="openDialog">Add User</button>
    <div></div>
    <dialog ref="dialog" @click="onBackdropClick($event)">
      <div class="p-3 bg-light">
        <h2 class="text-center fw-bold text-dark">ADD USER</h2>
        <button type="button" class="btn btn-primary">tab here</button>
        <form action=""></form>
      </div>
    </dialog>
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";
const dialog = ref();
function openDialog() {
  dialog.value.showModal();
}
// watch(dialog, () => {
//   dialog.value?.addEventListener("click", (e) => {
//     const modalDimension = dialog.value.getBoundingClientRect();
//     if (
//       e.clientX < modalDimension.left ||
//       e.clientX > modalDimension.right ||
//       e.clientY > modalDimension.top ||
//       e.clientY < modalDimension.bottom
//     ) {
//       dialog.value.close();
//     } else {
//       return false;
//     }
//   });
// });

function onBackdropClick(e: any) {
  const modalDimension = dialog.value.getBoundingClientRect();
  if (
    e.clientX < modalDimension.left ||
    e.clientX > modalDimension.right ||
    e.clientY > modalDimension.top ||
    e.clientY < modalDimension.bottom
  ) {
    dialog.value.close();
  }
}
</script>
<style lang="scss" scoped>
dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.458);
}
dialog {
  border: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40%;
  transform: translate(-50%, -50%);
}
</style>
