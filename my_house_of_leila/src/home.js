import React, { useState, useEffect, useRef   } from 'react';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Footer from './footer';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import 'react-tabs/style/react-tabs.css';
import './styles.css'; // make sure to create this file in your project directory
import './index.css';
import AnimatedPage from './AnimatedPage';
import s1 from './images/carousel/s1.png';
import s2 from './images/carousel/s2.png';
import s3 from './images/carousel/s3.png';
import s4 from './images/carousel/s4.png';
import s5 from './images/carousel/s5.png';
import s6 from './images/carousel/s6.png';
import s7 from './images/carousel/s7.png';
import s8 from './images/carousel/s8.png';

import Header from './header';


const Home = () => {  
  const carouselContainerRef = useRef(null);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  useEffect(() => {
    if (carouselContainerRef.current) {
      carouselContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);
  return (
    <div>
      <div>
          <div>
          <div ref={carouselContainerRef}>
              <Carousel className='main-slide' autoPlay={true} infiniteLoop={true} interval={3000} showThumbs={false}>
                <div>
                  <div className="carousel-item-container">
                    <img src={s1} height="600px" width="300px" />
                    <div className="carousel-caption">
                      <h3>Slide 1 Title</h3>
                      <p>Slide 1 Description</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="carousel-item-container">
                    <img src={s2} height="600px" width="300px"/>
                    <div className="carousel-caption">
                      <h3>Slide 2 Title</h3>
                      <p>Slide 2 Description</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="carousel-item-container">
                    <img src={s3} height="600px" width="300px"/>
                    <div className="carousel-caption">
                      <h3>Slide 3 Title</h3>
                      <p>Slide 3 Description</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="carousel-item-container">
                    <img src={s4} height="600px" width="300px"/>
                    <div className="carousel-caption">
                      <h3>Slide 4 Title</h3>
                      <p>Slide 4 Description</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="carousel-item-container">
                    <img src={s5} height="600px" width="300px"/>
                    <div className="carousel-caption">
                      <h3>Slide 5 Title</h3>
                      <p>Slide 5 Description</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="carousel-item-container">
                    <img src={s6} height="600px" width="300px"/>
                    <div className="carousel-caption">
                      <h3>Slide 6 Title</h3>
                      <p>Slide 6 Description</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="carousel-item-container">
                    <img src={s7} height="600px" width="300px"/>
                    <div className="carousel-caption">
                      <h3>Slide 7 Title</h3>
                      <p>Slide 7 Description</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="carousel-item-container">
                    <img src={s8} height="600px" width="300px"/>
                    <div className="carousel-caption">
                      <h3>Slide 8 Title</h3>
                      <p>Slide 8 Description</p>
                    </div>
                  </div>
                </div>
              </Carousel>
              </div>
            <div className='gallerybackmain' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div className='galleryback'>
              <ul className="left-aligned-list" style={{ textAlign: 'left', display: 'inline-block' }}>
                  <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , fontFamily: 'fantasy'}}>WELCOME TO HOUSE OF LEILA</h1>
                  <li>Indulge in a comprehensive range of services designed to unveil your best self. From indulgent skincare rituals to precision hair styling and transformative makeup applications, we specialize in creating personalized experiences that cater to your unique needs and aspirations. Our attention to detail and commitment to quality ensures that every visit to our beauty spa is a moment of sheer indulgence.</li>
              </ul> 
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Button variant="contained" color="secondary" style={{ backgroundColor: 'rgb(192, 136, 146)', color: clicked ? 'white' : 'black', borderColor: clicked ? 'black' : 'pink' }} onClick={handleClick}>       
                <Link to="/services" style={{ textDecoration: 'none', color: 'inherit' }}>View our services</Link>
              </Button>
            </div>
            <div className='gallerybackmain' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div className='galleryback'>
                <ul  style={{ textAlign: 'center', alignItems: 'center' }}>
                  <ul style={{ fontWeight: 'bold' }}>Working Hours</ul>
                    <ul>Saturday	9 am–6 pm</ul>
                    <ul>Sunday	10 am–3 pm</ul>
                    <ul>Monday  9 am–6 pm</ul>
                    <ul>Tuesday	9 am–6 pm</ul>
                    <ul>Wednesday	9 am–6 pm</ul>
                    <ul>Thursday	9 am–6 pm</ul>
                    <ul>Friday	9 am–6 pm</ul>
                    <br />
                    <ul className="bold-text">Public Holidays	Hours might differ</ul>
                  </ul> 
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Button variant="contained" color="secondary" style={{ backgroundColor: 'rgb(192, 136, 146)', color: clicked ? 'white' : 'black', borderColor: clicked ? 'black' : 'pink' }} onClick={handleClick}>       
                <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact us</Link>
              </Button>
            </div>
    <br />
      <Footer/>
    <br />
          </div>
      </div>
    </div>
  );
};
export default Home;
