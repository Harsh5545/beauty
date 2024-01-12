import React, { useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import CustomButton from "../../Atom/Button/CustomButton";
import CustomInput from "../../Atom/Input/CustomInput";
import style from "./Contact.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function ContactUs() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Replace with your actual EmailJS service ID, template ID, and public key
    const serviceId = "service_5wf96oz";
    const templateId = "template_jy39bhn";
    const publicKey = "cShZR-WTYoT509VKn";

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div id="contact" className={style.ContactContainer}>
      <div data-aos="flip-left" className={style.Contact}>
        <h1>Get In touch</h1>
        <p>Leave us a message</p>
        <form onSubmit={sendEmail}>
          <CustomInput name="name" className={style.input} placeholder="Name" />
          <CustomInput
            name="email"
            className={style.input}
            placeholder="Email"
          />
          <CustomInput
            name="message"
            className={style.input}
            placeholder="Write your Message here"
          />
          <CustomButton
            type="submit"
            className={style.btn}
            ButtonText="Send Message"
            onClick={()=> "https://www.instagram.com/diamond_beauty__zone/"}
          />
        </form>
      </div>
      {/* ... (rest of your component) */}
    </div>
  );
}

export default ContactUs;
