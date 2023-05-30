import React, { useState } from 'react';

const Imgplace  = ({ src, alt }) => {
    const [isImageLoaded, setImageLoaded] = useState(false);
  
    const handleImageLoad = () => {
      setImageLoaded(true);
    };
  
    return (
      <div className="image-card">
        {!isImageLoaded && <div className="placeholder" />}
        <img
          src={src}
          alt={alt}
          onLoad={handleImageLoad}
          style={{ display: isImageLoaded ? 'block' : 'none' }}
        />
      </div>
    );
  };

export default Imgplace;
