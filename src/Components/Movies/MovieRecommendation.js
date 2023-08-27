import React from 'react';
import MovieRecommendationCard from './MovieRecommendationCard';
import '../Movies/MovieRecommendation.css'

const movieData = [
  {
    title: 'Inception',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
    year: '2010',
    rating: '8.8/10',
    poster: './images/inception.jpg',
    youtubeVideoId: 'YoHD9XEInc0',
  },
  {
    title: 'Jurrasic World',
    description: 'A theme park showcasing genetically-engineered dinosaurs turns into a nightmare for its tourists when one of the dinosaurs escapes its enclosure. An ex-military animal expert steps up to save the day.',
    year: '2018',
    rating: '6.1/10',
    poster: './images/jurrasic.jpg',
    youtubeVideoId: 'RFinNxS5KN4',
  },
  {
    title: 'Jung_E',
    description:'In a post-apocalyptic near-future, a researcher at an AI lab leads the effort to end a civil war by cloning the brain of a heroic soldier -- her mother.',
    year:'2023',
    rating: '5.5/10',
    poster: './images/jungle.webp',
    youtubeVideoId: 'LCxnmfdxJ6s',
  },
  {
    title: 'The Adam Project',
    description:'Time-travelling fighter pilot Adam Reed teams up with his 12-year-old self for a mission to save the future after unintentionally crash landing in 2022.',
    year:'2022',
    rating: '6.7/10',
    poster: './images/adam-project.jpg',
    youtubeVideoId: 'IE8HIsIrq4o',
  }, 
  {
    title: 'Looper',
    description: 'This film blends time travel with crime drama, following a hitman who kills people sent back in time, until he recognizes a target as his future self.',
    year: '2012',
    rating: '7.4/10',
    poster: './images/looper.png',
    youtubeVideoId: '2iQuhsmtfHw',
  },
  {
    title: 'A.I. Artificial Intelligence',
    description: 'Directed by Steven Spielberg and based on a story by Stanley Kubrick, this film explores the journey of a highly advanced robotic boy seeking to become "real."',
    year: '2001',
    rating: '7.2/10',
    poster: './images/ai.avif',
    youtubeVideoId: '_19pRsZRiz4',
  },
  {
    title: 'Alien',
    description:'A crew on a spaceship investigates a distress signal on an uninhabited planet, only to discover a deadly extraterrestrial creature that begins to hunt them down.',
    year:'1979',
    rating: '8.5/10',
    poster: './images/alienfilm.jpg',
    youtubeVideoId: 'svnAD0TApb8',
  },
  {
    title: 'Star Wars: Episode IV',
    description:'Princess Leia gets abducted by the insidious Darth Vader. Luke Skywalker then teams up with a Jedi Knight, a pilot and two droids to free her and to save the galaxy from the violent Galactic Empire.',
    year:'1977',
    rating: '8.6/10',
    poster: './images/star-wars.webp',
    youtubeVideoId: 'vZ734NWnAHA',
  }
];

const MovieRecommendation = () => {
  return (
    <div className="recom-heading">
      <h1 className='heading-style3'>MOVIES</h1>
      <div className="movie-list">
        {movieData.map((movie, index) => (
          <MovieRecommendationCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieRecommendation;
