import React from 'react';
import ss from './Navbar.module.css';
console.log(ss);

// let ss = {
//   "nav": "Navbar_nav__15Bhy",
//   "item": "Navbar_item__tB9LK",
//   "active" : "NavbarBLAbla_active"
// };

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
        <a>Profile</a>
      </div>
      <div className={`${ss.item} ${ss.active}`}>
        <a>Messages</a>
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
