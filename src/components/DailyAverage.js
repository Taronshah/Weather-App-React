import React from 'react';
import kelvinToCelsius from '../helpers';
import '../styles/DailyAverage.css';

function DailyAverage(props) {
    let daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let {date, temp, icon, humidity, descr} = props.item;

    return (
        <div className="daily-wrapper">
            <div className="daily-main">
                <div className="daily-date">{daysInWeek[new Date(date).getDay()]}, {months[new Date(date).getMonth()]} {new Date(date).getDate()}</div>
                <div className="daily-descr">{descr}</div>
                <div className="daily-temp">{kelvinToCelsius(temp)}&#8451;</div>
            </div>
            <div className="daily-additional">
                <div className="daily-humidity">{humidity}%</div>
                <div>
                    <img src = {"http://openweathermap.org/img/w/" + icon + ".png"} alt="img"/>
                </div>
            </div>
        </div>
    )
}

export default DailyAverage;