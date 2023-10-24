import React from 'react';
import { stockData } from '../../demo/data';

const MissingClue = () => {
    return (
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam quia, soluta ab distinctio neque reprehenderit ad, cumque repellat facere, vitae suscipit autem saepe tempora. Doloribus laboriosam deserunt numquam consequuntur.
            {stockData.map((data, key) => {
                <div>
                
                </div>
            })}
        </div>
    );
}

export default MissingClue;
