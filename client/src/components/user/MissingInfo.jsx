import React from 'react';
import './css/MissingInfo.css'
import { stockData } from '../../demo/data'

const MissingInfo = () => {
    return (
        <div className='container-missing-info'>
            {stockData.map((data, key) => {
                return (
                    <main className='missing-info-content' key={key}>
                        <section>
                            <div className='missing-info-content-text-header'>
                                <p className='missing-info-content-text-body'>ที่อยู่ล่าสุดที่พบเจอ</p>
                                <li className='missing-info-content-text-date'>{data.dateUpdate}</li>
                            </div>
                            <p className='missing-info-content-text-p'>
                                {data.data1}
                            </p>
                        </section>
                        <section>
                            <div className='missing-info-content-text-header'>
                                <p className='missing-info-content-text-body'>ข้อมูลเพิ่มเติม</p>
                                <li className='missing-info-content-text-date'>{data.dateUpdate}</li>
                            </div>
                            <p className='missing-info-content-text-p'>
                                {data.data1}
                            </p>
                        </section>
                    </main>
                )
            })}
        </div>
    );
}

export default MissingInfo;
