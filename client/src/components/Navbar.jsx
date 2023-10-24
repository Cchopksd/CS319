import React, { useState, useEffect, useContext } from 'react'
import {  Link, useNavigate } from 'react-router-dom';
import './css/Navbar.css'
import Logo from '../assets/images/Navbar/logo.png' 
import { CgMenuGridO } from 'react-icons/cg'
import { FiXCircle } from 'react-icons/fi'

const Navbar = () => {

    // dummy login user
    const dummyUser = {
        name : "กนกพล",
        image : "https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg"
    }

    // clicked mobile
    const [click, setClick] = useState(false)
    // เช็คว่า login
    const [isLogin, setIsLogin] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    return (
        <>
            <nav className='navbar'>
                <Link to="/">
                    <img className='nav-img-logo' src={Logo}/>
                </Link>
                <div>
                    {isLogin ? (
                        <ul className='nav-menu'>
                            <Link className='nav-disable-link-style'>รายงานผู้สูญหาย</Link>
                            <Link className='nav-disable-link-style'>ตามหาผู้สูญหาย</Link>
                            <div className='nav-display-name-box'>
                                <img src={dummyUser.image} alt="" />
                                <label>{dummyUser.name}</label>
                            </div>
                            <Link>
                                <button className='nav-logout-btn'>ออกจากระบบ</button>
                            </Link>
                        </ul>
                    ) : (
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
                    )}
                </div>
                <div className="nav-mobile-menu" onClick={handleClick}>
                    {click ? (
                        <FiXCircle/>
                    ) : (
                        <CgMenuGridO/>
                    )}
                </div>
                {click && isLogin ? (
                    <div className='nav-mobile-dropdown'>
                        <div className='nav-mobile-dropdown-block'>
                            <div className='nav-display-name-box'>
                                <img src={dummyUser.image} alt="" />
                                <label>{dummyUser.name}</label>
                            </div>
                        </div>
                        <div className='nav-mobile-dropdown-block'>
                            รายงานผู้สูญหาย
                        </div>
                        <div className='nav-mobile-dropdown-block'>
                            ตามหาผู้สูญหาย
                        </div>
                        <div className='nav-mobile-dropdown-block'>
                            <label style={{color : 'red'}}>ออกจากระบบ</label>
                        </div>
                    </div>
                ) : click && !isLogin ? (
                    <div className='nav-mobile-dropdown'>
                        <div className='nav-mobile-dropdown-block'>
                            รายงานผู้สูญหาย
                        </div>
                        <div className='nav-mobile-dropdown-block'>
                            รายงานผู้สูญหาย
                        </div>
                        <div className='nav-mobile-dropdown-block'>
                            เข้าสู่ระบบ
                        </div>
                        <div className='nav-mobile-dropdown-block'>
                            <label style={{color : '#0C5DFF'}}>สมัครสมาชิก</label>
                        </div>
                    </div>
                ) : <></>}
            </nav>
        </>
    )
}

export default Navbar
