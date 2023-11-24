import React, { useEffect, useState } from 'react'
import './css/Donation.css'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import logo3 from "../../assets/images/Donation/logo-do.png"
import AnimatedPage from '../../AnimatedPage';

function Donation() {
  useEffect(() => {
    document.body.classList.add('donation-page');
    return () => {
      document.body.classList.remove('donation-page');
    };
  }, []);
  return (
    <AnimatedPage>
      <Navbar />
      <div className='bt-page'>
        <div className='tt-top'>
          <label>ความร่วมมือกันของพวกเรา จะทำให้การตามหาผู้สูญหายประสบความสำเร็จ</label>
        </div>
        <div className='frame-page'>
          <div className='txt-page'>
            <label className='txt-support'>ร่วมสนับสนุนพวกเรา</label>
            <div>
              <img className='qr-page' src={logo3} />
            </div>
            <div className='pp-txt'>
              <label>เลขที่บัญชี : </label>
              <label style={{ color: "green" }}>1651360680</label><br></br>
              <label>กสิกร ชินาธิป ไชยถาวร </label>
            </div>
          </div>
        </div>
        <div className='tt-p'>
          <label>ขอขอบคุณสำหรับทุก ๆ การสนับสนุน พวกเราจะนำเงิน</label><br />
          <label >เพื่อช่วยเหลือในการตามหาผู้สูญหายให้ดียิ่งขึ้น</label>
        </div>
      </div>
      <Footer></Footer>
    </AnimatedPage>

  )
}

export default Donation