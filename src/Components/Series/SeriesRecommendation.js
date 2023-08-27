import React from 'react';
import SeriesRecommendationCard from '../Series/SeriesRecommendationCard';
import '../Series/SeriesRecommendation.css'

const SeriesData = [
  {
    title: 'Dark',
    description: 'A German series that involves time travel, family secrets, and a complex web of interconnected characters in a small town. As the series progresses, it delves into intricate and mind-bending narratives.',
    year: '2017',
    rating: '8.7/10',
    poster: './images/dark.jpg',
    youtubeVideoId: 'rrwycJ08PSA',
  },
  {
    title: 'Stranger Things',
    description: 'In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.',
    year: '2016',
    rating: '8.7/10',
    poster: './images/stranger-things.jpg',
    youtubeVideoId: 'b9EkMc79ZSU',
  },
  {
    title: 'Alice In Borderland',
    description:'Obsessed gamer Arisu suddenly finds himself in a strange, emptied-out version of Tokyo in which he and his friends must compete in dangerous games in order to survive.',
    year:'2020',
    rating: '7.7/10',
    poster: './images/alice.jpg',
    youtubeVideoId: '49_44FFKZ1M',
  },
  {
    title: 'Black Mirror',
    description: 'In an abstrusely dystopian future, several individuals grapple with the manipulative effects of cutting edge technology in their personal lives and behaviours.',
    year: '2011',
    rating: '8.7/10',
    poster: './images/black-mirror.jpg',
    youtubeVideoId: 'V0XOApF5nLU',
  },
  {
    title: 'Are You Human?',
    description:'A young heir falls into a coma after being brutally assaulted. However, his mother is determined to keep him in the race',
    year:'2018',
    rating: '7.9/10',
    poster: './images/human.jpg',
    youtubeVideoId: '_n8clK-PdO4',
  }, 
  {
    title: 'Yakamoz S-245',
    description: 'After disaster strikes Earth, a marine biologist on a submarine research mission must fight to survive with the crew as a conspiracy comes to light.',
    year: '2022',
    rating: '6.2/10',
    poster: './images/yakamoz.jpg',
    youtubeVideoId: 'FlezALT-uBk',
  },
  {
    title: 'Black Knight',
    description:'In a dystopian future devastated by air pollution, the survival of humanity depends on a group of deliverymen known as the Black Knights who navigate the wastelands using unconventional means.',
    year:'2023',
    rating: '6.5/10',
    poster: './images/black-knight.webp',
    youtubeVideoId: 'Se26Op9sEC8',
  },
  {
    title: 'Westworld',
    description:'In a futuristic Western-themed amusement park, Westworld, the visitors interact with automatons. However, all hell breaks loose when the robots begin malfunctioning.',
    year:'2016',
    rating: '8.5/10',
    poster: './images/west-world.webp',
    youtubeVideoId: '9BqKiZhEFFw',
  },
  {
    title: 'Lost in Space',
    description:'After crash-landing on an alien planet, the Robinson family fights against all odds to survive and escape. But they are surrounded by hidden dangers.',
    year:'2018',
    rating: '7.3/10',
    poster: './images/lost-space.jpg',
    youtubeVideoId: 'fzmM0AB60QQ',
  },
  {
    title: 'Tales from the Loop',
    description: 'Townspeople live above "The Loop" , a machine built to unlock and explore the mysteries of the universe.',
    year: '2020',
    rating: '7.4/10',
    poster: './images/loop.jpg',
  },
  {
    title: 'The Pending Train',
    description: 'In Tokyo, train passengers find themselves fighting for their very survival after their train car jumps into an apocalyptic future.',
    year: '2023',
    rating: '7.7/10',
    poster: './images/pending.jpg',
  }
];

const MovieRecommendation = () => {
  return (
    <div className="recom-heading">
      <h1 className='heading-style3'>SERIES</h1>
      <div className="movie-list">
        {SeriesData.map((movie, index) => (
          <SeriesRecommendationCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieRecommendation;
