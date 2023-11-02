import React, { useState } from "react";
import "./css/Login.css"
import logo from "../../assets/images/Navbar/logo-black.png"
import logo2 from "../../assets/images/Navbar/logo-left.png"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { authenticate } from "../../services/authorize";


export const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);


        await axios.post(`${import.meta.env.VITE_APP_API}/signin`,{email,pass})
        .then(async (res) => {
            await Swal.fire('แจ้งเตือน','เข้าสู่ระบบสำเร็จ','success')
            authenticate(res,()=>navigate('/'))
            // if(res.data.role === "admin"){

            // }
            // else{
            //     authenticate(res,()=>navigate('/home'))
            // }
        })

    }
    return (
        <div className="bg-signin">
            <div className="auth-form-page">
                <div className="singin-container">
                    <img className="img-back" src={logo2} onClick={() => { navigate(-1) }} />
                    <img className="img-logo" src={logo} />
                    <h2>เข้าสู่ระบบ</h2>
                    <form className="login-form" onSubmit={handleSubmit}>

                        <div className="customx-input-container">
                            <input
                                type="text"
                                className="customx-input"
                                placeholder=" "
                                value={email}
                                onChange={(e)=>{setEmail(e.target.value)}}
                            />
                            <label className="customx-label">อีเมล *</label>
                        </div>


                        <div className="customx-input-container">
                            <input
                                type="text"
                                className="customx-input"
                                placeholder=" "
                                value={pass}
                                onChange={(e)=>{setPass(e.target.value)}}
                            />
                            <label className="customx-label">รหัสผ่าน *</label>
                        </div>

                        <button className="submit-container" type="submit">เข้าสู่ระบบ</button>

                        <div className="link-btn"><span>ยังไม่มีบัญชีผู้ใช้งาน<Link to='/Register'>สมัครสมาชิก</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
