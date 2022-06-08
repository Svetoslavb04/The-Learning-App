const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Course name is required']
    },
    description: {
        type: String
    },
    lessons: {
        type: Number,
        required: [true, 'Lessons count is required']
    },
    state: {
        type: String,
        enum: ['Active', 'Archived'],
        default: 'Active'
    },
    dataAdded: {
        type: Number
    },
    imageId: {
        type: mongoose.Types.ObjectId,
        ref: 'Image'
    }
})

courseSchema
    .pre('save', async function (next) {

        this.dataAdded = Number(new Date().getTime());

        next();
    });

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;