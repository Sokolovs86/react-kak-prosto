import React from 'react';
import ss from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return (
      <header className={ss.header}>
        <img
          src="https://www.logodesignteam.com/blog/wp-content/uploads/2016/11/Free_Logo_Design_Makers.jpg"
          alt=""
        />

        <div className={ss.loginBlock}>
          {props.isAuth ? props.login 
          : <NavLink to={"/login"}>Login</NavLink>}
        </div>
      </header>
    );
}

export default Header;
