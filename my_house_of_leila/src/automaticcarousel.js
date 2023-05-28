import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const AutomaticCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const carouselData = [
    { image: './images/carousel/s1.png', caption: 'Slide 1' },
    { image: './images/carousel/s2.png', caption: 'Slide 2' },
    { image: './images/carousel/s3.png', caption: 'Slide 3' },
  ];

  return (
    <Carousel
      selectedItem={activeIndex}
      onChange={(index) => setActiveIndex(index)}
      autoPlay={false}
      infiniteLoop
    >
      {carouselData.map((slide, index) => (
        <div key={index}>
          <img src={slide.image} alt={slide.caption} />
          <p className="legend">{slide.caption}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default AutomaticCarousel;
