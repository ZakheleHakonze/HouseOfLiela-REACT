import React, { useState, useEffect  } from 'react';
import Masonry from 'react-masonry-css';
import 'react-tabs/style/react-tabs.css';
import Imgplace from './imgplace';
import AnimatedPage from './AnimatedPage';
import './styles.css'; // make sure to create this file in your project directory


const Gallery = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

//const path = require('path');

const images = require.context('./images/gallery/', false, /\.(png|jpe?g|svg)$/);
const imageObjects = images.keys().map((image) => ({
  src: images(image),
  alt: image.slice(2),
}));

const Gallery = ({ images }) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
//--------------------------------------------------------------------------
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="gallery-masonry"
      columnClassName="gallery-masonry-column"
    >
      {images.map((image) => (
        <Imgplace key={image.src} src={image.src} alt={image.alt} />
      ))}
    </Masonry>
  );
};
//---------------------------------------------------------------------------  
  return (
    <AnimatedPage>
    <div className='allbody'>
      <div className="background">
          <div className="app-container">
            <div className='gallerybackmain'>
              <div className='galleryback'>
                <Gallery images={imageObjects} />
              </div>
            </div>
    <br />
      <footer>
        <p>&copy; 2023 House of Leila | created by Zakhele Hakonze | All rights reserved.</p>
      </footer>
    <br />
          </div>
      </div>
    </div>
    </AnimatedPage>
  );
};
export default Gallery;
