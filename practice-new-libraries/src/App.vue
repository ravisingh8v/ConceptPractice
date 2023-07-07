<template>
  <div class="h-100 d-flex flex-column border">
    <nav class="bg-dark text-white p-3">
      <router-link to="/">DragAndDrop</router-link> |
      <router-link to="image-cropping">ImageCropping</router-link> |
      <router-link to="chat-gpt">ChatGPT</router-link> |
      <router-link to="rating">Rating</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <section class="flex-grow-1 border border-2 border-dark">
      <router-view />
    </section>
  </div>
</template>
<style lang="scss">
// scss
</style>
