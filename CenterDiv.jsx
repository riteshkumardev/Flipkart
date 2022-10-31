import React from "react";

import ImageSlider, { Slide } from "react-auto-image-slider";
function CenterDiv() {
  return (
    <div style={{ marginTop: "15px" }}>
      <ImageSlider effectDelay={500} autoPlayDelay={2000}>
        <Slide>
          <img src="./divImg.png" alt="pic" style={{ height: "270px" }} />
        </Slide>
        <Slide>
          <img src="./img2.png" alt="pic" style={{ height: "270px" }} />
        </Slide>
        <Slide>
          <img src="./img3.png" alt="pic" style={{ height: "270px" }} />
        </Slide>
      </ImageSlider>
      {/* <img src="./divImg.png" alt="pic" className={style.centerDiv} /> */}
      {/* <img src="./div2.png" alt="pic" className={style.centerDiv} /> */}
    </div>
  );
}

export default CenterDiv;
