import React, {useState, useEffect, useContext} from "react";
import './css/Home.css'
import { HiOutlinePhone } from 'react-icons/hi'
import { MdOutlineModeComment } from 'react-icons/md'
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from 'axios'

const Home = () => {
    // redirect
    const navigate = useNavigate()

    // array ของ post
    const [postArray, setPostArray] = useState([])

    const dummyData = [
        {
            fname : "ยุรนันท์",
            lname : "เจิดรุจิกุล",
            status : 'สูญหาย',
            position : 'บ้านอาร์ท',
            cause : 'อุทกภัย',
            postDate : '21 มกราคม 2566',
            reportDate : '18 มกราคม 2566',
            country : 'กรุงเทพมหานคร',
            totalClue : 13,
            gender : "ชาย",
            photo : "https://media.istockphoto.com/id/1288129985/vector/missing-image-of-a-person-placeholder.jpg?s=612x612&w=0&k=20&c=9kE777krx5mrFHsxx02v60ideRWvIgI1RWzR1X4MG2Y="
        },
        {
            fname : "ยุรนันท์",
            lname : "เจิดรุจิกุล",
            status : 'สูญหาย',
            position : 'บ้านอาร์ท',
            cause : 'อุทกภัย',
            postDate : '21 มกราคม 2566',
            reportDate : '18 มกราคม 2566',
            country : 'กรุงเทพมหานคร',
            totalClue : 13,
            gender : "ชาย",
            photo : "https://media.istockphoto.com/id/1288129985/vector/missing-image-of-a-person-placeholder.jpg?s=612x612&w=0&k=20&c=9kE777krx5mrFHsxx02v60ideRWvIgI1RWzR1X4MG2Y="
        },
        {
            fname : "ยุรนันท์",
            lname : "เจิดรุจิกุล",
            status : 'สูญหาย',
            position : 'บ้านอาร์ท',
            cause : 'อุทกภัย',
            postDate : '21 มกราคม 2566',
            reportDate : '18 มกราคม 2566',
            country : 'กรุงเทพมหานคร',
            totalClue : 13,
            gender : "ชาย",
            photo : "https://media.istockphoto.com/id/1288129985/vector/missing-image-of-a-person-placeholder.jpg?s=612x612&w=0&k=20&c=9kE777krx5mrFHsxx02v60ideRWvIgI1RWzR1X4MG2Y="
        },
        {
            fname : "ยุรนันท์",
            lname : "เจิดรุจิกุล",
            status : 'สูญหาย',
            position : 'บ้านอาร์ท',
            cause : 'อุทกภัย',
            postDate : '21 มกราคม 2566',
            reportDate : '18 มกราคม 2566',
            country : 'กรุงเทพมหานคร',
            totalClue : 13,
            gender : "ชาย",
            photo : "https://media.istockphoto.com/id/1288129985/vector/missing-image-of-a-person-placeholder.jpg?s=612x612&w=0&k=20&c=9kE777krx5mrFHsxx02v60ideRWvIgI1RWzR1X4MG2Y="
        },
        {
            fname : "ยุรนันท์",
            lname : "เจิดรุจิกุล",
            status : 'สูญหาย',
            position : 'บ้านอาร์ท',
            cause : 'อุทกภัย',
            postDate : '21 มกราคม 2566',
            reportDate : '18 มกราคม 2566',
            country : 'กรุงเทพมหานคร',
            totalClue : 13,
            gender : "ชาย",
            photo : "https://media.istockphoto.com/id/1288129985/vector/missing-image-of-a-person-placeholder.jpg?s=612x612&w=0&k=20&c=9kE777krx5mrFHsxx02v60ideRWvIgI1RWzR1X4MG2Y="
        },
        {
            fname : "ยุรนันท์",
            lname : "เจิดรุจิกุล",
            status : 'สูญหาย',
            position : 'บ้านอาร์ท',
            cause : 'อุทกภัย',
            postDate : '21 มกราคม 2566',
            reportDate : '18 มกราคม 2566',
            country : 'กรุงเทพมหานคร',
            totalClue : 13,
            gender : "ชาย",
            photo : "https://media.istockphoto.com/id/1288129985/vector/missing-image-of-a-person-placeholder.jpg?s=612x612&w=0&k=20&c=9kE777krx5mrFHsxx02v60ideRWvIgI1RWzR1X4MG2Y="
        }
    ]

    // format date thai
    const formatDate = (dateString) => {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'UTC'
        };
    
        const date = new Date(dateString);
        const formatter = new Intl.DateTimeFormat('th-TH', options);
        return formatter.format(date);
    }

    // พื้นหลัง
    useEffect(() => {
        loadData()
        document.body.classList.add('home-page');
        return () => {
            document.body.classList.remove('home-page');
        };
    }, []);

    const loadData = async () => {
        await axios.get(`${import.meta.env.VITE_APP_API}/get-home-post`).then((res) => {
            setPostArray(res.data)
        })
    }

    //ไปหน้ารายงาน
    const handleGoReport = () => {
        navigate(`/report-missing`)
    }

    //ไปหน้าาคนหาย
    const handleGoFind = () => {
        navigate(`/find-missing`)
    }

    return (
        <>  
            <Navbar/>
            <div className="home-title-box">
                <div className="home-title">
                    <label>ภัยพิบัติอาจจะทำให้พวกเขาหายไป</label>
                    <label>แต่มันไม่สามารถทำให้พวกเขาหายไปจากใจเราได้</label>
                    <label>เราจะช่วยคุณตามหาพวกเขาเอง</label>
                    <div className="home-title-line1"></div>
                </div>
                <div className="home-menu-box">
                    <div className="home-menu-report" role="button" onClick={handleGoReport}>
                        <label className="home-menu-bold">รายงาน</label>
                        <label>ผู้สูญหาย</label>
                    </div>
                    <div className="home-title-line2"></div>
                    <div className="home-menu-find" role="button" onClick={handleGoFind}>
                        <label className="home-menu-bold">ตามหา</label>
                        <label>ผู้สูญหาย</label>
                    </div>
                </div>
            </div>
            <div className="home-contact-box">
                <label>ถ้าหากคุณพบเจอ หรือมีข้อมูลของผู้สูญหายผู้ใดก็ตาม</label>
                <label>โปรดติดต่อ</label>
                <div className="home-contact-phone-box">
                    <HiOutlinePhone size={30}/>
                    <label>081-1111111</label>
                </div>
            </div>
            <div className="home-missing-box">
                <label className="home-missing-title">ผู้สูญหายกรณีล่าสุด</label>
                <div className="home-missing-latest-box">
                {postArray.map((item) => (
                    <Link to={`/missing-profile/${item.missing_slug}`} style={{textDecoration: 'none', color: 'inherit'}}>
                        <div className="home-card" key={item._id}>
                            <img src={item.missing_photo1} alt=""/>
                            <div className="home-info-box">
                                <div className="home-card-row-1">
                                    <label>{formatDate(item.updatedAt)}</label>
                                    <div className="home-card-status">
                                        {item.missing_status}
                                    </div>
                                </div>
                                <div className="home-card-row-2">
                                    <label>{item.missing_fname}&ensp;</label>
                                    <label>{item.missing_lname}&ensp;</label>
                                    <label>{`(${item.missing_gender})`}</label>
                                </div>
                                <div className="home-card-row-3">
                                    <div className="home-card-place">
                                        <label>สูญหายที่ :</label>
                                        <label> {item.missing_position.length > 15 ? item.missing_position.slice(0, 15) + "..." : item.missing_position}</label>
                                    </div>
                                    <div className="home-card-cause">
                                        <label>สาเหตุการหาย :</label>
                                        <label> {item.missing_cause.length > 15 ? item.missing_cause.slice(0, 15) + "..." : item.missing_cause}</label>
                                    </div>
                                    <div className="home-card-date">
                                        <label>วันที่รายงานการสูญหาย :</label>
                                        <label> {formatDate(item.createdAt)}</label>
                                    </div>
                                </div>
                                <div className="home-card-row-4">
                                    <div className="home-card-province">
                                        {item.missing_province}
                                    </div>
                                    <div className="home-card-clue">
                                        <MdOutlineModeComment size={20} className="home-card-clue-icon"/>
                                        20
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                        ))}
                </div>
            </div>
        <Footer/>
        </>
    );
};

export default Home;
