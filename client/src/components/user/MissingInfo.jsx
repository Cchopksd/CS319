import React from 'react';
import './css/MissingInfo.css'
import { stockData } from '../../demo/data'

const MissingInfo = ({position, description}) => {
    return (
        <div className='container-missing-info'>
            <main className='missing-info-content'>
                <section>
                    <div className='missing-info-content-text-header'>
                        <p className='missing-info-content-text-body'>ที่อยู่ล่าสุดที่พบเจอ</p>
                        <li className='missing-info-content-text-date'>22 พฤศจิกายน 2566</li>
                    </div>
                    <p className='missing-info-content-text-p'>
                    {position}
                    </p>
                </section>
                <section>
                    <div className='missing-info-content-text-header'>
                        <p className='missing-info-content-text-body'>ข้อมูลเพิ่มเติม</p>
                        <li className='missing-info-content-text-date'>21 พฤศจิกายน 2566</li>
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
