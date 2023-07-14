<template>
  <section>
    <h2 class="text-center fw-bold text-secondary">Personal Details</h2>
    <div class="row mt-5">
      <div class="col-6">
        <Field
          type="text"
          id="firstname"
          name="firstName"
          class="form-control my-3"
          placeholder="Enter your firstname"
        />
      </div>
      <div class="col-6">
        <Field
          type="text"
          id="lastname"
          name="lastName"
          class="form-control my-3"
          placeholder="Enter your lastname"
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
        />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { Field } from "vee-validate";
</script>
