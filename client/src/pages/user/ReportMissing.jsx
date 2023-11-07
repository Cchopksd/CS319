import React, { useState, useEffect, useRef } from 'react';
import './css/ReportMissing.css'
import axios from 'axios';
import { stockData } from '../../demo/data';
import Swal from 'sweetalert2'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { getUserId } from '../../services/authorize';
import { useNavigate } from 'react-router-dom';
import ImageUploaderReport from '../../components/ImageUploaderReport';
import Loading from '../../components/Loading';
import { MdOutlineModeComment } from 'react-icons/md'

const ReportMissing = () => {

    // redirect หน้า
    const navigate = useNavigate()

    const [info, setInfo] = useState({
        name: '',
        surname: '',
        address: '',
        gender: '',
        provinceItem: '',
        date: '',
        cause: '',
        etc: ''
    });

    const { name, surname, address, gender, provinceItem, date, cause, etc } = info

     // state ของ ผู้ที่จะทำการสร้างประกาศ
    const [loginUser, setLoginUser] = useState("")

    // รูปที่จะส่งไปยัง server
    const [image1, setImage1] = useState("")
    const [image2, setImage2] = useState("")
    const [image3, setImage3] = useState("")

    // เช็คว่าแนบรูปไหม
    const [uploadImg, setUploadImg] = useState(false)

    //  state เก็บชุดรูปที่มาจาก child
    const [images, setImages] = useState([])

    // state เช็คว่า fetch api
    const [loading, setLoading] = useState(false)

    // state ของ คนหายล่าสุด
    const [postArray, setPostArray] = useState([])


    const sendReport = async (e) => {
        e.preventDefault();
        setLoading(true)

        if (name == "" || surname == "" || address == "" || gender == "" || provinceItem == "" || date == "" || cause == "" || etc == "") {
            setLoading(false)
            await Swal.fire(
                'แจ้งเตือน',
                'กรุณากรอกข้อมูลให้ครบถ้วน',
                'error'
            )
            return
        }
        // กรณีที่มีรูปด้วย
        if (images.length > 0) {
            for (let i = 0; i < images.length; i++) {
                const img = images[i];
                const data = new FormData()
                    data.append("file", img.file)
                    data.append("upload_preset", "hopeland")
                    data.append("cloud_name", "dp5dpfuin")
                    try {
                        const response = await axios.post("https://api.cloudinary.com/v1_1/dp5dpfuin/image/upload/", data);
                        const imageUrl = response.data.url.toString();
                        if (i === 0 && image1 === "") {
                            setImage1(imageUrl);
                        } else if (i === 1 && image2 === "") {
                            setImage2(imageUrl);
                        } else if (i === 2 && image3 === "") {
                            setImage3(imageUrl);
                        } else if (i === 3 && image4 === "") {
                            setImage4(imageUrl);
                        }
                    } catch (error) {
                        setLoading(false)
                        Swal.fire('แจ้งเตือน', error.message, 'error');
                    }
            }
            setUploadImg(true)
        }
        // กรณีไม่ได้แนบรูปมา
        else {
            await axios.post(`${import.meta.env.VITE_APP_API}/send-request`, {loginUser, name, surname, address, gender, provinceItem, 
                date, cause, etc, image1, image2, image3 }).then(async(res) => {
                    setLoading(false)
                    await Swal.fire(
                        'แจ้งเตือน',
                        res.data.message,
                        'success'
                    )
                    navigate(`/`)
                }).catch(async (err) => {
                    setLoading(false)
                    await Swal.fire(
                        'แจ้งเตือน',
                        err.response.data.error,
                        'error'
                    )
                })
        }
    };

    // ถ้าแนบรูปมาด้วยตอนส่ง
    useEffect(() => {
        if (uploadImg) {
            axios.post(`${import.meta.env.VITE_APP_API}/send-request`, {loginUser, name, surname, address, gender, provinceItem, 
                date, cause, etc, image1, image2, image3 }).then(async(res) => {
                    setLoading(false)
                    await Swal.fire(
                        'แจ้งเตือน',
                        res.data.message,
                        'success'
                    )
                    navigate(`/`)
                }).catch(async (err) => {
                    setLoading(false)
                    await Swal.fire(
                        'แจ้งเตือน',
                        err.response.data.error,
                        'error'
                    )
                })
        }
    },[uploadImg])

    const inputValue = (name) => (event) => {
        setInfo({ ...info, [name]: event.target.value });
    };

    const [provinceList, setProvinceList] = useState([])

    const loadData = async (event) => {
        // ดึงข้อมูล id ของผู้ใช้งาน
        try{
            const id = await getUserId()
            setLoginUser(id.data)
        }catch (error) {
            console.error(error);
        }
        // setProvinceList(event.target.value)
        await axios.get(`https://ckartisan.com/api/provinces`)
            .then((res) => {
                setProvinceList(res.data)
            }).catch(err => {
                console.log(err)
            })
        // โหลดคนหายล่่าสุด
        await axios.get(`${import.meta.env.VITE_APP_API}/get-report-post`).then((res) => {
            setPostArray(res.data)
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
    }, [])

    const [options, setOptions] = useState([
        { value: 'male', label: 'ชาย' },
        { value: 'female', label: 'หญิง' },
    ]);

    const handleDataFromChild = (data) => {
        setImages(data)
    }

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

    return (
        <div className='missing-report-page'>
            {loading && <Loading/>}
            <Navbar />
            <main className='missing-report-container'>
                <form className='missing-report-container-center' onSubmit={sendReport}>
                    <h1>รายงานข้อมูลผู้สูญหาย</h1>
                    <section className='inputData'>
                        <h3>ข้อมูลของผู้สูญหาย</h3>
                        <div className='inputData-line-1'>
                            <div className="custom-input-container">
                                <input
                                    type="text"
                                    value={name}
                                    onChange={inputValue('name')}
                                    className="custom-input"
                                    placeholder=" "
                                />
                                <label className="custom-label">ชื่อจริง *</label>
                            </div>
                            <div className="custom-input-container">
                                <input
                                    type="text"
                                    value={surname}
                                    onChange={inputValue('surname')}
                                    className="custom-input"
                                    placeholder=" "
                                />
                                <label className="custom-label">นามสกุล *</label>
                            </div>
                        </div>
                        <div className="custom-input-container">
                            <input
                                type="text"
                                value={address}
                                onChange={inputValue('address')}
                                className="custom-input address-input"
                                placeholder=" "
                            />
                            <label className="custom-label">ที่อยู่ล่าสุดของผู้สูญหาย *</label>
                        </div>
                        <div className='inputData-line-1'>
                            <div className="custom-input-container">
                                <select
                                    className="dropdown-toggle gender-input"
                                    onChange={inputValue('gender')}
                                    value={gender}
                                >
                                    <option value='' disabled>
                                        เพศ
                                    </option>
                                    {options.map((option) => (
                                        <option key={option.label} value={option.label}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                                <label className="custom-dropdown-label">เพศ *</label>
                            </div>
                            <div className="custom-input-container">
                                <select
                                    className="dropdown-toggle"
                                    onChange={inputValue('provinceItem')}
                                    value={provinceItem}
                                >
                                    <option value='' disabled>
                                        เลือกจังหวัด
                                    </option>
                                    {provinceList.map((item, index) => (
                                        <option key={index} value={item.province}>
                                            {item.province}
                                        </option>
                                    ))}
                                </select>
                                <label className="custom-dropdown-label">จังหวัด *</label>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h3>วันที่ที่หายไป และสาเหตุการสูญหาย</h3>
                        <div className='inputData-line-1'>
                            <div className="custom-input-container">
                                <input
                                    type="date"
                                    onChange={inputValue('date')}
                                    value={date}
                                    className='dropdown-toggle date'
                                />
                                <label className="custom-dropdown-label">วัน *</label>
                            </div>
                            <div className="custom-input-container">
                                <input
                                    type="text"
                                    value={cause}
                                    onChange={inputValue('cause')}
                                    className="custom-input"
                                    placeholder=" "
                                />
                                <label className="custom-label">สาเหตุการสูญหาย *</label>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h3>ภาพของผู้สูญหาย</h3>
                        <ImageUploaderReport onDataSend={handleDataFromChild}/>
                        <div className="custom-input-container">
                            <textarea
                                value={etc}
                                onChange={inputValue('etc')}
                                className="custom-textarea"
                                placeholder=" "
                            />
                            <label className="custom-textarea-label">ข้อมูลเพิ่มเติม *</label>
                        </div>
                    </section>
                    <input className='submit-form-report' type="submit" value="ส่งข้อมูล" />
                </form>
                <aside className='lasted-side'>
                    <h3>ผู้สูญหายล่าสุด</h3>
                    {postArray.map((item) => (
                            <div className="report-card" key={item._id}>
                                <img src={item.missing_photo1 == "" ? "https://media.istockphoto.com/id/1288129985/vector/missing-image-of-a-person-placeholder.jpg?s=612x612&w=0&k=20&c=9kE777krx5mrFHsxx02v60ideRWvIgI1RWzR1X4MG2Y=" : item.missing_photo1} alt=""/>
                                <div className="report-info-box">
                                    <div className="report-card-row-1">
                                        <label>{formatDate(item.updatedAt)}</label>
                                        <div className="report-card-status">
                                            {item.missing_status}
                                        </div>
                                    </div>
                                    <div className="report-card-row-2">
                                        <label>{item.missing_fname}&ensp;</label>
                                        <label>{item.missing_lname}&ensp;</label>
                                        <label>{`(${item.missing_gender})`}</label>
                                    </div>
                                    <div className="report-card-row-3">
                                        <div className="report-card-place">
                                            <label>สูญหายที่ :</label>
                                            <label> {item.missing_position.length > 15 ? item.missing_position.slice(0, 15) + "..." : item.missing_position}</label>
                                        </div>
                                        <div className="report-card-cause">
                                            <label>สาเหตุการหาย :</label>
                                            <label> {item.missing_cause.length > 15 ? item.missing_cause.slice(0, 15) + "..." : item.missing_cause}</label>
                                        </div>
                                        <div className="report-card-date">
                                            <label>วันที่รายงานการสูญหาย :</label>
                                            <label> {formatDate(item.createdAt)}</label>
                                        </div>
                                    </div>
                                    <div className="report-card-row-4">
                                        <div className="report-card-province">
                                            {item.missing_province}
                                        </div>
                                        <div className="report-card-clue">
                                            <MdOutlineModeComment size={20} className="report-card-clue-icon"/>
                                            20
                                        </div>
                                    </div>
                                </div>
                        </div>
                        ))}
                </aside>
            </main>
            <Footer />
        </div>

    );
};

export default ReportMissing;
