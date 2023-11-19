const express = require('express')
const router = express.Router()
const {
    getAllRequire,
    singleRequire,
    deleteRequire,
    updateStatus,
    findUserByCriteria
} = require('../controllers/adminController')


router.get('/admin', getAllRequire)
router.get('/admin/:missing_slug', singleRequire)
router.delete('/admin/:missing_slug', deleteRequire)
router.patch('/admin/:missing_slug', updateStatus)
// router.post('/findUserByCriteria', findUserByCriteria);

module.exports = router