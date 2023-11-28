import React, { useEffect, useState } from 'react';
import './css/MissingInfo.css'
import { stockData } from '../../demo/data'

const MissingInfo = ({position, description, createdAt, missingDate}) => {

    const formatDate = (dateString) => {
        console.log(dateString)
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

    // const [date, setDate] = useState(formatDate(createdAt));

    return (
        <div className='container-missing-info'>
            <main className='missing-info-content'>
                <section>
                    <div className='missing-info-content-text-header'>
                        <p className='missing-info-content-text-body'>ที่อยู่ล่าสุดที่พบเจอ</p>
                        <li className='missing-info-content-text-date'>{missingDate}</li>
                    </div>
                    <p className='missing-info-content-text-p'>
                    {position}
                    </p>
                </section>
                <section>
                    <div className='missing-info-content-text-header'>
                        <p className='missing-info-content-text-body'>ข้อมูลเพิ่มเติม</p>
                        <li className='missing-info-content-text-date'>{missingDate}</li>
                    </div>
                    <p className='missing-info-content-text-p'>
                        {description}
                    </p>
                </section>
            </main>
        </div>
    );
}

export default MissingInfo;
