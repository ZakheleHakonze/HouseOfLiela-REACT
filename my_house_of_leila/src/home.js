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
import Lightbox from './Lightbox';
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

  const [lightboxOpen, setLightboxOpen] = useState(true);

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

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
          {lightboxOpen && (
            <Lightbox
              imageUrl="path/to/your/image.jpg"
              text="Celebrate Father's Day with Us!
              Show your appreciation to Dad and make his day extraordinary. Explore our babersho, spa options, and many more designed to make him feel truly special. Treat your father to a memorable Father's Day celebration he deserves!"
            onClose={handleCloseLightbox}
            />
          )}
      
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
            
            <div class="curved-div">
              <h1>Welcome To House Of Leila </h1>
                <p>Indulge in a comprehensive range of services designed to unveil your best self. From indulgent skincare rituals to precision hair styling and transformative makeup applications, we specialize in creating personalized experiences that cater to your unique needs and aspirations. Our attention to detail and commitment to quality ensures that every visit to our beauty spa is a moment of sheer indulgence.</p>
                <svg viewBox="0 0 1440 319">
                  <path fill="pink" fill-opacity="1" d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Button variant="contained" color="secondary" style={{ backgroundColor: 'rgb(192, 136, 146)', color: clicked ? 'white' : 'black', borderColor: clicked ? 'black' : 'pink' }} onClick={handleClick}>       
                <Link to="/services" style={{ textDecoration: 'none', color: 'inherit' }}>View our services</Link>
              </Button>
            </div>
            <div className='homebackmain' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div className='homeback'>
                <ul  style={{ textAlign: 'center', alignItems: 'center' }}>
                  <h1 className='' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Our Testimonials</h1>
                  <br />
                  <Testimonials/>
                </ul> 
              </div>
            </div>
            <div class="curved-div">
              <div >
                <div class="curved-div_">
                <svg viewBox="0 0 1440 319">
                    <path fill="rgb(192, 136, 146)" fill-opacity="1" d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                </div>
                <ul  style={{ textAlign: 'center', alignItems: 'center' }}>
                  <h1 style={{ fontWeight: 'bold' }}>Business Hours</h1>
                    <p>Saturday	9 am–6 pm</p>
                    <p>Sunday	10 am–3 pm</p>
                    <p>Monday - Friday 9 am–6 pm</p>
                    <br />
                    <p className="bold-text">Public Holidays	Hours might differ</p>
                  </ul> 
                  <svg viewBox="0 0 1440 319">
                    <path fill="pink" fill-opacity="1" d="M0,256L48,240C96,224,192,192,288,192C384,192,480,224,576,202.7C672,181,768,107,864,96C960,85,1056,139,1152,133.3C1248,128,1344,64,1392,32L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                  </svg>
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
