import React from "react";
import "./banner.css";

const Banner = ({ page }) => {
  if (page === "about") {
    return (
      <div className="container-banner">
        <img className="banner-img" src="./assets/paysage2.png" alt="Imgae de paysage" />
      </div>
    );
  }else if (page === "home" || "/") {
    return (
      <div className="container-banner">
        <img className="banner-img" src="./assets/paysage1.png" alt="Imgae de paysage" />
        <p>Chez vous, partout et ailleurs</p>
      </div>
    );
    
  }
};

export default Banner;