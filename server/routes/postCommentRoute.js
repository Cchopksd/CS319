const express = require('express')
const {postcomment,getcomment} = require('../controllers/postCommentController')

const router = express.Router()

router.post('/postcomment', postcomment)
router.post('/allcomment', getcomment)

module.exports = router