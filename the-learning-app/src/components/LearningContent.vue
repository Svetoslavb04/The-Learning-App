<script>
import { reactive, ref, onUpdated } from "vue";
import Header from "../components/Header.vue";
import CoursesTable from "../components/CoursesTable.vue";
import AddCoursePopup from "../components/AddCoursePopup.vue";
import { getAllCourses, deleteCourse } from "../services/courseService.js";
export default {
  components: {
    Header,
    CoursesTable,
    AddCoursePopup,
  },
  async setup() {
    const open = ref(false);

    const togglePopup = (state) => {
      open.value = Boolean(!open.value);
    };

    let courses = reactive([]);

    try {
      let rawCourses = await getAllCourses();

      rawCourses = rawCourses.map((c) => {
        const dateAdded = new Date(c.dateAdded);

        const monthNameLong = dateAdded.toLocaleString("en-US", { month: "long" });

        const dateAddedString = `${dateAdded.getDate()} ${monthNameLong}, ${dateAdded.getFullYear()}`;

        return { ...c, dateAdded: dateAddedString };
      });

      courses.value = rawCourses;
    } catch (error) {}

    const addCourse = (course) => courses.value.push(course);
    const removeCourse = async (_id) => {
      try {
        const course = await deleteCourse(_id);
        courses.value = courses.value.filter((c) => c._id != _id);
      } catch (error) {
      }
    };

    return {
      open,
      togglePopup,
      courses,
      addCourse,
      removeCourse,
    };
  },
};
</script>

<template>
  <div class="learning-content">
    <div class="add-course-wrapper">
      <h2 class="add-course-text-button" @click="togglePopup(true)">
        {{ this.open ? "Hide" : "Add Course" }}
      </h2>
    </div>
    <Suspense>
      <CoursesTable :courses="courses" :removeCourse="removeCourse" />
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
  <AddCoursePopup :open="open" :togglePopup="togglePopup" :addCourse="addCourse" />
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
