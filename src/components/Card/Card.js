import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ property }) => {
  return (
    <article>
      <Link
        className="card"
        to={`/property/${property.id}`}
        state={{ property: property }}
      >
        <img src={property.cover} alt={property.title} />
        <h2 className="infos">{property.title}</h2>
      </Link>
    </article>
  );
};

Card.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
