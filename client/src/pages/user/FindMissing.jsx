import React from "react";
import { ImageList, ImageListItem, Typography } from '@mui/material';
import { stockData } from "../../demo/data";
import './css/FindMissing.css'
import { FiSearch } from 'react-icons/fi'
import { MdOutlineModeComment } from 'react-icons/md'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import Navbar from "../../components/Navbar";

const FindMissing = () => {

    // redirect
    const navigate = useNavigate()

    // ข้อมูล dummy
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

    // ย้อนกลับหน้า
    const handleBack = () => {
        navigate(-1)
    }

    return (
        <>
            <Navbar/>
            <div className="find-back-box" onClick={handleBack}>
                <IoIosArrowBack size={60}/>
            </div>
            <div className="find-container">
                <div className="find-title-box">
                    <label>ตามมาหาบุคคลสูญหาย</label>
                    <div className="find-search-box">
                        <input type="text"/>
                        <div>
                            <FiSearch size={30} className="find-search-icon"/>
                        </div>
                    </div>
                </div>
                <div className="find-result-box">
                        {dummyData.map((item) => (
                            <div className="find-card" key={item.fname}>
                                <img src={item.photo} alt=""/>
                                <div className="find-info-box">
                                    <div className="find-card-row-1">
                                        <label>{item.postDate}</label>
                                        <div className="find-card-status">
                                            {item.status}
                                        </div>
                                    </div>
                                    <div className="find-card-row-2">
                                        <label>{item.fname}&ensp;</label>
                                        <label>{item.lname}&ensp;</label>
                                        <label>{`(${item.gender})`}</label>
                                    </div>
                                    <div className="find-card-row-3">
                                        <div className="find-card-place">
                                            <label>สูญหายที่ :</label>
                                            <label> {item.position.length > 15 ? item.position.slice(0, 15) + "..." : item.position}</label>
                                        </div>
                                        <div className="find-card-cause">
                                            <label>สาเหตุการหาย :</label>
                                            <label> {item.cause.length > 15 ? item.cause.slice(0, 15) + "..." : item.cause}</label>
                                        </div>
                                        <div className="find-card-date">
                                            <label>วันที่รายงานการสูญหาย :</label>
                                            <label> {item.reportDate}</label>
                                        </div>
                                    </div>
                                    <div className="find-card-row-4">
                                        <div className="find-card-province">
                                            {item.country}
                                        </div>
                                        <div className="find-card-clue">
                                            <MdOutlineModeComment size={20} className="find-card-clue-icon"/>
                                            {item.totalClue}
                                        </div>
                                    </div>
                                </div>
                        </div>
                        ))}
                    </div>
            </div>
        </>
    );
};

export default FindMissing;
