const router = require('express').Router();

const { uploadImage, getImage, setImageIdForCourse, getAllCourses, addCourse, deleteCourse, updateCourse } = require('./services/courseService');

router.get('/courses', async (req, res) => {

    let courses = [];

    try {

        courses = await getAllCourses();

    } catch (error) { }

    res.json({ courses });

});

router.post('/courses', async (req, res) => {

    try {

        const addedCourse = await addCourse(req.body);

        res.json({ course: addedCourse });

    } catch (error) {

        res.json({ error: 'Failed to add course' });

    }


});

router.put('/courses/:_id', async (req, res) => {

    try {

        const updatedCourse = await updateCourse({ _id: req.params._id, ...req.body });

        res.json({ course: updatedCourse });


    } catch (error) {
        console.log(error);
        res.json({ error: 'Failed to update course' });

    }

});

router.delete('/courses/:_id', async (req, res) => {

    try {

        const removedCourse = await deleteCourse(req.params._id);

        res.json({ course: removedCourse });

    } catch (error) {

        res.json({ error: 'Failed to remove course' });

    }


});
