<script setup>
import { RouterLink } from "vue-router";

defineProps({
  title: String,
  description: String,
  cta: String,
  ctaBg: String,
  href: String,
  bg: String,
});
</script>

<template>
  <div :class="`${bg} p-6 rounded-lg shadow-md`">
    <h2 class="text-2xl font-bold">{{ title }}</h2>
    <p class="mt-2 mb-4">
      {{ description }}
    </p>
    <RouterLink
      :to="href"
      :class="`inline-block ${ctaBg} text-white rounded-lg px-4 py-2 hover:${ctaBg}/50 cursor-pointer`"
    >
      {{ cta }}
    </RouterLink>
  </div>
</template>
