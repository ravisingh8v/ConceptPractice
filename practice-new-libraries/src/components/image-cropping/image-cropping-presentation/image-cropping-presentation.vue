<template>
  <input
    @change="handleFileSelect"
    class="d-none"
    id="uploadImage"
    type="file"
  />
  <div
    v-if="isOpenCropping"
    class="position-absolute top-0 start-0 end-0 bottom-0 border border-danger"
  >
    <div
      class="overlay position-absolute top-0 start-0 bottom-0 end-0"
      @click="cancel"
    ></div>
    <div
      class="position-absolute translate-middle w-25 p-3 start-50 top-50 bg-white rounded"
    >
      <VueCropper
        class="cropper rounded"
        ref="cropper"
        v-if="isOpenCropping"
        :options="cropperOptions"
      ></VueCropper>
      <div class="d-flex justify-content-end mt-2">
        <button @click="save" class="btn btn-primary">crop</button>
        <button @click="cancel" class="btn ms-1 btn-primary">cancel</button>
      </div>
    </div>
  </div>
  <div class="image-wrapper mt-3 ms-3">
    <label
      for="uploadImage"
      class="h-100 w-100 d-flex justify-content-center align-items-center border border-secondary p-3"
    >
      <img :src="imageUrl" alt="" v-if="imageUrl" />
      <span class="text-nowrap" v-else>Upload an image</span>
    </label>
  </div>
  <!-- :src="imageUrl" -->
  <!-- <div
    class="bg-danger p-4"
    :class="isTrue ? 'bg-warning' : 'bg-success'"
  ></div> -->
  <!-- <button @click="submitImage">Submit Button</button> -->
</template>
<script lang="ts" setup>
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";
import { onMounted, ref } from "vue";

const imageUrl = ref();
const cropperOptions = {
  aspectRatio: 16 / 9,
  viewMode: 1,
};
const cropper = ref();
const isOpenCropping = ref(false);

function handleFileSelect(event: any) {
  if (event.target.files[0]) {
    isOpenCropping.value = true;

    console.log(event.target.files[0]);
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (fileReader.result) {
        cropper.value.replace(fileReader.result);
      }
      document.cookie;
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }
}

function save() {
  isOpenCropping.value = false;
  imageUrl.value = cropper.value.getCroppedCanvas().toDataURL();
  cropper.value.replace("");
}
function cancel(event?: any) {
  if (!imageUrl.value) {
    isOpenCropping.value = false;
  } else {
    isOpenCropping.value = false;
  }
}
// function submitImage() {
//   if (cropperRef.value) {
//     const croppedDataAsUrl = cropperRef.value.getCroppedCanvas().toDataURL;
//     console.log(croppedDataAsUrl);
//   }
// }
const cropperRef = ref<InstanceType<typeof VueCropper> | null>(null);
onMounted(() => {
  cropperRef.value = cropper.value;
});
</script>
<style scoped lang="scss">
.image-wrapper {
  height: 250px;
  width: 250px;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
.cropper {
  width: 100%;
  // height: 80%;
  // .cropper-container {
  //   width: 100%;
  //   height: 100%;
  // }
}
.overlay {
  background-color: rgba(0, 0, 0, 0.423);
}
</style>
