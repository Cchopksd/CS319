import React, { useState } from "react";
import { stockData } from "../../demo/data";
import Navbar from "../../components/Navbar";
import MissingClue from "../../components/user/MissingClue";
import MissingInfo from "../../components/user/MissingInfo";
import '../user/css/MissingProfile.css'
import Footer from "../../components/Footer";


const MissingProfile = () => {

    const [activeButton, setActiveButton] = useState('button-info');

    const handleClicked = (buttonClass) => {
        setActiveButton(buttonClass);
    }

    return (
        <div>
            <Navbar/>
            <div className="missing-profile-page">
                {/* <Navbar/> */}
                <div className="missing-profile-container">
                    {stockData.map((data, key) => {
                        return (
                            <div className="missing-profile-container-center" key={key}>
                                <main className="missing-profile-header" >
                                    <div className="image-missing-group">
                                        <img className="image-missing-profile" src={data.img1} alt="" />
                                        <img className="image-missing-profile" src={data.img2} alt="" />
                                        <img className="image-missing-profile" src={data.img3} alt="" />
                                    </div>
                                    <div className="missing-profile-body">
                                        <div>
                                            <div className="missing-profile-body-name">
                                                {data.name}
                                            </div>
                                            <div className="missing-profile-body-date">
                                                {data.date}
                                            </div>
                                        </div>
                                        <div className={`missing-profile-body-status
                                            ${data.status ? 'found' : 'not-found'}
                                        `}>
                                            {data.status ? 'พบแล้ว' : 'ยังไม่พบ'}
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
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default MissingProfile;
