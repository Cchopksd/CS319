import { useEffect, useState, useMemo } from 'react';
import './css/Administrator.css'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { LiaTrashAlt } from "react-icons/lia";
import Pagination from '../../components/Pagination';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const AdministratorPage = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [missingRequire, setMissingRequire] = useState([]);
    const PageSize = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const fetchData = () => {
        axios.get(`${import.meta.env.VITE_APP_API}/admin`)
            .then((response) => {
                // console.log(response.data);
                setMissingRequire(response.data);

            })
            .catch((err) => {
                alert(err.message);
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const deleteRequire = (slug) => {
        axios.delete(`${import.meta.env.VITE_APP_API}/admin/${slug}`)
            .then((response) => {
                Swal.fire('แจ้งเตือน', response.data.message, "success")
                fetchData();
            }).catch(err => alert(err));
    }

    const confirmDelete = (slug) => {
        Swal.fire({
            title: 'ยืนยันเพื่อลบบัญชีผู้ใช้งาน',
            icon: 'warning',
            showCancelButton: true
        }).then((result) => {
            if (result.isConfirmed) {
                deleteRequire(slug)
            }
        })
    }
    const handleSearch = async () => {
        try {
            if (!query) {
                fetchData()
                setResults([]);
            }
            const response = await axios.get(`${import.meta.env.VITE_APP_API}/admin/search/${query}`);
            setResults(response.data);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    const currentTableData = useMemo(() => {
        const dataToUse = results.length > 0 ? results : missingRequire;
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return dataToUse.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, missingRequire, results]);

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
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="custom-input"
                                placeholder=" "
                            />
                            <label className="custom-label">ค้นหาด้วยชื่อนามสกุล *</label>
                        </div>
                        <button className='admin-search-button' onClick={handleSearch}>ค้นหา</button>
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
                            {
                                currentTableData.map((user, key) => (
                                    <tr className='table-row-body' key={key}>
                                        <td className='table-field'>{user.missing_fname}</td>
                                        <td className='table-field'>{user.missing_lname}</td>
                                        <td className='table-field'>{user.missing_gender}</td>
                                        <td className='table-field'>{user.missing_province}</td>
                                        <td className='table-field'>{user.missing_date}</td>
                                        <td className='table-field cause-field'>{user.missing_cause}</td>
                                        <td className='table-field'>
                                            <div className={`admin-person-status
                                            ${user.missing_status === 'พบแล้ว' ? 'admin-person-found' :
                                                    user.missing_status === 'กำลังตรวจสอบ' ? 'admin-person-verifying' :
                                                        user.missing_status === 'เสียชีวิต' ? 'admin-person-dead' :
                                                            user.missing_status === 'สูญหาย' ? 'admin-person-not-found' : ''}`}>
                                                {user.missing_status === 'พบแล้ว' ? 'พบแล้ว' :
                                                    user.missing_status === 'กำลังตรวจสอบ' ? 'กำลังตรวจสอบ' :
                                                        user.missing_status === 'เสียชีวิต' ? 'เสียชีวิต' :
                                                            user.missing_status === 'สูญหาย' ? 'สูญหาย' : ''}
                                            </div>

                                        </td>
                                        <td className=''><Link to={`/administrator/person-info/${user.missing_slug}`} className='admin-verify-button'>ตรวจสอบ</Link></td>
                                        <td className=''><button className='admin-bt-delete' onClick={() => confirmDelete(user.missing_slug)}><LiaTrashAlt /></button></td>
                                    </tr>
                                ))
                            }

                            </tbody>
                        </table>
                    </section>

                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={currentTableData.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />
                </main>
                <Footer />
            </div>
    );
}

export default AdministratorPage;
