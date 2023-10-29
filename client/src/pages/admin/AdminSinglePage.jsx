import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const AdminSinglePage = () => {

    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <Navbar />
            <main>
                <div className="find-back-box" onClick={handleBack}>
                    <IoIosArrowBack size={60} />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default AdminSinglePage;
