import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ id, cover, title }) => {
  return (
    <article>
      <Link
        className="card"
        to={`/property/${id}`}
      >
        <img src={cover} alt={title} />
        <h2 className="infos">{title}</h2>
      </Link>
    </article>
  );
};

Card.propTypes = {
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Card;
