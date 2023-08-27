import { useState } from "react";
import React from 'react';
import '../Home/ModeButton.css'


const ModeButton = () => {
    const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
   
    console.log("Button clicked!");
    if (isClicked) {
        document.body.classList.remove('night-mode');
      } else {
        document.body.classList.add('night-mode');
      }
    };
  

  return (
    <>
    <button
      className={`image-button ${isClicked ? 'clicked' : ''}`}
      onClick={handleClick}
    >
      <img src="../images/night-mode.png" alt="Button Image" />
    </button>
 

    </>
   
  );
};

export default ModeButton;
