<template>
  <chatGptPresentation />
</template>
<script setup lang="ts">
import chatGptPresentation from "../chat-gpt-presentation/chat-gpt-presentation.vue";
import axios from "../../../../node_modules/axios";
axios
  .get(
    "https://cdn.jsdelivr.net/gh/kudoai/chatgpt.js@8483b553675c3444db5c6b40a8686531c11b2a35/dist/chatgpt-1.11.0.min.js"
  )
  .then((res) => {
    console.log(res);
  });
</script>
