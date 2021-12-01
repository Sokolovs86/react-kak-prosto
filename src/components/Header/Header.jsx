import React from 'react';
import ss from'./Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={ss.header}>
        <img src='https://i.ya-webdesign.com/images/the-internet-png-2.png' alt="" />

        <div className={ss.loginBlock}>
            { props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
      </header>
}

export default Header;