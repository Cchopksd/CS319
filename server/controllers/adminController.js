const MissingRequest = require('../models/missingRequestModel')

exports.getAllRequire = async(req,res) =>{
    await MissingRequest.find().then((missingInfo) =>{
        res.status(200).json(missingInfo)
    }).catch((err) =>{
        return res.status(500).json({message: err})
    })
}

exports.singleRequire = async(req, res) => {
    const { missing_slug } = req.params
    await MissingRequest.findOne({ missing_slug }).then(async(missingInfo) => {
        if (!missingInfo){
            return res.status(404).json({message: 'ไม่พบบัญชีนี้'})
        }
        return res.status(200).json(missingInfo)

    }).catch((err) =>{
        return res.status(500).json({message: err.message})
    })
}

exports.deleteRequire = async(req, res) => {
    const { missing_slug } = req.params
    await MissingRequest.findOneAndRemove({ missing_slug }).then((missingInfo) => {
        if (!missingInfo){
            return res.status(404).json({message: 'ไม่พบบัญชีนี้'})
        }
        return res.status(200).json({message: 'ลบบัญชีเรียบร้อย'})
    }).catch((err) =>{
        return res.status(500).json({message: err.message})
    })
}

exports.updateStatus = async(req, res) => {
    const { missing_slug } = req.params
    const { missing_status } = req.body
    
}