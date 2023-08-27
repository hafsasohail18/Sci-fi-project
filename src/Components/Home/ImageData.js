import React from 'react';
import ImageWithText from './ImageWithText';
import '../Home/ImageData.css'


const ImageData = () => {
  return (
    <>
    <h2 className='heading-style2'>Explore Our Sci-Fi Selection</h2>
    <div className="image-row">
      <ImageWithText
        imageUrl="./images/aliens.webp"
        title=" Discover New Realms"
        description="Traverse dystopian futures, alien planets, and virtual dimensions. Brace for the unexpected as you journey through uncharted territories."
      />
      <ImageWithText
        imageUrl="./images/aliens.jpg"
        title="Meet the Unimaginable"
        description="Engage with AI and diverse alien species. Walk alongside characters that defy convention and embody boundless creativity."
      />
      <ImageWithText
        imageUrl="./images/timetravel.jpg"
        title="Warp Time and Space"
        description="Untangle time travel paradoxes, explore realities, and unravel the mysteries in mind-bending narratives that challenge your intellect."
      />
      <ImageWithText
        imageUrl="./images/connect.jpg"
        title="Connect and Create your own"
        description="Join a community of passionate enthusiasts. Share theories, discuss reads, and ignite your creativity as you craft your own sci-fi stories."
      />
      {/* Add more ImageWithText components as needed */}
    </div>
    </>
  );
};

export default ImageData;
