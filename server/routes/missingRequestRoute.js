const express = require('express')
const { sendRequest } = require('../controllers/missingRequestController')
const router = express.Router()

router.post('/send-request', sendRequest)

module.exports = router