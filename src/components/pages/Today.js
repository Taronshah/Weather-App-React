import React from 'react';
import Perhour from '../Perhour';
import Current from '../Current';

function Today (props)  {
    return (
        <div>
            <Current item = {props.items[0]}/>
            <div className="perhour-wrapper">
                {props.items.map((item, index) => (
                <Perhour key={index} item={item} />
                ))}
            </div>
        </div>
    )
}
    

export default Today;