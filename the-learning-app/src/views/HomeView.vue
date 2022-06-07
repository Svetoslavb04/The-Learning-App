<script setup></script>

<template>
  <main class="main-content">
    <div class="home-page-heading-wrapper">
      <h1 class="home-page-heading">Learning</h1>
    </div>
    <div class="home-page-sub-heading-wrapper">
      <h2 class="home-page-sub-heading">
        You want to track your learning process. Keep all of your courses in one place.
        Here you can add your courses, edit them and delete them.
      </h2>
    </div>
  </main>
</template>

<style>
.main-content {
  text-align: center;
}

.home-page-heading-wrapper {
  margin: 30px auto 20px auto;
}

.home-page-sub-heading-wrapper {
  margin: 20px auto;
  width: 35%;
}

@media (max-width: 1000px) {
  .home-page-sub-heading-wrapper {
    margin: 20px auto;
    width: 50%;
  }
}
</style>
