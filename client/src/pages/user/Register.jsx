import React, { useState } from "react";
import "./css/Register.css"
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()
    const [images, setImages] = useState('');
    const [imageURLs, setImageURLs] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
     <div className="bg-signup">
        <div className="auth-form-register">
            <div className="singup-container">

                <div className="findss-back-box" role="button" onClick={()=>{navigate(-1)}}>
                    <IoIosArrowBack size={40}  />
                </div>
                <h2>สร้างบัญชีผู้ใช้งาน</h2>
                <a>รูปโปรไฟล์</a>
                <div className="img-upload">
                    <input type="file" multiple accept="image/*" />
                </div>


                <form className="register-form" onSubmit={handleSubmit}>

                    <div className="customz-input-container">
                        <input
                            type="text"
                            className="customz-input"
                            placeholder=" "
                        />
                        <label className="customz-label">ชื่อ *</label>
                    </div>

                    <div className="customz-input-container">
                        <input
                            type="text"
                            className="customz-input"
                            placeholder=" "
                        />
                        <label className="customz-label">นามสกุล *</label>
                    </div>
                    <div className="customz-input-container">
                        <input
                            type="text"
                            className="customz-input"
                            placeholder=" "
                        />
                        <label className="customz-label">เบอร์โทรศัพท์ *</label>
                    </div>
                    <div className="customz-input-container">
                        <input
                            type="text"
                            className="customz-input"
                            placeholder=" "
                        />
                        <label className="customz-label">อีเมล *</label>
                    </div>
                    <div className="customz-input-container">
                        <input
                            type="text"
                            className="customz-input"
                            placeholder=" "
                        />
                        <label className="customz-label">รหัสผ่าน *</label>
                    </div>
                    <div className="customz-input-container">
                        <input
                            type="text"
                            className="customz-input"
                            placeholder=" "
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
