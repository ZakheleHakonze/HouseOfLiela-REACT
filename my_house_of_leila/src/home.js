import React, { useState, useEffect  } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AutomaticCarousel from './automaticcarousel';
import Footer from './footer';
import 'react-tabs/style/react-tabs.css';
import './styles.css'; // make sure to create this file in your project directory
import './index.css';
import AnimatedPage from './AnimatedPage';
import Header from './header';


const Home = () => {  
  return (
    <AnimatedPage>
    <div>
      <div>
          <div>
            <div className='gallerybackmain'>
              <div className='galleryback'>
              <ul className="left-aligned-list" style={{ textAlign: 'left', display: 'inline-block' }}>
                  <li>Discover the secrets of timeless appeal, As we enhance your features with utmost zeal. At our beauty spa, dreams come alive, Where confidence and elegance thrive.</li>
              </ul> 
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
export default Home;
