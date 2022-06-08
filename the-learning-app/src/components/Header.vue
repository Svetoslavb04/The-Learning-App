<script setup>

import { RouterLink } from "vue-router";
import Avatar from './icons/Avatar.vue';

</script>

<template>
  <header>
    <div class="header-heading-wrapper">
      <h1 class="header-heading-text">Welcome</h1>
    </div>
    <div class="header-user-avatar-wrapper">
      <Avatar />
    </div>
  </header>
</template>

<style>
header {
  height: 60px;
  padding: 0px 40px;
  font-size: 20px;
  background: #1b262c;
  display: flex;
  align-items: center;
  gap: 20px;
}

.header-heading-wrapper {
  flex-grow: 1;
  padding-bottom: 5px;
}

.header-heading-text {
  color: #3282b8;
}

.header-user-avatar-wrapper {
  width: 35px;
}

.header-user-avatar {
  width: 100%;
}

@media (max-width: 1000px) {
  header {
    padding: 0px 30px;
    font-size: 18px;
  }
}

</style>
