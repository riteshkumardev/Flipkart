import React from "react";
import style from "./filipcart.module.css";
function FlipkartItem() {
  return (
    <div className={style.itemDiv}>
      <div className={style.item}>
        <label>
          <img src="./topOffer.webp" alt="pic" className={style.img} /> Top
          Offer
        </label>
      </div>
      <div className={style.item}>
        <label>
          <img src="./Grocery.webp" alt="pic" className={style.img} /> Grocery
        </label>
      </div>
      <div className={style.item}>
        <label>
          <img src="./Mobiles.webp" alt="pic" className={style.img} /> Mobiles
        </label>
      </div>
      <div className={style.item}>
        <label>
          <img src="./Fashion.webp" alt="pic" className={style.img} /> Fashion
        </label>
      </div>
      <div className={style.item}>
        <label>
          <img src="./electronics.webp" alt="pic" className={style.img} />
          Electronics
        </label>
      </div>
      <div className={style.item}>
        <label>
          <img src="./home.webp" alt="pic" className={style.img} />
          Home
        </label>
      </div>
      <div className={style.item}>
        <label>
          <img src="./Appliances.webp" alt="pic" className={style.img} />
          Appliances
        </label>
      </div>
      <div className={style.item}>
        <label>
          <img src="./flight.webp" alt="pic" className={style.img} />
          Travel
        </label>
      </div>
      <div className={style.item}>
        <label>
          <img src="./Toys.webp" alt="pic" className={style.img} />
          Beauty,Toys & More
        </label>
      </div>
      <div className={style.item}>
        <label>
          <img src="./Wheelers.webp" alt="pic" className={style.img} />
          Two Wheelers
        </label>
      </div>
    </div>
  );
}

export default FlipkartItem;
