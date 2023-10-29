import React, { useEffect, useState, useMemo } from 'react';
import './css/Administrator.css'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { stockData } from '../../demo/data';
import { LiaTrashAlt } from "react-icons/lia";
import Pagination from '../../components/Pagination';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { DemoData } from '../../demo/DemoData.json';

const AdministratorPage = () => {

    const [provinceList, setProvinceList] = useState([])

    const loadData = async (event) => {
        await axios.get(`https://ckartisan.com/api/provinces`)
            .then((res) => {
                setProvinceList(res.data)
            }).catch(err => {
                console.log(err)
            })
    }

    const PageSize = 10;

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return stockData.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    useEffect(() => {
        loadData()
    }, [])

    const handleStatus = (event) => {
        setValue(event.target.value);
    };

    const options = [
            { value: 'found', label: 'พบแล้ว' },
            { value: 'not-found', label: 'สูญหาย' },
            { value: 'verifying', label: 'กำลังตรวจสอบ' },
            { value: 'dead', label: 'ตาย' },
        ]

    const [value, setValue] = useState('สถานะ');

    return (
        <div className='admin-screen'>
            <Navbar />
            <main className='admin-dashboard'>
                <h2 className='admin-text-header'>ข้อมูลผู้สูญหาย</h2>
                <section className='admin-layout-search-data'>
                    <div className='admin-search-data'>
                        <div className="custom-input-container">
                            <input
                                type="text"
                                // value=
                                // onChange={inputValue('surname')}
                                className="custom-input"
                                placeholder=" "
                            />
                            <label className="custom-label">ค้นหาด้วยชื่อนามสกุล *</label>
                        </div>
                        <div className="custom-input-container">
                            <input
                                type="date"
                                // onChange={inputValue('date')}
                                // value={info.date}
                                className='dropdown-toggle date'
                            />
                            <label className="custom-dropdown-label">วัน *</label>
                        </div>
                        <div className="custom-input-container">
                            <select
                                className="dropdown-toggle gender-input"
                                onChange={handleStatus}
                                value={value}
                            >
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <label className="custom-dropdown-label">สถานะ *</label>
                        </div>
                        <button className='admin-search-button'>ค้นหา</button>
                    </div>
                </section>
                <section className='admin-frame-table'>
                    <table className='admin-table'>
                        <thead className='admin-table-thead'>
                            <tr className='table-row-head'>
                                <th className='table-header'>ชื่อ</th>
                                <th className='table-header'>นามสกุล</th>
                                <th className='table-header'>เพศ</th>
                                <th className='table-header'>จังหวัด</th>
                                <th className='table-header'>วันที่สูญหาย</th>
                                <th className='table-header'>สาเหตุ</th>
                                <th className='table-header'>สถานะ</th>
                                <th className=''></th>
                                <th className=''></th>
                            </tr>
                        </thead>
                        <tbody className='admin-table-tbody'>
                            {currentTableData.map((dataUser, key) => {
                                return (
                                    <tr className='table-row-body' key={key}>
                                        <td className='table-field'>{dataUser.name}</td>
                                        <td className='table-field'>เทียมเจียว</td>
                                        <td className='table-field'>ชาย</td>
                                        <td className='table-field'>กรุงเทพมหานคร</td>
                                        <td className='table-field'>23 ต.ค 2566</td>
                                        <td className='table-field'>อุทกภัย</td>
                                        <td className='table-field'>
                                            <div className={`admin-person-status
                                            ${dataUser.status === 'พบแล้ว' ? 'admin-person-found' : dataUser.status === 'กำลังตรวจสอบ' ? 'admin-person-verifying' : dataUser.status === 'ตาย' ? 'admin-person-dead' : 'admin-person-not-found'}`}>
                                                {dataUser.status === 'พบแล้ว' ? 'พบแล้ว' : dataUser.status === 'กำลังตรวจสอบ' ? 'กำลังตรวจสอบ' : dataUser.status === 'ตาย' ? 'ตาย' : 'สูญหาย'}
                                            </div>
                                        </td>
                                        <td className=''><Link to={`/administrator/person-info`} className='admin-verify-button'>ตรวจสอบ</Link></td>
                                        <td className=''><button className='admin-bt-delete'><LiaTrashAlt /></button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </section>

                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={stockData.length}
                    pageSize={PageSize}
                    onPageChange={page => setCurrentPage(page)}
                />
            </main>
            <Footer />
        </div>
    );
}

export default AdministratorPage;
