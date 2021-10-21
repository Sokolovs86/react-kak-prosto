import React from 'react';
import ss from './Navbar.module.css';

let c1 = "item";
let c2 = "active";
// "item active"
let classes = c1 + "" + c2;
// let classesNew = `${c1} ${c2}`;
let classesNew = `${ss.item} ${ss.active}`;

const Navbar = () => {
  return (
    <nav className={ss.nav}>
      <div className={ss.item}>
        <a href="/profile">Profile</a>
      </div>
      <div className={`${ss.item} ${ss.active}`}>
        <a href="/dialogs">Messages</a>
      </div>
      <div className={ss.item}>
        <a href="#">News</a>
      </div>
      <div className={ss.item}>
        <a href="#">Music</a>
      </div>
      <div className={ss.item}>
        <a href="#">Settings</a>
      </div>
    </nav>
  );
}

export default Navbar;
