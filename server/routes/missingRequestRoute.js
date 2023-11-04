const express = require('express')
const { sendRequest, getAllPost, getSearchPost } = require('../controllers/missingRequestController')
const router = express.Router()

router.post('/send-request', sendRequest)
router.get('/get-all-post', getAllPost)
router.post('/get-search-post', getSearchPost)

module.exports = router