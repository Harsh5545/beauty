import React, { useEffect } from "react";
import style from "./AboutUs.module.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import CustomButton from "../../Atom/Button/CustomButton";
import AOS from "aos";
import "aos/dist/aos.css";
function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);
  return (
    <div id="about" className={style.AboutWrapper}>
      <div className={style.AboutContainer}>
        <div  data-aos="fade-left" className={style.AboutContent}>
          <h2>Why Our Clients Choose Us</h2>
          <p>
            We are the leading beauty salon in Ankleshwar Providing high-quality
            hairdressing, makeup and skin care services to everyone
          </p>
          <ul>
            <li>
              <ArrowRightOutlined />
              <span>Extensions, Smoothing Services & Treatments</span>
            </li>
            <li>
          
              <ArrowRightOutlined /> <span>
                Complete Skin & Hair Solution
              </span>
            </li>
            <li>
          
              <ArrowRightOutlined /> <span>Bridal Makeup, Sider</span>
            </li>
            <li>
              <ArrowRightOutlined />
              <span>Modern salon & Welcoming Energy</span>
            </li>
          </ul>
          <div className={style.Aboutbtn}>
          <CustomButton onClick={() => window.open('https://wa.me/+918888168675')} ButtonText="Read More" className={style.AboutButton} />
          </div>
        </div>
        <div  data-aos="fade-right" className={style.Aboutimg}>
          <img
            src="https://im.indiatimes.in/content/itimes/photo/2015/Mar/13/1426222667-15-most-beautiful-women-in-the-world_card.jpg?w=414&h=311&cc=1"
            alt="aboutus"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
