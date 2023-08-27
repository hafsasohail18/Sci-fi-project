import React from 'react';
import PropTypes from 'prop-types';
import './ImageWithText.css'; // Make sure to have the corresponding CSS file

const ImageWithText = ({ imageUrl, title, description }) => {
  return (
    <div className="image-with-text">
      <img src={imageUrl} alt={title} className="image" />
      <div className="text-container">
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

ImageWithText.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ImageWithText;
