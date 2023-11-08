const MissingRequest = require('../models/missingRequestModel')
const { v4: uuidv4 } = require('uuid');


exports.sendRequest = async(req,res) => {
    console.log(req.body)
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

// เมื่อ เข้าสู่หน้าคนหาย
exports.getAllPost = async(req,res) => {
    await MissingRequest.find({missing_status : "สูญหาย"}).sort({ createdAt: -1 }).then((posts) => {
        res.status(200).json(posts)
    }).catch((err) => {
        return res.status(400).json({error : 'เกิดข้อผิดพลาด'})
    })
}

// เมื่อ ค้นหา
exports.getSearchPost = async (req,res) => {
    const { searchKeyword } = req.body
    
    let keyword = false

    let query = { missing_status: "สูญหาย" };

    if (searchKeyword) {
        keyword = true
        query = {
            ...query,
            $or: [
                { missing_fname: { $regex: searchKeyword, $options: "i" } },
                { missing_lname: { $regex: searchKeyword, $options: "i" } },
            ],
        };
        }

    // console.log(keyword)

    if (keyword) {
        const posts = await MissingRequest.find(query).sort({ createdAt: -1 })
        res.status(200).json(posts)
    }
    else {
        const posts = await MissingRequest.find({missing_status : "สูญหาย"}).sort({ createdAt: -1 })
        res.status(200).json(posts)
    }
}

// ของหน้า home
exports.getHomePost = async (req,res) => {
    await MissingRequest.find({missing_status : "สูญหาย"}).sort({ createdAt: -1 }).limit(6).then((posts) => {
        res.status(200).json(posts)
    }).catch((err) => {
        return res.status(400).json({error : 'เกิดข้อผิดพลาด'})
    })
}

// ของหน้า Report
exports.getReportPost = async (req,res) => {
    await MissingRequest.find({missing_status : "สูญหาย"}).sort({ createdAt: -1 }).limit(2).then((posts) => {
        res.status(200).json(posts)
    }).catch((err) => {
        return res.status(400).json({error : 'เกิดข้อผิดพลาด'})
    })
}

exports.getSinglePost = async (req,res) => {
    const { slug } = req.body
    await MissingRequest.findOne({missing_slug : slug}).then((post) => {
        res.status(200).json(post)
    }).catch((err) => {
        return res.status(400).json({error : 'เกิดข้อผิดพลาด'})
    })
}