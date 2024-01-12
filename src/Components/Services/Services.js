import React, { useEffect } from "react";
import style from "./Services.module.css";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import Skincare from "../Images/skincare.png";
import Body from "../Images/body-massage.png";
import Spa from "../Images/spa.png";
import AOS from "aos";
import "aos/dist/aos.css";
function Services() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);
  return (
    <div id="service" className={style.ServicesContainer}>
      <h1  data-aos="fade-left">Our Services</h1>

      <div data-aos="fade-right" className={style.gridContainer}>
        <div   className={style.gridItem}>
          <i>
            <ContentCutIcon className={style.gridIcon}  />
          </i>
          <span>Haircut & Styling</span>
        </div>
        <div className={style.gridItem}>
          <i>
            <img
              alt="beauty gallery photos"
              src="https://cdn-icons-png.flaticon.com/512/823/823045.png"
            />
          </i>
          <span>Makeup</span>
        </div>
        <div className={style.gridItem}>
          <i>
            <img
              alt="beauty gallery photos"
              src="https://cdn-icons-png.flaticon.com/512/2025/2025191.png"
            />
          </i>
          <span>Manicure & Pedicure</span>
        </div>
        <div className={style.gridItem}>
          <i>
            <img alt="beauty gallery photos" src={Skincare} />
          </i>
          <span>SkinCare</span>
        </div>
        <div className={style.gridItem}>
          <i>
            <img alt="beauty gallery photos" src={Body} />
          </i>
          <span>Body Treatments</span>
        </div>
        <div className={style.gridItem}>
          <i>
            <img alt="beauty gallery photos" src={Spa} />
          </i>
          <span>Massage</span>
        </div>
      </div>
    </div>
  );
}

export default Services;
