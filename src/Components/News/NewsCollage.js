import React from 'react';
import '../News/NewsCollage.css';

const newsData = [
  {
    title: 'How far are current humanoids from science fiction?',
    image: './images/humanoid.jpg',
    link: 'https://news.cgtn.com/news/2023-08-22/How-far-are-current-humanoids-from-science-fiction--1mtFd7M645a/index.html'
  },
  {
    title: 'UFOs from outer space — science or science fiction?',
    image: './images/ufo.jpg',
    link: 'https://thehill.com/opinion/technology/4165072-ufos-from-outer-space-science-or-science-fiction/'
  },
  {
    title: 'Best science fiction films about space, according to an astrophysicist',
    image: './images/films.jpg',
    link: 'https://thehill.com/opinion/technology/4165072-ufos-from-outer-space-science-or-science-fiction/'
  },
  {
    title: 'Mysterious creature caught on camera swimming at New Orleans park',
    image: './images/mystery.webp',
    link: 'https://youtu.be/gKjJk_sweMU?feature=shared'
  },
  {
    title: 'Odd creature caught on security camera, and Internet has thoughts',
    image: './images/mysterious.webp',
    link: 'https://www.usatoday.com/story/tech/2019/06/11/bizarre-creature-caught-on-security-camera-viral-video/1411177001/'
  },
  {
    title: 'Meet Apollo, the "iPhone" of humanoid robots',
    image: './images/apollo.webp',
    link: 'https://edition.cnn.com/2023/08/23/world/apptronik-apollo-humanoid-robot-scn/index.html'
  },
  {
    title: 'Best Science Fiction Movies: Top 5 Films Most Recommended By Fans',
    image: './images/watch.jpg',
    link: 'https://studyfinds.org/best-science-fiction-movies/'
  },
  {
    title: 'Watch the intense trailer for sci-fi "The Moon", starring EXO’s D.O.',
    image: './images/moon.jpg',
    link: 'https://www.nme.com/en_asia/news/film/the-moon-exo-d-o-teaser-3439252'
  },
  {
    title: 'Movie Review: ‘Ant-Man and the Wasp: Quantumania’',
    image: './images/AntManand.webp',
    link: 'https://sciencefiction.com/2023/02/16/movie-review-ant-man-and-the-wasp-quantumania/'
  },
  {
    title: 'What Isaac Asimov’s Robbie Teaches About AI and How Minds "Work"',
    image: './images/ideas_ai_human_minds.webp',
    link: 'https://www.wired.com/story/artificial-intelligence-minds-science-fiction/'
  },
  {
    title: 'NASA’s Psyche mission to a metal world may reveal the mysteries of Earth’s interior',
    image: './images/nasa.avif',
    link: 'https://theconversation.com/nasas-psyche-mission-to-a-metal-world-may-reveal-the-mysteries-of-earths-interior-206913'
  },
  {
    title: 'How far off are scientists from developing human exoskeletons?',
    image: './images/exoskeleton.jpg',
    link: 'https://www.independent.co.uk/news/long_reads/human-exoskeleton-technology-prosthetics-b2324427.html'
  },
];

const NewsCollage = () => {
  return (
    <>
    <h2 className='heading-style2'>News/Updates</h2>
    <div className="news-collage">
      {newsData.map((newsItem, index) => (
        <a href={newsItem.link} target="_blank" key={index} className="news-item">
          <img className='news-images' src={newsItem.image} alt={newsItem.title} />
          <div className="news-overlay">
              <h3>{newsItem.title}</h3>
            </div>
            </a>
      ))}
    </div>
    </>
  );
};

export default NewsCollage;
