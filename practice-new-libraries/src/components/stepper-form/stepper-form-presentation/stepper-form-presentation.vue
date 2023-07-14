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

            <Transition mode="out-in" name="stepper-form">
              <div v-if="formIndex === 1" key="personal-details">
                <h2 class="text-center fw-bold text-secondary">
                  Personal Details
                </h2>
                <div class="row mt-5">
                  <div class="col-6">
                    <Field
                      type="text"
                      id="firstname"
                      name="firstName"
                      class="form-control my-3"
                      placeholder="Enter your firstname"
                      v-model="formData.firstName"
                      :rules="nameValidation"
                    />
                    <ErrorMessage
                      name="firstName"
                      as="div"
                      class="error-message"
                    ></ErrorMessage>
                  </div>
                  <div class="col-6">
                    <Field
                      type="text"
                      id="lastname"
                      name="lastName"
                      class="form-control my-3"
                      placeholder="Enter your lastname"
                      v-model="formData.lastName"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      class="form-control my-3"
                      placeholder="Enter your email"
                      v-model="formData.email"
                      :rules="emailValidation"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <Field
                      type="text"
                      id="phone"
                      name="phone"
                      class="form-control my-3"
                      placeholder="Enter your phone"
                      v-model="formData.phone"
                    />
                  </div>
                </div>
              </div>
              <div v-else-if="formIndex === 2" key="bank-details">
                <h2 class="text-center fw-bold text-secondary">Bank Details</h2>
                <div class="row mt-5">
                  <div class="col-6">
                    <Field
                      name="accountNumber"
                      type="text"
                      id="accountNumber"
                      class="form-control my-3"
                      placeholder="Enter your account number"
                      v-model="formData.accountNumber"
                    />
                  </div>
                  <div class="col-6">
                    <Field
                      name="ifsc"
                      type="text"
                      id="ifsc"
                      class="form-control my-3"
                      placeholder="Enter your ifsc"
                      v-model="formData.ifsc"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <Field
                      name="cvv"
                      type="email"
                      id="cvv"
                      class="form-control my-3"
                      placeholder="Enter your cvv"
                      v-model="formData.cvv"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <Field
                      name="branch"
                      type="text"
                      id="branch"
                      class="form-control my-3"
                      placeholder="Enter your branch name"
                      v-model="formData.branch"
                    />
                  </div>
                </div>
              </div>
            </Transition>

            <div class="row mt-5">
              <div class="col-6">
                <button
                  v-if="formIndex === 1"
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
                  @click="prevStep"
                >
                  previous
                </button>
              </div>
              <div class="col-6 text-end">
                <button
                  v-if="formIndex !== 2"
                  class="btn btn-success"
                  type="button"
                  @click="nextStep"
                >
                  next
                </button>
                <button
                  v-else
                  class="btn btn-success"
                  type="submit"
                  @click.prevent="submitForm"
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

        <Transition name="global">
          <confirmationComponent
            v-if="showConfirmation"
            @onConfirm="onConfirm"
            @onCancel="onCancel"
            :title="'Are you sure you want to exit?'"
          ></confirmationComponent>
        </Transition>
      </dialog>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import confirmationComponent from "../confirmation-component.vue";
import * as Yup from "yup";
import { Field, ErrorMessage } from "vee-validate";

const dialog = ref();

function openDialog() {
  dialog.value.showModal();
}

const formIndex = ref(1);
const showConfirmation = ref(false);
const formData = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  accountNumber: "",
  ifsc: "",
  cvv: "",
  branch: "",
});

const nameValidation = Yup.string().required("Name is required");
const emailValidation = Yup.string()
  .email("Invalid email")
  .required("Email is required");

function nextStep() {
  console.log("nexted");

  const schema = Yup.object().shape({
    firstName: nameValidation,
    lastName: Yup.string(),
    email: emailValidation,
    phone: Yup.string(),
    accountNumber: Yup.string(),
    ifsc: Yup.string(),
    cvv: Yup.string(),
    branch: Yup.string(),
  });

  schema
    .validate(formData.value)
    .then(() => {
      formIndex.value++;
    })
    .catch((errors) => {
      console.error(errors);
    });
}

function prevStep() {
  formIndex.value--;
}

function submitForm() {
  const schema = Yup.object().shape({
    address: Yup.string().required("Address is required"),
    phone: Yup.string().required("Phone number is required"),
  });

  schema
    .validate(formData.value)
    .then(() => {
      console.log("Form submitted:", formData.value);
      dialog.value.close();
      formIndex.value = 1;
    })
    .catch((errors) => {
      console.error(errors);
    });
  console.log(formData.value);
}

function onBackdropClick(e: any) {
  const modalDimension = dialog.value.getBoundingClientRect();

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
