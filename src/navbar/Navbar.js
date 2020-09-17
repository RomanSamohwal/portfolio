import React from 'react';
import style from './Navbar.module.scss';
import {NavLink} from 'react-router-dom'

export const Navbar = () => {

    let navStyle = {
       /* textDecoration: 'none',*/
       /* color: 'white',*/
       /* fontSize: '20px'*/
    }

    return <div className={style.nav}>
        <NavLink activeClassName={style.active} to={'/main'}  style={navStyle}>main</NavLink>
        <NavLink activeClassName={style.active} to={'/about'} style={navStyle}>about</NavLink>
        <NavLink activeClassName={style.active} to={'/portfolio'} style={navStyle}>portfolio</NavLink>
        <NavLink activeClassName={style.active} to={'/contacts'} style={navStyle}>contacts</NavLink>
    </div>
}