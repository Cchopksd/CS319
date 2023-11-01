const express = require('express')
const morgan = require("morgan")
const cors = require("cors")
const connectDB = require("./configs/connectDB") // ไฟล์เชื่อมต่อ DB อยู่ใน folder configs

//import route
const userRoute = require("./routes/userRoute")

require('dotenv').config()

// สร้าง Server
const app = express()

//middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

// เชื่อมต่อกับฐานข้อมูล
connectDB()

// route
app.use("/api",userRoute)

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, ()=> {
    console.log(`Hopeland Server is running on port ${PORT}`)
})