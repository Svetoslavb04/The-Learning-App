const router = require('express').Router();

const multer = require('multer');

const multerStorage = multer.memoryStorage();
const upload = multer({ storage: multerStorage });

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
        
        res.status(400).json({ error: 'Failed to add course' });

    }


});

router.put('/courses/:_id', async (req, res) => {
    
    try {
        const updatedCourse = await updateCourse({ _id: req.params._id, ...req.body });

        res.json({ course: updatedCourse });


    } catch (error) {
        
        res.status(400).json({ error: 'Failed to update course' });

    }

});

router.delete('/courses/:_id', async (req, res) => {

    try {

        const removedCourse = await deleteCourse(req.params._id);
        
        res.json({ course: removedCourse });

    } catch (error) {
        res.status(400).json({ error: 'Failed to remove course' });

    }


});

router.post('/image/:_courseId', upload.single('image'), async (req, res) => {

    try {

        const image = { data: new Buffer.from(req.file.buffer, 'base64'), contentType: req.file.mimetype }

        const savedImage = await uploadImage(image, req.params.course_id);

        setImageIdForCourse(req.params._id, savedImage._id);

        res.send(savedImage);

    } catch (error) {

        res.status(400).json({ error: 'Failed to upload image' })
    }

});

router.get('/image/:_id', async (req, res) => {

    try {

        const image = await getImage(req.params._id);

        res.send(image);

    } catch (error) {

        res.status(400).json({ error: 'Failed to retrieve course' });

    }

});

router.all('*', (req, res) => {

    res.status(400).json('Invalid endpoint!');

});

module.exports = router;