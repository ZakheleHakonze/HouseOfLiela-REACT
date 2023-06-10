import React, { useState, useEffect, useRef   } from 'react';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Footer from './footer';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import 'react-tabs/style/react-tabs.css';
import './styles.css'; // make sure to create this file in your project directory
import './index.css';
import Testimonials from './Testimonials';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import AnimatedPage from './AnimatedPage';
import s1 from './images/carousel/s1.jpg';
import s2 from './images/carousel/s2.png';
import s3 from './images/carousel/s3.png';
import s4 from './images/carousel/s4.png';
import s5 from './images/carousel/s5.jpeg';


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
          <div className="carousel-container">
          <div ref={carouselContainerRef}>
              <Carousel className='main-slide' autoPlay={true} infiniteLoop={true} interval={3000} showThumbs={false}>
                <div>
                  <div className="carousel-item-container">
                    <img src={s1} height="auto" width="100%" />
                    <div className="carousel-caption">
                      <h3>Eyebrow Threading</h3>
                      <Divider  sx={{ borderColor: 'white', width: '30%', borderBottomWidth: '2px', borderRadius: 0 }} variant="left"/>
                      <p>Achieve flawlessly shaped eyebrows with the ancient art of eyebrow threading,</p>
                      <p>leaving you with clean, defined brows that enhance your natural beauty.</p>
                      <p>Experience the precision and long-lasting results of eyebrow threading today.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="carousel-item-container">
                    <img src={s2} height="auto" width="100%"/>
                    <div className="carousel-caption">
                      <h3>Manicure</h3>
                      <Divider  sx={{ borderColor: 'white', width: '30%', borderBottomWidth: '2px', borderRadius: 0 }} variant="left"/>
                      <p>Pamper yourself with a luxurious manicure experience that will</p>
                      <p>leave your hands feeling rejuvenated and your nails looking fabulous.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="carousel-item-container">
                    <img src={s3} height="auto" width="100%"/>
                    <div className="carousel-caption">
                      <h3>Hair Salon</h3>
                      <Divider  sx={{ borderColor: 'white', width: '30%', borderBottomWidth: '2px', borderRadius: 0 }} variant="left"/>
                      <p>Step into our salon and experience the artistry and expertise that goes into creating beautiful hair.</p>
                      <p>We take the time to understand your unique vision and offer personalized consultations to ensure</p>
                      <p>you walk out feeling confident and radiant.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="carousel-item-container">
                    <img src={s4} height="auto" width="100%"/>
                    <div className="carousel-caption">
                      <h3>Laser Hair Removal</h3>
                      <Divider  sx={{ borderColor: 'white', width: '30%', borderBottomWidth: '2px', borderRadius: 0 }} variant="left"/>
                      <p>Say goodbye to unwanted hair and hello to silky-smooth skin with our advanced laser hair removal services.</p>
                      <p>Using state-of-the-art technology, our trained professionals can effectively target</p>
                      <p>and remove unwanted hair from various areas of your body.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="carousel-item-container">
                    <img src={s5} height="auto" width="100%"/>
                    <div className="carousel-caption">
                      <h3>Glutathione</h3>
                      <Divider  sx={{ borderColor: 'white', width: '30%', borderBottomWidth: '2px', borderRadius: 0 }} variant="left"/>
                      <p>Whether you're looking to address hyperpigmentation, reduce the appearance of blemishes,</p>
                      <p>or simply enhance your overall complexion, our Glutathione treatments are tailored to meet your unique skincare goals.</p>
                    </div>
                  </div>
                </div>
              </Carousel>
              </div>
            <div className='gallerybackmain' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  textAlign: 'center' }}>
              <div className='galleryback'>
              <ul className="left-aligned-list" style={{ textAlign: 'left', display: 'inline-block',  textAlign: 'center' }}>
                  <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , fontFamily: '-moz-initial', textAlign: 'center'}}>Welcome To House Of Leila</h1>
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
                  <h1 className='line-div' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , fontFamily: '-moz-initial'}}>Our Testimonials</h1>
                  <br />
                  <Testimonials/>
                </ul> 
              </div>
            </div>
            <div className='gallerybackmain' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div className='galleryback'>
                <ul  style={{ textAlign: 'center', alignItems: 'center' }}>
                  <ul style={{ fontWeight: 'bold' }}>Business Hours</ul>
                    <ul>Saturday	9 am–6 pm</ul>
                    <ul>Sunday	10 am–3 pm</ul>
                    <ul>Monday - Friday 9 am–6 pm</ul>
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
