import React, { useState, useEffect  } from 'react';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './styles.css'; // make sure to create this file in your project directory
import Footer from './footer';
import AnimatedPage from './AnimatedPage';
import logo from './images/logo/logo2.png';



const Contact = () => {
  return (
    <AnimatedPage>
    <div>
      <div>
        <div>
          <div className='gallerybackmain' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className='galleryback'>
            <ul style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', textAlign: 'center'}}>We would love to hear from you! If you have any questions, inquiries, or feedback, please don't hesitate to reach out to us. Our dedicated team is ready to assist you in any way we can.</ul> 
            <br/>
              <p  style={{ textAlign: 'center'}}>
              <ul style={{ fontWeight: 'bold' }}>Business Hours</ul>
                <ul>Saturday	9 am–6 pm</ul>
                <ul>Sunday	10 am–3 pm</ul>
                <ul>Monday - Friday  9 am–6 pm</ul>
                <br />
              <ul className="bold-text">Public Holidays	Hours might differ</ul>
                <br />
                <div className="log logo-flip">
                  <img src={logo} alt="Log" style={{ width: '72px', height: '72px' }} />
                </div>
                <br />
              <ul className="bold-text">Visit us at our location:</ul>
              <ul><LocationOnIcon/>38 Mpulungu Road, Olympia park, Lusaka, Zambia.</ul>
                <br />
              <ul className="bold-text">Contact us on:</ul>
              <ul><CallIcon/> +260 96 0753333</ul>
              <p>
                We value your input and look forward to serving you. Feel free to contact us anytime!
              </p>
            </p>
            </div>
          </div>
          <br />
            <Footer/>
          <br />
        </div>
    </div>
  </div>
  </AnimatedPage>
);
};
export default Contact;


/*

 <div className='allbody'>
      <div className="background">
        <div className="left-aligned-list">   
          <ul className="left-aligned-list" style={{ textAlign: 'center', display: 'inline-block' }}>
          <ul>Tell us about your wellness needs or just say hello. Whether you need a simple spa treatment or SPArty, we are here to deliver the Wellness Revolution.</ul>
          <ul className="bold-text">Working Hours</ul>
          <ul>Saturday	9 am–6 pm</ul>
          <ul>Sunday	10 am–3 pm</ul>
          <ul>Monday  9 am–6 pm</ul>
          <ul>Tuesday	9 am–6 pm</ul>
          <ul>Wednesday	9 am–6 pm</ul>
          <ul>Thursday	9 am–6 pm</ul>
          <ul>Friday	9 am–6 pm</ul>
          <br />
          <ul className="bold-text">Public Holidays	Hours might differ</ul>
          <br />
          <br />
          <ul className="bold-text">Location:</ul>
          <ul>38 Mpulungu Road, Olympia park, Lusaka, Zambia.</ul>
      <br />
      <ul className="bold-text">Contact us on: +260 96 0753333</ul>
      </ul>                
        </div>
    <footer>
    <p>&copy; 2023 House of Leila | created by Zakhele Hakonze | All rights reserved.</p>
    </footer>
      </div>
    </div>




*/