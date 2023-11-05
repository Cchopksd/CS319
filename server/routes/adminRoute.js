const express = require('express')
const router = express.Router()
const { getAllUsers, singleUser } = require('../controllers/adminController')


router.get('/admin', getAllUsers)
router.get('/admin/:slug', singleUser)
router.delete('/admin/:slug', singleUser)

module.exports = router