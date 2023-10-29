import React, { useState } from "react";
import { stockData } from "../../demo/data";
import Navbar from "../../components/Navbar";
import MissingClue from "../../components/user/MissingClue";
import MissingInfo from "../../components/user/MissingInfo";
import '../user/css/MissingProfile.css'
import Footer from "../../components/Footer";
import newjean1 from '../../assets/images/newjean1.jpg'
import newjean2 from '../../assets/images/newjean2.jpg'
import newjean3 from '../../assets/images/newjean3.jpg'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'


const MissingProfile = () => {
    // redirect หน้า
    const navigate = useNavigate()

    const [status, setStatus] = useState(true)

    const [activeButton, setActiveButton] = useState('button-info');

    const handleClicked = (buttonClass) => {
        setActiveButton(buttonClass);
    }

    // กลับย้อนหน้า
    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <Navbar/>
            <div className="missing-profile-back-box" onClick={handleBack}>
                <IoIosArrowBack size={60}/>
            </div>
            <div className="missing-profile-page">
                {/* <Navbar/> */}
                <div className="missing-profile-container">
                            <div className="missing-profile-container-center">
                                <main className="missing-profile-header" >
                                    <div className="image-missing-group">
                                        <img className="image-missing-profile" src={newjean1} alt="" />
                                        <img className="image-missing-profile" src={newjean2} alt="" />
                                        <img className="image-missing-profile" src={newjean3} alt="" />
                                    </div>
                                    <div className="missing-profile-body">
                                        <div>
                                            <div className="missing-profile-body-name">
                                                กนกพล เทียมเมือง (ชาย)
                                            </div>
                                            <div className="missing-profile-body-date">
                                                16 มกราคม 2566
                                            </div>
                                        </div>
                                        <div className={`missing-profile-body-status
                                            ${status ? 'found' : 'not-found'}
                                        `}>
                                            {status ? 'พบแล้ว' : 'ยังไม่พบ'}
                                        </div>
                                    </div>
                                </main>
                                <div className="missing-profile-button-group">
                                    <button
                                        className={`missing-profile-button-switch button-info
                                            ${activeButton === 'button-info' ? 'clicked' : ''}
                                        `}
                                        onClick={() => handleClicked('button-info')}
                                    >
                                        ข้อมูล
                                    </button>
                                    <button
                                        className={`missing-profile-button-switch button-clue
                                            ${activeButton === 'button-clue' ? 'clicked' : ''}
                                    `}
                                        onClick={() => handleClicked('button-clue')}
                                    >
                                        เบาะแส
                                    </button>
                                </div>
                                {activeButton === 'button-info' ? <MissingInfo /> : <MissingClue />}
                            </div>
                </div>
            </div>
        </div>
    );
};

export default MissingProfile;
