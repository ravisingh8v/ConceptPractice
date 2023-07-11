<template>
  <section class="h-100 d-flex justify-content-center align-items-center">
    <button class="btn btn-success" @click="openDialog">Add User</button>
    <div></div>
    <Transition name="global">
      <dialog
        ref="dialog"
        class="h-100 position-relative"
        @click="onBackdropClick($event)"
      >
        <form action="" class="w-75">
          <div
            class="p-3 bg-light w-100 h-50 rounded shadow position-absolute top-50 start-50 translate-middle"
          >
            <div class="row mb-2">
              <div
                class="col-6 py-1"
                :class="formIndex >= 1 ? 'bg-success' : ''"
              ></div>
              <div
                class="col-6 py-1"
                :class="formIndex >= 2 ? 'bg-success' : ''"
              ></div>
            </div>
            <!-- <activeComponent /> -->
            <Transition mode="out-in" name="stepper-form">
              <component :is="activeComponent"></component>
            </Transition>
            <!-- <stepperFormPersonalDetails /> -->
            <div class="row mt-5">
              <!-- prev or cancel button  -->
              <div class="col-6">
                <button
                  v-if="formIndex == 1"
                  class="btn btn-secondary"
                  type="button"
                  @click="showConfirmation = true"
                >
                  cancel
                </button>
                <button
                  v-else
                  class="btn btn-secondary"
                  type="button"
                  @click="formIndex = formIndex - 1"
                >
                  previous
                </button>
              </div>
              <!-- next or submit -->
              <div class="col-6 text-end">
                <button
                  v-if="formIndex != 2"
                  class="btn btn-success"
                  type="button"
                  @click="getNextForm()"
                >
                  next
                </button>
                <button
                  v-else
                  class="btn btn-success"
                  type="submit"
                  @click="getNextForm()"
                >
                  Submit
                </button>
              </div>
            </div>
            <Transition name="global">
              <div
                v-if="showConfirmation"
                class="overlay rounded position-absolute backdrop-primary top-0 bottom-0 start-0 end-0"
              ></div>
            </Transition>
          </div>
        </form>
        <!-- confirmation  -->
        <Transition name="global">
          <confirmationComponent
            v-if="showConfirmation"
            @onConfirm="onConfirm"
            @onCancel="onCancel"
            :title="'are you sure, you want to exit?'"
          ></confirmationComponent>
        </Transition>
      </dialog>
    </Transition>
  </section>
</template>
<script setup lang="ts">
import { ref, shallowRef, watch } from "vue";
import confirmationComponent from "../confirmation-component.vue";
import stepperFormPersonalDetails from "./../steppers-component/stepper-form-personal-details.vue";
import stepperFormBankDetails from "./../steppers-component/stepper-form-bank-details.vue";
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
const showConfirmation = ref(false);

function onBackdropClick(e: any) {
  const modalDimension = dialog.value.getBoundingClientRect();
  console.log(e.clientX);
  console.log(modalDimension.top);
  console.log(modalDimension.bottom);

  if (
    e.clientX < modalDimension.left ||
    e.clientX > modalDimension.right ||
    e.clientY < modalDimension.top ||
    e.clientY > modalDimension.bottom
  ) {
    showConfirmation.value = !showConfirmation.value;
  }
}

function onConfirm(value: any) {
  if (value) {
    dialog.value.close();
    formIndex.value = 1;
  }
}
function onCancel(value: any) {
  if (value) {
    showConfirmation.value = false;
  }
}

// dynamic component
const formIndex = ref(1);
const activeComponent = shallowRef(stepperFormPersonalDetails);

function getNextForm() {
  if (formIndex.value < 2) formIndex.value = formIndex.value + 1;
}

watch(formIndex, () => {
  if (formIndex.value == 1) {
    activeComponent.value = stepperFormPersonalDetails;
  }
  if (formIndex.value == 2) {
    activeComponent.value = stepperFormBankDetails;
  }
});

// watch(showConfirmation, () => {
// });
</script>
<style lang="scss">
dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.458);
}
dialog {
  border: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40%;
  background-color: unset;
  transform: translate(-50%, -50%);
}
.stepper-form-enter-from,
.stepper-form-leave-to,
.global-enter-from,
.global-leave-to {
  opacity: 0;
}

.stepper-form-enter-active,
.stepper-form-leave-active,
.global-enter-active,
.global-leave-active {
  transition: all 0.35s linear;
}
.stepper-form-enter-to,
.stepper-form-leave-from,
.global-enter-to,
.global-leave-from {
  opacity: 1;
}
</style>
