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
    username : {
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
    mem_profileImage : {
        type: String,
        default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    },
    mem_role : {
        type: String,
        default: "member"
    },
    mem_slug: {
        type: String,
        lowercase: true,
        unique: true
    },
}, {timestamps: true})

// เช็ค hash กับ ฐานข้อมูล
memberSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.mem_password)
}

// แปลง password เป็น hash
memberSchema.pre('save', async function (next) {
    if(!this.isModified){
        next()
    }

    // hash รหัสผ่าน
    const salt = await bcrypt.genSalt(10);
    this.mem_password = await bcrypt.hash(this.mem_password, salt)
})

module.exports = mongoose.model("Members",memberSchema)