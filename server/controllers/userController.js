const Member = require('../models/userModel')
const { v4: uuidv4 } = require('uuid');
const generateToken = require('../configs/generateToken')
const bcrypt = require('bcryptjs')



// Signup
exports.signup = async(req,res) => {
    const {fname,lname,password,confirmPassword,email,phone,image} = req.body

    let slug = uuidv4()

    if (!fname || !lname || !password || !email || !phone || !confirmPassword) {
        return res.status(400).json({error: "กรุณากรอกข้อมูลให้ครบ"})
    }

    const emailExist = await Member.findOne({email:email});

    const emailRegEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (!emailRegEx.test(email) && email !== "") {
        return res.status(400).json({error: "รูปแบบของอีเมลไม่ถูกต้อง"})
    }

    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!phoneRegex.test(phone) && phone !== ""){
        return res.status(400).json({error: "รูปแบบของเบอร์โทรศัพท์ไม่ถูกต้อง"})
    }
    
    if (emailExist){
        return res.status(400).json({error: "อีเมลนี้ถูกใช้งานแล้ว"})
    }

    if (password != confirmPassword){
        return res.status(400).json({error: "ยืนยันรหัสผ่านไม่สำเร็จ"})
    }

    if (image === ""){
        await Member.create({
            fname: fname,
            lname: lname,
            password: password,
            email: email,
            phone: phone,
            mem_slug: slug})
            .then((user) => {
                console.log(user)
                res.json({token: generateToken(user._id)})})
        // }).catch((err) => {
        //     res.status(400).json({error: err})
        // })
    }

    else{
        await Member.create({
            fname: fname,
            lname: lname,
            password: password,
            email: email,
            phone: phone,
            mem_profileImage: image,
            mem_slug: slug})
            .then((user) => {
                res.json({token: generateToken(user._id)})
        }).catch((err) => {
            res.status(400).json({error: err})
        })
    }
}