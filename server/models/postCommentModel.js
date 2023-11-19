const mongoose = require('mongoose');

const postCommentSchema = mongoose.Schema({
    missing_id : {
        type : mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "MissingRequests"
    },
    usercomment_id : {
        type : mongoose.Schema.Types.ObjectId,
        require: true,
        ref : "Users"
    },
    clue_comment : {
        type : String,
        required: true
    },
    clue_photo1 : {
        type : String,
        default : ""
    },
    clue_photo2 : {
        type : String,
        default : ""
    },
    clue_photo2 : {
        type : String,
        default : ""
    },
}, {timestamps: true})

module.exports = mongoose.model("PostComment",postCommentSchema)