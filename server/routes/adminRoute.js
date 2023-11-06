const express = require('express')
const router = express.Router()
const {
    getAllRequire,
    singleRequire,
    deleteRequire,
    updateStatus
} = require('../controllers/adminController')


router.get('/admin', getAllRequire)
router.get('/admin/:missing_slug', singleRequire)
router.delete('/admin/:missing_slug', deleteRequire)
router.patch('/admin/:missing_slug', updateStatus)

module.exports = router