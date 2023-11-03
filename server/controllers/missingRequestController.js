const MissingRequest = require('../models/missingRequestModel')
const { v4: uuidv4 } = require('uuid');


exports.sendRequest = async(req,res) => {
    // destructuring
    const { loginUser, name, surname, address, gender, provinceItem, date, cause, etc, image1, image2, image3 } = req.body

    let slug = uuidv4()

    if (image1 === "" ) {
        await MissingRequest.create({
            reporter_id : loginUser,
            missing_fname : name,
            missing_lname : surname,
            missing_position : address,
            missing_gender : gender,
            missing_province : provinceItem,
            missing_date : date,
            missing_cause : cause,
            missing_description : etc,
            missing_slug : slug
        }).then(() => {
            res.status(200).json({message : "ส่งการรายงานสำเร็จ"})
        }).catch((err) => {
            res.status(400).json({error: err})
        })
    } else if (image2 === "") {
        await MissingRequest.create({
            reporter_id : loginUser,
            missing_fname : name,
            missing_lname : surname,
            missing_position : address,
            missing_gender : gender,
            missing_province : provinceItem,
            missing_date : date,
            missing_cause : cause,
            missing_description : etc,
            missing_slug : slug,
            missing_photo1 : image1
        }).then(() => {
            res.status(200).json({message : "ส่งการรายงานสำเร็จ"})
        }).catch((err) => {
            res.status(400).json({error: err})
        })
    } else if (image3 === "") {
        await MissingRequest.create({
            reporter_id : loginUser,
            missing_fname : name,
            missing_lname : surname,
            missing_position : address,
            missing_gender : gender,
            missing_province : provinceItem,
            missing_date : date,
            missing_cause : cause,
            missing_description : etc,
            missing_slug : slug,
            missing_photo1 : image1,
            missing_photo2 : image2
        }).then(() => {
            res.status(200).json({message : "ส่งการรายงานสำเร็จ"})
        }).catch((err) => {
            res.status(400).json({error: err})
        })
    } else {
        await MissingRequest.create({
            reporter_id : loginUser,
            missing_fname : name,
            missing_lname : surname,
            missing_position : address,
            missing_gender : gender,
            missing_province : provinceItem,
            missing_date : date,
            missing_cause : cause,
            missing_description : etc,
            missing_slug : slug,
            missing_photo1 : image1,
            missing_photo2 : image2,
            missing_photo3 : image3
        }).then(() => {
            res.status(200).json({message : "ส่งการรายงานสำเร็จ"})
        }).catch((err) => {
            res.status(400).json({error: err})
        })
    }
}