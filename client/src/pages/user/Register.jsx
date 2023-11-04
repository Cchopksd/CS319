import React, { useState, useEffect } from "react";
import "./css/Register.css"
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Swal from 'sweetalert2'
import { authenticate } from "../../services/authorize";
import Loading from '../../components/Loading.jsx'

const Register = () => {
    // redirect หน้า
    const navigate = useNavigate()

    // state ต่างๆ
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    //state ของไฟล์
    const [imageFile, setImageFile] = useState()
    const [image, setImage] = useState("")

    // load status
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        if (!fname || !lname || !password || !email || !phone || !confirmPassword) {
            setLoading(false)
            await Swal.fire(
                'แจ้งเตือน',
                'กรุณากรอกข้อมูลให้ครบ',
                'error'
            )
            return
        }

        if (imageFile) {
            if (imageFile.type === "image/jpeg" || imageFile.type === "image/png"){
                const data = new FormData()
                data.append("file", imageFile)
                data.append("upload_preset", "hopeland")
                data.append("cloud_name", "dp5dpfuin")

                // api upload รูป ไปยัง Cloudinary
                await axios.post("https://api.cloudinary.com/v1_1/dp5dpfuin/image/upload/", data)
                .then((response) => {
                    setImage(response.data.url.toString())
                }).catch((error) => {
                    setLoading(false)
                    Swal.fire(
                        'แจ้งเตือน',
                        error,
                        'error'
                    )
                })
            }else{
                setLoading(false)
                Swal.fire(
                    'แจ้งเตือน',
                    'ประเภทไฟล์รูปภาพไม่รองรับ',
                    'error'
                )
            }
        } else {
            await axios.post(`${import.meta.env.VITE_APP_API}/signup`,{fname,lname,phone,email,password,confirmPassword,image}).then(async (res) => {
                setLoading(false)
                await Swal.fire(
                    'แจ้งเตือน',
                    'สมัครสมาชิกสำเร็จ',
                    'success'
                )
                authenticate(res, ()=> navigate('/'))
            }).catch((err) => {
                setLoading(false)
                Swal.fire(
                    'แจ้งเตือน',
                    err.response.data.error,
                    'error'
                )
            })
        }
    }

    useEffect(() => {
        if(image) {
            axios.post(`${import.meta.env.VITE_APP_API}/signup`,{fname,lname,phone,email,password,confirmPassword,image}).then(async (res) => {
                setLoading(false)
                await Swal.fire(
                    'แจ้งเตือน',
                    'สมัครสมาชิกสำเร็จ',
                    'success'
                )
                authenticate(res, ()=> navigate('/'))
            }).catch((err) => {
                setLoading(false)
                Swal.fire(
                    'แจ้งเตือน',
                    err.response.data.error,
                    'error'
                )
            })
        }
    },[image])

    return (
     <div className="bg-signup">
        {loading && <Loading/>}
        <div className="auth-form-register">
            <div className="singup-container">
                <div className="findss-back-box" role="button" onClick={()=>{navigate(-1)}}>
                    <IoIosArrowBack size={40}  />
                </div>
                <h2>สร้างบัญชีผู้ใช้งาน</h2>
                <a>รูปโปรไฟล์</a>
                <div className="img-upload">
                    <input type="file" onChange={(e) => {setImageFile(e.target.files[0])}} />
                </div>
                <form className="register-form" onSubmit={handleSubmit}>
                    <div className="customz-input-container">
                        <input
                            type="text"
                            className="customz-input"
                            placeholder=" "
                            value={fname}
                            onChange={(e) => {setFname(e.target.value)}}
                        />
                        <label className="customz-label">ชื่อ *</label>
                    </div>

                    <div className="customz-input-container">
                        <input
                            type="text"
                            className="customz-input"
                            placeholder=" "
                            value={lname}
                            onChange={(e) => {setLname(e.target.value)}}
                        />
                        <label className="customz-label">นามสกุล *</label>
                    </div>
                    <div className="customz-input-container">
                        <input
                            type="text"
                            className="customz-input"
                            placeholder=" "
                            value={phone}
                            onChange={(e) => {setPhone(e.target.value)}}
                        />
                        <label className="customz-label">เบอร์โทรศัพท์ *</label>
                    </div>
                    <div className="customz-input-container">
                        <input
                            type="text"
                            className="customz-input"
                            placeholder=" "
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}}
                        />
                        <label className="customz-label">อีเมล *</label>
                    </div>
                    <div className="customz-input-container">
                        <input
                            type="password"
                            className="customz-input"
                            placeholder=" "
                            value={password}
                            onChange={(e) => {setPassword(e.target.value)}}
                        />
                        <label className="customz-label">รหัสผ่าน *</label>
                    </div>
                    <div className="customz-input-container">
                        <input
                            type="password"
                            className="customz-input"
                            placeholder=" "
                            value={confirmPassword}
                            onChange={(e) => {setConfirmPassword(e.target.value)}}
                        />
                        <label className="customz-label">ยืนยันรหัสผ่าน *</label>
                    </div>

                    <button className="submit-re">สมัครสมาชิก</button>

                    <div className="reuser-btn"><span>มีบัญชีผู้ใช้งานอยู่เเล้ว</span><Link to='/Login'>เข้าสู่ระบบ</Link></div>

                </form>
            </div>
        </div>
        </div>
    );
}

export default Register;
