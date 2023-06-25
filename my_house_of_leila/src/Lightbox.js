import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './index.css'; // Import the CSS file for styling

const Lightbox = ({ imageUrl, text, onClose }) => {
  return (
    <div className="lightbox">
      <div className="lightbox-content">
        {imageUrl && <img src={imageUrl} alt="Specials!!!" />}
        <p className="lightbox-text">{text}</p>
        <div className="button-container">
          <Button
            variant="contained" color="secondary"style={{backgroundColor: 'rgb(192, 136, 146)',color: 'white',borderColor: 'black',}}
            component={Link} to="/packages">
            View our packages
          </Button>
        </div>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
