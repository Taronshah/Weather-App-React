import React from 'react';
import '../styles/Current.css';
import kelvinToCelsius from '../helpers';


let daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function Current (props) {
        
        const {date, temp, icon, humidity, descr} = props.item;
        
        return (
            <div className="current-wrapper">
                <div className="current-main">
                    <div className="current-day">{daysInWeek[new Date(date).getDay()]}</div>
                    <div className="current-date">{months[new Date(date).getMonth()]} {new Date(date).getDate()}</div>
                    <div className="current-temp">{kelvinToCelsius(temp)}&#176;C</div>
                </div>
                <div className="current-additional">
                    <div className="current-humidity">Humidity: {humidity}%</div>
                    <div className="current-descr">{descr}</div>
                    <div className="current-image">
                        <img src = {"http://openweathermap.org/img/w/" + icon + ".png" } alt="img"/>
                    </div>
                </div>
            </div>
        )
    }

export default Current;