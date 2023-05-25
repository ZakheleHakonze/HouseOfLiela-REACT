import React, { useState, useEffect  } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './styles.css'; // make sure to create this file in your project directory


const Home = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };
  
  return (
    <div className='allbody'>
      <div className="background">
          <div className="app-container">
            <div className='gallerybackmain'>
              <div className='galleryback'>
              <ul className="left-aligned-list" style={{ textAlign: 'left', display: 'inline-block' }}>
                  <li>HOME (45/60) K500</li>
              </ul> 
              </div>
            </div>
    <br />
      <footer>
        <p>&copy; 2023 House of Leila | created by Zakhele Hakonze | All rights reserved.</p>
      </footer>
    <br />
          </div>
      </div>
    </div>
  );
};
export default Home;
