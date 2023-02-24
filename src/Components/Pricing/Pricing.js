import React from "react";
import style from "./Pricing.module.css";

function Pricing() {
  return (
    <div className={style.PricingContainer}>
      <h1>Our Pricing</h1>

      <div className={style.gridContainer}>
        <div className={style.gridItem}>
          <div className={style.massage}>
            <h1>Deep Tissue Massage</h1>
            <p>60-100 minutes session</p>
          </div>
          <p className={style.money}>₹ 1200</p>
        </div>
        <div className={style.gridItem}> <div className={style.massage}>
            <h1>Hot Stone Massage</h1>
            <p>50-60 minutes session</p>
          </div>
          <p  className={style.money}>₹ 600</p></div>
        <div className={style.gridItem}><div className={style.massage}>
            <h1>Sweedish Massage</h1>
            <p>30-40 minutes session</p>
          </div>
          <p  className={style.money}>₹ 900</p></div>
        <div className={style.gridItem}><div className={style.massage}>
            <h1>Couples Massage</h1>
            <p>20-30 minutes session</p>
          </div>
          <p  className={style.money}>₹ 1500</p></div>
        <div className={style.gridItem}><div className={style.massage}>
            <h1>Deep Tissue Massage</h1>
            <p>60-80 minutes session</p>
          </div>
          <p  className={style.money}>₹ 800</p></div>
        <div className={style.gridItem}><div className={style.massage}>
            <h1>Facial</h1>
            <p>15-30 minutes session</p>
          </div>
          <p  className={style.money}>₹ 1800</p></div>
      </div>
    </div>
  );
}

export default Pricing;
