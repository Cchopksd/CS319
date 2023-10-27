import React, {useState, useEffect, useContext} from "react";
import './css/Home.css'
import { HiOutlinePhone } from 'react-icons/hi'
import { MdOutlineModeComment } from 'react-icons/md'
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Home = () => {
    // redirect
    const navigate = useNavigate()

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

    // พื้นหลัง
    useEffect(() => {
        document.body.classList.add('home-page');
        return () => {
            document.body.classList.remove('home-page');
        };
    }, []);

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
                {dummyData.map((item) => (
                            <div className="home-card" key={item.fname}>
                                <img src={item.photo} alt=""/>
                                <div className="home-info-box">
                                    <div className="home-card-row-1">
                                        <label>{item.postDate}</label>
                                        <div className="home-card-status">
                                            {item.status}
                                        </div>
                                    </div>
                                    <div className="home-card-row-2">
                                        <label>{item.fname}&ensp;</label>
                                        <label>{item.lname}&ensp;</label>
                                        <label>{`(${item.gender})`}</label>
                                    </div>
                                    <div className="home-card-row-3">
                                        <div className="home-card-place">
                                            <label>สูญหายที่ :</label>
                                            <label> {item.position.length > 15 ? item.position.slice(0, 15) + "..." : item.position}</label>
                                        </div>
                                        <div className="home-card-cause">
                                            <label>สาเหตุการหาย :</label>
                                            <label> {item.cause.length > 15 ? item.cause.slice(0, 15) + "..." : item.cause}</label>
                                        </div>
                                        <div className="home-card-date">
                                            <label>วันที่รายงานการสูญหาย :</label>
                                            <label> {item.reportDate}</label>
                                        </div>
                                    </div>
                                    <div className="home-card-row-4">
                                        <div className="home-card-province">
                                            {item.country}
                                        </div>
                                        <div className="home-card-clue">
                                            <MdOutlineModeComment size={20} className="home-card-clue-icon"/>
                                            {item.totalClue}
                                        </div>
                                    </div>
                                </div>
                        </div>
                        ))}
                </div>
            </div>
        <Footer/>
        </>
    );
};

export default Home;
