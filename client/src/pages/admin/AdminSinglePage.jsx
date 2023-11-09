import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import './css/AdminSinglePage.css'

const AdminSinglePage = () => {

    const params = useParams();
    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }

    const [missingData, setMissingData] = useState('')
    const [missingStatus, setMissingStatus] = useState('');

    const fetchData = () =>{
        axios.get(`${import.meta.env.VITE_APP_API}/admin/${(params.slug)}`)
            .then((response) => {
                setMissingData(response.data)
                setMissingStatus(response.data.missing_status);
            })
            .catch((error) => {
                alert(error.message);
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleSaveData = async (e) => {
        e.preventDefault();
        await axios.patch(`${import.meta.env.VITE_APP_API}/admin/${params.slug}`,{ missingStatus })
            .then(() => {
                Swal.fire({
                    title: "อัพเดตสถานะเรียบร้อย",
                    text: "สถานะได้รับการเปลี่ยนแล้ว",
                    icon: "success"
                });
                fetchData()
            })
            .catch((error) => {
                alert(error.message);
            });
    };


    const handleRadioChange = (event) => {
        setMissingStatus(event.target.value);
    };

    const deleteRequire = (e) => {
        axios.delete(`${import.meta.env.VITE_APP_API}/admin/${params.slug}`)
        .then((response) =>{
            Swal.fire('แจ้งเตือน', response.data.message, "success")
            navigate('./administrator')
        }).catch(err => alert(err));
    }

    const confirmDelete = (slug) => {
        Swal.fire({
            title: 'ยืนยันเพื่อลบบัญชีผู้ใช้งาน',
            icon: 'warning',
            showCancelButton: true
        }).then((result) => {
            if (result.isConfirmed) {
                deleteRequire(slug)
            }
        })
    }

    return (
        <div className='single-data-page'>
            <Navbar />
            <div className='single-data-layout'>
                <div className="find-back-box" onClick={handleBack}>
                    <IoIosArrowBack size={60} />
                </div>
                <div className='single-data-container'>
                    <div>
                        <section className='single-data-container-header'>
                            <div className='single-data-group-img'>
                                <img className={`single-data-img ${!missingData || !missingData.missing_photo1 ? 'hidden-element' : ''}`} src={missingData?.missing_photo1} alt="" />
                                <img className={`single-data-img ${!missingData || !missingData.missing_photo2 ? 'hidden-element' : ''}`} src={missingData.missing_photo2} alt="" />
                                <img className={`single-data-img ${!missingData || !missingData.missing_photo3 ? 'hidden-element' : ''}`} src={missingData.missing_photo3} alt="" />
                            </div>
                            <div className='single-data-status'>
                                <strong className='text-status'>สถานะ</strong>
                                <div className='single-data-radio'>
                                    <label className='cursor-status'><input type="radio" value="กำลังตรวจสอบ" className="cursor-status" checked={missingStatus === 'กำลังตรวจสอบ'} onChange={handleRadioChange} /> กำลังตรวจสอบ</label>
                                    <label className='cursor-status'><input type="radio" value="พบแล้ว" className="cursor-status" checked={missingStatus === 'พบแล้ว'} onChange={handleRadioChange} /> พบแล้ว</label>
                                    <label className='cursor-status'><input type="radio" value="สูญหาย" className="cursor-status" checked={missingStatus === 'สูญหาย'} onChange={handleRadioChange} /> สูญหาย</label>
                                    <label className='cursor-status'><input type="radio" value="เสียชีวิต" className="cursor-status" checked={missingStatus === 'เสียชีวิต'} onChange={handleRadioChange} /> เสียชีวิต</label>
                                </div>
                            </div>
                        </section>
                        <section className='single-data-group'>
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
                        </section>
                        <button className='single-data-btn btn-edit' onClick={handleSaveData}>บันทึกข้อมูล</button>
                        <button className='single-data-btn btn-delete' onClick={confirmDelete}>ลบผู้สูญหาย</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AdminSinglePage;
