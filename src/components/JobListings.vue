<script setup>
import { onMounted, reactive, ref } from "vue";
import JobListing from "./ui/JobListing.vue";
import { RouterLink } from "vue-router";
import axios from "axios";

const jobs = ref([]);

const state = reactive({
  jobs: [],
  isLoading: true,
});

defineProps({
  limit: Number,
  showButton: Boolean,
});
onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:5000/jobs");
    state.jobs = response.data;
  } catch (error) {
    console.log(error.mesage);
  } finally {
    state.isLoading = false
  }
});
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container mx-auto">
      <h3 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Explore Jobs:
      </h3>
    </div>
    <div v-if="state.isLoading === true">
        <pre class="text-sm text-center">Loading...</pre>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        class=""
        v-for="job in state.jobs.slice(0, limit || state.jobs.length)"
        :key="job.id"
      >
        <JobListing :="{ ...job }" />
      </div>
    </div>
  </section>

  <section v-if="showButton == true" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>
