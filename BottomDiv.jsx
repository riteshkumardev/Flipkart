import React from "react";
import style from "./filipcart.module.css";
function BottomDiv() {
  return (
    <div className={style.itemDiv2}>
      <div className={style.item2}>
        <label>
          <img src="./ASUS Monitor.webp" alt="pic" className={style.img2} />{" "}
          ASUS Monitor
        </label>
      </div>
      <div className={style.item2}>
        <label>
          <img
            src="./Top Mirrorless Cameras.webp"
            alt="pic"
            className={style.img2}
          />
          Top Mirrorless Cameras
        </label>
      </div>
      <div className={style.item2}>
        <label>
          <img
            src="./ViewSonic Monitors.webp"
            alt="pic"
            className={style.img2}
          />
          ViewSonic Monitors
        </label>
      </div>
      <div className={style.item2}>
        <label>
          <img src="./Printers.webp" alt="pic" className={style.img2} />
          Printers
        </label>
      </div>
      <div className={style.item2}>
        <label>
          <img
            src="./Best of Hair Dryers.webp"
            alt="pic"
            className={style.img2}
          />
          Best of Hair Dryers
        </label>
      </div>
      {/* <div className={style.item2}>
        <label>
          <img src="./Monitor.webp" alt="pic" className={style.img2} />
          Monitor
        </label>
      </div> */}
    </div>
  );
}

export default BottomDiv;
