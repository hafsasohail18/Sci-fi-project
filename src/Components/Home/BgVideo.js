import React, { useState, useEffect } from 'react';

import '../Home/BgVideo.css';

function BackgroundVideo() {

  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="video-container">
      <video className="background-video" autoPlay loop muted>
        <source src="../videos/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1 className='text1'>Unleash Your Imagination with Mind-Bending Sci-Fi Adventures!</h1>
      </div>
    {showArrow && (
      <div className="scroll-down-arrow">
        <span></span>
        <span></span>
        <span></span>
      </div>
    )}
  </div>
  );
}

export default BackgroundVideo;
