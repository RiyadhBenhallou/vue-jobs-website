<script setup>
import Developers from "../components/Developers.vue";
import JobListings from "../components/JobListings.vue";
import Hero from "../components/Hero.vue";
</script>

<template>
  <Hero title="Become a Vue Dev!" />
  <Developers />
  <JobListings :limit="6" :showButton="true" />
</template>
