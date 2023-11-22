import React, {useState, useEffect} from 'react';
import { stockData } from '../../demo/data';
import './css/MissingClue.css'
import { IoSend } from 'react-icons/io5'
import { GrCamera } from 'react-icons/gr'
import { BsDot } from 'react-icons/bs'
import ImageUploaderClue from '../../components/ImageUploaderClue'
import { getUserId } from '../../services/authorize';
import axios from 'axios';
import Swal from 'sweetalert2'
import { getUser } from "../../services/authorize";
import { useNavigate } from 'react-router-dom';

const MissingClue = ({missingid}) => {

    //redirect หน้า
    const navigate = useNavigate()

    const [isLogin, setIsLogin] = useState(getUser())

    const [comment,setComment] = useState("")

    // state ของ ผู้ที่จะทำการสร้างประกาศ
    const [loginUser, setLoginUser] = useState("")

    const [userImage, setUserImage]=  useState("")

    // รูปที่จะส่งไปยัง server
    const [image1, setImage1] = useState("")
    const [image2, setImage2] = useState("")
    const [image3, setImage3] = useState("")

    //  state เก็บชุดรูปที่มาจาก child
    const [images, setImages] = useState([])

    // เช็คว่าแนบรูปไหม
    const [uploadImg, setUploadImg] = useState(false)

    // state เช็คว่า fetch api
    const [loading, setLoading] = useState(false)

    const [allComment, setAllComment] = useState([])
    
    const sendComment = async (e) => {
        e.preventDefault();
        setLoading(true)
        console.log("1")

        if (comment == "") {
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
            await axios.post(`${import.meta.env.VITE_APP_API}/postcomment`, {loginUser ,missingid ,comment ,image1 ,image2 ,image3 }).then(async(res) => {
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
            axios.post(`${import.meta.env.VITE_APP_API}/postcomment`, {loginUser ,missingid ,comment ,image1 ,image2 ,image3 }).then(async(res) => {
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

    const loadData = async (event) => {
        // ดึงข้อมูล id ของผู้ใช้งาน
        try{
            const id = await getUserId()
            setLoginUser(id.data)
        }catch (error) {
            console.error(error);
        }
    }
    const loadImg = async(e) => {
        await axios.post(`${import.meta.env.VITE_APP_API}/get-userImage`,{loginUser}).then(async(res) => {
            setUserImage(res.data)
        }) 
        await axios.post(`${import.meta.env.VITE_APP_API}/allcomment`,{missingid}).then(async(res) => {
            setAllComment(res.data)
        })   
    }

    useEffect(() => {
        if(!isLogin) {
            navigate('/login')
        }
        loadData()
    }, [])

    useEffect(() => {
        loadImg()
    }, [loginUser])

    
    const handleDataFromChild = (data) => {
        setImages(data)
    }

    const handleClue = () => {
        console.log()
    }

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

    const dummyData = [
        {
            fname : 'กนกพล',
            lname : 'เทียมเมือง',
            description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus eque ac faucibus porta, nulla augue rutrum orci, et imperdiet erat ex et massa Vestibulum mattis, purus eget blandit tempus, mauris turpis dignissim lorem, ac fermentum est ligula porta est. Vestibulum congue, nisi ut consequat eleifend, urna arcu varius ligula.',
            date : '21 พฤศจิกายน 2566',
            profilePhoto : 'https://dudeproducts.com/cdn/shop/articles/gigachad_1068x.jpg?v=1667928905',
            cluePhoto1 : 'https://www.thai2night.com/upload/shop/photo_cover/master/20180323235749M5hkkI5P9P.jpg',
            cluePhoto2 : "",
            cluePhoto3 : ""
        },
        {
            fname : 'กนกพล',
            lname : 'เทียมเมือง',
            description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus eque ac faucibus porta, nulla augue rutrum orci, et imperdiet erat ex et massa Vestibulum mattis, purus eget blandit tempus, mauris turpis dignissim lorem, ac fermentum est ligula porta est. Vestibulum congue, nisi ut consequat eleifend, urna arcu varius ligula.',
            date : '21 พฤศจิกายน 2566',
            profilePhoto : 'https://dudeproducts.com/cdn/shop/articles/gigachad_1068x.jpg?v=1667928905',
            cluePhoto1 : '',
            cluePhoto2 : "",
            cluePhoto3 : ""
        },
        {
            fname : 'กนกพล',
            lname : 'เทียมเมือง',
            description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus eque ac faucibus porta, nulla augue rutrum orci, et imperdiet erat ex et massa Vestibulum mattis, purus eget blandit tempus, mauris turpis dignissim lorem, ac fermentum est ligula porta est. Vestibulum congue, nisi ut consequat eleifend, urna arcu varius ligula.',
            date : '21 พฤศจิกายน 2566',
            profilePhoto : 'https://dudeproducts.com/cdn/shop/articles/gigachad_1068x.jpg?v=1667928905',
            cluePhoto1 : 'https://www.thai2night.com/upload/shop/photo_cover/master/20180323235749M5hkkI5P9P.jpg',
            cluePhoto2 : "https://www.thai2night.com/upload/shop/photo_cover/master/20180323235749M5hkkI5P9P.jpg",
            cluePhoto3 : "https://www.thai2night.com/upload/shop/photo_cover/master/20180323235749M5hkkI5P9P.jpg"
        },
        {
            fname : 'กนกพล',
            lname : 'เทียมเมือง',
            description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus eque ac faucibus porta, nulla augue rutrum orci, et imperdiet erat ex et massa Vestibulum mattis, purus eget blandit tempus, mauris turpis dignissim lorem, ac fermentum est ligula porta est. Vestibulum congue, nisi ut consequat eleifend, urna arcu varius ligula.',
            date : '21 พฤศจิกายน 2566',
            profilePhoto : 'https://dudeproducts.com/cdn/shop/articles/gigachad_1068x.jpg?v=1667928905',
            cluePhoto1 : 'https://www.thai2night.com/upload/shop/photo_cover/master/20180323235749M5hkkI5P9P.jpg',
            cluePhoto2 : "https://www.thai2night.com/upload/shop/photo_cover/master/20180323235749M5hkkI5P9P.jpg",
            cluePhoto3 : ""
        },
    ]

    return (
        <div className='missClue-container'>
            <hr/>
            <div className='missClue-writeComment-box'>
                <img className='missClue-login-photo'src={userImage}/>
                <div className='missClue-input-box'>
                    <textarea className='missClue-input' placeholder='คุณมีเบาะแสหรอ? มาแบ่งปันกันเถอะ...' value={comment} onChange={(e)=>{setComment(e.target.value)}}/>
                    <div className='missClue-input-footer-box'>
                        {/* <GrCamera size={20}/> */}
                        <div style={{width: '100%'}}>
                            <ImageUploaderClue onDataSend={handleDataFromChild}/>
                        </div>
                        <IoSend size={20} style={{margin: '0 0 0 30px'}} onClick={sendComment}/>
                    </div>
                </div>
            </div>
            { allComment.map((item) => (
                <div className='missClue-comment-box' key={item.usercomment_id.fname}>
                    <hr/>
                    <div className='missClue-comment-header'>
                        <img className='missClue-comment-profile-photo' src={item.usercomment_id.profileImage}/>
                        <label className='missClue-comment-name'>{item.usercomment_id.fname}</label>
                        <label className='missClue-comment-name'>{item.usercomment_id.lname}</label>
                        <BsDot size={30}/>
                        <label className='missClue-comment-date'>{formatDate(item.createdAt)}</label>
                    </div>
                    <div className='missClue-comment-des-box'>
                        <p>{item.clue_comment}</p>
                        <div className='missClue-comment-photo-box'>
                            {item.clue_photo1 != "" && <img src={item.clue_photo1}/>}
                            {item.clue_photo2 != "" && <img src={item.clue_photo2}/>}
                            {item.clue_photo3 != "" && <img src={item.clue_photo3}/>}
                        </div>
                    </div>
                </div>
            ))}
            
        </div>
    );
}

export default MissingClue;
