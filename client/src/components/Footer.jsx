import React from 'react'
import "./css/Footer.css"
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate()

  return (
  <div className="ft-color">
    <div className="footer-text">
      <div className='ft-bt'>
        <a onClick={() => {navigate('/privacy')}} style={{cursor:'pointer'}}>นโยบายความเป็นส่วนตัว</a> 
        <a onClick={() => {navigate('/term-of-service')}} style={{cursor:'pointer'}}>ข้อกำหนดการใช้งาน</a>
        </div>
        <a className='ft-te'onClick={()=> {navigate(`/donation`)}} style={{cursor:'pointer'}}>สนับสนุนพวกเรา</a>
     </div>
    </div>
  )
}

export default Footer