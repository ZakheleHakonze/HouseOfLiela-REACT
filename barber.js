import React, { useState, useEffect  } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Contact from './contact';
import Gallery from './gallery';
import 'react-tabs/style/react-tabs.css';
import './styles.css'; // make sure to create this file in your project directory


const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };


  
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
//




  
  return (
    <div className="background">{circleElements}
    <div className="app-container">
      <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
        <TabPanel>
          <h1 className="center-textC">Barbershop Pricelist</h1>
          <p className="center-text">
            <ul className="left-aligned-list" style={{ textAlign: 'center', display: 'inline-block', fontSize: '20px'}}>
              <li>Adults haircut & shave K100 </li>
              <li>Adults haircut K80 </li>
              <li>Adults Shave K60 </li>
              <li>Caucasian Haircut K150 </li> 
              <li>Caucasian Haircut & Shave K180 </li>
              <li>Caucasian Shave K80 </li>
              <li>Caucasian Kids K120 </li>
              <li>Ladies haircut K150 </li>
              <li>Kids K80 </li>
              <li>Haircut and dying K250 </li>
            </ul>
          </p>
        </TabPanel>
      </Tabs>
    </div>
    </div>
  );
};

export default App;
