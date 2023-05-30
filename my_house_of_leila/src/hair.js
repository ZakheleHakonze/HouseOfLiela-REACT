import React, { useState, useEffect  } from 'react';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import 'react-tabs/style/react-tabs.css';
import './styles.css'; // make sure to create this file in your project directory
import Footer from './footer';
import AnimatedPage from './AnimatedPage';



const Hair = () => { 
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
//-------------------------------------------------------------------------------------------
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
          <h1 className="center-textC">Hair Salon Pricelist</h1>
          <p className="center-text" style={{columns: "1", fontSize: '20px'}}>
              <ul className="bold-text">Hair treatments</ul>
              <ul className="left-aligned-list" style={{ textAlign: 'center', display: 'inline-block', fontSize: '20px'}}>
                  <li>Cantu K350</li>
                  <li>Dr miracles K380</li>
                  <li>Motion K300</li>
                  <li>Cholesterol K350</li>
                  <li>Hot oil K380</li>
                  <li>Aunt jackie’s K350</li>
                  <li>Henna K300</li>
                  <li>Mizani K550</li>
                  <li>Weave novel K400</li>
                  <li>Optimums K300</li>
                  <li>Hair mayonnaise K300</li>
                  <li>Olive oil K300</li>
              </ul>
              <ul className="bold-text">Cornrows and braids</ul>
              <ul className="left-aligned-list" style={{ textAlign: 'center', display: 'inline-block', fontSize: '20px'}}>
                  <li>Fishtail with braids K450</li>
                  <li>Plan fishtail K300 / K350</li>
                  <li>Cornrow (small) K200</li>
                  <li>Cornrow’s</li>
                    <li>with wig K300</li>
                    <li>without wig K200</li>
                  <li>Braids K350 / K800</li>
                  <li>Knotless braids K550 / K800</li>
                  <li>Natural twists K300</li>
                  <li>Big cornrows K200 / K250</li>
                  <li>Bambina’s K200</li>
                  <li>Under wig cornrow’s with wash K200 / K300</li>
                  <li>Unplaiting K150</li>
              </ul>
              <ul className="bold-text">Caucasian hair</ul>
              <ul className="left-aligned-list" style={{ textAlign: 'center', display: 'inline-block', fontSize: '20px'}}>
                  <li>Wash and blow-dry K350</li>
                  <li>Hair cut K350</li>
                  <li>Hair cut K450</li>
                  <li>Treatment K350 / 700</li>
                  <li>Blow-dry and Straighten K450</li>
                  <li>Tinting K400 - K600 – K1000 – K1500</li>
              </ul>
              <br />
              <ul className="bold-text">Relaxers</ul>
              <ul className="left-aligned-list" style={{ textAlign: 'center', display: 'inline-block', fontSize: '20px'}}>
                  <li>Beautiful beginning’s K400</li>
                  <li>Dark and lovely K400</li>
                  <li>Olive oil K400</li>
                  <li>Mizani K700 / K1000</li>
                  <li>Motions K350</li>
                  <li>Dr miracles K450</li>
                  <li>Weave navel K550 / K650</li>
                  <li>S curl K300</li>
                  <li>Cream of nature K450</li>

                  <li>Optimum’s K350</li>
              </ul>
              <ul className="bold-text">Weaves</ul>
              <ul className="left-aligned-list" style={{ textAlign: 'center', display: 'inline-block', fontSize: '20px'}}>
                  <li>Open weave and closure K350</li>
                  <li>Weave with closure K400</li>
                  <li>Wig making K400</li>
                  <li>Ponytail styling K350</li>
                  <li>Wash and set K200</li>
                  <li>Wash and blow K200</li>
                  <li>Wrap and tone K350</li>
                  <li>Wig washing K300</li>
                  <li>Steam pod with wash K300 / K350</li>
                  <li>Steam pod only K200</li>
                  <li>Steam pod wig K250</li>
                  <li>Hair cut K250</li>
                  <li>Hair trimming K100 / K200</li>
                  <li>Wig styling K300 with wash K400</li>
                  <li>Crochet K300</li>
                  <li>Faux loc’s K500 – K700</li>
                  <li>Butterfly K450 – K600</li>
                  <li>Peroxide K200 – K500</li>
                  <li>Bleaching K200 – K500</li>
                  <li>Wash and shaggy K250</li>
                  <li>Razor cut K400</li>
                  <li>Tinting K200 – K300</li>
               </ul>
               <ul className="bold-text">Bridal hair styling</ul>
               <ul className="left-aligned-list" style={{ textAlign: 'center', display: 'inline-block', fontSize: '20px'}}>
                  <li>Styling K350</li>
                  <li>Kids Styling K250</li>
               </ul>
          </p>
      </div>
      <Footer/>
    </div>
    </AnimatedPage>
  );
};

export default Hair;
