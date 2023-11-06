import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const AdminSinglePage = () => {

    const params = useParams();

    const [ missingData, setMissingData ] = useState('')
    console.log(missingData)

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_APP_API}/admin/${(params.slug)}`)
        .then((response) =>{
            setMissingData(response.data)
        })
        .catch((error) =>{
            alert(error.message);
        })
    }, [params.slug])

    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <Navbar />
            <div className="find-back-box" onClick={handleBack}>
                    <IoIosArrowBack size={60} />
                </div>
            <main>
                <img className='' src={missingData.missing_photo1} alt="" />
                <img src={missingData.missing_photo2} alt="" />
                <img src={missingData.missing_photo3} alt="" />
            </main>
            <Footer />
        </div>
    );
}

export default AdminSinglePage;
