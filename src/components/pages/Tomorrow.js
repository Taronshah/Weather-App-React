import React from 'react';
import Perhour from '../Perhour';
import '../../styles/Tomorrow.css';


function Tomorrow(props) {
    return (
        <div className="perhour-wrapper">
            {props.items.map((item, index) => (
            <Perhour key={index} item={item} />
            ))}
        </div>
    )
}

export default Tomorrow;