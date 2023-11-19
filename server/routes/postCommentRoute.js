const express = require('express')
const {postcomment} = require('../controllers/postCommentController')

const router = express.Router()

router.post('/postcomment', postcomment)

module.exports = router