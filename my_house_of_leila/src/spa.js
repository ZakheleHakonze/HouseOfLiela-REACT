import React, { useState, useEffect  } from 'react';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Contact from './contact';
import Gallery from './gallery';
import 'react-tabs/style/react-tabs.css';
import './styles.css'; // make sure to create this file in your project directory
import Footer from './footer';
import AnimatedPage from './AnimatedPage';


const Spa = () => {

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
    <div className="gallerybackmain">{circleElements}
      <div className="galleryback">
      <button className="back-button" onClick={handleBackButtonClick}>
          <RiArrowGoBackLine className="back-icon" />
      </button>
          <h1 className="center-textC" >Spa Treatment Pricelist</h1>
          <p className="center-text"style={{columns: "1",fontSize: '20px'}}>
              <ul className="bold-text">Facials</ul>
              <ul className="bold-text">Regima</ul>
              <ul className="left-aligned-list" style={{ textAlign: 'center', display: 'inline-block', fontSize: '20px'}}>
                  <li>Regima chemical peel (45/60) K500</li>
                  <li>Deep cleansing classic facial (45/60) K550</li>
                  <li>Anti-aging (45/60) K600</li>
                  <li>Hydrating facial (45/60) K500</li>
              </ul>
              <ul className="bold-text">Himalaya</ul>
              <ul className="left-aligned-list" style={{ textAlign: 'center', display: 'inline-block', fontSize: '20px'}}>
                  <li>Deep cleansing(45/60) K400</li>
                  <li>Purifying (45/60) K350</li>
                  <li>Dermaplaning (40) K700</li>
              </ul>
              <ul className="bold-text">Manicure</ul>
              <ul className="left-aligned-list" style={{ textAlign: 'center', display: 'inline-block', fontSize: '20px'}}>
                  <li>Express mani (20) K180</li>
                  <li>Deluxe mani (30) K200</li>
                  <li>Paraffin mani (45) K250</li>
                  <li>Junior mani (15) K100</li>
                  <li>Gel extension (90) K350</li>
                  <li>Rubber gel overlay (60) K350</li>
                  <li>Refill Nails (60) K250</li>
                  <li>Acrylic (90) K450</li>
                  <li>French acrylic (90) K400</li>
                  <li>Art on finger K20</li>
                  <li>Soak off gel (30) K50 / K100</li>
                  <li>Soak off acrylic (30) K100 / K150</li>
                  <li>Mani &amp; Pedi combo (60) K400</li>
                  <li>Nail art set K120</li>
                  <li>Nail fix K20</li>
                  <li>Ibx nail strengthening treatment (20) K150</li>
                  <li>Ibx add on (20) K100</li>
              </ul>
              <ul className="bold-text">Massages</ul>
              <ul className="left-aligned-list" style={{ textAlign: 'center', display: 'inline-block', fontSize: '20px'}}>
                  <li>Thai massage K900</li>
                  <li>Swedish (60) K450</li>
                  <li>Deep tissue (60) K550</li>
                  <li>Hot stone (60) K600</li>
                  <li>Foot massage (30) K250</li>
                  <li>Aromatherapy (60) K500</li>
                  <li>Half body (30) K350</li>
                  <li>Hot towel massage K600</li>
                  <li>Add on hot towel massage (60) K600</li>
                  <li>Back & neck massage (30) K350</li>
              </ul>
              <br />
              <br />
              <ul className="bold-text">Body treatments</ul>
              <ul className="left-aligned-list" style={{ textAlign: 'center', display: 'inline-block', fontSize: '20px'}}>
                  <li>Body scrub (30) K350</li>
                  <li>crub & massage (90) K750</li>
              </ul>
              <ul className="bold-text">Pedicure</ul>
              <ul className="left-aligned-list" style={{ textAlign: 'center', display: 'inline-block', fontSize: '20px'}}>
                  <li>Express Pedi (30) K200</li>
                  <li>Deluxe Pedi (60) K250</li>
                  <li>Paraffin Pedi (65) K300</li>
                  <li>Gel add on K100</li>
                  <li>Add Pedi peel K100</li>
                  <li>Rubber gel K100</li>
              </ul>
              <ul className="bold-text">Waxing / Threading</ul>
              <ul className="left-aligned-list" style={{ textAlign: 'center', display: 'inline-block', fontSize: '20px'}}>
                  <li>Eyebrow K100</li>
                  <li>Chin wax K100</li>
                  <li>Lip K100</li>
                  <li>Full face K300</li>
                  <li>Underarm (10) K150</li>
                  <li>Full arm (20) K300</li>
                  <li>Half arm (15) K200</li>
                  <li>Tummy (30) K150</li>
                  <li>Eyebrow threading K150</li>
                  <li>Eyebrow thread & tint K200</li>
                  <li>Full face thread K250</li>
                  <li>Chin thread K100</li>
                  <li>Upper lip thread K100</li>
                  <li>Brow tint only K100</li>
                  <li>Full leg (45) K400</li>
                  <li>Half leg (30) K300</li>
                  <li>Bikini (20) K250</li>
                  <li>Brazilian (25) K400</li>
                  <li>Hollywood (35) K400</li>
                  <li>Full back (40) K500</li>
                  <li>Chest (30) K350</li>
                  <ul>Vagacial</ul>
                  <li>Vagacial (30) K250</li>
              </ul>
              <ul className="bold-text">Teens’/ Kids</ul>
              <ul className="left-aligned-list" style={{ textAlign: 'center', display: 'inline-block', fontSize: '20px'}}>
                  <li>Teen’s Pedi (45) K150</li>
                  <li>Teen’s mani (30) K150</li>
                  <li>Teen’s facial K200</li>
                  <li>Teen’s massage K200</li>
                  <li>Teen’s package (massage, mani & Pedi) K600</li>
                  <li>Kids facial K180</li>
                  <li>Kids massage K180</li>
                  <li>Kids package (massage, mani & Pedi) K500</li>
              </ul>
          </p>
      </div>
      <Footer/>
    </div>
    </AnimatedPage>
  );
};

export default Spa;
