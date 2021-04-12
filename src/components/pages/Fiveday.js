import React from 'react';
import DailyAverage from '../DailyAverage';

function Fiveday(props) {
    return (
        <div>
            {props.items.map((item, index) => (
                <DailyAverage key={index} item={item} />
            ))}
        </div>
    )
}

export default Fiveday;