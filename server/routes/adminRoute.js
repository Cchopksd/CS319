const express = require('express')
const router = express.Router()
const {
    getAllRequire,
    singleRequire,
    deleteRequire
} = require('../controllers/adminController')


router.get('/admin', getAllRequire)
router.get('/admin/:missing_slug', singleRequire)
router.delete('/admin/:missing_slug', deleteRequire)

module.exports = router