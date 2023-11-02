import React, { useState, useEffect, useContext } from 'react'
import {  Link, useNavigate } from 'react-router-dom';
import './css/Navbar.css'
import Logo from '../assets/images/Navbar/logo.png' 
import { CgMenuGridO } from 'react-icons/cg'
import { FiXCircle } from 'react-icons/fi'
import Context from '../contexts/Provider';
import { logout } from '../services/authorize';
import axios from 'axios'

const Navbar = () => {
    // redirect หน้า
    const navigate = useNavigate()

    // state ของ Context API
    const {user, setUser} = useContext(Context)

    // state ของ navbar
    const [name, setName] = useState("");
    const [userImage, setUserImage]=  useState("")

    // dummy login user
    const dummyUser = {
        name : "กนกพล",
        image : "https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg"
    }

    // clicked mobile
    const [click, setClick] = useState(false)
    // เช็คว่า login
    const [isLogin, setIsLogin] = useState(false)

    // const loadData = () => {

    // }

    const getUserInfo = async () => {
        await axios.post(`${import.meta.env.VITE_APP_API}/get-user-login`,{user}).then((res) => {
            setName(res.data.fname)
            setUserImage(res.data.profileImage)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getUserInfo()
        if (user) {
            setIsLogin(true)
        }
    }, [user])

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
                            <Link className='nav-disable-link-style' to='/report-missing'>รายงานผู้สูญหาย</Link>
                            <Link className='nav-disable-link-style' to='/find-missing'>ตามหาผู้สูญหาย</Link>
                            <div className='nav-display-name-box'>
                                <img src={userImage} alt="" />
                                <label>{name}</label>
                            </div>
                            <Link>
                                <button className='nav-logout-btn' onClick={() => logout(() => {
                                    navigate('/')
                                    // reload หน้าเว็บ
                                    window.location.reload(true)
                                })}>ออกจากระบบ</button>
                            </Link>
                        </ul>
                    ) : (
                        <ul className='nav-menu'>
                            <Link className='nav-disable-link-style' to='/report-missing'>รายงานผู้สูญหาย</Link>
                            <Link className='nav-disable-link-style' to='/find-missing'>ตามหาผู้สูญหาย</Link>
                            <Link className='nav-disable-link-style' to='/login'>
                                เข้าสู่ระบบ
                            </Link>
                            <Link to='/register'>
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
                                <img src={userImage} alt="" />
                                <label>{name}</label>
                            </div>
                        </div>
                        <div className='nav-mobile-dropdown-block' role='button' onClick={() => {navigate(`/report-missing`)}}>
                            รายงานผู้สูญหาย
                        </div>
                        <div className='nav-mobile-dropdown-block' role='button' onClick={() => {navigate(`/find-missing`)}}>
                            ตามหาผู้สูญหาย
                        </div>
                        <div className='nav-mobile-dropdown-block' role='button' onClick={() => logout(() => {
                                navigate('/')
                                // reload หน้าเว็บ
                                window.location.reload(true)
                            })}>
                            <label style={{color : 'red'}}>ออกจากระบบ</label>
                        </div>
                    </div>
                ) : click && !isLogin ? (
                    <div className='nav-mobile-dropdown'>
                        <div className='nav-mobile-dropdown-block' role='button' onClick={() => {
                            navigate(`/report-missing`)
                            setClick(!click)}}>
                            รายงานผู้สูญหาย
                        </div>
                        <div className='nav-mobile-dropdown-block' role='button' onClick={() => {
                            navigate(`/find-missing`)
                            setClick(!click)}}>
                            รายงานผู้สูญหาย
                        </div>
                        <div className='nav-mobile-dropdown-block' role='button' onClick={() => {
                            navigate(`/login`)
                            setClick(!click)}}>
                            เข้าสู่ระบบ
                        </div>
                        <div className='nav-mobile-dropdown-block' role='button' onClick={() => {
                            navigate(`/register`)
                            setClick(!click)}}>
                            <label style={{color : '#0C5DFF'}}>สมัครสมาชิก</label>
                        </div>
                    </div>
                ) : <></>}
            </nav>
        </>
    )
}

export default Navbar
