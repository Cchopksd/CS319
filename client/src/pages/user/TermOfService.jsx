import React from "react";
import './css/TermOfService.css'
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io'
import Footer from "../../components/Footer";
import AnimatedPage from "../../AnimatedPage";

const TermOfService = () => {

    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }
    return (
        <AnimatedPage>
            <Navbar/>
            <div className="term-back-box" onClick={handleBack}>
                <IoIosArrowBack size={60}/>
            </div>
            <div className="term-container">
                <label className="term-title">ข้อกำหนดในการใช้งาน</label>
                {/* <hr style={{height:'10px'}}/> */}
                <div className="term-line"></div>
                <p className="term-head-text">โปรดอ่านข้อกำหนดในการให้บริการเหล่านี้อย่างละเอียด การใช้บริการของคุณ (ตามที่กำหนดไว้ด้านล่าง) ถือเป็นการยินยอมของคุณต่อข้อตกลงนี้</p>
                <div className="term-box">
                    <label>1. การให้บริการ:</label>
                    <p>เว็บไซต์นี้มีเป้าหมายเพื่อช่วยในการค้นหาและส่งเสริมการตามหาผู้สูญหายจากอุทกภัย การให้บริการของเรามุ่งเน้นให้ข้อมูลที่ถูกต้องและมีประสิทธิภาพสูงสุดเท่าที่เป็นไปได้แก่ผู้ใช้บริการทุกท่าน.</p>
                </div>
                <div className="term-box">
                    <label>2. ข้อมูลส่วนบุคคล:</label>
                    <p>เรารักษาความเป็นส่วนตัวและความลับของข้อมูลส่วนบุคคลของผู้ใช้ โปรดดูแลรักษาข้อมูลส่วนตัวของท่านด้วยเช่นกันข้อมูลที่เกี่ยวข้องกับผู้สูญหายจะถูกใช้เฉพาะเพื่อการค้นหาและการให้บริการตามวัตถุประสงค์ของเราเท่านั้น.</p>
                </div>
                <div className="term-box">
                    <label>3. ความรับผิดชอบ:</label>
                    <p>เราไม่รับประกันความถูกต้องของข้อมูลที่ได้รับจากแหล่งข้อมูลภายนอกหรือผู้ใช้บริการ ผู้ใช้ต้องใช้ข้อมูลด้วยความระมัดระวังและในความเหมาะสม.</p>
                </div>
                <div className="term-box">
                    <label>4. การใช้งานและความเสี่ยง:</label>
                    <p>การใช้บริการของเราถือเป็นความยินยอมที่ยอมรับความเสี่ยงที่อาจเกิดขึ้น เราไม่รับผิดชอบต่อความสูญหายหรือความเสียหายที่อาจเกิดขึ้นจากการใช้บริการ.</p>
                </div>
                <div className="term-box">
                    <label>5. การปฏิบัติตามกฎหมาย:</label>
                    <p>การใช้บริการต้องปฏิบัติตามกฎหมายและข้อบังคับที่เกี่ยวข้อง ผู้ใช้ต้องเคารพสิทธิและความเป็นส่วนตัวของผู้อื่น.</p>
                </div>
                <div className="term-box">
                    <label>6. การเปลี่ยนแปลง:</label>
                    <p>เราสงวนสิทธิ์ในการเปลี่ยนแปลงข้อกำหนดและเงื่อนไขโดยไม่ต้องแจ้งให้ทราบล่วงหน้า การใช้บริการต่อจากการเปลี่ยนแปลงถือเป็นการยอมรับข้อกำหนดและเงื่อนไขใหม่.</p>
                </div>
                <p className="term-end-text">การใช้บริการของเราถือเป็นการยินยอมตามข้อกำหนดและเงื่อนไขทั้งหมดที่ระบุไว้ข้างต้น หากมีคำถามหรือข้อสงสัยเกี่ยวกับข้อกำหนดและเงื่อนไขนี้ โปรดติดต่อเราสำหรับความช่วยเหลือ.</p>
            </div>
            <Footer/>
        </AnimatedPage>
    )
}

export default TermOfService