import React, { useState, useEffect, useContext } from 'react'
import {  Link, useNavigate } from 'react-router-dom';
import './css/Navbar.css'
import Logo from '../assets/images/Navbar/logo.png' 

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <Link to="/">
                    <img className='nav-img-logo' src={Logo}/>
                </Link>
                <div>
                    <ul className='nav-menu'>
                        <Link className='nav-disable-link-style'>รายงานผู้สูญหาย</Link>
                        <Link className='nav-disable-link-style'>ตามหาผู้สูญหาย</Link>
                        <Link className='nav-disable-link-style'>
                            เข้าสู่ระบบ
                        </Link>
                        <Link>
                            <button className='nav-regis-btn'>สมัครสมาชิก</button>
                        </Link>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
