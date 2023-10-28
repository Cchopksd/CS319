const mongoose = require('mongoose');

const missingRequestSchema = mongoose.Schema({
    reporter_id : {
        type : mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Users"
    },
    missing_fname : {
        type : String,
        require : true
    },
    missing_lname : {
        type : String,
        require : true
    },
    missing_position : {
        type : String,
        require : true
    },
    missing_gender : {
        type : String,
        require : true
    },
    missing_province : {
        type : String,
        require : true
    },
    missing_fname : {
        type : String,
        require : true
    },
    missing_date : {
        type : String,
        require : true
    },
    missing_cause : {
        type : String,
        require : true
    },
    missing_photo1 : {
        type : String,
        default : ""
    },
    missing_photo2 : {
        type : String,
        default : ""
    },
    missing_photo3 : {
        type : String,
        default : ""
    },
    missing_description : {
        type : String,
        default : ""
    },
    missing_slug : {
        type : String,
        default : ""
    },
    missing_status : {
        type : String,
        default : ""
    },
} ,{timestamps: true})

module.exports = mongoose.model("MissingRequests",missingRequestSchema)