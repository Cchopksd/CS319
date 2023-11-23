const express = require('express')
const router = express.Router()
const {
    getAllRequire,
    singleRequire,
    deleteRequire,
    updateStatus,
    searchAdmin
} = require('../controllers/adminController')


router.get('/admin', getAllRequire)
router.get('/admin/:missing_slug', singleRequire)
router.delete('/admin/:missing_slug', deleteRequire)
router.patch('/admin/:missing_slug', updateStatus)
router.get('/admin/search/:query', searchAdmin);

module.exports = router