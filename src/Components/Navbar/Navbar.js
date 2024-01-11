import React, { useState } from "react";
import style from "./Navbar.module.css";
import Diamond from "../../Components/Images/diamondRemove.png";
import { MenuOutlined } from "@ant-design/icons";
function Navbar() {
  const [toggle, setToggle] = useState(false);
  const toggleNavbar = () => {
    setToggle(!toggle);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={style.Navbar}>
      <div className={style.container}>
        <a href="/">
        <img className={style.logoImage} src={Diamond} alt="Beauty Parlour" /> </a>
        <nav className={toggle ?`${style.menuItem} ${style.toggleNavbar}` : `${style.menuItem}`}>
          <a onClick={() => scrollToSection("/")}>Home</a>
          <a onClick={() => scrollToSection("about")}>Why Us</a>
          <a onClick={() => scrollToSection("service")}>Service</a>
          <a onClick={() => scrollToSection("pricing")}>Pricing</a>
          <a onClick={() => scrollToSection("contact")}>Contact</a>
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
