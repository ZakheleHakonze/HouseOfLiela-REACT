import React, { useState, useEffect  } from 'react';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import 'react-tabs/style/react-tabs.css';
import './styles.css'; // make sure to create this file in your project directory
import Footer from './footer';
import AnimatedPage from './AnimatedPage';



const Glutathione = () => {
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
//-----------------------------------------------------------------------------------------------------
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
          <h1 className="center-textC">Glutathione Drip Bar Pricelist</h1>
          <p className="center-text">
            <ul className="left-aligned-list" style={{ textAlign: 'center', display: 'inline-block', fontSize: '20px'}}>
              <li>Skin Brighten K1400 
                <li>Benefits:</li> 
                  <li>Skin Brightening</li>
              </li> 
              <li>Rejuvenate K1200
                <li>Benefits: 
                  <li>Health & Detoxification Organ cleansing</li>
                </li>
              </li>
              <li>Elite Energizer K1200
                <li>Benefits:</li>
                  <li>Increased mental focus</li>
                  <li>Boosts energy</li>
                  <li>Benefits weight loss</li>
              </li>
              <li>Immune Defense K1200
                <li>Benefits:</li> 
                  <li>Improved immunity</li>
                  <li>Enables body's stress relief ability</li>
                  <li>Protects against airborne diseases</li>
              </li>
              <li>Serenity K1200
                <li>Benefits:</li>
                  <li>Stress</li>
                  <li>Calming</li>
                  <li>Adrenals</li>
                  <li>Migraines</li>
              </li>
              <li>Vita Blend K1200
                <li>Benefits:</li> 
                  <li>Stress relief</li>
                  <li>Increased immunity</li> 
                  <li>Mind & body balance</li>
              </li>
            </ul>
          </p>
      </div>
      <Footer/>
    </div>
    </AnimatedPage>
  );
};

export default Glutathione;
