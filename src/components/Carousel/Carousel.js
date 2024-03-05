import PropTypes from "prop-types";
import React, { useState } from "react";
import "./carousel.css";

const Carousel = ({ property }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () =>
    setCurrentIndex((index) =>
      index === property.pictures.length - 1 ? 0 : index + 1
    );
  const previous = () =>
    setCurrentIndex((index) =>
      index === 0 ? property.pictures.length - 1 : index - 1
    );

  const currentPicture = property.pictures[currentIndex];
  const imgCounter = property.pictures.length;

  if (imgCounter === 1) {
    return (
      <figure className="carousel">
        <img
          src={currentPicture}
          alt={property.title}
          className="carousel-img"
        />
      </figure>
    );
  }

  const counter = `${currentIndex + 1}/${imgCounter}`;

  return (
    <figure className="carousel">
      <svg
        className="arrow-left"
        onClick={previous}
        width="48"
        height="80"
        viewBox="0 0 48 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
          fill="white"
        />
      </svg>
      <svg
        className="arrow-right"
        onClick={next}
        width="48"
        height="80"
        viewBox="0 0 48 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
          fill="white"
        />
      </svg>
      <img src={currentPicture} alt={property.title} className="carousel-img" />
      <figcaption className="carousel-count">{counter}</figcaption>
    </figure>
  );
};

Carousel.propTypes = {
  property: PropTypes.shape({
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Carousel;
