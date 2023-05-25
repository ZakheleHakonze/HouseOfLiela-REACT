import React, { useState, useEffect } from 'react';
import logo from './images/logo.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Contact from './contact';
import Gallery from './gallery';
import Spa from './spa';
import Glutathione from './glutathione';
import Laser from './laser';
import Barber from './barber';
import Hair from './hair';
import 'react-tabs/style/react-tabs.css';
import './styles.css'; // make sure to create this file in your project directory
import Ourservices from './ourservices';
import Home from './home';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo" className="logo" style={{ width: '100px', height: 'auto' }} />
      <nav>
        <Tabs>
          <TabList>
            <Tab>Home</Tab>
            <Tab>Our Services</Tab>
            <Tab>Gallery</Tab>
            <Tab>Contact Us</Tab>
          </TabList>
        </Tabs>
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2023 Spa & Beauty. All rights reserved.</p>
    </footer>
  );
};

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
      style={{ width: circle.size, height: circle.size, backgroundColor: circle.color, left: circle.left, top: circle.top, zIndex: 2 }}
    />
  ));

  const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  
  return (
    <div className='allbody'>
      <div className="background">
    <img src={logo} alt="Logo" className="logo" style={{ width: '100px', height: 'auto' }} />
        <div className="app-container">
          <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
            <TabList>
              <Tab>Home</Tab>
              <Tab>Our Services</Tab>
              <Tab>Gallery</Tab>
              <Tab>Contact Us</Tab>
            </TabList>
      
            <TabPanel>  
              <Home />
            </TabPanel>
      
            <TabPanel>
              <Ourservices />
            </TabPanel>
      
            <TabPanel>
              <Gallery/>
            </TabPanel>
      
            <TabPanel>
              <Contact />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default App;

