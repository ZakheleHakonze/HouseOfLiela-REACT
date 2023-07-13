import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import 'react-tabs/style/react-tabs.css';
import AnimatedPage from './AnimatedPage';
import Footer from './footer';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './styles.css'; // make sure to create this file in your project directory

const Gallery = () => {
  const images = require.context('./images/gallery/', false, /\.(png|jpe?g|svg)$/);
  const imageObjects = images.keys().map((image) => ({
    src: images(image),
    alt: image.slice(2),
  }));

  const [currentImage, setCurrentImage] = useState(null);

  const openImage = (image) => {
    setCurrentImage(image);
  };

  const closeImage = () => {
    setCurrentImage(null);
  };

  const navigateImages = (direction) => {
    const currentIndex = imageObjects.findIndex((image) => image.src === currentImage.src);
    const newIndex = (currentIndex + direction + imageObjects.length) % imageObjects.length;
    setCurrentImage(imageObjects[newIndex]);
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <AnimatedPage>
      <div>
        <div>
          <div>
            <div className="gallerybackmain" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div className="galleryback">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="gallery-masonry"
                  columnClassName="gallery-masonry-column"
                >
                  {imageObjects.map((image, index) => (
                    <div key={image.src} className="clickable-image" onClick={() => openImage(image)}>
                      <img src={image.src} alt={image.alt} />
                    </div>
                  ))}
                </Masonry>
              </div>
            </div>
            {currentImage && (
              <div className="image-overlay">
                <div className="image-container">
                  <button className="leftBut" onClick={() => navigateImages(-1)}><ArrowBackIcon sx={{color:'white'}}/></button>
                  <img src={currentImage.src} alt={currentImage.alt} className="centered-image" />
                  <button className="rightBut" onClick={() => navigateImages(1)}><ArrowForwardIcon sx={{color:'white'}}/></button>
                  <button className="close-button" onClick={closeImage}><CloseIcon sx={{color:'white'}}/></button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </AnimatedPage>
  );
};

export default Gallery;
