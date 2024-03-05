import React from "react";
import PropTypes from "prop-types";
import "./banner.css";

const Banner = ({ title, image, alt }) => {
  return (
    <div className="container-banner">
      <img className="banner-img" src={image} alt={alt} />
      <p>{title}</p>
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Banner;
