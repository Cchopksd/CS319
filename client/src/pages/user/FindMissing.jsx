import React, { useState, useEffect } from "react";
import { ImageList, ImageListItem, Typography } from '@mui/material';
import { stockData } from "../../demo/data";
import './css/FindMissing.css'
import { FiSearch } from 'react-icons/fi'
import { MdOutlineModeComment } from 'react-icons/md'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate, Link } from 'react-router-dom'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from 'axios'
import Swal from "sweetalert2";
import Loading from '../../components/Loading'
import AnimatedPage from "../../AnimatedPage";

const MissingCard = ({item}) => {
    const [commentCount, setCommentCount] = useState(null);

    // format date thai
    const formatDate = (dateString) => {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'UTC'
        };
    
        const date = new Date(dateString);
        const formatter = new Intl.DateTimeFormat('th-TH', options);
        return formatter.format(date);
    }

    useEffect(() => {
        const fetchCommentCount = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_APP_API}/get-count-comment`, { id: item._id });
            setCommentCount(response.data);
        } catch (error) {
            console.error('Error fetching comment count:', error);
        }
        };

        fetchCommentCount();
    }, [item._id]);

    return (
        <AnimatedPage>
            <Link to={`/missing-profile/${item.missing_slug}`} style={{textDecoration: 'none', color: 'inherit'}}>
                <div className="find-card" key={item._id}>
                    <img src={item.missing_photo1 == "" ? "https://media.istockphoto.com/id/1288129985/vector/missing-image-of-a-person-placeholder.jpg?s=612x612&w=0&k=20&c=9kE777krx5mrFHsxx02v60ideRWvIgI1RWzR1X4MG2Y=" : item.missing_photo1} alt=""/>
                    <div className="find-info-box">
                        <div className="find-card-row-1">
                            <label>{formatDate(item.updatedAt)}</label>
                            <div className="find-card-status">
                                {item.missing_status}
                            </div>
                        </div>
                        <div className="find-card-row-2">
                            <label>{item.missing_fname}&ensp;</label>
                            <label>{item.missing_lname}&ensp;</label>
                            <label>{`(${item.missing_gender})`}</label>
                        </div>
                        <div className="find-card-row-3">
                            <div className="find-card-place">
                                <label>สูญหายที่ :</label>
                                <label> {item.missing_position.length > 15 ? item.missing_position.slice(0, 15) + "..." : item.missing_position}</label>
                            </div>
                            <div className="find-card-cause">
                                <label>สาเหตุการหาย :</label>
                                <label> {item.missing_cause.length > 15 ? item.missing_cause.slice(0, 15) + "..." : item.missing_cause}</label>
                            </div>
                            <div className="find-card-date">
                                <label>วันที่รายงานการสูญหาย :</label>
                                <label> {formatDate(item.createdAt)}</label>
                            </div>
                        </div>
                        <div className="find-card-row-4">
                            <div className="find-card-province">
                                {item.missing_province}
                            </div>
                            <div className="find-card-clue">
                                <MdOutlineModeComment size={20} className="find-card-clue-icon"/>
                                {commentCount !== null ? commentCount : 'Loading...'}
                            </div>
                        </div>
                    </div>
            </div>
            </Link>
        </AnimatedPage>
    )
}

const FindMissing = () => {

    // post ทั้งหมด
    const [postArray, setPostArray] = useState([])

    // state ของ load api
    const [loading, setLoading] = useState(false)

    // state ของ search
    const [searchKeyword, setSearchKeyword] = useState("")

    // เปิด footer
    const [activeFooter, setActiveFooter] = useState(false)

    // เมื่อเข้าสู่หน้า
    useEffect(() => {
        loadData()
    },[])

    const loadData = async () => {
        await axios.get(`${import.meta.env.VITE_APP_API}/get-all-post`).then((res) => {
            setPostArray(res.data)
        })
    }

    // redirect
    const navigate = useNavigate()

    // ย้อนกลับหน้า
    const handleBack = () => {
        navigate(-1)
    }

    const handleSearch = async () => {
        setLoading(true)
        await axios.post(`${import.meta.env.VITE_APP_API}/get-search-post`, {searchKeyword}).then(async (res) => {
            if (res.data.length === 0) {
                setLoading(false)
                Swal.fire(
                    'แจ้งเตือน',
                    'ไม่พบข้อมูลผู้สูญหาย',
                    'error'
                )
                return
            }
            else {
                setLoading(false)
                setPostArray(res.data)
                setActiveFooter(true)
            }
        })
    }

    return (
        <>
        <div>
            { loading && <Loading/>}
            <Navbar/>
            <div className="find-back-box" onClick={handleBack}>
                <IoIosArrowBack size={60}/>
            </div>
            <div className="find-container">
                <div className="find-title-box">
                    <label>ตามหาบุคคลสูญหาย</label>
                    <div className="find-search-box">
                        <input type="text" placeholder="พิมพ์ชื่อหรือนามสกุลคนหาย" value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)}/>
                        <div>
                            <FiSearch size={30} className="find-search-icon" onClick={handleSearch}/>
                        </div>
                    </div>
                </div>
                <div className="find-result-box">
                        {postArray.map((item) => (
                            <MissingCard item={item}/>
                        ))}
                    </div>
                </div>
                {postArray.length > 0 && <Footer/>}
            </div>
        </>
    );
};

export default FindMissing;
