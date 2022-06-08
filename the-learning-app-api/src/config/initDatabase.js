const mongoose = require('mongoose');

exports.connectDatabase = mongoose.connect(process.env.DB_CONNECTION_STRING);