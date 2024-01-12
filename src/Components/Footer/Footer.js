
import React, { useEffect } from "react";
import style from "./Footer.module.css";
import { InstagramOutlined, FacebookFilled, YoutubeFilled } from '@ant-design/icons'
import AOS from "aos";
import "aos/dist/aos.css";
function CustomFooter() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return <footer>
    <div className={style.waves}>
    <div className={style.wave} id={style.wave1}>
      </div>
      <div className={style.wave} id={style.wave2}>
      </div>
      <div className={style.wave} id={style.wave3}>
      </div>
      <div className={style.wave} id={style.wave4}>
      </div>
      </div>
    <ul data-aos="flip-up" className={style.socialIcon}>
      <li><a href="https://www.instagram.com/diamond_beauty__zone/">  <InstagramOutlined style={{ fontSize: '32px', color: '#fff' }}/></a></li>
      <li><a href="https://www.facebook.com/Diamondbeautyzone-103333572419215"><FacebookFilled  style={{ fontSize: '32px', color: '#fff' }}/></a></li>
      <li><a href="/"><YoutubeFilled   style={{ fontSize: '32px', color: '#fff' }}/></a></li>
    </ul>

    <ul  className={style.menu}>
   <li> <a onClick={() => scrollToSection("/home")}>Home</a></li>
   <li>   <a onClick={() => scrollToSection("about")}>Why Us</a></li>
   <li>  <a onClick={() => scrollToSection("service")}>Service</a></li>
   <li>  <a onClick={() => scrollToSection("pricing")}>Pricing</a></li>
   <li>  <a onClick={() => scrollToSection("contact")}>Contact</a></li>
    </ul>
    <p >
    © 2023 Harshad Kajale | All Rights Reserved
    </p>
  </footer>;
}

export default CustomFooter;
