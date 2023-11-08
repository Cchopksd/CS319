const express = require('express')
const { sendRequest, getAllPost, getSearchPost, getHomePost, getReportPost, getSinglePost } = require('../controllers/missingRequestController')
const router = express.Router()

router.post('/send-request', sendRequest)
router.get('/get-all-post', getAllPost)
router.post('/get-search-post', getSearchPost)
router.get('/get-home-post', getHomePost)
router.get('/get-report-post', getReportPost)
router.post('/get-single-post',getSinglePost)

module.exports = router