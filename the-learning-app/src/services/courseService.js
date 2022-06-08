import apiData from '../config/api.js';

export const getAllCourses = () => fetch(`${apiData.url}/courses`)
    .then(res => res.json())
    .then(data => data.courses)
    .catch(err => []);

export const changeCourseState = (state, course_id) => fetch(`${apiData.url}/courses/${course_id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ _id: course_id, state })
})
    .then(res => res.json())
    .then(data => {

        if (data.error) {
            throw Error(data.error);
        }

        return data.course;

    })
    .catch(err => {
        throw err;
    })

export const deleteCourse = (course_id) => fetch(`${apiData.url}/courses/${course_id}`, {
    method: 'DELETE'
})
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.error) {
            throw Error(data.error);
        }

        return data.course;

    })
    .catch(err => {
        console.log(err);
        throw err;
    })