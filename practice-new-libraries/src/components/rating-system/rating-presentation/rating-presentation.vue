<template>
  <div class="d-flex align-items-center flex-column star-wrapper mt-4">
    <div class="d-flex">
      <div v-for="star in stars" :key="star">
        <span
          class="fa-star"
          @click="rate(star)"
          :class="
            isFloat == star - 0.5
              ? 'fa-solid fa-star-half-stroke'
              : '' || currentRating >= star
              ? ' fa-solid '
              : 'fa-regular'
          "
        ></span>
        <!-- :class="currentRating >= star ? ' fa-solid fa-star' : 'fa-regular'" -->
        <!-- && currentRating == star
              ? 'fa-solid fa-star-half-stroke'
              : 'fa-regular' -->
      </div>
    </div>
    <span class="" v-if="currentRating">{{ currentRating }} Star</span>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
const stars = 5;
const currentRating = ref();

currentRating.value = 3.5;
function rate(star: number) {
  // if (star == currentRating.value) {
  //   currentRating.value = currentRating.value - 1;
  // } else {
  currentRating.value = star;
  // }
  console.log(star);
}

/**
 * this function is to check that came value is float or not
 * if came value is float then return that val
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isFloat = computed((): any => {
  if (currentRating.value % 1 != 0) {
    console.log(currentRating.value % 1 != 0);

    return currentRating.value;
  } else {
    return false;
  }
});
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
