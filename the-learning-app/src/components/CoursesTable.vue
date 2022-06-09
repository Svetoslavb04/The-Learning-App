<script>
import { ref } from "vue";
import apiData from "../config/api.js";
import { changeCourseState } from "../services/courseService.js";
import Dropdown from "./Dropdown.vue";
import Remove from "./icons/Remove.vue";
import Edit from "./icons/Edit.vue";

export default {
  components: {
    Dropdown,
    Remove,
    Edit,
  },
  props: {
    courses: Array,
    removeCourse: Function,
  },
  async setup(props) {
    const changeState = async (course_id, newState) => {
      try {
        await changeCourseState(newState, course_id);
      } catch (error) {}
    };

    const replaceImage = (e) => {
      e.currentTarget.outerHTML = "Error";
    };

    return {
      courses: props.courses.value,
      changeState,
      url: `${apiData.url}/courses`,
      replaceImage,
      removeCourse: props.removeCourse,
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
          <th class="empty-header-cell"></th>
          <th class="empty-header-cell"></th>
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
          <th class="course-icon-cell">
            <div class="icon-wrapper">
              <Edit />
            </div>
          </th>
          <th class="course-icon-cell">
            <div class="icon-wrapper" @click="removeCourse.call(null, course._id)">
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
  margin: 30px 0;
  max-height: 400px;
  overflow: auto;
}

table {
  width: 80%;
  margin: 0 auto;
  border-spacing: 0;
}

th:first-child {
  border-left: 1px solid #1b262c;
}

th {
  padding: 10px;
  border-top: 1px solid #1b262c;
  border-right: 1px solid #1b262c;
}

thead th {
  border-bottom: 1px solid #1b262c;
}

.empty-header-cell {
  border: 0;
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

.course-icon-cell {
  padding: 5px;
}

.icon-wrapper {
  margin: 0 auto;
  width: 35px;
  cursor: pointer;
}

@media (max-height: 600px) {
  .learning-table-wrapper {
    max-height: 300px;
  }
}
</style>
