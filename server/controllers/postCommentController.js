const PostComment = require('../models/postCommentModel')

exports.postcomment = async(req,res) => {

    const {missingid,loginUser,comment,image1,image2,image3} = req.body


    if (image1 === "" ) {
        await PostComment.create({
            missing_id : missingid,
            usercomment_id : loginUser,
            clue_comment : comment
        }).then(() => {
            res.status(200).json({message : "โพสต์สำเร็จ"})
        }).catch((err) => {
            res.status(400).json({error: err})
        })
    } else if (image2 === "") {
        await PostComment.create({
            missing_id : missingid,
            usercomment_id : loginUser,
            clue_comment : comment,
            clue_photo1 : image1,
        }).then(() => {
            res.status(200).json({message : "โพสต์สำเร็จ"})
        }).catch((err) => {
            res.status(400).json({error: err})
        })
    } else if (image3 === "") {
        await PostComment.create({
            missing_id : missingid,
            usercomment_id : loginUser,
            clue_comment : comment,
            clue_photo1 : image1,
            clue_photo2 : image2
        }).then(() => {
            res.status(200).json({message : "โพสต์สำเร็จ"})
        }).catch((err) => {
            res.status(400).json({error: err})
        })
    } else {
        await PostComment.create({
            missing_id : missingid,
            usercomment_id : loginUser,
            clue_comment : comment,
            clue_photo1 : image1,
            clue_photo2 : image2,
            clue_photo3 : image3
        }).then(() => {
            res.status(200).json({message : "โพสต์สำเร็จ"})
        }).catch((err) => {
            res.status(400).json({error: err})
        })
    }
}

exports.getcomment = async(req,res) => {
    const {missingid} = req.body
    await PostComment.find({missing_id : missingid}).populate('usercomment_id').sort({createdAt:-1}).then((comments) => {
        res.status(200).json(comments)
    }).catch((err) => {
        return res.status(400).json({error : 'เกิดข้อผิดพลาด'})
    })
}