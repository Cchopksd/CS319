import React from 'react';
import './css/MissingInfo.css'
import { stockData } from '../../demo/data'

const MissingInfo = () => {
    return (
        <div className='container-missing-info'>
            <main className='missing-info-content'>
                <section>
                    <div className='missing-info-content-text-header'>
                        <p className='missing-info-content-text-body'>ที่อยู่ล่าสุดที่พบเจอ</p>
                        <li className='missing-info-content-text-date'>22 พฤศจิกายน 2566</li>
                    </div>
                    <p className='missing-info-content-text-p'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                </section>
                <section>
                    <div className='missing-info-content-text-header'>
                        <p className='missing-info-content-text-body'>ข้อมูลเพิ่มเติม</p>
                        <li className='missing-info-content-text-date'>21 พฤศจิกายน 2566</li>
                    </div>
                    <p className='missing-info-content-text-p'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                </section>
            </main>
        </div>
    );
}

export default MissingInfo;
