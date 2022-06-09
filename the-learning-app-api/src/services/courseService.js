const Course = require('../models/Course');
const Image = require('../models/Image');

exports.getAllCourses = () =>
    Course.find().lean();

exports.addCourse = (course) =>
    Course.create(course);

exports.getCourse = (_id) =>
    Course.findOne({ _id }).lean();

exports.updateCourse = (course) =>
    Course.findOneAndUpdate({ _id: course._id }, course, {
        returnDocument: 'after',
        runValidators: true
    });

exports.setImageIdForCourse = (course_id, image_id) =>
    Course.findOneAndUpdate({ _id: course._id }, { imageId: image_id });

exports.deleteCourse = (_id) =>
    Course.findOneAndDelete({ _id });

exports.uploadImage = (image, course_id) =>
    Image.create({ image, course_id });

exports.getImage = (_id) =>
    Image.findOne({ _id }).lean();
