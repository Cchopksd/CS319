import React from "react";
import './css/Privacy.css'
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io'
import Footer from "../../components/Footer";
import AnimatedPage from "../../AnimatedPage";

const Privacy = () => {
    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <AnimatedPage>
            <Navbar/>
            <div className="privacy-back-box" onClick={handleBack}>
                <IoIosArrowBack size={60}/>
            </div>
            <div className="privacy-container">
                <label className="privacy-title">นโยบายความเป็นส่วนตัว</label>
                <div className="privacy-line"></div>
                <p className="privacy-head-text">เว็บไซต์ตามหาผู้สูญหายจากภัยพิบัติ ได้มีการเก็บรวบรวมข้อมูลของผู้สูญหายและผู้ใช้บริการ ตามนโยบายความเป็นส่วนตัว ดังนี้</p>
                <div className="privacy-box">
                    <label>1. ข้อมูลที่เราเก็บรวบรวม:</label>
                    <p>เรารับรวบรวมข้อมูลที่ผู้ใช้บริการให้ เช่น ข้อมูลส่วนตัว, ข้อมูลการติดต่อ, และข้อมูลที่เกี่ยวข้องกับการค้นหาผู้สูญหาย.</p>
                </div>
                <div className="privacy-box">
                    <label>2. การใช้ข้อมูล:</label>
                    <p>เราใช้ข้อมูลเพื่อการค้นหาและให้บริการตามวัตถุประสงค์ของเราเท่านั้น และไม่นำข้อมูลไปใช้ที่วัตถุประสงค์อื่น ๆ โดยไม่ได้รับอนุญาต.</p>
                </div>
                <div className="privacy-box">
                    <label>3. การเปิดเผยข้อมูล:</label>
                    <p>เราไม่รับประกันความถูกต้องของข้อมูลที่ได้รับจากแหล่งข้อมูลภายนอกหรือผู้ใช้บริการ ผู้ใช้ต้องใช้ข้อมูลด้วยความระมัดระวังและในความเหมาะสม.</p>
                </div>
                <div className="privacy-box">
                    <label>4. ความปลอดภัยของข้อมูล: </label>
                    <p>เราใช้มาตรการทางเทคโนโลยีและดำเนินการตามหลักการเพื่อรักษาความปลอดภัยของข้อมูลส่วนบุคคล.</p>
                </div>
                <div className="privacy-box">
                    <label>5. การเก็บรักษาข้อมูล:</label>
                    <p>เราเก็บรักษาข้อมูลตามระยะเวลาที่จำเป็นเท่าที่มีความจำเป็นตามวัตถุประสงค์ของการให้บริการ.</p>
                </div>
                <div className="privacy-box">
                    <label>6. สิทธิของผู้ใช้:</label>
                    <p>ผู้ใช้มีสิทธิที่จะขอเข้าถึงข้อมูลส่วนบุคคลของตนเองและขอให้แก้ไขหรือลบข้อมูลที่ไม่ถูกต้อง.</p>
                </div>
                <p className="privacy-end-text">การใช้บริการของเราถือเป็นการยินยอมตามนโยบายความเป็นส่วนตัวทั้งหมดที่ระบุไว้ข้างต้น หากมีคำถามหรือข้อสงสัยเกี่ยวกับนโยบายความเป็นส่วนตัว โปรดติดต่อเราสำหรับความช่วยเหลือ.</p>
            </div>
            <Footer/>
        </AnimatedPage>
    )
}

export default Privacy