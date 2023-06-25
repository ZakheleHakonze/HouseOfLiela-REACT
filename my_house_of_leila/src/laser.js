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


const Laser = () => {
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
//-------------------------------------------------------------------------------------
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
          <h1 className="center-textC">Laser Hair Removal Pricelist</h1>
          <Divider sx={{ borderBottomWidth: '3px' }} variant="middle" />
          <p className="center-text">
            <ul className="left-aligned-list" style={{ textAlign: 'center', display: 'inline-block', fontSize: '20px'}}>
              <li>Full face K600</li>
              <li>Full back K1500</li>
              <li>Chin K300</li>
              <li>Bikini K600</li>
              <li>Upper lip K200</li>
              <li>Brazilian K900</li>
              <li>Underarm K500</li>
              <li>Hollywood K1000</li>
              <li>Neck K350</li>
              <li>Chest K500</li>
              <li>Full Leg K1200</li>
              <li>Tummy line K300</li>
              <li>Half leg K700</li>
              <li>Full tummy K600</li>
              <li>Full arm K1000</li>
              <li>Knee K200</li>
              <li>Half arm K500</li>
              <li>Full buttocks K700</li>
            </ul>
            <ul className="bold-text">10% OFF ON FULL BODY LASER</ul>
          </p>
      </div>
      <Footer/>
    </div>
    </AnimatedPage>
  );
};

export default Laser;
