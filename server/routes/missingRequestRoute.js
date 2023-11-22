const express = require('express')
const { sendRequest, getAllPost, getSearchPost, getHomePost, getReportPost, getSinglePost, countComment } = require('../controllers/missingRequestController')
const router = express.Router()

router.post('/send-request', sendRequest)
router.get('/get-all-post', getAllPost)
router.post('/get-search-post', getSearchPost)
router.get('/get-home-post', getHomePost)
router.get('/get-report-post', getReportPost)
router.post('/get-single-post',getSinglePost)
router.post('/get-count-comment', countComment)

module.exports = router