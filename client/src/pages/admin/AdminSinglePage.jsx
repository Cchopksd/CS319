import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './css/AdminSinglePage.css'

const AdminSinglePage = () => {

    const params = useParams();

    const [missingData, setMissingData] = useState('')
    console.log(missingData)

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_APP_API}/admin/${(params.slug)}`)
            .then((response) => {
                setMissingData(response.data)
            })
            .catch((error) => {
                alert(error.message);
            })
    }, [params.slug])

    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }

    useEffect(() => {

    })

    return (
        <div className='single-data-page'>
            <Navbar />
            <div className='single-data-layout'>
                <div className="find-back-box" onClick={handleBack}>
                    <IoIosArrowBack size={60} />
                </div>
                <main className='single-data-container'>
                    <div className='single-data-container-header'>
                        <div className='single-data-group-img'>
                            <img className={`single-data-img ${!missingData.missing_photo1 ? 'hidden-element' : ''}`} src={missingData.missing_photo1} alt="" />
                            <img className={`single-data-img ${!missingData.missing_photo2 ? 'hidden-element' : ''}`} src={missingData.missing_photo2} alt="" />
                            <img className={`single-data-img ${!missingData.missing_photo3 ? 'hidden-element' : ''}`} src={missingData.missing_photo3} alt="" />
                        </div>
                        <div className='single-data-status'>
                            <strong className='text-status'>สถานะ</strong>
                            <div className='single-data-radio'>
                                <label><input type="radio" value="verifying" name="gender" /> กำลังตรวจสอบ</label>
                                <label><input type="radio" value="found" name="gender" /> พบแล้ว</label>
                                <label><input type="radio" value="lost" name="gender" /> สูญหาย</label>
                                <label><input type="radio" value="died" name="gender" /> เสียชีวิต</label>
                            </div>
                        </div>
                    </div>
                    <div className='single-data-group'>
                        <div className='single-data-col'>
                            <strong htmlFor="">ชื่อ</strong>
                            <strong htmlFor="">นามสกุล</strong>
                            <strong htmlFor="">เพศ</strong>
                            <strong htmlFor="">จังหวัด</strong>
                            <strong htmlFor="">ที่อยู่ล่าสุดของผู้สูญหาย</strong>
                            <strong htmlFor="">วันที่สูญหาย</strong>
                            <strong htmlFor="">สาเหตุการสูญหาย</strong>
                            <strong htmlFor="">ข้อมูลเพิ่มเติม</strong>
                        </div>
                        <div className='single-data-col'>
                            <strong htmlFor="">:</strong>
                            <strong htmlFor="">:</strong>
                            <strong htmlFor="">:</strong>
                            <strong htmlFor="">:</strong>
                            <strong htmlFor="">:</strong>
                            <strong htmlFor="">:</strong>
                            <strong htmlFor="">:</strong>
                            <strong htmlFor="">:</strong>
                        </div>
                        <div className='single-data-col'>
                            <label htmlFor="">{missingData.missing_fname}</label>
                            <label htmlFor="">{missingData.missing_lname}</label>
                            <label htmlFor="">{missingData.missing_gender}</label>
                            <label htmlFor="">{missingData.missing_province}</label>
                            <label htmlFor="">{missingData.missing_position}</label>
                            <label htmlFor="">{missingData.missing_date}</label>
                            <label htmlFor="">{missingData.missing_cause}</label>
                            <label htmlFor="">{missingData.missing_description}</label>
                        </div>
                    </div>
                    <button className='single-data-btn btn-edit'>บันทึกข้อมูล</button>
                    <button className='single-data-btn btn-delete'>ลบผู้สูญหาย</button>
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default AdminSinglePage;
