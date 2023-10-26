import React, { useState, useEffect } from 'react';
import './css/ReportMissing.css'
import axios from 'axios';
import { stockData } from '../../demo/data';
import Footer from '../../components/Footer';


const ReportMissing = () => {
    const [info, setInfo] = useState({
        name: '',
        surname: '',
        address: '',
        gender: '',
        provinceItem: '',
        date: '',
        month: '',
        year: '',
        cause: '',
        etc: ''
    });

    const inputValue = (name) => (event) => {
        setInfo({ ...info, [name]: event.target.value });
    };

    const [provinceList, setProvinceList] = useState([])

    const loadData = async (event) => {
        // setProvinceList(event.target.value)
        await axios.get(`https://ckartisan.com/api/provinces`)
            .then((res) => {
                setProvinceList(res.data)
            }).catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        loadData()
    }, [])

    const [options, setOptions] = useState([
        { value: 'male', label: 'ชาย' },
        { value: 'female', label: 'หญิง' },
    ]);

    return (
        <div className='missing-report-page'>
            <main className='missing-report-container'>
                <form className='missing-report-container-center'>
                    <h1>รายงานข้อมูลผู้สูญหาย</h1>
                    <section className='inputData'>
                        <h3>ข้อมูลของผู้สูญหาย</h3>
                        <div className='inputData-line-1'>
                            <div className="custom-input-container">
                                <input
                                    type="text"
                                    value={info.name}
                                    onChange={inputValue('name')}
                                    className="custom-input"
                                    placeholder=" "
                                />
                                <label className="custom-label">ชื่อจริง *</label>
                            </div>
                            <div className="custom-input-container">
                                <input
                                    type="text"
                                    value={info.surname}
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
                                value={info.address}
                                onChange={inputValue('address')}
                                className="custom-input"
                                placeholder=" "
                            />
                            <label className="custom-label">ที่อยู่ล่าสุดของผู้สูญหาย *</label>
                        </div>
                        <div className='inputData-line-1'>
                            <div className="custom-input-container">
                                <select
                                    className="dropdown-toggle"
                                    onChange={inputValue('gender')}
                                    defaultValue={info.gender}
                                >
                                    <option value='' disabled>
                                        เพศ
                                    </option>
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                                <label className="custom-dropdown-label">เพศ *</label>
                            </div>
                            <div className="custom-input-container">
                                <select
                                    className="dropdown-toggle"
                                    onChange={loadData}
                                    defaultValue={info.province}
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
                                    defaultValue={info.date}
                                    className='dropdown-toggle'
                                />
                                <label className="custom-dropdown-label">วัน *</label>
                            </div>
                            <div className="custom-input-container">
                                <input
                                    type="text"
                                    value={info.cause}
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
                        <div className="custom-input-container">
                            <textarea
                                value={info.etc}
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
                    {stockData.map((data, key) => {
                        return (
                            <div className='lasted-container' key={key}>
                                <img className='lasted-image' src={data.img1} alt="" />
                                <div className='lasted-info-inside'>
                                    <div className='lasted-info-head'>
                                        <label className='lasted-info-date'>{data.date}</label>
                                        <div
                                            className={`lasted-status
                                            ${data.status ? 'found' : 'not-found'}
                                            `}>
                                            {data.status ? 'พบแล้ว' : 'สูญหาย'}
                                        </div>
                                    </div>
                                    <label>{data.name}</label>
                                    <label className='lasted-info-etc'>สูญหายที่: {data.address}</label>
                                    <label className='lasted-info-etc'>สาเหตุการสูญหาย: {data.cause}</label>
                                    <label className='lasted-info-etc'>มีการรายงานการสูญหายวันที่: {data.dateUpdate}</label>
                                    <label className='lasted-info-etc info-province'>{data.province}</label>
                                </div>
                            </div>
                        )
                    })}
                </aside>
            </main>
            {/* <Footer/> */}
        </div>
         
    );
};

export default ReportMissing;
