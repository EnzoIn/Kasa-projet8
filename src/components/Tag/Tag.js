import PropTypes from "prop-types";
import React from "react";
import "./tag.css";

const Tag = ({ title }) => {
  return (
    <div className="tag">
      <h3>{title}</h3>
    </div>
  );
};

Tag.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Tag;
