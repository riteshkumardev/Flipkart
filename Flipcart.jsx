import React from "react";
import style from "./filipcart.module.css";
function Flipcart() {
  const loginBtn = () => {};
  return (
    <div>
      <div className={style.nav}>
        <img
          src="./Flipkartplus.png"
          alt="pic"
          className={style.Flipcartplus}
        />

        <input
          placeholder="Serch for product brand and more"
          className={style.FlipkartInput}
        />
        <button onClick={loginBtn} className={style.Login}>
          <b>Login</b>
        </button>
        <h4 className={style.Becomeh3}>Become a Saller</h4>
        <label className={style.more_label}>
          <b>More</b>
          <select defaultValue={""} className={style.selectbox}>
            {/* <opction></opction> */}
            {/* <option>Notification Preferences</option>
            <option>24x7 Customer Care</option>
            <option>Advertise</option>
            <option>Download App</option> */}
          </select>
        </label>
        <img src="./cartlogo.jpg" alt="pic" className={style.cartlogo} />
        <b className={style.cart}>Cart</b>
      </div>
    </div>
  );
}

export default Flipcart;
