import React from "react";

import dukkanMarket from "../../assets/photos/dukkan-market.png";
import dukkanImg from "../../assets/photos/dukkanImg.png";
import "./index.css";

const Images = () => {
  return (
    <div className="main-section">
      <div className="main-wrapper">
        <div className="container">
          <img src={dukkanMarket} alt="" className="dukkan-market" />
          <img src={dukkanImg} alt="" className="dukkan-img" />
        </div>
      </div>
    </div>
  );
};

export default Images;
