const Users = require('../models/userModel')

exports.getAllUsers = async(req,res) =>{
    console.log(req.body)
    await Users.find().then((users) =>{
        res.status(200).json(users)
    }).catch((err) =>{
        return res.status(500).json({message: err})
    })
}