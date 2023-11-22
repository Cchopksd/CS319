import React, { useState, useEffect } from "react";
import { stockData } from "../../demo/data";
import Navbar from "../../components/Navbar";
import MissingClue from "../../components/user/MissingClue";
import MissingInfo from "../../components/user/MissingInfo";
import '../user/css/MissingProfile.css'
import Footer from "../../components/Footer";
import newjean1 from '../../assets/images/newjean1.jpg'
import newjean2 from '../../assets/images/newjean2.jpg'
import newjean3 from '../../assets/images/newjean3.jpg'
import { useNavigate, useParams } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import axios from 'axios'
import Swal from "sweetalert2";
import { getUser } from "../../services/authorize";


const MissingProfile = () => {
    // redirect หน้า
    const navigate = useNavigate()

    // params
    const params = useParams()

    // state ของ ข้อมูล
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [gender, setGender] = useState('')
    const [missingDate, setMissingDate] = useState('')
    const [cause, setCause] = useState('')
    const [status, setStatus] = useState('')
    const [position, setPosition] = useState('')
    const [description, setDescription] = useState('')
    const [createdAt, setCreatedAt] = useState('')
    const [image1, setImage1] = useState('')
    const [image2, setImage2] = useState('')
    const [image3, setImage3] = useState('')
    const [missingid, setMissingId] = useState('')

    // const [status, setStatus] = useState(true)

    const [activeButton, setActiveButton] = useState('button-info');

    const handleClicked = (buttonClass) => {
        setActiveButton(buttonClass);
    }

    // กลับย้อนหน้า
    const handleBack = () => {
        navigate(-1)
    }

    const loadData = async () => {
        const slug = params.slug
        await axios.post(`${import.meta.env.VITE_APP_API}/get-single-post`, {slug}).then((res) => {
            setMissingId(res.data._id)
            setName(res.data.missing_fname)
            setSurname(res.data.missing_lname)
            setGender(res.data.missing_gender)
            // setMissingDate(res.data.missing_date)
            setCause(res.data.missing_cause)
            setStatus(res.data.missing_status)
            setPosition(res.data.missing_position)
            setDescription(res.data.missing_description)
            setCreatedAt(res.data.createdAt)
            if(res.data.missing_photo1 == ""){
                setImage1('https://media.istockphoto.com/id/1288129985/vector/missing-image-of-a-person-placeholder.jpg?s=612x612&w=0&k=20&c=9kE777krx5mrFHsxx02v60ideRWvIgI1RWzR1X4MG2Y=')
                setImage2('https://media.istockphoto.com/id/1288129985/vector/missing-image-of-a-person-placeholder.jpg?s=612x612&w=0&k=20&c=9kE777krx5mrFHsxx02v60ideRWvIgI1RWzR1X4MG2Y=')
                setImage3('https://media.istockphoto.com/id/1288129985/vector/missing-image-of-a-person-placeholder.jpg?s=612x612&w=0&k=20&c=9kE777krx5mrFHsxx02v60ideRWvIgI1RWzR1X4MG2Y=')
            } else if (res.data.missing_photo2 == ""){
                setImage1(res.data.missing_photo1)
                setImage2(res.data.missing_photo1)
                setImage3(res.data.missing_photo1)
            } else if (res.data.missing_photo3 == "") {
                setImage1(res.data.missing_photo1)
                setImage2(res.data.missing_photo2)
                setImage3(res.data.missing_photo1)
            }else{
                setImage1(res.data.missing_photo1)
                setImage2(res.data.missing_photo2)
                setImage3(res.data.missing_photo3)
            }
            // แปลง format วันที่
            const dateParts = res.data.missing_date.split("-");

            const thaiMonths = [
                "มกราคม", "กุมภาพันธ์", "มีนาคม",
                "เมษายน", "พฤษภาคม", "มิถุนายน",
                "กรกฎาคม", "สิงหาคม", "กันยายน",
                "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
            ];

            const year = parseInt(dateParts[0]) + 543;
            const month = thaiMonths[parseInt(dateParts[1]) - 1];
            const day = dateParts[2];
            const formattedDate = `${day} ${month} ${year}`;
            setMissingDate(formattedDate)
        }).catch((err) => {
            Swal.fire(
                'แจ้งเตือน',
                err.response.data.error,
                'error'
            )
        })
    }

    // เมื่อเข้าสู่หน้า
    useEffect(() => {
        loadData()
    },[])

    return (
        <div>
            <Navbar/>
            <div className="missing-profile-back-box" onClick={handleBack}>
                <IoIosArrowBack size={60}/>
            </div>
            <div className="missing-profile-page">
                <div className="missing-profile-container">
                        <div className="missing-profile-container-center">
                            <main className="missing-profile-header" >
                                <div className="image-missing-group">
                                    <img className="image-missing-profile" src={image1} alt="" />
                                    <img className="image-missing-profile" src={image2} alt="" />
                                    <img className="image-missing-profile" src={image3} alt="" />
                                </div>
                                <div className="missing-profile-body">
                                    <div>
                                        <div className="missing-profile-body-name">
                                            <p style={{margin: '0px'}}>{`${name} ${surname} (${gender})`}</p>
                                        </div>
                                        <div className="missing-profile-body-date">
                                            {missingDate}
                                        </div>
                                    </div>
                                    <div className={`missing-profile-body-status not-found
                                    `}>
                                        {status}
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
                            {activeButton === 'button-info' ? <MissingInfo position={position} description={description}/> : <MissingClue missingid={missingid} />}
                        </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default MissingProfile;
