import React, { useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const Imgplace  = ({ src, alt }) => {
    const [isImageLoaded, setImageLoaded] = useState(false);
  
    const handleImageLoad = () => {
      setImageLoaded(true);
    };
  
    return (
      <div className="image-card">
        {!isImageLoaded && <Skeleton variant="text" sx={{ fontSize: '1rem' }} />} 
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
