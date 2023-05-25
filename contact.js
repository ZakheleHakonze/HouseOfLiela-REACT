import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ContactForm from './ContactForm';
import SuccessMessage from './SuccessMessage';
import './styles.css';

const Contact = () => {
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
              <div className="left-aligned-list">
                <ul className="left-aligned-list" style={{ textAlign: 'center', display: 'inline-block' }}>
                  <ul>Tell us about your wellness needs or just say hello. Whether you need a simple spa treatment or SPArty, we are here to deliver the Wellness Revolution.</ul>
                  <div>
                    <h2>Contact</h2>
                    <Routes>
                      <Route path="/" element={<ContactForm />} />
                      <Route path="/success" element={<SuccessMessage />} />
                    </Routes>
                  </div>
                  <br />
                  <br />
                  <ul className="bold-text">Working Hours</ul>
                  <ul>Saturday  9 am–6 pm</ul>
                  <ul>Sunday  10 am–3 pm</ul>
                  <ul>Monday  9 am–6 pm</ul>
                  <ul>Tuesday 9 am–6 pm</ul>
                  <ul>Wednesday 9 am–6 pm</ul>
                  <ul>Thursday  9 am–6 pm</ul>
                  <ul>Friday  9 am–6 pm</ul>
                  <br />
                  <ul className="bold-text">Public Holidays Hours might differ</ul>
                  <br />
                  <br />
                  <ul className="bold-text">Location:</ul>
                  <ul>38 Mpulungu Road, Olympia park, Lusaka, Zambia.</ul>
                  <br />
                  <ul className="bold-text">Contact us on: +260 96 0753333</ul>
                </ul>
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

const App = () => {
  return (
    <Router>
      <Contact />
    </Router>
  );
};

export default App;

