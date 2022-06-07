<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <footer>
    <RouterLink to="/" class="footer-navigation-link">Home</RouterLink>
    <RouterLink to="/learning" class="footer-navigation-link">Learning</RouterLink>
    <h2 class="footer-heading-text">The Learning App</h2>
  </footer>
</template>

<style>
footer {
  height: 80px;
  padding: 0px 40px;
  font-size: 20px;
  background: #1b262c;
  display: flex;
  align-items: center;
  gap: 20px;
}

.footer-navigation-link {
  color: #bbe1fa;
  text-decoration: none;
}

.footer-navigation-link:nth-child(2) {
  flex-grow: 1;
}

.footer-heading-text {
  color: #3282b8;
}

@media (max-width: 1000px) {
  footer {
    height: 75px;
    padding: 0px 30px;
    font-size: 18px;
  }

  .footer-heading-text {
    font-size: 28px;
  }
}

@media (max-width: 500px) {
  footer {
    height: 125px;
    padding: 10px;
    flex-direction: column;
    gap: 10px;
  }

  .footer-heading-text {
    font-size: 24px;
    margin-bottom: 15px;
  }
}
</style>
