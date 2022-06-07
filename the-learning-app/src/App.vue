<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="content-wrapper">
    <div class="router-content">
      <RouterView />
    </div>
    <footer>
      <RouterLink to="/" class="footer-navigation-link">Home</RouterLink>
      <RouterLink to="/learning" class="footer-navigation-link">Learning</RouterLink>
    </footer>
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
  flex-grow: 1;
}

footer {
  height: 100px;
  padding: 0px 40px;
  background: #1b262c;
  display: flex;
  align-items: center;
  gap: 20px
}

.footer-navigation-link {
  font-size: 20px;
  color: #BBE1FA;
  text-decoration: none;
}
</style>
