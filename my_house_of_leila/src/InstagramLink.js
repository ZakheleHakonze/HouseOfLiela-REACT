import React from 'react';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';

function InstagramLink() {
  const instagramURL = 'https://www.instagram.com/houseofleilazm/';

  return (
    <IconButton
      aria-label="Instagram"
      component="a"
      href={instagramURL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <InstagramIcon />
    </IconButton>
  );
}

export default InstagramLink;
