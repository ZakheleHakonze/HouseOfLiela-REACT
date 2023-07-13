import React from 'react';
import InstagramLink from './InstagramLink';
import FacebookLink from './FacebookLink';
import WhatsAppLink from './WhatsAppLink';
import Divider from '@mui/material/Divider';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';



const Footer = () => {
    return (
      <footer className="line-di">
        <Divider sx={{ borderBottomWidth: '1px', borderColor: 'black' }} variant="middle" />
        <li style={{ textDecoration: 'underline', textAlign: 'center', fontWeight: 'bold', listStyleType: 'none'}}>Services</li>
        <div style={{ columnCount: 2, listStyleType: 'none' }}>
          <li><Link to="/spa" style={{ textDecoration: 'none', color: 'black' }}>Spa treatments</Link></li>
          <li><Link to="/hair" style={{ textDecoration: 'none', color: 'black' }}>Hair treatments</Link></li>
          <li><Link to="/glutathione" style={{ textDecoration: 'none', color: 'black' }}>Glutathione treatments</Link></li>

          <li><Link to="/laser" style={{ textDecoration: 'none', color: 'black' }}>Laser hair removal</Link></li>
          <li><Link to="/barbershop" style={{ textDecoration: 'none', color: 'black' }}>Men's grooming</Link></li>
          <li><Link to="/packages" style={{ textDecoration: 'none', color: 'black' }}>Packages</Link></li>
        </div>
        <li style={{ textDecoration: 'none', textAlign: 'center', fontWeight: 'bold', listStyleType: 'none'}}>Call us on +260 96 0753333</li>
        <InstagramLink/> <FacebookLink/> <WhatsAppLink/>
        <p>&copy; 2023 House of Leila | All rights reserved | powered by{' '}<a href="https://www.instagram.com/zdh_art/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>zdharts</a>{' '} .</p>
      </footer>
    );
  };
export default Footer;