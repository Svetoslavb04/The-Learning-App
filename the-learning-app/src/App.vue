<script setup>

import { RouterLink, RouterView } from "vue-router";
import Footer from "./components/Footer.vue"

</script>

<template>
  <div class="content-wrapper">
    <div class="router-content">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<style>

@import "@/assets/base.css";

.content-wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.router-content {
  position: relative;
  flex-grow: 1;
}

</style>
