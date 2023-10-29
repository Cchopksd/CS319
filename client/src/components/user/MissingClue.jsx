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
    ]
    return (
        <div className='missClue-container'>
            <hr/>
            <div className='missClue-writeComment-box'>
                <img className='missClue-login-photo' src="https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg"/>
                <div className='missClue-input-box'>
                    <textarea className='missClue-input' placeholder='คุณมีเบาะแสหรอ? มาแบ่งปันกันเถอะ...'/>
                    <div className='missClue-input-footer-box'>
                        <GrCamera size={20}/>
                        <IoSend size={20}/>
                    </div>
                </div>
            </div>
            <div className='missClue-comment-box'>
                <hr/>
                <div className='missClue-comment-header'>
                    <img className='missClue-comment-profile-photo' src="https://dudeproducts.com/cdn/shop/articles/gigachad_1068x.jpg?v=1667928905"/>
                    <label className='missClue-comment-name'>กนกพล</label>
                    <label className='missClue-comment-name'>เทียมเจียว</label>
                    <BsDot size={30}/>
                    <label className='missClue-comment-date'>21 พฤศจิกายน 2566</label>
                </div>
                <div className='missClue-comment-des-box'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus eque ac faucibus porta, nulla augue rutrum orci, et imperdiet erat ex et massa Vestibulum mattis, purus eget blandit tempus, mauris turpis dignissim lorem, ac fermentum est ligula porta est. Vestibulum congue, nisi ut consequat eleifend, urna arcu varius ligula.</p>
                </div>
            </div>
        </div>
    );
}

export default MissingClue;
