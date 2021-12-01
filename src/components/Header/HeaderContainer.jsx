import React from 'react';
import ss from'./Header.module.css';
import {NavLink} from "react-router-dom";

class HeaderContainer extends React.Component {
    render() {
    return <header className={ss.header}>
        <img src='https://i.ya-webdesign.com/images/the-internet-png-2.png' alt="" />

        <div className={ss.loginBlock}>
            <NavLink to={'/login'}>Login</NavLink>
        </div>
      </header>
    );
}

export default HeaderContainer;