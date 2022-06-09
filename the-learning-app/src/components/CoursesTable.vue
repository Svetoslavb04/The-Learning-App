<script>
import { ref, onMounted } from "vue";
import apiData from "../config/api.js";
import {
  getAllCourses,
  changeCourseState,
  deleteCourse,
} from "../services/courseService.js";
import Dropdown from "./Dropdown.vue";
import Remove from "./icons/Remove.vue";

export default {
  components: {
    Dropdown,
    Remove,
  },
  async setup() {
    const courses = ref([]);

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

    const changeState = async (course_id, newState) => {
      try {
        await changeCourseState(newState, course_id);
      } catch (error) {
        console.log(error);
      }
    };

    const replaceImage = (e) => {
      e.currentTarget.outerHTML = "Error";
    };

    const removeCourse = async (_id) => {

      try {
        const course = await deleteCourse(_id);
        console.log(course);
        courses.value = courses.value.filter((c) => c._id != _id);
        console.log('s');
      } catch (error) {
        console.log(error);
      }
    };

    return {
      courses,
      changeState,
      url: `${apiData.url}/courses`,
      replaceImage,
      removeCourse,
    };
  },
};
</script>

<template>
  <div class="learning-table-wrapper">
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Course name</th>
          <th>Description</th>
          <th>Lessons(count)</th>
          <th class="state-cell">State</th>
          <th>Date added</th>
          <th>Image</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(course, i) in courses" :key="course._id">
          <th>{{ i }}</th>
          <th>{{ course.name }}</th>
          <th>{{ course.description || "-" }}</th>
          <th>{{ course.lessons }}</th>
          <th class="state-cell">
            <Dropdown
              :items="['Active', 'Archived']"
              :selected="course.state"
              :changeSelected="changeState.bind(null, course._id)"
            />
          </th>
          <th>{{ course.dateAdded }}</th>
          <th>
            <img
              v-if="course.imageId"
              :src="`${url}/${course.name}`"
              @error="replaceImage"
            />
          </th>
          <th class="course-delete-cell">
            <div class="remove-wrapper" @click="removeCourse.call(null, course._id)">
              <Remove />
            </div>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>

.learning-table-wrapper {
  margin: 40px 0;
  height: 500px;
  overflow: auto;
}

table {
  width: 80%;
  margin: 0 auto;
  border-spacing: 0;
}

th {
  padding: 10px;
  border-top: 1px solid #1b262c;
  border-left: 1px solid #1b262c;
}

th:last-child {
  border-right: 1px solid #1b262c;
}

thead th {
  border-bottom: 1px solid #1b262c;
}

thead th:last-child {
  border-left: 1px solid #1b262c;
  border-top: 0;
  border-right: 0;
  border-bottom: 0;
}

tbody tr:first-child th {
  border-top: 1px solid #1b262c;
}

tbody tr:last-child th {
  border-bottom: 1px solid #1b262c;
}

.state-cell {
    min-width: 120px;
} 

.course-delete-cell {
  padding: 0;
}

.remove-wrapper {
  margin: 0 auto;
  width: 35px;
  cursor: pointer;
}

@media (max-height: 600px) {
  .learning-table-wrapper {
    height: 300px;
  }
}
</style>
