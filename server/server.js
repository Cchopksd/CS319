const express = require('express')
const morgan = require("morgan")
const cors = require("cors")
const connectDB = require("./configs/connectDB") // ไฟล์เชื่อมต่อ DB อยู่ใน folder configs

require('dotenv').config()

// สร้าง Server
const app = express()

// เชื่อมต่อกับฐานข้อมูล
connectDB()

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, ()=> {
    console.log(`Kabiixoo Server is running on port ${PORT}`)
})