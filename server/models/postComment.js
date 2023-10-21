const mongoose = require('mongoose');

exports.postCommentSchema = mongoose.Schema({
    fname : {
        type: String,
        // required: true
    },
    lname : {
        type: String,
        // required: true
    },
}, {timestamps: true})