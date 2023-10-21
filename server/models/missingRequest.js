const mongoose = require('mongoose');

exports.missingSchema = mongoose.Schema({
    missing_fname : {
        type: String,
    },
    missing_lname : {
        type: String,
    },
    missing_status : {
        type: String,
    },
    missing_photo1 : {
        type: String,
    },
    missing_photo2 : {
        type: String,
    },
    missing_photo3 : {
        type: String,
    },
    missing_description : {
        type: String,
    },
    missing_position : {
        type: String,
    },
    missing_genre : {
        type: String,
    },
    approve : {
        type: String,
    },
    missing_slug : {
        type: String,
    },
}, {timestamps: true});