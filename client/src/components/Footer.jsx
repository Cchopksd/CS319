import React from 'react'
import "./css/Footer.css"
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate()

  return (
  <div className="ft-color">
    <div className="footer-text">
      <div className='ft-bt'>
        <a>นโยบายความเป็นส่วนตัว</a> 
        <a>ข้อกำหนดการใช้งาน</a>
        </div>
        <a className='ft-te'onClick={()=> {navigate(`/donation`)}}>สนับสนุนพวกเรา</a>
     </div>
    </div>
  )
}

export default Footer