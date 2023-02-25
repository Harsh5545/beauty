import React, { useState } from "react";
import style from "./Navbar.module.css";
import Diamond from "../../Components/Images/diamondRemove.png";
import { MenuOutlined } from "@ant-design/icons";
function Navbar() {
  const [toggle, setToggle] = useState(false);
  const toggleNavbar = () => {
    setToggle(!toggle);
  };
  return (
    <header className={style.Navbar}>
      <div className={style.container}>
        <img className={style.logoImage} src={Diamond} alt="Beauty Parlour" />
        <nav className={toggle ?`${style.menuItem} ${style.toggleNavbar}` : `${style.menuItem}`}>
          <a href="/">Home</a>
          <a href="/">Why Us</a>
          <a href="/">Service</a>
          <a href="/">Pricing</a>
          <a href="/">Contact</a>
          <button className={style.btnClose} onClick={toggleNavbar}>
            X
          </button>
        </nav>
        <button className={style.btnMenu} onClick={toggleNavbar}>
          <MenuOutlined />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
