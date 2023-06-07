import React from 'react';
import InstagramLink from './InstagramLink';
import FacebookLink from './FacebookLink';
import WhatsAppLink from './WhatsAppLink';

const Footer = () => {
    return (
      <footer className="line-div">
        <InstagramLink/> <FacebookLink/> <WhatsAppLink/>
        <p>&copy; 2023 House of Leila | created by Zakhele Hakonze | All rights reserved.</p>
      </footer>
    );
  };
export default Footer;