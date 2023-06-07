import React from 'react';
import IconButton from '@mui/material/IconButton';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function WhatsAppLink() {
  const whatsappNumber = '+260960753333';
  const whatsappMessage = 'Hi House of Leila, I would like to make a booking for [Time], any avaliable slots for that time?';

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <IconButton aria-label="WhatsApp" onClick={handleWhatsAppClick}>
      <WhatsAppIcon />
    </IconButton>
  );
}

export default WhatsAppLink;
