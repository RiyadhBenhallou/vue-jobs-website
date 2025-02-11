<script setup>
import { onMounted, ref } from "vue";
import JobListing from "./ui/JobListing.vue";
import { RouterLink } from "vue-router";
import axios from "axios";

const jobs = ref([]);

defineProps({
  limit: Number,
  showButton: Boolean,
});
onMounted(async () => {
  const jobData = await axios.get("http://localhost:5000/jobs");
  jobs.value = jobData.data;
});
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container mx-auto">
      <h3 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Explore Jobs:
      </h3>
    </div>
    <div v-if="jobs.length === 0">
      <h1>Loading...</h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        class=""
        v-for="job in jobs.slice(0, limit || jobs.length)"
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
