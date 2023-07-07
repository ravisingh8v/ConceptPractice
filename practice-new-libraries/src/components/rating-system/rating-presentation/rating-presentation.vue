<template>
  <div class="d-flex align-items-center flex-column star-wrapper mt-4">
    <div class="d-flex">
      <div v-for="star in stars" :key="star">
        <span
          class="fa-star"
          @click="rate(star)"
          :class="currentRating >= star ? ' fa-solid fa-star' : 'fa-regular'"
        ></span>
        <!-- :class="getDynamicCLass(star)" -->
        <!-- && currentRating == star
              ? 'fa-solid fa-star-half-stroke'
              : 'fa-regular' -->
      </div>
    </div>
    <span class="" v-if="currentRating">{{ currentRating }} Star</span>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const stars = 5;
const currentRating = ref();

// currentRating.value = 3.5;
function rate(star: number) {
  if (star == currentRating.value) {
    currentRating.value = currentRating.value - 1;
  } else {
    currentRating.value = star;
  }
  console.log(star);
}

// const getDynamicCLass = (star) =>
//   computed((): string => {
//     if (currentRating.value > star) {
//       return "fa-solid fa-star";
//     }
//     if (currentRating.value == star) {
//       return "fa-solid fa-star-half-stroke";
//     }
//     return "fa-regular fa-star";
//   });
</script>
<style scoped lang="scss">
.star {
  font-size: 50px;
}
.fa-star {
  font-size: 30px;
}
.fa-regular {
  color: gray;
}
.fa-solid {
  color: gold;
  transition: all 0.15s ease-in-out;
}
</style>
