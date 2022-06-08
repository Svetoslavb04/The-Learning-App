const Course = require('../models/Course');

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
