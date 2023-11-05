const Users = require('../models/userModel')

exports.getAllUsers = async(req,res) =>{
    await Users.find().then((users) =>{
        res.status(200).json(users)
    }).catch((err) =>{
        return res.status(500).json({message: err})
    })
}

exports.singleUser = async(req, res) => {
    const { slug } = req.params
    await Users.findOne({ slug }).then((users) => {
        if (!users){
            res.status(404).json({message: 'ไม่พบบัญชีนี้'})
        }
        res.status(200).json(users)
    }).catch((err) =>{
        res.status(500).json({message: err})
    })
}

exports.singleUser = async(req, res) => {
    const { slug } = req.params
    console.log(slug)
    await Users.findOneAndRemove({ slug }).then((users) => {
        if (!users){
            res.status(404).json({message: 'ไม่พบบัญชีนี้'})
        }
        res.status(200).json({message: 'ลบบัญชีเรียบร้อย'})
    }).catch((err) =>{
        res.status(500).json({message: err})
    })
}