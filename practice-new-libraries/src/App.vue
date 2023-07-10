<template>
  <div class="h-100 d-flex flex-column border">
    <nav class="bg-dark text-white p-3">
      <router-link to="/">DragAndDrop</router-link> |
      <router-link to="image-cropping">ImageCropping</router-link> |
      <router-link to="chat-gpt">ChatGPT</router-link> |
      <router-link to="rating">Rating</router-link> |
      <router-link to="stepper">stepper-form</router-link>
    </nav>
    <section class="flex-grow-1">
      <router-view />
    </section>
  </div>
</template>
<style lang="scss">
// scss
</style>
