import React, { useState, useEffect  } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Contact from './contact';
import Gallery from './gallery';
import Spa from './spa';
import Glutathione from './glutathione';
import Laser from './laser';
import ButtonWithImage from './ButtonWithImage';
import Barber from './barber';
import Hair from './hair';
import 'react-tabs/style/react-tabs.css';
import './styles.css'; // make sure to create this file in your project directory



const Ourservices = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

const [showSpa, setShowSpa] = useState(false);

function handleButtonClick() {
    setShowSpa(true);
  }

  return (
    <div className='allbody'>
      <div className="background">
          <div className="app-container">
            <div className='gallerybackmain'>
              <div className='galleryback'>
                <div className="tabs-containerb">
                  <ButtonWithImage
                    text="Spa Treatment"
                    imageSrc={require('./images/spa.jpg')}
                    onClick={() => alert('Button clicked')}
                  />
                  <ButtonWithImage
                    text="Hair"
                    imageSrc={require('./images/hair.jpg')}
                    onClick={() => alert('Button clicked')}
                  />
                  <ButtonWithImage
                    text="Glutathione"
                    imageSrc={require('./images/glu.jpg')}
                    onClick={() => alert('Button clicked')}
                  />
                  <ButtonWithImage
                    text="Laser"
                    imageSrc={require('./images/laser.jpg')}
                    onClick={() => alert('Button clicked')}
                  />
                  <ButtonWithImage
                    text="Barbershop"
                    imageSrc={require('./images/bshop.jpg')}
                    onClick={() => alert('Button clicked')}
                  />
                </div>
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

export default Ourservices;
