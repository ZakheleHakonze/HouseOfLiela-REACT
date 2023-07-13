import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
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
import Navbar from './navbar';
import Packages from './packages'
import Divider from '@mui/material/Divider';
import ScrollToTop from './ScrollToTop';




function App() {
  return (
    <Router>
        <ScrollToTop />
        <React.Fragment>
          <Navbar/>
		    </React.Fragment>
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
          <Route path="/packages" element={<Packages />} /> {/* Add the route for Barbershop */}
        </Routes>
    </Router>
  );
}

export default App;
