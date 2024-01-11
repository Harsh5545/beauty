import React from "react";
import style from "./Hero.module.css";
import { Carousel } from "antd";
import Button from "../../Atom/Button/Button";

function Hero() {
  const imageSlide = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwc2Fsb258ZW58MHx8MHx8&w=1000&q=80",
      heading: "Discover the Latest Trends",
      content: "Explore our beauty services and stay updated with the latest trends in hairdressing, makeup, and skincare.",
    },
    {
      id: 2,
      img: "https://static.tnn.in/photo/msid-95223288,imgsize-491555,width-100,height-200,resizemode-75/95223288.jpg",
      heading: "Quality Services",
      content: "We provide high-quality hairdressing, makeup, and skin care services to enhance your beauty and confidence.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwc2Fsb258ZW58MHx8MHx8&w=1000&q=80",
      heading: "Personalized Beauty Solutions",
      content: "Our team is dedicated to providing personalized solutions to meet your unique beauty needs and preferences.",
    },
  ];

  return (
    <Carousel autoplay dots={false} infinite easing="linear">
      {imageSlide.map((x) => (
        <div key={x.id} className={style.HeroWrapper}>
          <img className={style.heroImage} src={x.img} alt={`Slide ${x.id}`} />
          <div className={style.content}>
            <h1 className={style.heading}>{x.heading}</h1>
            <p className={style.para}>{x.content}</p>
            <Button onClick={() => window.open('https://wa.me/+918888168675')} />
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default Hero;
