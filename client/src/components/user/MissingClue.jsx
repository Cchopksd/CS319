import React, {useState, useEffect} from 'react';
import { stockData } from '../../demo/data';
import './css/MissingClue.css'
import { IoSend } from 'react-icons/io5'
import { GrCamera } from 'react-icons/gr'
import { BsDot } from 'react-icons/bs'

const MissingClue = () => {

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
        // <div>

        // </div>
        <div className='missClue-container'>
            <hr/>
            <div className='missClue-writeComment-box'>
                <img className='missClue-login-photo' src="https://dudeproducts.com/cdn/shop/articles/gigachad_1068x.jpg?v=1667928905"/>
                <div className='missClue-input-box'>
                    <textarea className='missClue-input' placeholder='คุณมีเบาะแสหรอ? มาแบ่งปันกันเถอะ...'/>
                    <div className='missClue-input-footer-box'>
                        <GrCamera size={20}/>
                        <IoSend size={20}/>
                    </div>
                </div>
            </div>
            { dummyData.map((item) => (
                <div className='missClue-comment-box' key={item.fname}>
                    <hr/>
                    <div className='missClue-comment-header'>
                        <img className='missClue-comment-profile-photo' src="https://dudeproducts.com/cdn/shop/articles/gigachad_1068x.jpg?v=1667928905"/>
                        <label className='missClue-comment-name'>{item.fname}</label>
                        <label className='missClue-comment-name'>{item.lname}</label>
                        <BsDot size={30}/>
                        <label className='missClue-comment-date'>{item.date}</label>
                    </div>
                    <div className='missClue-comment-des-box'>
                        <p>{item.description}</p>
                        {item.cluePhoto1 != "" && (
                            <div className='missClue-comment-photo-box'>
                                {item.cluePhoto1 != "" && <img src={item.cluePhoto1}/>}
                                {item.cluePhoto2 != "" && <img src={item.cluePhoto2}/>}
                                {item.cluePhoto3 != "" && <img src={item.cluePhoto3}/>}
                            </div>
                        )}
                    </div>
                </div>
            ))}
            
        </div>
    );
}

export default MissingClue;
