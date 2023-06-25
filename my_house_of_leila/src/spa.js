import React, { useState, useEffect, useRef   } from 'react';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import 'react-tabs/style/react-tabs.css';
import './styles.css'; // make sure to create this file in your project directory
import Footer from './footer';
import AnimatedPage from './AnimatedPage';
import Divider from '@mui/material/Divider';


const Spa = () => {
  const carouselContainerRef = useRef(null);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

const navigate = useNavigate(); // Create a navigate function 
// Random circle generation
const circleSizes = ['30px', '40px', '50px', '60px', '70px', '80px', '100px'];
const circleColors = ['#FFB6C1', '#FFB7C5', '#FFC1CC', '#F6909D', '#FC8EAC'];

const [circles, setCircles] = useState(Array.from({ length: 20 }, () => ({
  size: circleSizes[Math.floor(Math.random() * circleSizes.length)],
  color: circleColors[Math.floor(Math.random() * circleColors.length)],
  left: Math.floor(Math.random() * window.innerWidth),
  top: Math.floor(Math.random() * window.innerHeight),
  vx: Math.random() * 2 - 1,
  vy: Math.random() * 2 - 1,
})));

useEffect(() => {
  const interval = setInterval(() => {
    setCircles(circles => circles.map(circle => ({
      ...circle,
      left: circle.left + circle.vx,
      top: circle.top + circle.vy,
      vx: circle.left + circle.vx < 0 || circle.left + circle.vx > window.innerWidth ? -circle.vx : circle.vx,
      vy: circle.top + circle.vy < 0 || circle.top + circle.vy > window.innerHeight ? -circle.vy : circle.vy,
    })));
  }, 20);

  return () => clearInterval(interval);
}, []);

const circleElements = circles.map((circle, index) => (
  <div
    key={index}
    className="circle"
    style={{ width: circle.size, height: circle.size, backgroundColor: circle.color, left: circle.left, top: circle.top, zIndex: 1 }}
  />
));
/*----------------------------------------------------------------------------------------------------------*/  

const handleBackButtonClick = () => {
  navigate('/services'); // Redirect to 'ourservices' page
};


  return (
    <AnimatedPage>
    <div className="gallerybackmain">
      <div className="galleryback">
      <Button variant="contained" color="secondary" style={{ backgroundColor: 'pink', color: clicked ? 'white' : 'black', borderColor: clicked ? 'black' : 'pink' }} onClick={handleClick}>       
        <Link to="/services" style={{ textDecoration: 'none', color: 'inherit' }}>More Services</Link>
      </Button>
          <h1 className="center-textC" >Spa Treatment Pricelist</h1>
          <Divider sx={{ borderBottomWidth: '3px' }} variant="middle" />
          <p className="center-text"style={{columns: "1",fontSize: '20px'}}>
              <ul className="bold-text">Facials</ul>
              <ul className="bold-text">Regima</ul>
              <ul className="left-aligned-list" style={{ textAlign: 'left', display: 'inline-block', fontSize: '20px'}}>
                  <li>Regima chemical peel</li>
                  <li>A rejuvenating facial treatment using Regima products to nourish and revitalize your skin. Experience the benefits of advanced skincare techniques tailored to your skin type.</li>
                  <li>Duration:45 mins / 60 mins</li>
                  <li>Price:K500</li>
                  <br />

                  <li>Deep cleansing classic facial</li>
                  <li>Duration:45 mins / 60 mins</li>
                  <li>Price:K550</li>
                  <br />

                  <li>Anti-aging</li>
                  <li>Duration:45 mins / 60 mins</li>
                  <li>Price:K600</li>
                  <br />

                  <li>Hydrating facial</li>
                  <li>Duration:45mins / 60 mins</li>
                  <li>Price:K500</li>
                  <br />

              
              <ul className="bold-text">Himalaya</ul>
                  <li>Deep cleansing</li>
                  <li>Duration:45 min / 60 mins</li>
                  <li>Price:K400</li>
                  <br />

                  <li>Purifying</li>
                  <li>Duration:45 mins / 60 mins</li>
                  <li>Price:K350</li>
                  <br />

                  <li>Dermaplaning</li>
                  <li>Duration:40 mins</li>
                  <li>Price:K700</li>
                  <br />

              
              <ul className="bold-text">Manicure</ul>
                  <li>Express mani</li>
                  <li>Duration:20 mins</li>
                  <li>Price:K180</li>
                  <br />

                  <li>Deluxe mani</li>
                  <li>Duration:30 mins</li>
                  <li>Price:K200</li>
                  <br />

                  <li>Paraffin mani</li>
                  <li>Duration:45 mins</li>
                  <li>Price:K250</li>
                  <br />

                  <li>Junior mani</li>
                  <li>Duration:15 mins</li>
                  <li>Price:K100</li>
                  <br />

                  <li>Gel extension</li>
                  <li>Duration:90 mins</li>
                  <li>Price:K350</li>
                  <br />

                  <li>Rubber gel overlay</li>
                  <li>Duration:60 mins</li>
                  <li>Price:K350</li>
                  <br />

                  <li>Refill Nails</li>
                  <li>Duration:60 mins</li>
                  <li>Price:K250</li>
                  <br />

                  <li>Acrylic</li>
                  <li>Duration:90 mins</li>
                  <li>Price:K450</li>
                  <br />

                  <li>French acrylic</li>
                  <li>Duration:90 mins</li>
                  <li>Price:K400</li>
                  <br />

                  <li>Art on finger</li>
                  <li>Price:K20</li>
                  <br />

                  <li>Soak off gel</li>
                  <li>Duration:30 mins</li>
                  <li>Price:K50</li>
                  <li>Duration:60 mins</li>
                  <li>Price:K100</li>
                  <br />

                  <li>Soak off acrylic</li>
                  <li>Duration:30 mins</li>
                  <li>Price:K100</li>
                  <li>Duration:60 mins</li>
                  <li>Price:K150</li>
                  <br />

                  <li>Mani &amp; Pedi combo</li>
                  <li>Duration:60 mins</li>
                  <li>Price:K400</li>
                  <br />

                  <li>Nail art set</li>
                  <li>Price:K120</li>
                  <br />

                  <li>Nail fix</li>
                  <li>Price:K20</li>
                  <br />

                  <li>Ibx nail strengthening treatment</li>
                  <li>Duration:20 mins</li>
                  <li>Price:K150</li>
                  <br />

                  <li>Ibx add on</li>
                  <li>Duration:20 mins</li>
                  <li>Price:K100</li>
                  <br />

              <ul className="bold-text">Massages</ul>
                  <li>Thai massage</li>
                  <li>Price:K900</li>
                  <br />

                  <li>Swedish</li>
                  <li>Duration:60 mins</li>
                  <li>Price:K450</li>
                  <br />

                  <li>Deep tissue</li>
                  <li>Duration:60 mins</li>
                  <li>Price:K550</li>
                  <br />

                  <li>Hot stone</li>
                  <li>Duration:60 mins</li>
                  <li>Price:K600</li>
                  <br />

                  <li>Foot massage</li>
                  <li>Duration:30 mins</li>
                  <li>Price:K250</li>
                  <br />

                  <li>Aromatherapy</li>
                  <li>Duration:60 mins</li>
                  <li>Price:K500</li>
                  <br />

                  <li>Half body</li>
                  <li>Duration:30 mins</li>
                  <li>Price:K350</li>
                  <br />

                  <li>Hot towel massage</li>
                  <li>Price:K600</li>
                  <br />

                  <li>Add on hot towel massage</li>
                  <li>Duration:60 mins</li>
                  <li>Price:K600</li>
                  <br />

                  <li>Back & neck massage</li>
                  <li>Duration:30 mins</li>
                  <li>Price:K350</li>
                  <br />

              
              <br />
              <br />
              <ul className="bold-text">Body treatments</ul>
                  <li>Body scrub</li>
                  <li>Duration:30 mins</li>
                  <li>Price:K350</li>
                  <br />

                  <li>crub & massage</li>
                  <li>Duration:90 mins</li>
                  <li>Price:K750</li>
                  <br />

              </ul>
              <ul className="bold-text">Pedicure</ul>
              <ul className="left-aligned-list" style={{ textAlign: 'center', display: 'inline-block', fontSize: '20px'}}>
                  <li>Express Pedi</li>
                  <li>Duration:30 mins</li>
                  <li>Price:K200</li>
                  <br />

                  <li>Deluxe Pedi</li>
                  <li>Duration:60 mins</li>
                  <li>Price:K250</li>
                  <br />

                  <li>Paraffin Pedi</li>
                  <li>Duration:65 mins</li>
                  <li>Price:K300</li>
                  <br />

                  <li>Gel add on</li>
                  <li>Price:K100</li>
                  <br />

                  <li>Add Pedi peel</li>
                  <li>Price:K100</li>
                  <br />

                  <li>Rubber gel</li>
                  <li>Price:K100</li>
                  <br />

              </ul>
              <ul className="bold-text">Waxing / Threading</ul>
              <ul className="left-aligned-list" style={{ textAlign: 'left', display: 'inline-block', fontSize: '20px'}}>
                  <li>Eyebrow</li>
                  <li>Price:K100</li>
                  <br />

                  <li>Chin wax</li>
                  <li>Price:K100</li>
                  <br />

                  <li>Lip</li>
                  <li>Price:K100</li>
                  <br />

                  <li>Full face</li>
                  <li>Price:K300</li>
                  <br />

                  <li>Underarm</li>
                  <li>Duration:10 mins</li>
                  <li>Price:K150</li>
                  <br />

                  <li>Full arm</li>
                  <li>Duration:20 mins</li>
                  <li>Price:K300</li>
                  <br />

                  <li>Half arm</li>
                  <li>Duration:15 mins</li>
                  <li>Price:K200</li>
                  <br />

                  <li>Tummy</li>
                  <li>Duration:30 mins</li>
                  <li>Price:K150</li>
                  <br />

                  <li>Eyebrow threading</li>
                  <li>Price:K150</li>
                  <br />


                  <li>Eyebrow thread & tint</li>
                  <li>Price:K200</li>
                  <br />

                  <li>Full face thread</li>
                  <li>Price:K250</li>
                  <br />

                  <li>Chin thread</li>
                  <li>Price:K100</li>
                  <br />


                  <li>Upper lip thread</li>
                  <li>Price:K100</li>
                  <br />

                  <li>Brow tint only</li>
                  <li>Price:K100</li>
                  <br />

                  <li>Full leg</li>
                  <li>Duration:45 mins</li>
                  <li>Price:K400</li>
                  <br />

                  <li>Half leg</li>
                  <li>Duration:30 mins</li>
                  <li>Price:K300</li>
                  <br />

                  <li>Bikini</li>
                  <li>Duration:20 mins</li>
                  <li>Price:K250</li>
                  <br />

                  <li>Brazilian</li>
                  <li>Duration:25 mins</li>
                  <li>Price:K400</li>
                  <br />

                  <li>Hollywood</li>
                  <li>Duration:35 mins</li>
                  <li>Price:K400</li>
                  <br />

                  <li>Full back</li>
                  <li>Duration:40 mins</li>
                  <li>Price:K500</li>
                  <br />

                  <li>Chest</li>
                  <li>Duration:30 mins</li>
                  <li>Price:K350</li>
                  <br />

                  <ul>Vagacial</ul>
                  <li>Vagacial</li>
                  <li>Duration:30 mins</li>
                  <li>Price:K250</li>


              </ul>
              <ul className="bold-text">Teens’/ Kids</ul>
              <ul className="left-aligned-list" style={{ textAlign: 'left', display: 'inline-block', fontSize: '20px'}}>
                  <li>Teen’s Pedi</li>
                  <li>Duration:45 mins</li>
                  <li>Price:K150</li>
                  <br />

                  <li>Teen’s mani</li>
                  <li>Duration:30 mins</li>
                  <li>Price:K150</li>
                  <br />

                  <li>Teen’s facial</li>
                  <li>Price:K200</li>
                  <br />

                  <li>Teen’s massage</li>
                  <li>Price:K200</li>
                  <br />

                  <li>Teen’s package (massage, mani & Pedi)</li>
                  <li>Price:K600</li>
                  <br />

                  <li>Kids facial</li>
                  <li>Price:K180</li>
                  <br />

                  <li>Kids massage</li>
                  <li>Price:K180</li>
                  <br />

                  <li>Kids package (massage, mani & Pedi)</li>
                  <li>Price:K500</li>

              </ul>
          </p>
      </div>
      <Footer/>
    </div>
    </AnimatedPage>
  );
};

export default Spa;
