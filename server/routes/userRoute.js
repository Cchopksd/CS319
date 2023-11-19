const express = require('express')
const { signup, signin, getUserLogin, getUserId, getUserImage } = require('../controllers/userController')
const router = express.Router()

router.post('/signup',signup)
router.post('/signin',signin)
router.post('/get-user-login', getUserLogin)
router.post('/get-userId', getUserId)
router.post('/get-userImage', getUserImage)
module.exports = router