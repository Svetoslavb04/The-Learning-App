const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    image: {
        data: Buffer,
        contentType: String
    },
    course_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Course'
    }
},
    { timestamps: true }
);

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;