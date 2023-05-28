import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import logo from './images/logo.png';
import Footer from './footer';
import './styles.css';
import Home from './home';
import Ourservices from './ourservices';
import Gallery from './gallery';
import Contact from './contact';
import Barbershop from './barbershop';
import Spa from './spa';
import Hair from './hair';
import Glutathione from './glutathione';
import Laser from './laser';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <div className="navbar">
            <div className="container nav-container">
              <input className="checkbox" type="checkbox" name="" id="" />
              <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
              </div>
              <div className="logo">
                <h1 style={{ fontFamily: 'cursive' }}>House of Leila</h1>
              </div>
              <div className="menu-items">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/services">Our services</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/contact">Contact us</Link>
                </li>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Ourservices />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/barbershop" element={<Barbershop />} /> {/* Add the route for Barbershop */}
          <Route path="/spa" element={<Spa />} /> {/* Add the route for Barbershop */}
          <Route path="/hair" element={<Hair />} /> {/* Add the route for Barbershop */}
          <Route path="/glutathione" element={<Glutathione />} /> {/* Add the route for Barbershop */}
          <Route path="/laser" element={<Laser />} /> {/* Add the route for Barbershop */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
