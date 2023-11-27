const MissingRequest = require('../models/missingRequestModel')

exports.getAllRequire = async (req, res) => {
    await MissingRequest.find().then((missingInfo) => {
        res.status(200).json(missingInfo)
    }).catch((err) => {
        return res.status(500).json({ message: err })
    })
}

exports.singleRequire = async (req, res) => {
    const { missing_slug } = req.params
    await MissingRequest.findOne({ missing_slug }).then(async (missingInfo) => {
        if (!missingInfo) {
            return res.status(404).json({ message: 'ไม่พบบัญชีนี้' })
        }
        return res.status(200).json(missingInfo)

    }).catch((err) => {
        return res.status(500).json({ message: err.message })
    })
}

exports.deleteRequire = async (req, res) => {
    const { missing_slug } = req.params
    await MissingRequest.findOneAndRemove({ missing_slug }).then((missingInfo) => {
        if (!missingInfo) {
            return res.status(404).json({ message: 'ไม่พบบัญชีนี้' })
        }
        return res.status(200).json({ message: 'ลบบัญชีเรียบร้อย' })
    }).catch((err) => {
        return res.status(500).json({ message: err.message })
    })
}


exports.updateStatus = async (req, res) => {
    const { missing_slug } = req.params
    const { missingStatus } = req.body
    console.log(missingStatus)
    await MissingRequest.findOneAndUpdate({ missing_slug }, {
        missing_status: missingStatus
    }, { new: true }).then((missingInfo) => {
        res.status(200).json({ missingInfo })
    }).catch((err) => {
        res.status(400).json({ error: err })
    })
}

exports.searchAdmin = async (req, res) => {
    const { query } = req.params;
    // console.log('Query:', query);
    try {
        if (!query) {
            const newResult = await MissingRequest.find();
            console.log(newResult)
            return res.status(200).json(newResult);
        } else {
            const result = await MissingRequest.find({
                $or: [
                    { missing_fname: { $regex: query, $options: 'i' } },
                    { missing_lname: { $regex: query, $options: 'i' } },
                ],
            });
            return res.status(200).json(result)
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}
