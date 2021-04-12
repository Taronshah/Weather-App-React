import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/Header.css';

function Header (){
    return(
        <div className="header-wrapper">
            <NavLink activeClassName="active" className="forecast-time" exact to="/">Today</NavLink>
            <NavLink activeClassName="active" className="forecast-time" exact to="/tomorrow">Tomorrow</NavLink>
            <NavLink activeClassName="active" className="forecast-time" exact to="/fiveday">  5 day </NavLink>
        </div>
    )
}

export default Header