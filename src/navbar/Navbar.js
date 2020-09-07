import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

export const Navbar = () => {

    let navStyle = {
        textDecoration: 'none',
        color: 'white',
        fontSize: '20px'
    }

    return <div className={style.nav}>
        <NavLink to={'/main'}  style={navStyle}>main</NavLink>
        <NavLink to={'/about'} style={navStyle}>about</NavLink>
        <NavLink to={'/portfolio'} style={navStyle}>portfolio</NavLink>
        <NavLink to={'/contacts'} style={navStyle}>contacts</NavLink>
    </div>
}