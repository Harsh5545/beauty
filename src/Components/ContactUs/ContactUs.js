import React from "react";
import CustomButton from "../../Atom/Button/CustomButton";
import CustomInput from "../../Atom/Input/CustomInput";
import style from "./Contact.module.css";


function ContactUs() {
  return (
    <div className={style.ContactContainer}>
      <div className={style.Contact}>
        <h1>Get In touch</h1>
        <p>Leave us a message</p>
        <CustomInput className={style.input} placeholder="Name" />
        <CustomInput className={style.input} placeholder="Email" />
        <CustomInput
          className={style.input}
          placeholder="Write your Message here"
        />
        <CustomButton className={style.btn} ButtonText="Send Message" />
      </div>
      <div className={style.MapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11356.474075845408!2d72.99255842186518!3d21.642012379657842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be021643cdf2191%3A0x447f7723901e752f!2sDiamond%20beauty%20zone!5e0!3m2!1sen!2sin!4v1677310190978!5m2!1sen!2sin"
          className={style.Map}
          style={{border:"0"}}
          title="location"
          loading="lazy"

        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs;
