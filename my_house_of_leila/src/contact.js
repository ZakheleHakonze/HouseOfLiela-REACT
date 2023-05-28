import React, { useState, useEffect  } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './styles.css'; // make sure to create this file in your project directory
import Footer from './footer';


const Contact = () => {
  return (
    <div>
      <div>
        <div>
          <div className='gallerybackmain'>
            <div className='galleryback'>
            <ul style={{ textAlign: 'center', display: 'inline-block'}}>Tell us about your wellness needs or just say hello. Whether you need a simple spa treatment or SPArty, we are here to deliver the Wellness Revolution.</ul> 
              <p  style={{ textAlign: 'center'}}>
              <ul style={{ fontWeight: 'bold' }}>Working Hours</ul>
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
            </p>
            </div>
          </div>
          <br />
            <Footer/>
          <br />
        </div>
    </div>
  </div>
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