<template>
  <section class="p-3 w-75 mx-auto row">
    <div class="col-6 mx-auto">
      <div class="card d-flex flex-column">
        <div class="pt-2 rounded rounded-bottom-0 bg-dark text-white">
          <h2 class="text-center">Meals</h2>
        </div>
        <div class="list flex-grow-1 position-relative">
          <draggable
            v-model="meal"
            tag="ul"
            class="h-100"
            group="meal"
            :animation="300"
          >
            <template #item="{ element: meal }">
              <li class="px-3 py-1 border-0 border-top cursor-grab">
                {{ meal }}
              </li>
            </template>
          </draggable>
          <div
            v-if="!meal.length"
            class="position-absolute top-50 start-50 translate-middle"
          >
            <li class="cursor-grab text-danger">No Data Left</li>
          </div>
        </div>
      </div>
    </div>
    <div class="col-6 mx-auto">
      <div class="card d-flex flex-column">
        <div class="pt-2 rounded rounded-bottom-0 bg-dark text-white">
          <h2 class="text-center">YuckyMeals</h2>
        </div>
        <div class="list flex-grow-1 position-relative">
          <draggable
            v-model="yuckyMeals"
            tag="ul"
            class="h-100"
            group="meal"
            :animation="300"
          >
            <template #item="{ element: yuckyMeals }">
              <li class="px-3 py-1 border-0 border-top cursor-grab">
                {{ yuckyMeals }}
              </li>
            </template>
          </draggable>
          <div
            v-if="!yuckyMeals.length"
            class="position-absolute top-50 start-50 translate-middle"
          >
            <li class="cursor-grab text-danger">No Data Left</li>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import draggable from "vuedraggable";
import { ref, watch } from "vue";
const meal = ref([]);
const yuckyMeals = ref([
  "Bat wing soup",
  "Spicy Octopus",
  "Anything from Taco Bell",
]);

watch(yuckyMeals, () => {
  console.log(yuckyMeals.value);
});
</script>
<style>
.hello {
  position: absolute;
}
</style>

<!-- App.vue
<template>
  <div>
    <div class="drag-container">
      <div
        class="draggable-item"
        v-for="item in items"
        :key="item.id"
        :draggable="true"
        @dragstart="dragStart(item)"
        @dragover="dragOver"
        @dragend="dragEnd"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="drop-container" @drop="drop" @dragover="dragOver">
      <div v-for="item in droppedItems" :key="item.id" class="dropped-item">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
        { id: 4, name: "Item 4" },
        { id: 5, name: "Item 5" }
      ],
      droppedItems: []
    };
  },
  methods: {
    dragStart(item) {
      // Store the item being dragged
      event.dataTransfer.setData("text/plain", JSON.stringify(item));
    },
    dragOver(event) {
      // Allow dropping
      event.preventDefault();
    },
    drop(event) {
      // Retrieve the item being dragged from the data transfer
      const draggedItem = JSON.parse(event.dataTransfer.getData("text/plain"));
      
      // Add the dragged item to the dropped items
      this.droppedItems.push(draggedItem);
      
      // Remove the item from the source list
      const index = this.items.findIndex(item => item.id === draggedItem.id);
      this.items.splice(index, 1);
    },
    dragEnd() {
      // Reset any state or visual changes
    }
  }
};
</script>

<style scoped>
.drag-container {
  display: flex;
  flex-wrap: wrap;
}

.draggable-item {
  background-color: #ccc;
  padding: 10px;
  margin: 5px;
  cursor: grab;
}

.drop-container {
  margin-top: 20px;
  padding: 10px;
  border: 2px dashed #ccc;
}

.dropped-item {
  background-color: #f1f1f1;
  padding: 10px;
  margin: 5px;
}
</style> -->
