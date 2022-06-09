<script setup>

import Header from "../components/Header.vue";
import CoursesTable from "../components/CoursesTable.vue";

</script>

<template>
  <Header />
  <div class="learning-content">
    <Suspense>
      <CoursesTable />
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>

<style>
.learning-content {
  width: 100%;
}
</style>
