import React from 'react';
import InstagramLink from './InstagramLink';
import FacebookLink from './FacebookLink';
import WhatsAppLink from './WhatsAppLink';
import Divider from '@mui/material/Divider';


const Footer = () => {
    return (
      <footer className="line-di">
        <Divider sx={{ borderBottomWidth: '1px', borderColor: 'black' }} variant="middle" />
        <InstagramLink/> <FacebookLink/> <WhatsAppLink/>
        <p>&copy; 2023 House of Leila | created by Zakhele Hakonze | All rights reserved.</p>
      </footer>
    );
  };
export default Footer;