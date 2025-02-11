<script setup>
import Card from "./ui/Card.vue";
</script>

<template>
  <section class="py-4">
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card
          title="For Developers"
          description="Browse our Vue jobs and start your career today"
          cta="Browse Jobs"
          ctaBg="bg-black"
          bg="bg-gray-100"
          href="/jobs"
        />
        <Card
          title="For Employers"
          description="List your job to find the perfect developer for the role"
          cta="Add Job"
          bg="bg-green-100"
          ctaBg="bg-green-500"
          href="/add-job"
        />
      </div>
    </div>
  </section>
</template>
