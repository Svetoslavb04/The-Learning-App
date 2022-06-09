<script>
import { ref } from "vue";
import Header from "../components/Header.vue";
import CoursesTable from "../components/CoursesTable.vue";
import AddCoursePopup from "../components/AddCoursePopup.vue";
import LearningContent from "../components/LearningContent.vue";

export default {
  components: {
    Header,
    CoursesTable,
    AddCoursePopup,
    LearningContent
  }
};
</script>

<template>
  <Header />
  <Suspense>
    <LearningContent/>
    <template #fallback>Loading...</template>
  </Suspense>
</template>

<style>
.learning-content {
  width: 100%;
}

.add-course-wrapper {
  margin: 30px 0 0 10%;
}

.add-course-text-button {
  background-color: #bbe1fa;
  width: fit-content;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
}
</style>
