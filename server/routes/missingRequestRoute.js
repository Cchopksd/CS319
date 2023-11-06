const express = require('express')
const { sendRequest, getAllPost, getSearchPost, getHomePost } = require('../controllers/missingRequestController')
const router = express.Router()

router.post('/send-request', sendRequest)
router.get('/get-all-post', getAllPost)
router.post('/get-search-post', getSearchPost)
router.get('/get-home-post', getHomePost)

module.exports = router