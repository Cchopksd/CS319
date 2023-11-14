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

// exports.findUserByCriteria = async (req, res) => {
//     const { setName, setStatus } = req.body;

//     if (!setName && !setStatus) {
//         const allUsers = await MissingRequest.find();
//         return res.json(allUsers);
//     }

//     try {
//         let filteredUsers = [];

//         if (setName) {
//             // Using $regex to perform a case-insensitive partial match on missing_fname
//             filteredUsers = await MissingRequest.find({ missing_fname: { $regex: new RegExp(setName, 'i') } });
//         } else if (setStatus) {
//             // Filtering based on missing_status
//             filteredUsers = await MissingRequest.find({ missing_status: setStatus });
//         }

//         res.json(filteredUsers);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };