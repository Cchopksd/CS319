const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema({
    fname : {
        type: String,
        // required: true
    },
    lname : {
        type: String,
        // required: true
    },
    password : {
        type: String,
        // required: true
    },
    email : {
        type: String,
        // required: true
    },
    phone : {
        type: String,
    },
    profileImage : {
        type: String,
        default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    },
    role : {
        type: String,
        default: "user"
    },
    slug: {
        type: String,
        lowercase: true,
        unique: true
    },
}, {timestamps: true})

// เช็ค hash กับ ฐานข้อมูล
memberSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

// แปลง password เป็น hash
memberSchema.pre('save', async function (next) {
    if(!this.isModified){
        next()
    }

    // hash รหัสผ่าน
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})

module.exports = mongoose.model("Users",userSchema)