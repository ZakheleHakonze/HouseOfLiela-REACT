import React from 'react';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';

function FacebookLink() {
  const facebookURL = 'https://www.facebook.com/houseofleila/';

  return (
    <IconButton
      aria-label="Facebook"
      component="a"
      href={facebookURL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FacebookIcon />
    </IconButton>
  );
}

export default FacebookLink;
