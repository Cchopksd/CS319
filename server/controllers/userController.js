const Member = require('../models/userModel')
const { v4: uuidv4 } = require('uuid');
const generateToken = require('../configs/generateToken')
const bcrypt = require('bcryptjs')



// Signup
exports.signup = async(req,res) => {
    const {fname,lname,password,confirmPassword,email,phone,image} = req.body

    let slug = uuidv4()

    // if (!fname || !lname || !password || !email || !phone || !confirmPassword) {
    //     return res.status(400).json({error: "กรุณากรอกข้อมูลให้ครบ"})
    // }

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
            slug: slug})
            .then((user) => {
                console.log(user)
                res.json({token: generateToken(user._id), email:user.email})})
        .catch((err) => {
            res.status(400).json({error: err})
        })
    }

    else{
        await Member.create({
            fname: fname,
            lname: lname,
            password: password,
            email: email,
            phone: phone,
            profileImage: image,
            slug: slug})
            .then((user) => {
                res.json({token: generateToken(user._id), email:user.email})
        }).catch((err) => {
            res.status(400).json({error: err})
        })
    }
}


//sign in
exports.signin = async(req,res) =>{
    const {email, pass} = req.body

    console.log(email, pass)

    if(email == "" || pass == ""){
        return res.status(400).json({error:"กรุณากรอกข้อมูลให้ครบ"})
    }

    const user = await Member.findOne({email: email});

    if(user){
        if(user && (await user.matchPassword(pass))){
            return(res.json)({
                _id: user._id,
                email: user.email,
                role: user.role,
                token: generateToken(user._id)
            })
        }else{
            return res.status(400).json({error:"ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง"})
        }
    }else {
        return res.status(400).json({error: "ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง"})
    }
}

// เอาข้อมูลเข้า navbar
exports.getUserLogin = async (req,res) => {
    const { user } = req.body
    console.log(user)
    await Member.findOne({email : user}).then((userInfo) => {
        console.log(userInfo)
        res.status(200).json(userInfo)
    }).catch((err) => {
        res.status(400).json({error: err})
    })
}

// เอา id ของ member
exports.getUserId = async (req,res) => {
    const { user } = req.body
    await Member.findOne({email: user}).then((userInfo) => {
        res.status(200).json(userInfo._id)
    }).catch((err) => {
        res.status(400).json({error: err})
    })
}

exports.getUserImage = async (req,res) => {
    const { loginUser } = req.body
    await Member.findOne({_id: loginUser}).then((userInfo) => {
        res.status(200).json(userInfo.profileImage)
    }).catch((err) => {
        res.status(400).json({error: err})
    })
}