const express = require('express')
const router = express.Router()
const { getAllUsers } = require('../controllers/adminController')


router.get('/admin', getAllUsers)

module.exports = router