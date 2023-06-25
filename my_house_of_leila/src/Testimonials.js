import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

const testimonialsData = [
  {
    id: 1,
    rating: 5,
    content: "Best place ever!!!! An experience I'll always come for👌👌 am in love 🥰 💕",
    author: "Alice C"
  },
  {
    id: 2,
    rating: 5,
    content: "Had a lovely experience had a mani padi with my wife n we are definitely coming back to try more services... keep up the good service!",
    author: "the Z"
  },
  {
    id: 3,
    rating: 5,
    content: "I think this Spa's top-seller is their eyebrow tech guy, Ornash. He is very professional, makes each and very customer feel special and appreciated. The rest of their services are good too.",
    author: "Nyamutuma M"
  },
  {
    id: 4,
    rating: 5,
    content: "Had gone in for a massage. The place is soo pretty and so inviting and the ladies there are so welcoming. Definitely will call again",
    author: "Nyuma M"
  },
  {
    id: 5,
    rating: 5,
    content: "Has the best barbershop in town.",
    author: "Njavwa W.S"
  },
  {
    id: 6,
    rating: 5,
    content: "Had a lovely experience had a mani padi with my wife n we are definitely coming back to try more services... keep up the good service!",
    author: "the Zed Realtor"
  }
  
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000); // Change testimonial every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
        <div style={ {display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Card sx={{ width: '700px' , backgroundColor: '#3f4344', height:'auto' }} key={testimonialsData[currentTestimonial].id}>
            <CardContent>
              <Rating name="read-only" value={testimonialsData[currentTestimonial].rating} readOnly />
              <Typography variant="h7" component="div" sx={{ color: 'white' }}>
                {testimonialsData[currentTestimonial].content}
              </Typography>
              <br />
              <Typography variant="body2" sx={{ color: 'white' }}>
                - {testimonialsData[currentTestimonial].author}
              </Typography>
            </CardContent>
          </Card>
        </div>
  );
};

export default Testimonials;

