import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FiMenu } from 'react-icons/fi';
import Contact from './contact';
import Gallery from './gallery';
import Ourservices from './ourservices';
import Home from './home';

const Header = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /*-------------------------------------------------*/
  
  /*-------------------------------------------------*/

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
        setIsMobileMenuOpen(false); // Close mobile menu on desktop view
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="header">
      {isMobileView ? (
        <div className="mobile-menu">
          <FiMenu className="menu-icon" onClick={handleMobileMenuToggle} />
        </div>
      ) : null}
      {isMobileView ? (
        <div className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="sidebar-menu">
            <li onClick={() => setActiveTab(0)}>Home</li>
            <li onClick={() => setActiveTab(1)}>Our Services</li>
            <li onClick={() => setActiveTab(2)}>Gallery</li>
            <li onClick={() => setActiveTab(3)}>Contact Us</li>
          </ul>
        </div>
      ) : (
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
            <Gallery />
          </TabPanel>

          <TabPanel>
            <Contact />
          </TabPanel>
        </Tabs>
      )}
    </div>
  );
};

export default Header;

