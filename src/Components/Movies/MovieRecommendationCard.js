import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const MovieRecommendationCard = ({ movie }) => {
  const youtubeUrl = `https://www.youtube.com/watch?v=${movie.youtubeVideoId}`;
  return (
    <div className="movie-card">
       <div className="movie-image-container">
       <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
        <img src={movie.poster} alt={`${movie.title} Poster`} className="movie-poster" /></a>
      </div>
      <div className="movie-details">
        <h2 className="movie-title">{movie.title}</h2>
        <p className="movie-description">{movie.description}</p>
        <p className="movie-year">Year: {movie.year}</p>
        <p className="movie-rating"><FontAwesomeIcon icon={faStar} style={{ color: 'yellow', fontSize: '15px' }} /> : {movie.rating}</p>
      </div>
    </div>
  );
};

export default MovieRecommendationCard;
