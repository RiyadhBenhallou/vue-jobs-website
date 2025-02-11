<script setup>
import { computed, ref } from "vue";
import { RouterLink } from "vue-router";

const { description } = defineProps({
  id: String,
  title: String,
  type: String,
  description: String,
  location: String,
  salary: String,
  company: {
    name: String,
    description: String,
    contactEmail: String,
    contactPhone: String,
  },
});
const showFullDescription = ref(false);
const toggleShowFullDesc = () => {
  showFullDescription.value = !showFullDescription.value;
};
const truncatedDescription = computed(() => {
  if (!showFullDescription.value) {
    return description.substring(0, 90) + "...";
  } else {
    return description;
  }
});
</script>

<template>
  <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <div class="text-gray-600 my-2">{{ type }}</div>
        <h3 class="text-xl font-bold">{{ title }}</h3>
      </div>

      <div class="mb-5" @click="toggleShowFullDesc()">
        <p class="text-sm">
          {{ truncatedDescription }}
        </p>
        <p class="text-xs text-green-500">
          {{ showFullDescription == true ? "Less..." : "More..." }}
        </p>
      </div>

      <h3 class="text-green-500 mb-2">{{ salary }}</h3>

      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-orange-700 mb-3">
          <i class="pi pi-map-marker"></i>
          {{ location }}
        </div>
        <RouterLink :to="`/jobs/${id}`">
          <div
            class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
