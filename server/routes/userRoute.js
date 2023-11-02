const express = require('express')
const { signup, signin, getUserLogin } = require('../controllers/userController')
const router = express.Router()

router.post('/signup',signup)
router.post('/signin',signin)
router.post('/get-user-login', getUserLogin)

module.exports = router