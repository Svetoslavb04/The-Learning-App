<script setup>
import { ref, defineProps, onUpdated } from "vue";
import { addCourse } from "../services/courseService.js";

const props = defineProps(["open", "togglePopup", "addCourse"]);

let open = ref(props.open);

onUpdated(() => {
  open.value = props.open;
});

async function handeAddCourse(e) {
  const formdata = new FormData(e.currentTarget);

  const courseName = formdata.get('course-name');
  const description = formdata.get('description');
  const lessons = formdata.get('lessons');
  const image = formdata.get('image');

  const course = {
    name: courseName,
    description,
    lessons
  };

  try {
    let addedCourse = await addCourse(course);
    
    props.addCourse(addedCourse);
    props.togglePopup(false);
  } catch (error) {
    console.log(error);
  }
}

</script>

<template>
  <div v-if="this.open" class="add-course-pop-up-wrapper">
    <form class="add-course-form" @submit.prevent="handeAddCourse">
      <input type="text" name="course-name" placeholder="Course name" />
      <textarea
        rows="5"
        name="description"
        placeholder="Description (optional)"
      ></textarea>
      <input type="text" name="lessons" placeholder="lessons" />

      <label for="add-course-image" class="add-course-image-label"
        >Upload photo (optional)</label
      >
      <input type="file" id="add-course-image" name="image" />

      <button type="submit" class="add-course-add-button">Add</button>
    </form>
  </div>
</template>

<style>
.add-course-pop-up-wrapper {
  border-radius: 2px;
  background-color: #1b262c;
  width: 500px;
  margin: 0 auto;
}

.add-course-form {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.add-course-form input {
  border: 0;
  padding: 5px 2px;
}

textarea {
  resize: none;
  padding: 5px 2px;
}

.add-course-form input:nth-of-type(1) {
  width: 400px;
}

.add-course-form input:nth-of-type(2) {
  width: 50px;
}

input[type="file"] {
  display: none;
}

.add-course-image-label {
  width: fit-content;
  cursor: pointer;
  padding: 5px;
  border-radius: 3px;
  background-color: #bbe1fa;
}

.add-course-add-button {
  cursor: pointer;
  width: fit-content;
  padding: 5px 20px;
  background-color: #bbe1fa;
  border: 0;
  border-radius: 3px;
}
</style>
